import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_COUPONS } from '@/lib/pricing-config';
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.json(
        { valid: false, error: 'No coupon code provided' },
        { status: 400 }
      );
    }

    // First check if it's a known coupon code
    const stripeCouponId = STRIPE_COUPONS[code.toUpperCase() as keyof typeof STRIPE_COUPONS];

    let coupon: Stripe.Coupon | null = null;

    const stripe = await getStripe();

    if (stripeCouponId) {
      // Try to retrieve the coupon from Stripe
      try {
        coupon = await stripe.coupons.retrieve(stripeCouponId);
      } catch {
        // Coupon doesn't exist in Stripe yet - return predefined values
        const predefinedDiscounts: Record<string, number> = {
          FRIEND20: 20,
          REFERRAL20: 20,
          WELCOME10: 10,
          BETA50: 50,
        };

        const percentOff = predefinedDiscounts[code.toUpperCase()];
        if (percentOff) {
          return NextResponse.json({
            valid: true,
            percentOff,
            name: code.toUpperCase(),
          });
        }
      }
    } else {
      // Try to find coupon directly by code in Stripe
      try {
        // Try as promotion code first
        const promotionCodes = await stripe.promotionCodes.list({
          code: code.toUpperCase(),
          limit: 1,
        });

        if (promotionCodes.data.length > 0 && promotionCodes.data[0].active) {
          coupon = await stripe.coupons.retrieve(promotionCodes.data[0].coupon as string);
        }
      } catch {
        // Not a promotion code, try as coupon ID
        try {
          coupon = await stripe.coupons.retrieve(code);
        } catch {
          // Coupon not found
        }
      }
    }

    if (coupon && coupon.valid) {
      return NextResponse.json({
        valid: true,
        percentOff: coupon.percent_off ?? undefined,
        amountOff: coupon.amount_off ?? undefined,
        name: coupon.name || code.toUpperCase(),
        duration: coupon.duration,
        durationInMonths: coupon.duration_in_months,
      });
    }

    return NextResponse.json({ valid: false });
  } catch (error) {
    console.error('Coupon validation error:', error);
    return NextResponse.json(
      { valid: false, error: 'Failed to validate coupon' },
      { status: 500 }
    );
  }
}
