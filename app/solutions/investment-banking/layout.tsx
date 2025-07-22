import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Investment Banking | Pitch Books & Models - zibly.ai",
  description: "Build CIMs, teasers & valuation models with institutional quality. Email raw data, get back formatted pitch decks for investment banking teams.",
}

export default function InvestmentBankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}