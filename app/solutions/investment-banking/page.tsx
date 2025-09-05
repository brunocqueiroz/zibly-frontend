'use client';


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, TrendingUp, CheckCircle, DollarSign } from "lucide-react"
import type { Metadata } from "next"


export default function InvestmentBankingPage() {
  const handleEmailClick = () => {
    const subject = "Deal analysis needed - urgent"
    const body = `Hi Zibly,

I need help with a deal analysis. Can you [describe your need]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zibly.ai/" },
            { "@type": "ListItem", position: 2, name: "Investment Banking", item: "https://zibly.ai/solutions/investment-banking" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
                For Investment Bankers
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Close Deals, Not PowerPoint
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                While you're perfecting pixel alignment at 3am, deals are moving without you. Zibly creates 
                institutional-quality pitch books, CIMs, and financial models with the thoroughness they require.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Create Your First Pitch Book Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              We've Lived Your 100-Hour Weeks
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">All-Nighters for Formatting</h3>
              <p className="text-gray-600">
                You didn't go to Wharton to align logos and update page numbers until 4am
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Version Control Hell</h3>
              <p className="text-gray-600">
                "Pitch_v47_FINAL_FINAL_USE_THIS_ONE.pptx" - sound familiar?
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Missed Opportunities</h3>
              <p className="text-gray-600">
                While you're updating comps, your competition is winning mandates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your AI Associate That Never Sleeps
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From first pitch to final close, Zibly handles the heavy lifting
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pitch Books & CIMs</h3>
              <p className="text-gray-600 mb-4">
                Upload company data, get back polished presentations with all the essentials
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Company overview</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Investment highlights</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Transaction rationale</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Valuation Analysis</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive valuations with all standard methodologies, ready for committee
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>DCF analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Comparable companies</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Precedent transactions</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <DollarSign className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Models</h3>
              <p className="text-gray-600 mb-4">
                LBO models, merger models, and operating models with full functionality
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Returns analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sensitivity tables</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Debt schedules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Speed Wins Deals
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">5 min</p>
                <p className="text-gray-600">First draft pitch book</p>
                <p className="text-sm text-gray-500 mt-2">vs. 2-3 days traditional</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">30 min</p>
                <p className="text-gray-600">Full valuation analysis</p>
                <p className="text-sm text-gray-500 mt-2">vs. 1 week traditional</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">10x</p>
                <p className="text-gray-600">More client touches</p>
                <p className="text-sm text-gray-500 mt-2">while competitors build decks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                "Zibly is a game-changer for deal execution. Last week, we won a $2B mandate because we delivered 
                a full pitch book while our competition was still working on their first draft. The quality matches 
                our best work, but takes 95% less time. Every minute saved is a minute we can spend winning deals."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Thomas Anderson</p>
                  <p className="text-gray-600">Head of M&A, JPMorgan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Win More Mandates. Sleep More Hours.
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join the top banks already using Zibly to dominate their sectors. Your first pitch book 
                is free—experience the speed yourself.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Build Your First Pitch Book Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
