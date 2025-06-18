import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Private Equity | LBO Models & IC Memos - zibly.ai",
  description: "Portfolio monitoring to deal sourcing in hours, not weeks. Automate due diligence, operating models & investment committee presentations.",
}

export default function PrivateEquityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}