"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, FileText, Search, Clock, CheckCircle, BookOpen } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import type { Metadata } from "next"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"




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
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <FadeIn>
              <div className="space-y-4 max-w-3xl">
                <div className="inline-block rounded-lg bg-white border-2 border-black px-3 py-1 text-sm text-black mb-4">
                  For Attorneys & Law Firms
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
                  Bill Hours, Not All-Nighters
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Your clients pay for expertise, not document review. Zibly handles the research, analysis,
                  and drafting so you can focus on strategy and advocacy.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                  Analyze Your First Case Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Every Practice Area, Accelerated
              </h2>
              <p className="mt-4 text-black md:text-lg max-w-2xl mx-auto">
                From litigation to transactions, Zibly handles the heavy lifting
              </p>
            </div>
          </SlideUp>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Contract Analysis</h3>
                  <p className="text-black mb-4">
                    Review contracts thoroughly and efficiently. Identify risks, compare terms, track changes
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Risk identification</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Clause comparison</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Redline generation</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Search className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Legal Research</h3>
                  <p className="text-black mb-4">
                    Find relevant cases, statutes, and precedents with comprehensive analysis
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Case law analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Statutory research</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Jurisdiction-specific</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Discovery & Due Diligence</h3>
                  <p className="text-black mb-4">
                    Process large volumes of documents to find what matters for your case
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Document review</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Privilege detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Key fact extraction</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid gap-6 md:grid-cols-3 mt-6">
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Scale className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Litigation Support</h3>
                  <p className="text-black mb-4">
                    Build stronger cases with comprehensive analysis and document preparation
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Brief drafting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Motion analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Deposition prep</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Transactional Work</h3>
                  <p className="text-black mb-4">
                    Accelerate deals with thorough document drafting and review
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Purchase agreements</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Disclosure schedules</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Closing checklists</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Compliance & Regulatory</h3>
                  <p className="text-black mb-4">
                    Stay ahead of regulatory changes and ensure compliance
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Regulatory analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Policy drafting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Risk assessment</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Deliverables we often send</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Research memos and case summaries</li>
                  <li>• Clause comparisons and checklists</li>
                  <li>• Draft outlines and exhibit summaries</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Popular requests</h3>
                <ul className="space-y-2 text-sm text-black">
                  <li>• Contract review highlights</li>
                  <li>• Diligence trackers</li>
                  <li>• Litigation brief scaffolds</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">How it works</h3>
                <ol className="space-y-2 text-sm text-black list-decimal pl-5">
                  <li>Forward documents and instructions</li>
                  <li>Specify format and citations style</li>
                  <li>Review and finalize internally</li>
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                The Math Every Partner Loves
              </h2>
            </div>
          </SlideUp>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-black">Traditional Associate Work</h3>
                <ul className="space-y-4 text-black">
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
                <h3 className="text-xl font-semibold mb-6 text-black">With Zibly + Senior Review</h3>
                <ul className="space-y-4 text-black">
                  <li className="flex justify-between items-center">
                    <span>Zibly analysis</span>
                    <span className="font-semibold">From $20/mo</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Senior review (5 hrs)</span>
                    <span className="font-semibold">$2,500</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Client value delivered</span>
                    <span className="font-semibold">Same</span>
                  </li>
                  <li className="border-t pt-4 flex justify-between items-center font-bold">
                    <span>Total cost</span>
                    <span>$2,520</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
              <p className="text-2xl font-bold text-black">
                81% margin improvement. 40 hours saved. Same quality delivered.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
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
                className="bg-transparent text-black border-white hover:bg-white hover:text-primary"
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
