'use client';


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, Users, CheckCircle, TrendingUp } from "lucide-react"
import type { Metadata } from "next"


export default function ConsultantsPage() {
  const handleEmailClick = () => {
    const subject = "Consulting project analysis needed"
    const body = `Hi Zibly,

I need help with a client project. Can you analyze [describe your need]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
                For Management Consultants
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Stop Burning Midnight Oil on Slide Decks
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your clients pay for insights, not production work. Zibly delivers McKinsey-quality analysis and presentations 
                in minutes, not days. Finally, an AI that understands consulting standards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/bain-consulting">See Bain Case Study</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Trusted by consultants at McKinsey, BCG, Bain, and Deloitte
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              We Know Your Pain
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg">
              Because we've been there too
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">80-Hour Weeks</h3>
              <p className="text-gray-600">
                Half your time goes to formatting slides and cleaning data instead of solving client problems
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Analyst Burnout</h3>
              <p className="text-gray-600">
                Your best talent leaves because they're doing Excel monkey work instead of strategic thinking
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Margin Pressure</h3>
              <p className="text-gray-600">
                Clients expect more for less, but your costs keep rising with each new hire
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
              Your 24/7 Senior Analyst
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              Zibly produces the deliverables your clients expect, with the quality your reputation demands
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Send market data, get back comprehensive analysis with TAM/SAM/SOM, competitive landscape, and growth projections
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Porter's Five Forces</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SWOT Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Market sizing models</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategy Decks</h3>
              <p className="text-gray-600 mb-4">
                Transform raw data into polished presentations with executive summaries, insights, and recommendations
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>McKinsey-style formatting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Data visualizations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Storyline development</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Models</h3>
              <p className="text-gray-600 mb-4">
                Build complex models from business cases to valuations, complete with sensitivity analysis
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>DCF models</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Scenario planning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>ROI calculations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-50 rounded-lg p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                "Zibly transformed how we deliver client work. What used to take my team 3 days now takes 3 hours. 
                The analysis quality is indistinguishable from our senior consultants' work. We've increased our 
                project capacity by 40% without adding headcount."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Marcus Johnson</p>
                  <p className="text-gray-600">Senior Partner, BCG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The ROI is Undeniable
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Without Zibly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Senior consultant: $300/hour × 20 hours = $6,000 per deck</li>
                  <li>• Analyst team: $150/hour × 40 hours = $6,000 per analysis</li>
                  <li>• 5-7 days turnaround per deliverable</li>
                  <li>• Weekend work becomes the norm</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4">With Zibly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Same deliverable: $299/month unlimited</li>
                  <li>• 5-minute turnaround</li>
                  <li>• Handle 10x more clients</li>
                  <li>• Team focuses on strategy, not slides</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-primary">
                Save $50,000+ per month. Deliver 10x faster.
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
                Ready to 10x Your Consulting Practice?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join the top consulting firms already using Zibly. Your first analysis is free—see the 
                quality for yourself with zero risk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Start Your Free Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/demo">Watch 5-Min Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}