import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans | Start Free, Scale As You Grow - zibly.ai",
  description: "Free first task. Plans from $99/month. No setup fees, no hidden costs. Join 10,000+ professionals automating analytical work with transparent pricing.",
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}