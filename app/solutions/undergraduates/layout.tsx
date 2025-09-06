import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Undergraduates | Research, Analysis, and Presentations - zibly.ai",
  description: "Turn sources and data into clean summaries, analyses, and slides. Zibly helps undergrads produce clear, well-formatted deliverables.",
}

export default function UndergradsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

