import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
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
    const { returnUrl, email } = body;

    console.log('Portal request for email:', email);

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const stripe = await getStripe();

    // Find or create Stripe customer by email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    let customerId: string;

    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log('Found existing customer:', customerId);
    } else {
      // Create a new customer if none exists
      const customer = await stripe.customers.create({
        email: email,
      });
      customerId = customer.id;
      console.log('Created new customer:', customerId);
    }

    // Create billing portal session
    console.log('Creating portal session for customer:', customerId);
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl || `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription`,
    });

    console.log('Portal session created:', portalSession.url);

    return NextResponse.json({
      url: portalSession.url,
    });
  } catch (error) {
    console.error('Stripe portal error:', error);

    // Check for specific Stripe errors
    if (error instanceof Stripe.errors.StripeError) {
      if (error.message?.includes('portal')) {
        return NextResponse.json(
          { error: 'Stripe Customer Portal is not configured. Please enable it in your Stripe Dashboard under Settings > Customer Portal.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create portal session' },
      { status: 500 }
    );
  }
}
