import { NextResponse } from "next/server";
import { getStripePublishableKey } from "@/lib/secrets";

export async function GET() {
  try {
    const publishableKey = await getStripePublishableKey();
    return NextResponse.json({ publishableKey });
  } catch (error) {
    console.error("Failed to load Stripe publishable key from secrets:", error);
    return NextResponse.json(
      { error: "Unable to load Stripe configuration" },
      { status: 500 }
    );
  }
}
