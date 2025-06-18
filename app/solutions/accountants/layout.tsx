import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for CPAs & Accountants | Financial Statements in Seconds - zibly.ai",
  description: "Convert trial balances to GAAP financials instantly. Automate variance analysis, ratio calculations & management reporting. SOC 2 certified.",
}

export default function AccountantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}