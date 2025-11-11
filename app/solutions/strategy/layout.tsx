import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Strategy & Corp Dev | Market Intelligence Platform - zibly.ai",
  description: "Board-ready strategic analysis with depth and speed. Automate market sizing, M&A screening & competitive intelligence for strategy teams.",
  alternates: { canonical: "https://www.zibly.ai/solutions/strategy" },
  openGraph: {
    title: "AI for Strategy & Corp Dev | Market Intelligence Platform - zibly.ai",
    description: "Board-ready strategic analysis with depth and speed. Automate market sizing, M&A screening & competitive intelligence for strategy teams.",
    url: "https://www.zibly.ai/solutions/strategy",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Strategy & Corp Dev | Market Intelligence Platform - zibly.ai",
    description: "Board-ready strategic analysis with depth and speed. Automate market sizing, M&A screening & competitive intelligence for strategy teams.",
    images: ["/logo.png"],
  },

}

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
