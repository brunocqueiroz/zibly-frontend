import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Strategy & Corp Dev | Market Intelligence Platform - zibly.ai",
  description: "Board-ready strategic analysis in hours. Automate market sizing, M&A screening & competitive intelligence. Used by Fortune 500 strategy teams.",
}

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}