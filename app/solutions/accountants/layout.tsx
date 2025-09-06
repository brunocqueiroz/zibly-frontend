import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for CPAs & Accountants | Financial Reports & Analysis - zibly.ai",
  description: "Convert trial balances into clean statements and insight‑rich reports. Automate variance analysis, ratios, and management reporting.",
}

export default function AccountantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
