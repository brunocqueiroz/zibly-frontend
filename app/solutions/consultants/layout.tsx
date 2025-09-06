import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Management Consultants | MBB-Quality Analysis - zibly.ai",
  description: "From data dumps to client-ready decks with professional depth. Automate research, modeling & slide creation for consulting teams.",
  alternates: { canonical: "https://zibly.ai/solutions/consultants" },
  openGraph: {
    title: "AI for Management Consultants | MBB-Quality Analysis - zibly.ai",
    description: "From data dumps to client-ready decks with professional depth. Automate research, modeling & slide creation for consulting teams.",
    url: "https://zibly.ai/solutions/consultants",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Management Consultants | MBB-Quality Analysis - zibly.ai",
    description: "From data dumps to client-ready decks with professional depth. Automate research, modeling & slide creation for consulting teams.",
    images: ["/logo.png"],
  },

}

export default function ConsultantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}