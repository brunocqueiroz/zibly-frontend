import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripePriceId, STRIPE_COUPONS } from '@/lib/pricing-config';
import { getStripeSecretKey } from '@/lib/secrets';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      planId,
      billingCycle = 'monthly',
      seats = 1,
      couponCode,
      customerEmail,
      successUrl,
      cancelUrl,
    } = body;

    console.log('Checkout request:', { planId, billingCycle, seats, customerEmail });

    // Validate plan
    if (!planId || !['starter', 'professional'].includes(planId)) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    // Get the Stripe Price ID
    const priceId = getStripePriceId(planId, billingCycle);
    console.log('Price ID for plan:', { planId, billingCycle, priceId });

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price not found for selected plan' },
        { status: 400 }
      );
    }

    // Check if price ID is a placeholder (not configured)
    if (priceId.startsWith('price_') && !priceId.startsWith('price_1')) {
      console.error('Stripe Price ID not configured:', priceId);
      return NextResponse.json(
        {
          error: `Stripe not configured. Please set NEXT_PUBLIC_STRIPE_PRICE_${planId.toUpperCase()}_${billingCycle.toUpperCase()} environment variable with your Stripe Price ID.`
        },
        { status: 500 }
      );
    }

    // Build line items with quantity for seats
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price: priceId,
        quantity: Math.max(1, Math.min(10, seats)), // 1-10 seats
      },
    ];

    // Build checkout session params
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: lineItems,
      success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/pricing?canceled=true`,
      allow_promotion_codes: true, // Allow users to enter coupon codes at checkout
      billing_address_collection: 'auto',
      metadata: {
        planId,
        billingCycle,
        seats: seats.toString(),
      },
    };

    // Add customer email if provided
    if (customerEmail) {
      sessionParams.customer_email = customerEmail;
    }

    // Apply coupon/discount if provided and valid
    if (couponCode) {
      const stripeCouponId = STRIPE_COUPONS[couponCode.toUpperCase() as keyof typeof STRIPE_COUPONS];
      if (stripeCouponId) {
        sessionParams.discounts = [{ coupon: stripeCouponId }];
      }
    }

    // Create the checkout session
    const stripe = await getStripe();
    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create(sessionParams);
    console.log('Checkout session created:', session.id, session.url);

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
