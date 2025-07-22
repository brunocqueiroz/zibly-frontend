import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Product Management | User Research & PRDs - zibly.ai",
  description: "Synthesize 1000s of user interviews thoroughly. Auto-generate feature specs, competitive analysis & roadmap presentations from raw feedback.",
}

export default function ProductManagersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}