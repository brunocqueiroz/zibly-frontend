import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Law Students | Outlines, Briefs, and Research - zibly.ai",
  description: "Turn readings and notes into clear outlines, case briefs, and research memos. Use responsibly and follow your school’s honor code.",
  alternates: { canonical: "https://zibly.ai/solutions/law-students" },
  openGraph: {
    title: "AI for Law Students | Outlines, Briefs, and Research - zibly.ai",
    description: "Turn readings and notes into clear outlines, case briefs, and research memos. Use responsibly and follow your school’s honor code.",
    url: "https://zibly.ai/solutions/law-students",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Law Students | Outlines, Briefs, and Research - zibly.ai",
    description: "Turn readings and notes into clear outlines, case briefs, and research memos. Use responsibly and follow your school’s honor code.",
    images: ["/logo.png"],
  },

}

export default function LawStudentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
