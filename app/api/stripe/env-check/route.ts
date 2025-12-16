import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeSecretKey } from "@/lib/secrets";

export async function GET() {
  try {
    let key: string | null = null;
    try {
      key = await getStripeSecretKey();
    } catch (err) {
      // Swallow the specific missing-key error so we can return a consistent shape below
      key = null;
    }
    const result: Record<string, unknown> = {
      hasKey: Boolean(key),
      keyPrefix: key ? key.slice(0, 8) : null,
      keyLength: key?.length ?? 0,
    };

    // If the key is missing, return early with a clear message
    if (!key) {
      return NextResponse.json(result, { status: 500 });
    }

    // Optional live check against Stripe
    try {
      const stripe = new Stripe(key, { apiVersion: "2023-10-16" });
      await stripe.balance.retrieve();
      result.stripeOk = true;
    } catch (err) {
      result.stripeOk = false;
      result.stripeError =
        err instanceof Error ? err.message : "Stripe request failed";
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        hasKey: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
