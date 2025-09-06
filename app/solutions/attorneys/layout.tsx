import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Law Firms | Contract Analysis & Legal Research - zibly.ai",
  description: "Speed up contract review, diligence, and research memos. Summaries and drafts that help your team move matters forward.",
  alternates: { canonical: "https://zibly.ai/solutions/attorneys" },
  openGraph: {
    title: "AI for Law Firms | Contract Analysis & Legal Research - zibly.ai",
    description: "Speed up contract review, diligence, and research memos. Summaries and drafts that help your team move matters forward.",
    url: "https://zibly.ai/solutions/attorneys",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Law Firms | Contract Analysis & Legal Research - zibly.ai",
    description: "Speed up contract review, diligence, and research memos. Summaries and drafts that help your team move matters forward.",
    images: ["/logo.png"],
  },

}

export default function AttorneysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
