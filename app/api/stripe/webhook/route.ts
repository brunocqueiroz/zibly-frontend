import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

// Backend API URL for syncing subscription data
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutComplete(session);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdate(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentSucceeded(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handlePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

/**
 * Handle successful checkout - create/update subscription in backend
 */
async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  console.log('Checkout completed:', session.id);

  const customerEmail = session.customer_email || session.customer_details?.email;
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;
  const metadata = session.metadata || {};

  if (!customerEmail) {
    console.error('No customer email found in checkout session');
    return;
  }

  // Get subscription details
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const priceId = subscription.items.data[0]?.price.id;

  // Determine tier from metadata or price
  const tier = metadata.planId || determineTierFromPrice(priceId);

  // Sync to backend
  await syncSubscriptionToBackend({
    email: customerEmail,
    tier,
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
    stripePriceId: priceId,
    status: 'active',
  });
}

/**
 * Handle subscription updates
 */
async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  console.log('Subscription updated:', subscription.id);

  // Get customer email
  const customer = await stripe.customers.retrieve(subscription.customer as string);
  if (customer.deleted) return;

  const customerEmail = customer.email;
  if (!customerEmail) return;

  const priceId = subscription.items.data[0]?.price.id;
  const tier = determineTierFromPrice(priceId);

  await syncSubscriptionToBackend({
    email: customerEmail,
    tier,
    stripeCustomerId: subscription.customer as string,
    stripeSubscriptionId: subscription.id,
    stripePriceId: priceId,
    status: subscription.status,
  });
}

/**
 * Handle subscription cancellation
 */
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Subscription deleted:', subscription.id);

  // Get customer email
  const customer = await stripe.customers.retrieve(subscription.customer as string);
  if (customer.deleted) return;

  const customerEmail = customer.email;
  if (!customerEmail) return;

  // Downgrade to free tier
  await syncSubscriptionToBackend({
    email: customerEmail,
    tier: 'free',
    stripeCustomerId: subscription.customer as string,
    stripeSubscriptionId: subscription.id,
    stripePriceId: null,
    status: 'canceled',
  });
}

/**
 * Handle successful payment
 */
async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Payment succeeded for invoice:', invoice.id);
  // Can send confirmation email or update usage limits here
}

/**
 * Handle failed payment
 */
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  console.log('Payment failed for invoice:', invoice.id);

  // Get customer email for notification
  const customer = await stripe.customers.retrieve(invoice.customer as string);
  if (customer.deleted) return;

  const customerEmail = customer.email;
  if (!customerEmail) return;

  // Optionally notify user about failed payment
  console.log(`Payment failed notification would be sent to: ${customerEmail}`);
}

/**
 * Sync subscription data to the backend database
 */
async function syncSubscriptionToBackend(data: {
  email: string;
  tier: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripePriceId: string | null;
  status: string;
}) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/subscription/sync`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.BACKEND_API_KEY || '',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error('Failed to sync subscription to backend:', await response.text());
    } else {
      console.log('Subscription synced to backend:', data.email, data.tier);
    }
  } catch (error) {
    console.error('Error syncing subscription to backend:', error);
  }
}

/**
 * Determine subscription tier from Stripe price ID
 */
function determineTierFromPrice(priceId: string): string {
  // Match against known price IDs
  const priceIdLower = priceId.toLowerCase();

  if (priceIdLower.includes('starter')) {
    return 'starter';
  }
  if (priceIdLower.includes('professional') || priceIdLower.includes('pro')) {
    return 'professional';
  }
  if (priceIdLower.includes('enterprise')) {
    return 'enterprise';
  }

  // Default to starter if unknown
  return 'starter';
}
