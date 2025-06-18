import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Law Firms | Contract Analysis & Legal Research - zibly.ai",
  description: "Review 100 contracts in the time it takes to read one. Automate due diligence, research memos & document drafting. Bank-grade security.",
}

export default function AttorneysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}