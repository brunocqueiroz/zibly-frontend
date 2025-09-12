"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, TrendingUp, BarChart3, Target, CheckCircle, Building2 } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import type { Metadata } from "next"


export default function StrategyPage() {
  const handleEmailClick = () => {
    const subject = "Strategic analysis needed"
    const body = `Hi Zibly,

I need help with strategic analysis. Can you [describe your need]?

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
            { "@type": "ListItem", position: 2, name: "Strategy", item: "https://zibly.ai/solutions/strategy" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-4">
                For Strategy Executives
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                See Around Corners
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Markets shift overnight. Competitors move in shadows. Opportunities have expiration dates. 
                Zibly gives you the intelligence edge to make bold moves with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Get Your First Strategic Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>


      {/* Challenges Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Strategy at the Speed of Change
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              The old playbook is dead. Annual planning is obsolete. You need real-time intelligence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">The Reality Today</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span>6-month planning cycles in a 6-week world</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span>Consultants charging $2M for last year's insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span>Analysis paralysis while competitors execute</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span>Board asks questions your data can't answer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span>Strategic initiatives based on gut, not data</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border-2 border-primary">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Your Edge with Zibly</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Weekly strategic intelligence updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Real-time market and competitive insights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Scenario planning with depth and speed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Board-ready analysis on demand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Data-driven strategies that actually work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Strategic Command Center
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From market intelligence to strategic planning, make decisions with clarity
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Market Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Deep analysis of market trends, disruptions, and emerging opportunities
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Trend analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Disruption tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Opportunity mapping</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Competitive Strategy</h3>
              <p className="text-gray-600 mb-4">
                Track competitor moves and identify strategic advantages
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Competitor monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Strategic positioning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>War gaming</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scenario Planning</h3>
              <p className="text-gray-600 mb-4">
                Model multiple futures and stress-test strategic options
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Future scenarios</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk modeling</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Decision trees</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">M&A Strategy</h3>
              <p className="text-gray-600 mb-4">
                Identify and evaluate strategic acquisition opportunities
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Target screening</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Synergy analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Integration planning</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Growth Strategy</h3>
              <p className="text-gray-600 mb-4">
                Identify and validate new growth opportunities
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Market entry</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Product expansion</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Partnership strategy</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Board Reporting</h3>
              <p className="text-gray-600 mb-4">
                Create compelling board presentations with data-driven insights
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Executive dashboards</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Strategic narratives</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>KPI tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Board-ready strategy decks (PPTX)</li>
                <li>• Market and competitor briefs (PDF)</li>
                <li>• Scenario models (Excel)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Market sizing + TAM/SAM/SOM</li>
                <li>• Competitor playbooks</li>
                <li>• Strategic options assessments</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                <li>Forward materials and goals</li>
                <li>Specify output & audience</li>
                <li>Receive finished deliverables</li>
              </ol>
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
                Make Your Next Move Your Best Move
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                The future belongs to leaders who move decisively with perfect information. 
                Get your first strategic analysis free and see what you've been missing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Get Strategic Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/security">Enterprise Security</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
