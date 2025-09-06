"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, Users, CheckCircle, TrendingUp, FileSpreadsheet } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"

export default function MBAPage() {
  const handleEmailClick = () => {
    const subject = "MBA help: case prep and modeling"
    const body = `Hi Zibly,

I need help preparing for [case/interview/class]. Please create [deliverable], using [attached materials].

Thanks!`
    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">For MBA Students</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Turn Case Prompts Into Board‑Ready Deliverables</h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">Email prompts, data, and notes. Get case frameworks, financial models, and polished decks.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Start Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Know Your Grind</h2>
            <p className="mt-4 text-gray-600 md:text-lg">Because applications, cases, and classes collide.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Time Pressure</h3>
              <p className="text-gray-600">Cases tomorrow, interviews next week, finals next month.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Polish Matters</h3>
              <p className="text-gray-600">Recruiting decks and class deliverables must look professional.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Scattered Inputs</h3>
              <p className="text-gray-600">Exhibits here, notes there — and a deck needed fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your On‑Call Analyst</h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">From case frameworks to decks and models, delivered with professional depth</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Market & Case Analysis</h3>
              <p className="text-gray-600 mb-4">Frameworks, sizing, competitor maps, and recommendation write‑ups</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Market entry, profitability, growth</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>SWOT and Five Forces</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Exhibit commentary</span></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Decks & Storylines</h3>
              <p className="text-gray-600 mb-4">Polished slides with charts, structure, and an executive narrative</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Professional formatting</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Data visualizations</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Storyline development</span></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileSpreadsheet className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Models</h3>
              <p className="text-gray-600 mb-4">DCF, LBO, and 3‑statement models with sensitivities</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Clean inputs & structure</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Assumptions & scenarios</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Charts + executive summary</span></div>
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
                <li>• 10–20 slide decks (PPTX)</li>
                <li>• Excel models with sensitivities</li>
                <li>• Executive memos (PDF/DOCX)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Market sizing + competitor maps</li>
                <li>• Pricing/packaging teardown</li>
                <li>• KPI deep‑dives + commentary</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                <li>Forward files or link to data</li>
                <li>State the outcome you want</li>
                <li>Receive the finished deliverable</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Payoff Is Obvious</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Without Zibly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Hours formatting slides and exhibits</li>
                  <li>• Last‑minute edits before class</li>
                  <li>• Less time for practice and networking</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4">With Zibly</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Polished decks, models, and memos</li>
                  <li>• Clear storylines and visuals</li>
                  <li>• More time for prep and interviews</li>
                </ul>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Stand Out This Semester?</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">Send a task to work@zibly.ai. Your first analysis is free.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={handleEmailClick}>
                Start Your Free Task <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/features#workflow">See How It Works</Link>
              </Button>
              <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
