import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Management Consultants | MBB-Quality Analysis - zibly.ai",
  description: "From data dumps to client-ready decks in 10 minutes. Used by McKinsey, BCG & Bain teams. Automate research, modeling & slide creation.",
}

export default function ConsultantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}