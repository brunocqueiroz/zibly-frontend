"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, FileText, Search, Clock, CheckCircle, BookOpen } from "lucide-react"
import type { Metadata } from "next"




export default function AttorneysPage() {
  const handleEmailClick = () => {
    const subject = "Legal research assistance needed"
    const body = `Hi Zibly,

I need help with legal research and document analysis. Can you [describe your need]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700 mb-4">
                For Attorneys & Law Firms
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Bill Hours, Not All-Nighters
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Your clients pay for expertise, not document review. Zibly handles the research, analysis, 
                and drafting so you can focus on strategy and advocacy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Analyze Your First Case Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/latham-watkins">See AmLaw 100 Case Study</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Trusted by AmLaw 100 firms and solo practitioners nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white border-y">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">10 min</p>
              <p className="text-gray-600 mt-2">Contract review</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">1M+</p>
              <p className="text-gray-600 mt-2">Documents analyzed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">80%</p>
              <p className="text-gray-600 mt-2">Time saved on research</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">2.5x</p>
              <p className="text-gray-600 mt-2">More billable hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Every Practice Area, Accelerated
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              From litigation to transactions, Zibly handles the heavy lifting
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contract Analysis</h3>
              <p className="text-gray-600 mb-4">
                Review contracts in minutes, not hours. Identify risks, compare terms, track changes
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk identification</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Clause comparison</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Redline generation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Legal Research</h3>
              <p className="text-gray-600 mb-4">
                Find relevant cases, statutes, and precedents with comprehensive analysis
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Case law analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Statutory research</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Jurisdiction-specific</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Discovery & Due Diligence</h3>
              <p className="text-gray-600 mb-4">
                Process thousands of documents to find what matters for your case
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Document review</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Privilege detection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Key fact extraction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Scale className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Litigation Support</h3>
              <p className="text-gray-600 mb-4">
                Build stronger cases with comprehensive analysis and document preparation
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Brief drafting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Motion analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Deposition prep</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Transactional Work</h3>
              <p className="text-gray-600 mb-4">
                Accelerate deals with faster document drafting and review
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Purchase agreements</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Disclosure schedules</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Closing checklists</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Compliance & Regulatory</h3>
              <p className="text-gray-600 mb-4">
                Stay ahead of regulatory changes and ensure compliance
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Regulatory analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Policy drafting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Math Every Partner Loves
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-6">Traditional Associate Work</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>Document review (20 hrs)</span>
                    <span className="font-semibold">$6,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Legal research (15 hrs)</span>
                    <span className="font-semibold">$4,500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Brief drafting (10 hrs)</span>
                    <span className="font-semibold">$3,000</span>
                  </li>
                  <li className="border-t pt-4 flex justify-between items-center font-bold">
                    <span>Total (45 hrs @ $300/hr)</span>
                    <span>$13,500</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">With Zibly + Senior Review</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>Zibly analysis</span>
                    <span className="font-semibold">$299</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Senior review (5 hrs)</span>
                    <span className="font-semibold">$2,500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Client value delivered</span>
                    <span className="font-semibold">Same</span>
                  </li>
                  <li className="border-t pt-4 flex justify-between items-center font-bold text-primary">
                    <span>Total cost</span>
                    <span>$2,799</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">
                79% margin improvement. 40 hours saved. Same quality delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-100 rounded-lg p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
                "Zibly transformed our practice. We handle 3x more cases with the same team. Document 
                review that took days now takes hours. Our associates focus on legal strategy instead 
                of doc review. Profit per partner is up 45% year over year."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Jennifer Walsh</p>
                  <p className="text-gray-600">Managing Partner, Walsh & Associates LLP</p>
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
                Win More Cases. Bill More Hours. Work Less Nights.
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join leading law firms using Zibly to transform their practice. Your first 
                case analysis is free—see why they'll never go back.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Analyze Your First Case Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/security">Bank-Level Security</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}