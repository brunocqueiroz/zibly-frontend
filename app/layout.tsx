import type React from "react"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"
import Script from "next/script" // Import Script

const inter = Inter({ subsets: ["latin"] })

// Default metadata
export const metadata = {
  title: {
    default: "zibly.ai - Your email-powered AI assistant",
    template: "%s | zibly.ai",
  },
  description:
    "Simply send an email with your tasks, and zibly.ai will handle it for you. The simplest way to get things done with AI.",
  openGraph: {
    title: "zibly.ai - Your email-powered AI assistant",
    description: "Simply send an email with your task, and zibly.ai will handle it for you.",
    url: "https://zibly.ai",
    siteName: "zibly.ai",
    images: [
      {
        url: "https://zibly.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "zibly.ai - Email-Powered AI Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zibly.ai - Your email-powered AI assistant",
    description: "Simply send an email with your task, and zibly.ai will handle it for you.",
    images: ["https://zibly.ai/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add GSC verification tag if you have one
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  // },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
        {/* Google Analytics 4 Script - Replace G-XXXXXXXXXX with your Measurement ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
