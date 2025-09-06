import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for MBA Students | Case Prep, Modeling, and Decks - zibly.ai",
  description: "From case frameworks to financial modeling and recruiting decks. Zibly helps MBAs turn raw materials into polished deliverables fast.",
}

export default function MBALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

