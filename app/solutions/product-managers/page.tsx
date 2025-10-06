"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Users, BarChart3, Target, CheckCircle, Rocket } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import MagneticButton from "@/components/animations/MagneticButton"
import GradientText from "@/components/animations/GradientText"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zibly.ai/" },
            { "@type": "ListItem", position: 2, name: "Product Managers", item: "https://zibly.ai/solutions/product-managers" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                For Product Managers
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Ship <GradientText>Features</GradientText>, Not Assumptions
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Your users are talking. Your competitors are shipping. Your data is everywhere.
                  Zibly turns the chaos into clarity so you can build products people actually want.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Analyze Your Product Data Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">
              The PM Struggle Is Universal
            </h2>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Feedback Overload</h3>
              <p className="text-card-foreground">
                1000 Slack messages, 500 support tickets, 50 user interviews. Where to start?
              </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Prioritization Paralysis</h3>
              <p className="text-card-foreground">
                Every stakeholder thinks their feature is "critical." Data says otherwise.
              </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Rocket className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Competitor FOMO</h3>
              <p className="text-card-foreground">
                By the time you analyze what they shipped, they've shipped three more things
              </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your <GradientText>AI Product</GradientText> Analyst
              </h2>
            </SlideUp>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
              From user research to competitive intelligence, make confident product decisions
            </p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard delay={0.1}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Research Synthesis</h3>
              <p className="text-muted-foreground mb-4">
                Turn mountains of feedback into actionable insights and feature requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Interview analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Support ticket themes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>NPS insights</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.2}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Track competitor features, pricing, and positioning to find your edge
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Feature tracking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Pricing analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Gap identification</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.3}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Understand usage patterns and feature adoption to guide your roadmap
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Usage analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Funnel optimization</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cohort analysis</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 mt-6 max-w-4xl mx-auto">
            <StaggerItem>
              <AnimatedCard delay={0.4}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
              <Lightbulb className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">PRD & Spec Writing</h3>
              <p className="text-muted-foreground mb-4">
                Generate comprehensive PRDs from user research and business requirements
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>User stories</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Acceptance criteria</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Technical requirements</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.5}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
              <Rocket className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Launch Planning</h3>
              <p className="text-muted-foreground mb-4">
                Create go-to-market strategies and launch plans that drive adoption
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Launch timeline</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Messaging framework</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Success metrics</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• PRDs and specs (DOCX)</li>
                <li>• Competitive teardown decks (PPTX)</li>
                <li>• Research synthesis and personas</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Interview synthesis with quotes</li>
                <li>• Feature prioritization matrices</li>
                <li>• Roadmap presentations</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-foreground list-decimal pl-5">
                <li>Forward research, data, or context</li>
                <li>Specify artifacts you want</li>
                <li>Receive finished deliverables</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Before/After Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                From Research Hell to <GradientText>Shipping Heaven</GradientText>
              </h2>
            </SlideUp>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Before Zibly</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">😰</span>
                      <div>
                        <p className="font-semibold">Week 1-2: Gathering feedback</p>
                        <p className="text-sm text-muted-foreground">Reading through 100s of messages</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-semibold">Week 3: Analyzing data</p>
                        <p className="text-sm text-muted-foreground">Building spreadsheets, finding patterns</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">😴</span>
                      <div>
                        <p className="font-semibold">Week 4: Writing PRD</p>
                        <p className="text-sm text-muted-foreground">Finally documenting requirements</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">🚢</span>
                      <div>
                        <p className="font-semibold">Week 5+: Maybe shipping</p>
                        <p className="text-sm text-muted-foreground">If priorities haven't changed...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">With Zibly</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">🚀</span>
                      <div>
                        <p className="font-semibold">Day 1 Morning: Send data</p>
                        <p className="text-sm text-muted-foreground">Forward feedback, analytics, research</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="font-semibold">Day 1 Afternoon: Get insights</p>
                        <p className="text-sm text-muted-foreground">Clear themes, priorities, opportunities</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">📝</span>
                      <div>
                        <p className="font-semibold">Day 2: PRD ready</p>
                        <p className="text-sm text-muted-foreground">Complete specs with user stories</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <p className="font-semibold">Day 3: Engineering starts</p>
                        <p className="text-sm text-muted-foreground">Ship 10x faster with confidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <SlideUp>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Build Products Users Love. Ship <GradientText>10x Faster</GradientText>.
                </h2>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join 1000+ product managers who use Zibly to turn chaos into shipped features.
                  Your first analysis is free—see why they can't work without it.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={handleEmailClick}
                  >
                    Analyze Your Product Data Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-background hover:text-primary"
                    asChild
                  >
                    <Link href="/templates/prd">Get PRD Template</Link>
                  </Button>
                </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
