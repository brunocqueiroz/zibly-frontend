import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Law Students | Outlines, Briefs, and Research - zibly.ai",
  description: "Turn readings and notes into clear outlines, case briefs, and research memos. Use responsibly and follow your school’s honor code.",
}

export default function LawStudentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
