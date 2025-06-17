"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Users, BarChart3, Target, CheckCircle, Rocket } from "lucide-react"
import type { Metadata } from "next"


export default function ProductManagersPage() {
  const handleEmailClick = () => {
    const subject = "Product research needed"
    const body = `Hi Zibly,

I need help with product analysis. Can you [describe your need]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700 mb-4">
                For Product Managers
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Ship Features, Not Assumptions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your users are talking. Your competitors are shipping. Your data is everywhere. 
                Zibly turns the chaos into clarity so you can build products people actually want.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Analyze Your Product Data Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/stripe-pm">See Stripe PM Case Study</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Used by PMs at Stripe, Notion, Linear, Figma, and 1000+ companies
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The PM Struggle Is Universal
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Feedback Overload</h3>
              <p className="text-gray-600">
                1000 Slack messages, 500 support tickets, 50 user interviews. Where to start?
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Prioritization Paralysis</h3>
              <p className="text-gray-600">
                Every stakeholder thinks their feature is "critical." Data says otherwise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <Rocket className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Competitor FOMO</h3>
              <p className="text-gray-600">
                By the time you analyze what they shipped, they've shipped three more things
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
              Your AI Product Analyst
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From user research to competitive intelligence, make confident product decisions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Research Synthesis</h3>
              <p className="text-gray-600 mb-4">
                Turn mountains of feedback into actionable insights and feature requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Interview analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Support ticket themes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>NPS insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
              <p className="text-gray-600 mb-4">
                Track competitor features, pricing, and positioning to find your edge
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Feature tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Pricing analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Gap identification</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Analytics</h3>
              <p className="text-gray-600 mb-4">
                Understand usage patterns and feature adoption to guide your roadmap
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Usage analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Funnel optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cohort analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Lightbulb className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">PRD & Spec Writing</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive PRDs from user research and business requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>User stories</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Acceptance criteria</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Technical requirements</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Rocket className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Launch Planning</h3>
              <p className="text-gray-600 mb-4">
                Create go-to-market strategies and launch plans that drive adoption
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Launch timeline</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Messaging framework</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Success metrics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Research Hell to Shipping Heaven
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Before Zibly</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">😰</span>
                      <div>
                        <p className="font-semibold">Week 1-2: Gathering feedback</p>
                        <p className="text-sm text-gray-600">Reading through 100s of messages</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-semibold">Week 3: Analyzing data</p>
                        <p className="text-sm text-gray-600">Building spreadsheets, finding patterns</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">😴</span>
                      <div>
                        <p className="font-semibold">Week 4: Writing PRD</p>
                        <p className="text-sm text-gray-600">Finally documenting requirements</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">🚢</span>
                      <div>
                        <p className="font-semibold">Week 5+: Maybe shipping</p>
                        <p className="text-sm text-gray-600">If priorities haven't changed...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-primary">With Zibly</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <p className="font-semibold">Day 1 Morning: Send data</p>
                        <p className="text-sm text-gray-600">Forward feedback, analytics, research</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="font-semibold">Day 1 Afternoon: Get insights</p>
                        <p className="text-sm text-gray-600">Clear themes, priorities, opportunities</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">📝</span>
                      <div>
                        <p className="font-semibold">Day 2: PRD ready</p>
                        <p className="text-sm text-gray-600">Complete specs with user stories</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <p className="font-semibold">Day 3: Engineering starts</p>
                        <p className="text-sm text-gray-600">Ship 10x faster with confidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-50 rounded-lg p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                "Zibly is my secret weapon. I process user research 20x faster and my PRDs basically 
                write themselves. Last quarter, we shipped 3x more features with higher user satisfaction. 
                My engineers love the clarity, my CEO loves the velocity, and I actually have weekends again."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">James Rodriguez</p>
                  <p className="text-gray-600">Head of Product, Stripe</p>
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
                Build Products Users Love. Ship 10x Faster.
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join 1000+ product managers who use Zibly to turn chaos into shipped features. 
                Your first analysis is free—see why they can't work without it.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Analyze Your Product Data Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/templates/prd">Get PRD Template</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}