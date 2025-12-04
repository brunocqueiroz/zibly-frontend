import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { cookies } from 'next/headers';
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
    const { returnUrl } = body;

    // Get user session to find their Stripe customer ID
    // In production, you'd get this from your auth system
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('zibly-session');

    if (!sessionCookie) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Parse session to get user info
    let userEmail: string | null = null;
    try {
      const sessionData = JSON.parse(sessionCookie.value);
      userEmail = sessionData.email;
    } catch {
      // Try to decode if it's a JWT or other format
      userEmail = null;
    }

    if (!userEmail) {
      return NextResponse.json(
        { error: 'User email not found in session' },
        { status: 400 }
      );
    }

    // Find or create Stripe customer by email
    const stripe = await getStripe();
    const customers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    });

    let customerId: string;

    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      // Create a new customer if none exists
      const customer = await stripe.customers.create({
        email: userEmail,
      });
      customerId = customer.id;
    }

    // Create billing portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl || `${process.env.NEXT_PUBLIC_APP_URL || 'https://zibly.ai'}/dashboard/subscription`,
    });

    return NextResponse.json({
      url: portalSession.url,
    });
  } catch (error) {
    console.error('Stripe portal error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create portal session' },
      { status: 500 }
    );
  }
}
