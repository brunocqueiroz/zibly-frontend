import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Investment Banking | Pitch Books & Models - zibly.ai",
  description: "Build CIMs, teasers & valuation models with institutional quality. Email raw data, get back formatted pitch decks for investment banking teams.",
  alternates: { canonical: "https://zibly.ai/solutions/investment-banking" },
  openGraph: {
    title: "AI for Investment Banking | Pitch Books & Models - zibly.ai",
    description: "Build CIMs, teasers & valuation models with institutional quality. Email raw data, get back formatted pitch decks for investment banking teams.",
    url: "https://zibly.ai/solutions/investment-banking",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Investment Banking | Pitch Books & Models - zibly.ai",
    description: "Build CIMs, teasers & valuation models with institutional quality. Email raw data, get back formatted pitch decks for investment banking teams.",
    images: ["/logo.png"],
  },

}

export default function InvestmentBankingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}