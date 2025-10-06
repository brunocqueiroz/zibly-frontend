'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, Users, CheckCircle, TrendingUp } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import MagneticButton from "@/components/animations/MagneticButton"
import GradientText from "@/components/animations/GradientText"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"


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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://zibly.ai/" },
            { "@type": "ListItem", position: 2, name: "Consultants", item: "https://zibly.ai/solutions/consultants" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                For Management Consultants
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Stop Burning <GradientText>Midnight Oil</GradientText> on Slide Decks
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] md:text-xl text-white">
                  Your clients pay for insights, not production work. Zibly delivers professional-quality analysis and presentations
                  with the depth they deserve. Finally, an AI that understands consulting standards.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
            {/* Tagline removed to emphasize outcomes */}
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">
                We Know Your <GradientText>Pain</GradientText>
              </h2>
            </SlideUp>
            <p className="mt-4 md:text-lg text-card-foreground">
              Because we've been there too
            </p>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">80-Hour Weeks</h3>
              <p className="text-card-foreground">
                Half your time goes to formatting slides and cleaning data instead of solving client problems
              </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Analyst Burnout</h3>
              <p className="text-card-foreground">
                Your best talent leaves because they're doing Excel monkey work instead of strategic thinking
              </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Margin Pressure</h3>
              <p className="text-card-foreground">
                Clients expect more for less, but your costs keep rising with each new hire
              </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Your <GradientText>24/7</GradientText> Senior Analyst
              </h2>
            </SlideUp>
            <p className="mt-4 md:text-lg max-w-2xl mx-auto text-white">
              Zibly produces the deliverables your clients expect, with the quality your reputation demands
            </p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard delay={0.1}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Market Analysis</h3>
              <p className="text-card-foreground mb-4">
                Send market data, get back comprehensive analysis with TAM/SAM/SOM, competitive landscape, and growth projections
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Porter's Five Forces</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SWOT Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Market sizing models</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.2}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Strategy Decks</h3>
              <p className="text-card-foreground mb-4">
                Transform raw data into polished presentations with executive summaries, insights, and recommendations
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Professional formatting</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data visualizations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Storyline development</span>
                </div>
              </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.3}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Financial Models</h3>
              <p className="text-card-foreground mb-4">
                Build complex models from business cases to valuations, complete with sensitivity analysis
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>DCF models</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Scenario planning</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-card-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>ROI calculations</span>
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
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>• Strategy decks with storyline and charts (PPTX)</li>
                <li>• Excel models with scenarios and sensitivities</li>
                <li>• Executive summaries and memos (PDF/DOCX)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">Popular requests</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>• Market sizing + competitor landscape</li>
                <li>• Pricing & packaging analysis</li>
                <li>• KPI deep‑dives and commentary</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">How it works</h3>
              <ol className="space-y-2 text-sm text-white list-decimal pl-5">
                <li>Forward files or link to data</li>
                <li>State the outcome you want</li>
                <li>Receive the finished deliverable</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* ROI Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The <GradientText>ROI</GradientText> is Undeniable
              </h2>
            </SlideUp>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card rounded-lg p-6 shadow-lg border-2 border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Without Zibly</h3>
                <ul className="space-y-3 text-card-foreground">
                  <li>• Senior consultant: $300/hour × 20 hours = $6,000 per deck</li>
                  <li>• Analyst team: $150/hour × 40 hours = $6,000 per analysis</li>
                  <li>• 5-7 days turnaround per deliverable</li>
                  <li>• Weekend work becomes the norm</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">With Zibly</h3>
                <ul className="space-y-3 text-card-foreground">
                  <li>• Same deliverable: From $20/month</li>
                  <li>• Adaptive turnaround that matches complexity</li>
                  <li>• Handle 10x more clients</li>
                  <li>• Team focuses on strategy, not slides</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-white">
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
              <SlideUp>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to <GradientText>10x</GradientText> Your Consulting Practice?
                </h2>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join the top consulting firms already using Zibly. Your first analysis is free—see the
                  quality for yourself with zero risk.
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
                    Start Your Free Analysis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-background hover:text-primary"
                    asChild
                  >
                    <Link href="/features#workflow">See How It Works</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
