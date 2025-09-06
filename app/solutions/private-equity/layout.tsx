import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Private Equity | LBO Models & IC Memos - zibly.ai",
  description: "Portfolio monitoring to deal sourcing with institutional depth. Automate due diligence, operating models & investment committee presentations.",
  alternates: { canonical: "https://zibly.ai/solutions/private-equity" },
  openGraph: {
    title: "AI for Private Equity | LBO Models & IC Memos - zibly.ai",
    description: "Portfolio monitoring to deal sourcing with institutional depth. Automate due diligence, operating models & investment committee presentations.",
    url: "https://zibly.ai/solutions/private-equity",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Private Equity | LBO Models & IC Memos - zibly.ai",
    description: "Portfolio monitoring to deal sourcing with institutional depth. Automate due diligence, operating models & investment committee presentations.",
    images: ["/logo.png"],
  },

}

export default function PrivateEquityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}