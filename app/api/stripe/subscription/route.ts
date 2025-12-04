import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripeSecretKey } from '@/lib/secrets';

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const stripe = await getStripe();

    // Find customer by email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      // No Stripe customer - return free tier info
      return NextResponse.json({
        plan: 'free',
        status: 'active',
        cancelAtPeriodEnd: false,
        currentPeriodEnd: null,
        currentPeriodStart: null,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
      });
    }

    const customer = customers.data[0];

    // Get active subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: 'all',
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      // Customer exists but no subscription - free tier
      return NextResponse.json({
        plan: 'free',
        status: 'active',
        cancelAtPeriodEnd: false,
        currentPeriodEnd: null,
        currentPeriodStart: null,
        stripeCustomerId: customer.id,
        stripeSubscriptionId: null,
      });
    }

    const subscription = subscriptions.data[0];
    const priceId = subscription.items.data[0]?.price?.id;

    // Determine plan from price ID or product metadata
    let plan = 'starter';
    if (priceId) {
      // Check price metadata or lookup table
      const price = await stripe.prices.retrieve(priceId);
      const product = await stripe.products.retrieve(price.product as string);

      // Try to get plan from product metadata or name
      const productName = product.name?.toLowerCase() || '';
      const planFromMeta = product.metadata?.plan || price.metadata?.plan;

      if (planFromMeta) {
        plan = planFromMeta;
      } else if (productName.includes('professional') || productName.includes('pro')) {
        plan = 'professional';
      } else if (productName.includes('enterprise')) {
        plan = 'enterprise';
      } else if (productName.includes('starter')) {
        plan = 'starter';
      }
    }

    return NextResponse.json({
      plan,
      status: subscription.status,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      currentPeriodEnd: subscription.current_period_end
        ? new Date(subscription.current_period_end * 1000).toISOString()
        : null,
      currentPeriodStart: subscription.current_period_start
        ? new Date(subscription.current_period_start * 1000).toISOString()
        : null,
      stripeCustomerId: customer.id,
      stripeSubscriptionId: subscription.id,
    });
  } catch (error) {
    console.error('Stripe subscription fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch subscription' },
      { status: 500 }
    );
  }
}
