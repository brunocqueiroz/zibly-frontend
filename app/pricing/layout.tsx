import type { Metadata } from "next"
import { PRICING_CONFIG, formatPrice } from "@/lib/pricing-config"

export const metadata: Metadata = {
  title: "Pricing Plans | Start Free, Scale As You Grow - zibly.ai",
  description: `Free first task. Plans from ${formatPrice(PRICING_CONFIG.starter.monthly)}/month. No setup fees, no hidden costs. Transparent pricing for professionals automating analytical work.`,
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}