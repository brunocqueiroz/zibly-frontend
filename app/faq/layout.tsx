import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Security, Pricing & How It Works - zibly.ai",
  description: "SOC 2 certified. 5-10 minute turnaround. No app required. Get answers about data security, task limits, file types, and enterprise features.",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}