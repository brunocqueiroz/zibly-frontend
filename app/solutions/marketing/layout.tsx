import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Marketing Analytics | Campaign Reports & Insights - zibly.ai",
  description: "Transform raw ad data into executive dashboards. Automate competitive analysis, performance reporting & ROI calculations. Email in, insights out.",
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}