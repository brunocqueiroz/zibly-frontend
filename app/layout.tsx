import type React from "react"
import { Exo_2 } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"
import Script from "next/script"

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2"
})

/**
 * ---------------------------------------------------------------------
 *  CENTRAL PER-PAGE META  (title ≈ 60 chars, description ≈ 150 chars)
 * ---------------------------------------------------------------------
 */
export const metaByPath: Record<
  string,
  { title: string; description: string; canonical: string }
> = {
  // ── Core nav pages ─────────────────────────────────────────────────
  "/features": {
    title: "Features – AI Workflow Automation for Professionals",
    description:
      "Explore how zibly.ai turns e-mails into finished analyses, reports, and forms so consultants, bankers, lawyers, and operators can focus on strategy.",
    canonical: "https://zibly.ai/features",
  },
  "/pricing": {
    title: "Pricing & Plans – Simple, Flexible AI Task Automation",
    description:
      "Choose a plan that matches your workload. Transparent usage-based pricing with generous free tasks so you can trial zibly.ai risk-free.",
    canonical: "https://zibly.ai/pricing",
  },
  "/about": {
    title: "About zibly.ai – Our Mission to Simplify Knowledge Work",
    description:
      "Learn how the zibly.ai team is building an e-mail-powered AI assistant that eliminates busywork and helps teams deliver better results faster.",
    canonical: "https://zibly.ai/about",
  },
  "/faq": {
    title: "FAQ – Security, Pricing & Getting Started With zibly.ai",
    description:
      "Find answers to common questions about data privacy, task turnaround, integrations, billing, and more.",
    canonical: "https://zibly.ai/faq",
  },
  "/blog": {
    title: "Blog – AI Productivity Tips, Case Studies & Product News",
    description:
      "Read expert insights and real-world stories on using AI to supercharge research, analysis, and document creation.",
    canonical: "https://zibly.ai/blog",
  },
  "/signup": {
    title: "Sign Up – Get Started With zibly.ai",
    description:
      "Create your account and start automating your analytical work with zibly.ai's email-powered AI assistant.",
    canonical: "https://zibly.ai/signup",
  },
  "/contact": {
    title: "Contact Us – Get in Touch With zibly.ai",
    description:
      "Have questions? Get in touch with our team for support, partnerships, or enterprise inquiries.",
    canonical: "https://zibly.ai/contact",
  },
  "/help": {
    title: "Help Center – Support & Resources",
    description:
      "Find help articles, tutorials, and support resources to get the most out of zibly.ai.",
    canonical: "https://zibly.ai/help",
  },
  "/security": {
    title: "Security – Enterprise-Grade Data Protection",
    description:
      "Learn about zibly.ai's SOC 2 compliance, encryption standards, and comprehensive security measures.",
    canonical: "https://zibly.ai/security",
  },
  "/privacy": {
    title: "Privacy Policy – How We Protect Your Data",
    description:
      "Read our privacy policy to understand how zibly.ai collects, uses, and protects your information.",
    canonical: "https://zibly.ai/privacy",
  },
  "/terms": {
    title: "Terms of Service – zibly.ai User Agreement",
    description:
      "Review the terms and conditions for using zibly.ai's email-powered AI assistant service.",
    canonical: "https://zibly.ai/terms",
  },

  // ── Solutions (industry pages) ─────────────────────────────────────
  "/solutions/consultants": {
    title: "AI for Consultants – Faster Decks & Deeper Insights",
    description:
      "Automate data crunching, competitor research, and slide drafting so you can spend more time on client strategy.",
    canonical: "https://zibly.ai/solutions/consultants",
  },
  "/solutions/investment-banking": {
    title: "AI for Investment Bankers – Pitch Decks & Valuations in Minutes",
    description:
      "Generate comps, DCFs, and polished pitch materials by simply e-mailing your raw data to zibly.ai.",
    canonical: "https://zibly.ai/solutions/investment-banking",
  },
  "/solutions/private-equity": {
    title: "AI for Private Equity – Portfolio Analysis & Due Diligence",
    description:
      "Accelerate deal screening and periodic reviews by offloading modelling, market sizing, and memo drafting to zibly.ai.",
    canonical: "https://zibly.ai/solutions/private-equity",
  },
  "/solutions/accountants": {
    title: "AI for Accountants – Effortless Financial Analysis & Reporting",
    description:
      "Upload trial balances or CSVs via e-mail and receive clean financial statements, variance analysis, and commentary automatically.",
    canonical: "https://zibly.ai/solutions/accountants",
  },
  "/solutions/attorneys": {
    title: "AI for Attorneys – Research, Drafting & Form Filling by E-mail",
    description:
      "Outsource first-pass legal research, citation checking, and complex form completion with enterprise-grade security.",
    canonical: "https://zibly.ai/solutions/attorneys",
  },
  "/solutions/marketing": {
    title: "AI for Marketing Teams – Instant Market & Campaign Analysis",
    description:
      "Turn raw campaign exports into performance dashboards and competitor insights without leaving your inbox.",
    canonical: "https://zibly.ai/solutions/marketing",
  },
  "/solutions/product-managers": {
    title: "AI for Product Managers – Competitive & User Research at Speed",
    description:
      "Send product feedback, support logs, or feature requests to zibly.ai and receive synthesised insights for roadmap planning.",
    canonical: "https://zibly.ai/solutions/product-managers",
  },
  "/solutions/strategy": {
    title: "AI for Strategy Executives – Market Intelligence on Demand",
    description:
      "Rapidly assess new markets, size opportunities, and benchmark competitors with a single e-mail to zibly.ai.",
    canonical: "https://zibly.ai/solutions/strategy",
  },
}

/**
 * ---------------------------------------------------------------------
 *  DEFAULT (root) META
 * ---------------------------------------------------------------------
 */
export const metadata = {
  metadataBase: new URL('https://zibly.ai'),
  title: {
    default: "Zibly – Email AI for Finished Deliverables",
    template: "%s | zibly.ai",
  },
  description:
    "Forward tasks to work@zibly.ai and get back finished Excel models, slide decks, and research memos. Not advice—actual deliverables.",
  alternates: {
    canonical: "https://zibly.ai",
  },
  openGraph: {
    title: "Zibly – Email AI for Finished Deliverables",
    description:
      "Send tasks by email and receive polished files back. First task free.",
    url: "https://zibly.ai",
    siteName: "zibly.ai",
    images: [
      {
        url: "/zibly_meta.png",
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
    title: "Zibly – Email AI for Finished Deliverables",
    description:
      "Send tasks by email and receive polished files back. First task free.",
    images: ["/zibly_meta.png"],
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
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/logo.png' },
    ],
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
      <body className={exo2.className}>
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
