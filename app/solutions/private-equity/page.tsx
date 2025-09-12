'use client';


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, BarChart3, FileText, TrendingUp, CheckCircle, Search } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import type { Metadata } from "next"

export default function PrivateEquityPage() {
  const handleEmailClick = () => {
    const subject = "PE deal analysis needed"
    const body = `Hi Zibly,

I need help analyzing a potential acquisition. Can you [describe your need]?

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
            { "@type": "ListItem", position: 2, name: "Private Equity", item: "https://zibly.ai/solutions/private-equity" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-700 mb-4">
                For Private Equity
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Find Alpha, Not Spreadsheet Errors
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your LPs expect 20%+ returns, not 20-hour days formatting IC memos. Zibly analyzes targets, 
                builds models, and monitors portfolios with institutional rigor.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Analyze Your First Deal Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Sourcing to Exit
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              Zibly handles the analytical heavy lifting across your entire investment lifecycle
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Deal Sourcing</h3>
              <p className="text-gray-600 mb-4">
                Screen multiple targets against your investment thesis systematically
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Market mapping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Competitive analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Thesis validation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
              <p className="text-gray-600 mb-4">
                Process entire data rooms and identify risks/opportunities instantly
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Financial analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Contract review</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Red flag identification</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Portfolio Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Track KPIs and identify value creation opportunities across portfolios
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>KPI dashboards</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100-day plans</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Exit readiness</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">IC Memos & LBO Models</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive investment committee materials with full financial models
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Returns analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Scenario modeling</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Value Creation</h3>
              <p className="text-gray-600 mb-4">
                Identify and track operational improvements and growth initiatives
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Synergy analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Add-on screening</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Exit planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• IC memos and board updates</li>
                <li>• LBO models and returns summaries</li>
                <li>• Market maps and diligence checklists</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Data room triage and synthesis</li>
                <li>• KPI dashboards for portfolio reviews</li>
                <li>• Add‑on screens and buyer lists</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                <li>Forward materials (data room links, Excel)</li>
                <li>Specify output (memo/deck/model)</li>
                <li>Receive the finished deliverable</li>
              </ol>
            </div>
          </div>
        </div>
      </section>


      {/* ROI Calculator Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your ROI Calculator
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">Current State</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Associates on team:</span>
                    <span className="font-semibold">4 × $200k = $800k</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Deals reviewed/year:</span>
                    <span className="font-semibold">~20 deals</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Time per deal:</span>
                    <span className="font-semibold">2-3 weeks</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cost per deal:</span>
                    <span className="font-semibold">~$40,000</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">With Zibly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Zibly cost:</span>
                    <span className="font-semibold">From $20/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Deals reviewed/year:</span>
                    <span className="font-semibold">60+ deals</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Time per deal:</span>
                    <span className="font-semibold">Typically 2 minutes to 1 hour</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cost per deal:</span>
                    <span className="font-semibold">~$200</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">
                3x more deals reviewed. 95% cost reduction. Find your next unicorn.
              </p>
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
                Stop Missing Deals. Start Making Alpha.
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                The best PE firms are already using Zibly to outpace their competition. 
                Your first deal analysis is free—see why they switched.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Analyze Your First Deal Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/security">Security & Compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
