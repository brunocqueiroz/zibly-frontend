import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deep Work Agent – Zibly's Agent Engine for Complex Analysis | Zibly",
  description: "When tasks require deep analysis, Zibly's Deep Work Agent activates. Our agent system works autonomously for up to an hour, delivering work that would take days to complete.",
  alternates: { canonical: "https://www.zibly.ai/features" },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
