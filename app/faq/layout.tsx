import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Security, Pricing & How It Works - zibly.ai",
  description: "SOC 2 compliant. Adaptive AI analysis - from quick insights to deep research. No app required. Get answers about data security, task limits, file types, and enterprise features.",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}