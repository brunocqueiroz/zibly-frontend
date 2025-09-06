import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Undergraduates | Research, Analysis, and Presentations - zibly.ai",
  description: "Turn sources and data into clean summaries, analyses, and slides. Zibly helps undergrads produce clear, well-formatted deliverables.",
  alternates: { canonical: "https://zibly.ai/solutions/undergraduates" },
  openGraph: {
    title: "AI for Undergraduates | Research, Analysis, and Presentations - zibly.ai",
    description: "Turn sources and data into clean summaries, analyses, and slides. Zibly helps undergrads produce clear, well-formatted deliverables.",
    url: "https://zibly.ai/solutions/undergraduates",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Undergraduates | Research, Analysis, and Presentations - zibly.ai",
    description: "Turn sources and data into clean summaries, analyses, and slides. Zibly helps undergrads produce clear, well-formatted deliverables.",
    images: ["/logo.png"],
  },

}

export default function UndergradsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

