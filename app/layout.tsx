import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

/**
 * ---------------------------------------------------------------------
 *  CENTRAL PER-PAGE META  (title ≈ 60 chars, description ≈ 150 chars)
 * ---------------------------------------------------------------------
 */
export const metaByPath: Record<
  string,
  { title: string; description: string }
> = {
  // ── Core nav pages ─────────────────────────────────────────────────
  "/features": {
    title: "Features – AI Workflow Automation for Professionals",
    description:
      "Explore how zibly.ai turns e-mails into finished analyses, reports, and forms so consultants, bankers, lawyers, and operators can focus on strategy.",
  },
  "/pricing": {
    title: "Pricing & Plans – Simple, Flexible AI Task Automation",
    description:
      "Choose a plan that matches your workload. Transparent usage-based pricing with generous free tasks so you can trial zibly.ai risk-free.",
  },
  "/about": {
    title: "About zibly.ai – Our Mission to Simplify Knowledge Work",
    description:
      "Learn how the zibly.ai team is building an e-mail-powered AI assistant that eliminates busywork and helps teams deliver better results faster.",
  },
  "/faq": {
    title: "FAQ – Security, Pricing & Getting Started With zibly.ai",
    description:
      "Find answers to common questions about data privacy, task turnaround, integrations, billing, and more.",
  },
  "/blog": {
    title: "Blog – AI Productivity Tips, Case Studies & Product News",
    description:
      "Read expert insights and real-world stories on using AI to supercharge research, analysis, and document creation.",
  },

  // ── Solutions (industry pages) ─────────────────────────────────────
  "/solutions/consultants": {
    title: "AI for Consultants – Faster Decks & Deeper Insights",
    description:
      "Automate data crunching, competitor research, and slide drafting so you can spend more time on client strategy.",
  },
  "/solutions/investment-banking": {
    title: "AI for Investment Bankers – Pitch Decks & Valuations in Minutes",
    description:
      "Generate comps, DCFs, and polished pitch materials by simply e-mailing your raw data to zibly.ai.",
  },
  "/solutions/private-equity": {
    title: "AI for Private Equity – Portfolio Analysis & Due Diligence",
    description:
      "Accelerate deal screening and periodic reviews by offloading modelling, market sizing, and memo drafting to zibly.ai.",
  },
  "/solutions/accountants": {
    title: "AI for Accountants – Effortless Financial Analysis & Reporting",
    description:
      "Upload trial balances or CSVs via e-mail and receive clean financial statements, variance analysis, and commentary automatically.",
  },
  "/solutions/attorneys": {
    title: "AI for Attorneys – Research, Drafting & Form Filling by E-mail",
    description:
      "Outsource first-pass legal research, citation checking, and complex form completion with enterprise-grade security.",
  },
  "/solutions/marketing": {
    title: "AI for Marketing Teams – Instant Market & Campaign Analysis",
    description:
      "Turn raw campaign exports into performance dashboards and competitor insights without leaving your inbox.",
  },
  "/solutions/product-managers": {
    title: "AI for Product Managers – Competitive & User Research at Speed",
    description:
      "Send product feedback, support logs, or feature requests to zibly.ai and receive synthesised insights for roadmap planning.",
  },
  "/solutions/strategy": {
    title: "AI for Strategy Executives – Market Intelligence on Demand",
    description:
      "Rapidly assess new markets, size opportunities, and benchmark competitors with a single e-mail to zibly.ai.",
  },
}

/**
 * ---------------------------------------------------------------------
 *  DEFAULT (root) META
 * ---------------------------------------------------------------------
 */
export const metadata = {
  title: {
    default: "zibly.ai – Your e-mail-powered AI assistant",
    template: "%s | zibly.ai",
  },
  description:
    "Simply send an e-mail with your task and zibly.ai handles the analytical heavy lifting, returning polished outputs in your inbox.",
  openGraph: {
    title: "zibly.ai – Your e-mail-powered AI assistant",
    description:
      "Simply send an e-mail with your task and zibly.ai handles it for you.",
    url: "https://zibly.ai",
    siteName: "zibly.ai",
    images: [
      {
        url: "https://zibly.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "zibly.ai – E-mail-powered AI assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zibly.ai – Your e-mail-powered AI assistant",
    description:
      "Simply send an e-mail with your task and zibly.ai handles it for you.",
    images: ["https://zibly.ai/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6H4J69L');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6H4J69L"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
