import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Marketing Analytics | Campaign Reports & Insights - zibly.ai",
  description: "Transform raw ad data into executive dashboards. Automate competitive analysis, performance reporting & ROI calculations. Email in, insights out.",
  alternates: { canonical: "https://www.zibly.ai/solutions/marketing" },
  openGraph: {
    title: "AI for Marketing Analytics | Campaign Reports & Insights - zibly.ai",
    description: "Transform raw ad data into executive dashboards. Automate competitive analysis, performance reporting & ROI calculations. Email in, insights out.",
    url: "https://www.zibly.ai/solutions/marketing",
    siteName: "zibly.ai",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Marketing Analytics | Campaign Reports & Insights - zibly.ai",
    description: "Transform raw ad data into executive dashboards. Automate competitive analysis, performance reporting & ROI calculations. Email in, insights out.",
    images: ["/logo.png"],
  },

}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
