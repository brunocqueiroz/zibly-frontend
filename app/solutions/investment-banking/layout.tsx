import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Investment Banking | Pitch Books & Models in Minutes - zibly.ai",
  description: "Build CIMs, teasers & valuation models 10x faster. Email raw data, get back formatted pitch decks. Used by bulge bracket analysts.",
}

export default function InvestmentBankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}