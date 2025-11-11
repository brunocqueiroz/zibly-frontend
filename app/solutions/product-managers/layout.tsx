import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Product Management | User Research & PRDs - zibly.ai",
  description: "Synthesize 1000s of user interviews thoroughly. Auto-generate feature specs, competitive analysis & roadmap presentations from raw feedback.",
  alternates: { canonical: "https://www.zibly.ai/solutions/product-managers" },
  openGraph: {
    title: "AI for Product Management | User Research & PRDs - zibly.ai",
    description: "Synthesize 1000s of user interviews thoroughly. Auto-generate feature specs, competitive analysis & roadmap presentations from raw feedback.",
    url: "https://www.zibly.ai/solutions/product-managers",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Product Management | User Research & PRDs - zibly.ai",
    description: "Synthesize 1000s of user interviews thoroughly. Auto-generate feature specs, competitive analysis & roadmap presentations from raw feedback.",
    images: ["/logo.png"],
  },

}

export default function ProductManagersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
