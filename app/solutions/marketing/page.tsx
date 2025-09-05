"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, BarChart3, Megaphone, CheckCircle, Zap } from "lucide-react"
import type { Metadata } from "next"

export default function MarketingPage() {
  const handleEmailClick = () => {
    const subject = "Marketing analysis needed"
    const body = `Hi Zibly,

I need help with marketing analysis. Can you [describe your need]?

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
            { "@type": "ListItem", position: 2, name: "Marketing", item: "https://zibly.ai/solutions/marketing" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 mb-4">
                For Marketing Teams
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Launch Campaigns, Not Spreadsheets
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                While you're pivoting tables, your competition is pivoting strategies. Zibly turns data 
                into insights and insights into campaigns that actually convert.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Analyze Your First Campaign Free <ArrowRight className="ml-2 h-4 w-4" />
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
              The Data Drowning Is Real
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <BarChart3 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Analysis Paralysis</h3>
              <p className="text-gray-600">
                17 dashboards, 43 metrics, 0 actionable insights. Sound familiar?
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Resource Stretched</h3>
              <p className="text-gray-600">
                "Do more with less" while channels multiply and budgets shrink
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Speed to Market</h3>
              <p className="text-gray-600">
                By the time your analysis is done, the trend is already over
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
              Your AI Marketing Analyst
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From campaign analysis to content creation, Zibly handles the heavy lifting
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Campaign Analysis</h3>
              <p className="text-gray-600 mb-4">
                Turn raw campaign data into actionable insights and optimization strategies
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Multi-channel attribution</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>ROI analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>A/B test insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Competitor Research</h3>
              <p className="text-gray-600 mb-4">
                Track competitor moves and identify market opportunities in real-time
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Campaign tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Messaging analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Gap identification</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Megaphone className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Content Strategy</h3>
              <p className="text-gray-600 mb-4">
                Create data-driven content strategies and editorial calendars that convert
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Topic research</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SEO optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Content calendars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Real Results from Real Marketers
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">312%</p>
              <p className="text-xl font-semibold mb-2">ROI Improvement</p>
              <p className="text-gray-600">Average across all Zibly users after 3 months</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">8 hours</p>
              <p className="text-xl font-semibold mb-2">Saved Per Week</p>
              <p className="text-gray-600">On reporting and analysis tasks</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">2.4x</p>
              <p className="text-xl font-semibold mb-2">Faster Campaigns</p>
              <p className="text-gray-600">From ideation to launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Monday Morning vs. Monday with Zibly
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Without Zibly</h3>
                <div className="space-y-3 text-gray-600">
                  <p>✗ 9:00 AM - Open 7 analytics dashboards</p>
                  <p>✗ 10:30 AM - Still exporting data to Excel</p>
                  <p>✗ 12:00 PM - Lunch at desk, building pivot tables</p>
                  <p>✗ 2:00 PM - Realize you need different metrics</p>
                  <p>✗ 4:00 PM - First draft of insights</p>
                  <p>✗ 6:00 PM - "Can you add competitor data?"</p>
                  <p>✗ 8:00 PM - Still at office, no campaign work done</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4 text-primary">With Zibly</h3>
                <div className="space-y-3 text-gray-600">
                  <p>✓ 9:00 AM - Email data files to Zibly</p>
                  <p>✓ 9:05 AM - Coffee & catch up on industry news</p>
                  <p>✓ 9:30 AM - Review Zibly's analysis & insights</p>
                  <p>✓ 10:00 AM - Strategy meeting with fresh data</p>
                  <p>✓ 11:00 AM - Brief creative team on new campaign</p>
                  <p>✓ 12:00 PM - Actual lunch break</p>
                  <p>✓ 2:00 PM - Campaign launched, tracking live</p>
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
                Stop Reporting. Start Growing.
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join marketing teams who use Zibly to turn data into 
                growth. Your first campaign analysis is free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Analyze Your Campaign Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/features#workflow">See How It Works</Link>
              </Button>
            </div>
            <div className="text-sm text-white/80 mt-2">No model training • Configurable retention • Email-based workflow</div>
          </div>
        </div>
      </section>
    </div>
  )
}
