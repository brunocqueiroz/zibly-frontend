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
    const limit = parseInt(searchParams.get('limit') || '10', 10);

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
      // No Stripe customer - return empty invoices
      return NextResponse.json({
        invoices: [],
        hasMore: false,
      });
    }

    const customer = customers.data[0];

    // Get invoices for this customer
    const invoices = await stripe.invoices.list({
      customer: customer.id,
      limit: limit,
    });

    const formattedInvoices = invoices.data.map((invoice) => {
      // Get product/plan name from line items
      let planName = 'Subscription';
      if (invoice.lines.data.length > 0) {
        const lineItem = invoice.lines.data[0];
        planName = lineItem.description || 'Subscription';
      }

      return {
        id: invoice.id,
        number: invoice.number,
        date: invoice.created ? new Date(invoice.created * 1000).toISOString() : null,
        amount: invoice.amount_paid / 100, // Convert cents to dollars
        currency: invoice.currency,
        status: invoice.status,
        planName,
        pdfUrl: invoice.invoice_pdf,
        hostedUrl: invoice.hosted_invoice_url,
      };
    });

    return NextResponse.json({
      invoices: formattedInvoices,
      hasMore: invoices.has_more,
    });
  } catch (error) {
    console.error('Stripe invoices fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}
