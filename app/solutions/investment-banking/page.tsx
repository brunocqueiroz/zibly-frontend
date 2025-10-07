'use client';


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, TrendingUp, CheckCircle, DollarSign } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import MagneticButton from "@/components/animations/MagneticButton"
import GradientText from "@/components/animations/GradientText"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"


export default function InvestmentBankingPage() {
  const handleEmailClick = () => {
    const subject = "Deal analysis needed - urgent"
    const body = `Hi Zibly,

I need help with a deal analysis. Can you [describe your need]?

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
                For Investment Bankers
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
                  Close <GradientText>Deals</GradientText>, Not PowerPoint
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  While you're perfecting pixel alignment at 3am, deals are moving without you. Zibly creates
                  institutional-quality pitch books, CIMs, and financial models with the thoroughness they require.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Create Your First Pitch Book Free <ArrowRight className="ml-2 h-4 w-4" />
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
                We've Lived Your <GradientText>100-Hour Weeks</GradientText>
              </h2>
            </SlideUp>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black">All-Nighters for Formatting</h3>
                <p className="text-black">
                  You didn't go to Wharton to align logos and update page numbers until 4am
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                  <FileText className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black">Version Control Hell</h3>
                <p className="text-black">
                  "Pitch_v47_FINAL_FINAL_USE_THIS_ONE.pptx" - sound familiar?
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-black">Missed Opportunities</h3>
                <p className="text-black">
                  While you're updating comps, your competition is winning mandates
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Your <GradientText>AI Associate</GradientText> That Never Sleeps
              </h2>
            </SlideUp>
            <p className="mt-4 text-black md:text-lg max-w-2xl mx-auto">
              From first pitch to final close, Zibly handles the heavy lifting
            </p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard delay={0.1}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Pitch Books & CIMs</h3>
                  <p className="text-black mb-4">
                    Upload company data, get back polished presentations with all the essentials
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Company overview</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Investment highlights</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Transaction rationale</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.2}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <BarChart3 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Valuation Analysis</h3>
                  <p className="text-black mb-4">
                    Comprehensive valuations with all standard methodologies, ready for committee
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>DCF analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Comparable companies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Precedent transactions</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard delay={0.3}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <DollarSign className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Financial Models</h3>
                  <p className="text-black mb-4">
                    LBO models, merger models, and operating models with full functionality
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Returns analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Sensitivity tables</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Debt schedules</span>
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
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2 text-black">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>• Pitch books and teasers (PPTX)</li>
                <li>• CIM outlines and summary sections</li>
                <li>• Valuation packs (DCF, comps, precedents)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2 text-black">Popular requests</h3>
              <ul className="space-y-2 text-sm text-black">
                <li>• Sector overviews and buyers lists</li>
                <li>• Operating model clean‑ups</li>
                <li>• Returns and sensitivity tables</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2 text-black">How it works</h3>
              <ol className="space-y-2 text-sm text-black list-decimal pl-5">
                <li>Forward materials (data room links, decks, Excel)</li>
                <li>Specify the output (e.g., 12‑slide buyer deck)</li>
                <li>Receive the deliverable, ready to finalize</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Speed Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                <GradientText>Speed</GradientText> Wins Deals
              </h2>
            </SlideUp>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <p className="text-xl font-semibold mb-1 text-black">Move faster</p>
                <p className="text-black">Draft decks and analyses quickly so you can focus on the narrative.</p>
              </div>
              <div>
                <p className="text-xl font-semibold mb-1 text-black">Stay thorough</p>
                <p className="text-black">Valuation methods and comps included, with clear assumptions.</p>
              </div>
              <div>
                <p className="text-xl font-semibold mb-1 text-black">Win time back</p>
                <p className="text-black">Spend more hours with clients and fewer in PowerPoint and Excel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Social proof (generic) */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-xl font-semibold text-black">What teams say</h3>
          <p className="mx-auto max-w-2xl mt-4 text-black">"Zibly frees our team to focus on relationships and strategy while keeping deliverables moving."</p>
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
                  Win More <GradientText>Mandates</GradientText>. Sleep More Hours.
                </h2>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-black/70 md:text-xl">
                  Join the top banks already using Zibly to dominate their sectors. Your first pitch book
                  is free—experience the speed yourself.
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
                    Build Your First Pitch Book Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
                    asChild
                  >
                    <Link href="/pricing">View Pricing</Link>
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
