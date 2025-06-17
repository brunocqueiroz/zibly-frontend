"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileText, BarChart3, Shield, CheckCircle, AlertCircle } from "lucide-react"
import type { Metadata } from "next"


export default function AccountantsPage() {
  const handleEmailClick = () => {
    const subject = "Financial analysis needed"
    const body = `Hi Zibly,

I need help with financial analysis for a client. Can you [describe your need]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 mb-4">
                For Accountants & CPAs
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Focus on Advisory, Not Excel
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your clients need strategic guidance, not another variance analysis. Zibly handles the 
                number-crunching so you can deliver insights that transform businesses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Automate Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/deloitte">See Deloitte Case Study</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Trusted by Big 4 firms and 1,000+ independent CPAs
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Compliance Trap Is Real
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Calculator className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Manual Everything</h3>
              <p className="text-gray-600">
                80% of your day spent on data entry and reconciliation instead of strategic advisory
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Deadline Pressure</h3>
              <p className="text-gray-600">
                Tax season means 70-hour weeks and turning away profitable advisory work
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Commoditization</h3>
              <p className="text-gray-600">
                Clients see compliance as a commodity while you struggle to showcase your true value
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
              Your AI Senior Accountant
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From financial analysis to audit procedures, Zibly handles the technical work with CPA-level accuracy
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Analysis</h3>
              <p className="text-gray-600 mb-4">
                Transform raw financials into comprehensive analysis with insights and recommendations
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Ratio analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cash flow projections</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Variance analysis</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Client Reporting</h3>
              <p className="text-gray-600 mb-4">
                Generate professional reports that clearly communicate complex financial information
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Management reports</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Board presentations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>KPI dashboards</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Audit Support</h3>
              <p className="text-gray-600 mb-4">
                Accelerate audit procedures with AI that understands GAAP and documentation requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Test procedures</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk assessment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Shift to High-Value Advisory
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Before Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-gray-400">70%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Compliance & Bookkeeping</p>
                      <p className="text-gray-600">Low-margin, commodity work</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-gray-400">20%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Basic Analysis</p>
                      <p className="text-gray-600">Monthly reporting, variance analysis</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-gray-400">10%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Strategic Advisory</p>
                      <p className="text-gray-600">High-value consulting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">After Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-primary">60%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Strategic Advisory</p>
                      <p className="text-gray-600">CFO services, growth strategy</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-primary">30%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Advanced Analysis</p>
                      <p className="text-gray-600">Forecasting, scenario planning</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-primary">10%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Compliance Oversight</p>
                      <p className="text-gray-600">Review and sign-off only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-primary">
                3x revenue per client. 50% higher margins. Actually enjoy your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 rounded-lg p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                "Zibly changed my entire practice. I went from drowning in spreadsheets to being a true 
                strategic advisor. My clients now see me as their fractional CFO, not just their CPA. 
                Revenue is up 40% and I'm working 20 fewer hours per week."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-gray-600">CPA, Mitchell & Associates</p>
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
                Become the Advisor Your Clients Actually Need
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join thousands of accountants who've transformed their practice with Zibly. 
                Your first analysis is free—see the difference AI makes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/security">SOC 2 Compliant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}