import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Law Firms | Contract Analysis & Legal Research - zibly.ai",
  description: "Speed up contract review, diligence, and research memos. Summaries and drafts that help your team move matters forward.",
}

export default function AttorneysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
