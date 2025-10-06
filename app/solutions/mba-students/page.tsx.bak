"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, Users, CheckCircle, TrendingUp, FileSpreadsheet } from "lucide-react"
import JsonLd from "@/components/json-ld"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"

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
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zibly.ai/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: "https://zibly.ai/solutions" },
          { "@type": "ListItem", position: 3, name: "MBA Students", item: "https://zibly.ai/solutions/mba-students" },
        ],
      }} />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">For MBA Students</div>
              <FadeIn>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">Turn Case Prompts Into Board‑Ready Deliverables</h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">Email prompts, data, and notes. Get case frameworks, financial models, and polished decks.</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                  Start Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">We Know Your Grind</h2>
              <p className="mt-4 text-card-foreground md:text-lg">Because applications, cases, and classes collide.</p>
            </SlideUp>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <AnimatedCard>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Time Pressure</h3>
                  <p className="text-card-foreground">Cases tomorrow, interviews next week, finals next month.</p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Polish Matters</h3>
                  <p className="text-card-foreground">Recruiting decks and class deliverables must look professional.</p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Scattered Inputs</h3>
                  <p className="text-card-foreground">Exhibits here, notes there — and a deck needed fast.</p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Your On‑Call Analyst</h2>
              <p className="mt-4 text-white md:text-lg max-w-2xl mx-auto">From case frameworks to decks and models, delivered with professional depth</p>
            </SlideUp>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <BarChart3 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Market & Case Analysis</h3>
                  <p className="text-card-foreground mb-4">Frameworks, sizing, competitor maps, and recommendation write‑ups</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Market entry, profitability, growth</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>SWOT and Five Forces</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Exhibit commentary</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Decks & Storylines</h3>
                  <p className="text-card-foreground mb-4">Polished slides with charts, structure, and an executive narrative</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Professional formatting</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Data visualizations</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Storyline development</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <FileSpreadsheet className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Financial Models</h3>
                  <p className="text-card-foreground mb-4">DCF, LBO, and 3‑statement models with sensitivities</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Clean inputs & structure</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Assumptions & scenarios</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Charts + executive summary</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="rounded-lg border p-6 bg-background">
                <h3 className="text-lg font-semibold mb-2 text-white">Deliverables we often send</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>• 10–20 slide decks (PPTX)</li>
                  <li>• Excel models with sensitivities</li>
                  <li>• Executive memos (PDF/DOCX)</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-lg border p-6 bg-background">
                <h3 className="text-lg font-semibold mb-2 text-white">Popular requests</h3>
                <ul className="space-y-2 text-sm text-white">
                  <li>• Market sizing + competitor maps</li>
                  <li>• Pricing/packaging teardown</li>
                  <li>• KPI deep‑dives + commentary</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="rounded-lg border p-6 bg-background">
                <h3 className="text-lg font-semibold mb-2 text-white">How it works</h3>
                <ol className="space-y-2 text-sm text-white list-decimal pl-5">
                  <li>Forward files or link to data</li>
                  <li>State the outcome you want</li>
                  <li>Receive the finished deliverable</li>
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">The Payoff Is Obvious</h2>
            </SlideUp>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedCard delay={0.1}>
                <div className="bg-card rounded-lg p-6 shadow-lg border-2 border-border">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">Without Zibly</h3>
                  <ul className="space-y-3 text-card-foreground">
                    <li>• Hours formatting slides and exhibits</li>
                    <li>• Last‑minute edits before class</li>
                    <li>• Less time for practice and networking</li>
                  </ul>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <div className="bg-card rounded-lg p-6 shadow-lg border-2 border-primary">
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">With Zibly</h3>
                  <ul className="space-y-3 text-card-foreground">
                    <li>• Polished decks, models, and memos</li>
                    <li>• Clear storylines and visuals</li>
                    <li>• More time for prep and interviews</li>
                  </ul>
                </div>
              </AnimatedCard>
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
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-background hover:text-primary" asChild>
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
