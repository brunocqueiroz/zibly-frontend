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
    title: "Deep Work Agent – Your AI Colleague for Complex Tasks",
    description:
      "Zibly's Deep Work Agent tackles complex analysis autonomously. Your AI colleague works for up to an hour delivering work that would take days.",
    canonical: "https://zibly.ai/features",
  },
  "/pricing": {
    title: "Pricing – Your AI Colleague Starting at $29/month",
    description:
      "Simple pricing for your AI colleague. Start free, scale as needed. Email unlimited tasks, pay only for Deep Work. No setup fees, cancel anytime.",
    canonical: "https://zibly.ai/pricing",
  },
  "/about": {
    title: "About zibly.ai – Our Mission to Simplify Knowledge Work",
    description:
      "Learn how the zibly.ai team is building an e-mail-powered AI colleague that eliminates busywork and helps teams deliver better results faster.",
    canonical: "https://zibly.ai/about",
  },
  "/faq": {
    title: "FAQ – Everything About Your AI Colleague | Zibly",
    description:
      "Everything about your AI colleague: security, pricing, how it works. SOC 2 compliant, no training on your data. Email tasks, get deliverables.",
    canonical: "https://zibly.ai/faq",
  },
  "/blog": {
    title: "Blog – How Teams Use Their AI Colleague | Zibly",
    description:
      "Learn how professionals use their AI colleague to save 20+ hours weekly. Real case studies, productivity tips, and Zibly product updates.",
    canonical: "https://zibly.ai/blog",
  },
  "/signup": {
    title: "Sign Up – Get Your AI Colleague Today | First Task Free",
    description:
      "Start working with your AI colleague in 2 minutes. Email your first task free. No credit card required. Join teams saving 20+ hours weekly.",
    canonical: "https://zibly.ai/signup",
  },
  "/contact": {
    title: "Contact Zibly – Support, Enterprise & Partnership Inquiries",
    description:
      "Questions about your AI colleague? Contact our team for support, enterprise plans, or partnerships. We respond within 24 hours. Email or chat.",
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
      "Review the terms and conditions for using zibly.ai's email-powered AI colleague service.",
    canonical: "https://zibly.ai/terms",
  },

  // ── Use Cases (industry pages) ─────────────────────────────────────
  "/solutions/consultants": {
    title: "AI Colleague for Consultants – MBB-Quality Analysis",
    description:
      "Your AI colleague handles data analysis, deck creation, and research. Email tasks, get client-ready deliverables. Used by top consulting firms.",
    canonical: "https://zibly.ai/solutions/consultants",
  },
  "/solutions/investment-banking": {
    title: "AI Colleague for Investment Banking – Instant Pitch Decks",
    description:
      "Your AI colleague builds comps, DCFs, and pitch books. Email raw data, receive polished materials. Trusted by bulge bracket analysts.",
    canonical: "https://zibly.ai/solutions/investment-banking",
  },
  "/solutions/private-equity": {
    title: "AI Colleague for Private Equity – Deal Analysis in Hours",
    description:
      "Your AI colleague accelerates deal screening and portfolio reviews. Email data rooms, get comprehensive analysis. SOC 2 compliant.",
    canonical: "https://zibly.ai/solutions/private-equity",
  },
  "/solutions/accountants": {
    title: "AI for Accountants – Effortless Financial Analysis & Reporting",
    description:
      "Upload trial balances or CSVs via e-mail and receive clean financial statements, variance analysis, and commentary automatically.",
    canonical: "https://zibly.ai/solutions/accountants",
  },
  "/solutions/attorneys": {
    title: "AI Colleague for Attorneys – Legal Research & Drafting",
    description:
      "Your AI colleague handles legal research and document drafting. Email briefs, get comprehensive memos. Enterprise security, no data training.",
    canonical: "https://zibly.ai/solutions/attorneys",
  },
  "/solutions/marketing": {
    title: "AI Colleague for Marketing – Campaign Analysis & Reports",
    description:
      "Your AI colleague analyzes campaigns and creates reports. Email metrics, get dashboards and insights. From performance reviews to content briefs.",
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
    default: "Zibly – Your AI Colleague. Just Email the Work.",
    template: "%s | zibly.ai",
  },
  description:
    "Email work@zibly.ai like you would a colleague. Get back finished decks, models, and memos. Your AI colleague that delivers professional work, not just advice.",
  alternates: {
    canonical: "https://zibly.ai",
  },
  openGraph: {
    title: "Zibly – Your AI Colleague. Just Email the Work.",
    description:
      "Email tasks to your AI colleague. Get back professional deliverables. First task free.",
    url: "https://zibly.ai",
    siteName: "zibly.ai",
    images: [
      {
        url: "/zibly_meta.png",
        width: 1200,
        height: 630,
        alt: "zibly.ai – E-mail-powered AI colleague",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zibly – Your AI Colleague. Just Email the Work.",
    description:
      "Email tasks to your AI colleague. Get back professional deliverables. First task free.",
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
