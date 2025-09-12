import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features – Email AI for Models, Decks & Memos | Zibly",
  description: "Send tasks by email and get back finished Excel models, slide decks, and research memos. Typical turnaround is 2 minutes to 1 hour depending on complexity.",
  alternates: { canonical: "https://zibly.ai/features" },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
