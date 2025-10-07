"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, BarChart3, Users, CheckCircle, Zap, TrendingUp } from "lucide-react"
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
    const subject = "Product analysis needed"
    const body = `Hi Zibly,

I need help with product analysis. Can you [describe your need]?

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
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                For Product Managers
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
                  Ship <GradientText>Features</GradientText>, Not Spreadsheets
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Your users need solutions, not another status update. Zibly handles competitive analysis,
                  user research synthesis, and data crunching so you can focus on building what matters.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Analyze Your First Feature Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                The <GradientText>Meeting Marathon</GradientText> Ends Here
              </h2>
            </SlideUp>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black">Data Buried in Tools</h3>
              <p className="text-black">
                Analytics in 5 platforms, user feedback in 3 more, competitive intel scattered everywhere
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black">Stakeholder Chaos</h3>
              <p className="text-black">
                Engineering wants specs, sales wants features, executives want strategy—you're stuck synthesizing
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black">Feature Factory Pressure</h3>
              <p className="text-black">
                Ship fast, ship more—but when do you validate, analyze, and actually understand impact?
              </p>
            </div>
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
                Your AI <GradientText>Product Analyst</GradientText>
              </h2>
            </SlideUp>
            <p className="mt-4 text-black md:text-lg max-w-2xl mx-auto">
              From competitive intel to user research synthesis, Zibly gives you product intelligence on demand
            </p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem delay={0.1}>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Lightbulb className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Competitive Analysis</h3>
                  <p className="text-black mb-4">
                    Track what competitors ship, understand their strategy, and identify gaps in the market
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Feature comparisons</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Pricing analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Market positioning</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem delay={0.2}>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">User Research Synthesis</h3>
                  <p className="text-black mb-4">
                    Transform mountains of user feedback into actionable insights and clear themes
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Theme extraction</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Pain point analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Opportunity scoring</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem delay={0.3}>
              <AnimatedCard>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Product Metrics Analysis</h3>
                  <p className="text-black mb-4">
                    Turn usage data into clear narratives about what's working and what needs attention
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Adoption tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Retention analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Impact measurement</span>
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
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2 text-black">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>• PRDs and feature specs (Notion/Confluence)</li>
                <li>• Competitive battle cards (PDF/PPTX)</li>
                <li>• User research reports with themes</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2 text-black">Popular requests</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>• "Analyze this competitor's new feature"</li>
                <li>• "Summarize 200 user interviews"</li>
                <li>• "Why did adoption drop last week?"</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2 text-black">How it works</h3>
              <ol className="space-y-2 text-sm text-black list-decimal pl-5">
                <li>Forward data, links, or research</li>
                <li>Describe what you need to decide</li>
                <li>Get clear analysis and recommendations</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Value Prop Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                From Admin Work to <GradientText>Product Vision</GradientText>
              </h2>
            </SlideUp>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-black">Before Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">60%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Analysis & Research</p>
                      <p className="text-black">Digging through data, tools, feedback</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">25%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Meetings & Alignment</p>
                      <p className="text-black">Explaining findings to stakeholders</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">15%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Strategic Thinking</p>
                      <p className="text-black">What you actually got hired for</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-black">After Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">60%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Strategic Product Work</p>
                      <p className="text-black">Vision, roadmap, customer conversations</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">25%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Execution & Shipping</p>
                      <p className="text-black">Working with eng and design</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-black">15%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Review & Refinement</p>
                      <p className="text-black">Quick check of Zibly's analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-black">
                4x more time for strategy. Ship better features. Actually enjoy the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white border-t-2 border-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <SlideUp>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Build Products Users <GradientText>Love</GradientText>
                </h2>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-black/70 md:text-xl">
                  Join product teams who use Zibly to ship smarter and faster.
                  Your first analysis is free—no credit card required.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white"
                    onClick={handleEmailClick}
                  >
                    Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
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
