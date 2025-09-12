import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for CPAs & Accountants | Financial Reports & Analysis - zibly.ai",
  description: "Convert trial balances into clean statements and insight‑rich reports. Automate variance analysis, ratios, and management reporting.",
  alternates: { canonical: "https://zibly.ai/solutions/accountants" },
  openGraph: {
    title: "AI for CPAs & Accountants | Financial Reports & Analysis - zibly.ai",
    description: "Convert trial balances into clean statements and insight‑rich reports. Automate variance analysis, ratios, and management reporting.",
    url: "https://zibly.ai/solutions/accountants",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for CPAs & Accountants | Financial Reports & Analysis - zibly.ai",
    description: "Convert trial balances into clean statements and insight‑rich reports. Automate variance analysis, ratios, and management reporting.",
    images: ["/logo.png"],
  },

}

export default function AccountantsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
