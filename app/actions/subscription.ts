"use server"

import { getSessionFromCookies } from "@/lib/session"
import { getUser, updateUser } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import Stripe from "stripe"
import { getStripeSecretKey } from "@/lib/secrets"

// Lazy-initialized Stripe client
let stripeClient: Stripe | null = null;

async function getStripe(): Promise<Stripe> {
  if (!stripeClient) {
    const secretKey = await getStripeSecretKey();
    stripeClient = new Stripe(secretKey, {
      apiVersion: '2023-10-16',
    });
  }
  return stripeClient;
}

/**
 * Create a Stripe Checkout session for upgrading/changing plans
 */
export async function createCheckoutSession(formData: FormData) {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  const planId = formData.get("plan") as string
  const billingCycle = (formData.get("billingCycle") as string) || "monthly"
  const seats = parseInt(formData.get("seats") as string) || 1
  const couponCode = formData.get("couponCode") as string

  if (!planId || !["starter", "professional"].includes(planId)) {
    return { error: "Invalid plan" }
  }

  try {
    // Get or create Stripe price ID from environment
    const priceKey = `STRIPE_PRICE_${planId.toUpperCase()}_${billingCycle.toUpperCase()}`
    const priceId = process.env[priceKey]

    if (!priceId) {
      return { error: `Price not configured for ${planId} ${billingCycle}` }
    }

    // Build checkout session params
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: user.email,
      line_items: [
        {
          price: priceId,
          quantity: Math.max(1, Math.min(10, seats)),
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription?canceled=true`,
      allow_promotion_codes: true,
      metadata: {
        userId: user.id?.toString() || '',
        planId,
        billingCycle,
        seats: seats.toString(),
      },
    }

    // Apply coupon if provided
    if (couponCode) {
      const stripeCouponId = getStripeCouponId(couponCode)
      if (stripeCouponId) {
        sessionParams.discounts = [{ coupon: stripeCouponId }]
      }
    }

    const stripe = await getStripe()
    const session = await stripe.checkout.sessions.create(sessionParams)

    return {
      success: true,
      sessionId: session.id,
      url: session.url
    }
  } catch (error) {
    console.error('Checkout session error:', error)
    return { error: "Failed to create checkout session" }
  }
}

/**
 * Create a Stripe Customer Portal session for managing billing
 */
export async function createPortalSession() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const stripe = await getStripe()

    // Find Stripe customer by email
    const customers = await stripe.customers.list({
      email: user.email,
      limit: 1,
    })

    let customerId: string

    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      // Create customer if doesn't exist
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name || undefined,
      })
      customerId = customer.id
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription`,
    })

    return { success: true, url: portalSession.url }
  } catch (error) {
    console.error('Portal session error:', error)
    return { error: "Failed to create portal session" }
  }
}

/**
 * Change plan - redirects to checkout for upgrades or portal for downgrades
 */
export async function changePlan(formData: FormData) {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  const plan = formData.get("plan") as string
  const billingCycle = formData.get("billingCycle") as string

  if (!plan || !["starter", "professional", "enterprise"].includes(plan)) {
    return { error: "Invalid plan" }
  }

  // For enterprise, redirect to contact
  if (plan === "enterprise") {
    return { redirect: "/contact" }
  }

  // Create checkout session for the new plan
  return createCheckoutSession(formData)
}

/**
 * Cancel subscription - sets to cancel at period end
 */
export async function cancelSubscription() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const stripe = await getStripe()

    // Find user's Stripe customer
    const customers = await stripe.customers.list({
      email: user.email,
      limit: 1,
    })

    if (customers.data.length === 0) {
      return { error: "No subscription found" }
    }

    const customerId = customers.data[0].id

    // Find active subscription
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      limit: 1,
    })

    if (subscriptions.data.length === 0) {
      return { error: "No active subscription found" }
    }

    // Cancel at period end (not immediately)
    await stripe.subscriptions.update(subscriptions.data[0].id, {
      cancel_at_period_end: true,
    })

    // Update local state
    const userDetails = getUser(user.email)
    if (userDetails) {
      updateUser(user.email, {
        subscription: {
          ...userDetails.subscription,
          cancelAtPeriodEnd: true,
        },
      })
    }

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    console.error('Cancel subscription error:', error)
    return { error: "Failed to cancel subscription" }
  }
}

/**
 * Reactivate a canceled subscription
 */
export async function reactivateSubscription() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const stripe = await getStripe()

    // Find user's Stripe customer
    const customers = await stripe.customers.list({
      email: user.email,
      limit: 1,
    })

    if (customers.data.length === 0) {
      return { error: "No subscription found" }
    }

    const customerId = customers.data[0].id

    // Find subscription that's set to cancel
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
    })

    if (subscriptions.data.length === 0) {
      return { error: "No subscription found" }
    }

    const subscription = subscriptions.data[0]

    if (!subscription.cancel_at_period_end) {
      return { error: "Subscription is not set to cancel" }
    }

    // Remove cancellation
    await stripe.subscriptions.update(subscription.id, {
      cancel_at_period_end: false,
    })

    // Update local state
    const userDetails = getUser(user.email)
    if (userDetails) {
      updateUser(user.email, {
        subscription: {
          ...userDetails.subscription,
          cancelAtPeriodEnd: false,
        },
      })
    }

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    console.error('Reactivate subscription error:', error)
    return { error: "Failed to reactivate subscription" }
  }
}

/**
 * Get user's subscription status from Stripe
 */
export async function getSubscriptionStatus() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const stripe = await getStripe()

    const customers = await stripe.customers.list({
      email: user.email,
      limit: 1,
    })

    if (customers.data.length === 0) {
      return {
        subscription: null,
        tier: 'starter',
      }
    }

    const customerId = customers.data[0].id

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'all',
      limit: 1,
      expand: ['data.default_payment_method'],
    })

    if (subscriptions.data.length === 0) {
      return {
        subscription: null,
        tier: 'starter',
      }
    }

    const subscription = subscriptions.data[0]
    const priceId = subscription.items.data[0]?.price.id || ''

    return {
      subscription: {
        id: subscription.id,
        status: subscription.status,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        priceId,
      },
      tier: determineTierFromPrice(priceId),
    }
  } catch (error) {
    console.error('Get subscription status error:', error)
    return { error: "Failed to get subscription status" }
  }
}

// Helper function to get Stripe coupon ID from code
function getStripeCouponId(code: string): string | null {
  const coupons: Record<string, string> = {
    'FRIEND20': '20_percent_off',
    'REFERRAL20': 'referral_20_off',
    'WELCOME10': '10_percent_off',
    'BETA50': '50_percent_off',
  }
  return coupons[code.toUpperCase()] || null
}

// Helper function to determine tier from price ID
function determineTierFromPrice(priceId: string): string {
  const priceIdLower = priceId.toLowerCase()
  if (priceIdLower.includes('starter')) return 'starter'
  if (priceIdLower.includes('professional') || priceIdLower.includes('pro')) return 'professional'
  if (priceIdLower.includes('enterprise')) return 'enterprise'
  return 'starter' // Default to starter tier
}
