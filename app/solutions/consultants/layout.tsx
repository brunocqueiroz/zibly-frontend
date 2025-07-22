import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Management Consultants | MBB-Quality Analysis - zibly.ai",
  description: "From data dumps to client-ready decks with professional depth. Automate research, modeling & slide creation for consulting teams.",
}

export default function ConsultantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}