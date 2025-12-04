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
      // No Stripe customer - return empty payment methods
      return NextResponse.json({
        paymentMethods: [],
        defaultPaymentMethodId: null,
      });
    }

    const customer = customers.data[0];

    // Get payment methods for this customer
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
    });

    // Get the default payment method
    const customerDetails = await stripe.customers.retrieve(customer.id) as Stripe.Customer;
    const defaultPaymentMethodId = customerDetails.invoice_settings?.default_payment_method as string | null;

    const formattedMethods = paymentMethods.data.map((pm) => ({
      id: pm.id,
      brand: pm.card?.brand || 'unknown',
      last4: pm.card?.last4 || '****',
      expMonth: pm.card?.exp_month,
      expYear: pm.card?.exp_year,
      isDefault: pm.id === defaultPaymentMethodId,
    }));

    return NextResponse.json({
      paymentMethods: formattedMethods,
      defaultPaymentMethodId,
    });
  } catch (error) {
    console.error('Stripe payment methods fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch payment methods' },
      { status: 500 }
    );
  }
}

// Delete a payment method
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentMethodId = searchParams.get('id');

    if (!paymentMethodId) {
      return NextResponse.json(
        { error: 'Payment method ID is required' },
        { status: 400 }
      );
    }

    const stripe = await getStripe();

    // Detach the payment method from the customer
    await stripe.paymentMethods.detach(paymentMethodId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Stripe payment method delete error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete payment method' },
      { status: 500 }
    );
  }
}
