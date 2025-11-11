import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for MBA Students | Case Prep, Modeling, and Decks - zibly.ai",
  description: "From case frameworks to financial modeling and recruiting decks. Zibly helps MBAs turn raw materials into polished deliverables fast.",
  alternates: { canonical: "https://www.zibly.ai/solutions/mba-students" },
  openGraph: {
    title: "AI for MBA Students | Case Prep, Modeling, and Decks - zibly.ai",
    description: "From case frameworks to financial modeling and recruiting decks. Zibly helps MBAs turn raw materials into polished deliverables fast.",
    url: "https://www.zibly.ai/solutions/mba-students",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for MBA Students | Case Prep, Modeling, and Decks - zibly.ai",
    description: "From case frameworks to financial modeling and recruiting decks. Zibly helps MBAs turn raw materials into polished deliverables fast.",
    images: ["/logo.png"],
  },

}

export default function MBALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
