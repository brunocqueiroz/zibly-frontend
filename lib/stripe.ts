import { loadStripe, Stripe } from '@stripe/stripe-js';

// Client-side Stripe instance (singleton)
let stripePromise: Promise<Stripe | null> | null = null;
let publishableKeyPromise: Promise<string | null> | null = null;

async function fetchPublishableKey(): Promise<string | null> {
  if (!publishableKeyPromise) {
    publishableKeyPromise = (async () => {
      try {
        const response = await fetch('/api/stripe/config');
        if (!response.ok) {
          console.error('Failed to fetch Stripe publishable key from secrets');
          return null;
        }
        const data = (await response.json()) as { publishableKey?: string };
        if (!data.publishableKey) {
          console.error('Stripe publishable key missing in config response');
          return null;
        }
        return data.publishableKey;
      } catch (error) {
        console.error('Error loading Stripe publishable key', error);
        return null;
      }
    })();
  }
  return publishableKeyPromise;
}

/**
 * Get the Stripe client-side instance (for Stripe Elements, etc.)
 */
export async function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = (async () => {
      const key = await fetchPublishableKey();
      if (!key) {
        console.error('Missing Stripe publishable key from AWS Secrets Manager');
        return null;
      }
      return loadStripe(key);
    })();
  }
  return stripePromise;
}

/**
 * Redirect to Stripe Checkout
 */
export async function redirectToCheckout(sessionId: string): Promise<void> {
  const stripe = await getStripe();
  if (!stripe) {
    throw new Error('Stripe failed to initialize');
  }
  const { error } = await stripe.redirectToCheckout({ sessionId });
  if (error) {
    throw error;
  }
}

/**
 * Create a checkout session and redirect to Stripe
 */
export async function createCheckoutAndRedirect(params: {
  planId: string;
  billingCycle: 'monthly' | 'annual';
  seats?: number;
  couponCode?: string;
  customerEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
}): Promise<void> {
  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const { sessionId, url } = await response.json();

    // If we got a URL directly (hosted checkout), redirect there
    if (url) {
      window.location.href = url;
      return;
    }

    // Otherwise use client-side redirect
    await redirectToCheckout(sessionId);
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}

/**
 * Redirect to Stripe Customer Portal for managing subscription
 */
export async function redirectToCustomerPortal(returnUrl?: string): Promise<void> {
  try {
    const response = await fetch('/api/stripe/portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ returnUrl: returnUrl || window.location.href }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create portal session');
    }

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error('Portal error:', error);
    throw error;
  }
}

/**
 * Validate a coupon code
 */
export async function validateCoupon(couponCode: string): Promise<{
  valid: boolean;
  percentOff?: number;
  amountOff?: number;
  name?: string;
}> {
  try {
    const response = await fetch(`/api/stripe/coupon?code=${encodeURIComponent(couponCode)}`);
    if (!response.ok) {
      return { valid: false };
    }
    return await response.json();
  } catch {
    return { valid: false };
  }
}
