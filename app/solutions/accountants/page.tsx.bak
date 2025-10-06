"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileText, BarChart3, Shield, CheckCircle, AlertCircle } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import MagneticButton from "@/components/animations/MagneticButton"
import GradientText from "@/components/animations/GradientText"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"


export default function AccountantsPage() {
  const handleEmailClick = () => {
    const subject = "Financial analysis needed"
    const body = `Hi Zibly,

I need help with financial analysis for a client. Can you [describe your need]?

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
            { "@type": "ListItem", position: 2, name: "Accountants", item: "https://zibly.ai/solutions/accountants" }
          ]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                For Accountants & CPAs
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Focus on <GradientText>Advisory</GradientText>, Not Excel
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Your clients need strategic guidance, not another variance analysis. Zibly handles the
                  number-crunching so you can deliver insights that transform businesses.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Automate Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">
                The <GradientText>Compliance Trap</GradientText> Is Real
              </h2>
            </SlideUp>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Calculator className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Manual Everything</h3>
              <p className="text-card-foreground">
                80% of your day spent on data entry and reconciliation instead of strategic advisory
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <AlertCircle className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Deadline Pressure</h3>
              <p className="text-card-foreground">
                Tax season means 70-hour weeks and turning away profitable advisory work
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Commoditization</h3>
              <p className="text-card-foreground">
                Clients see compliance as a commodity while you struggle to showcase your true value
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your AI <GradientText>Senior Accountant</GradientText>
              </h2>
            </SlideUp>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
              From financial analysis to audit procedures, Zibly handles the technical work with CPA-level accuracy
            </p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem delay={0.1}>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <BarChart3 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Financial Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Transform raw financials into comprehensive analysis with insights and recommendations
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Ratio analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Cash flow projections</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Variance analysis</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem delay={0.2}>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Client Reporting</h3>
                  <p className="text-muted-foreground mb-4">
                    Generate professional reports that clearly communicate complex financial information
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Management reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Board presentations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>KPI dashboards</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem delay={0.3}>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Audit Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Accelerate audit procedures with AI that understands GAAP and documentation requirements
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Test procedures</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Risk assessment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Documentation</span>
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
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Monthly reporting packs (PPTX/PDF)</li>
                <li>• Excel workbooks: P&L, cash flow, projections</li>
                <li>• Executive variance commentary (DOCX)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Budget vs actuals with insights</li>
                <li>• Ratio analysis + KPI dashboard</li>
                <li>• Forecast scenarios and what‑ifs</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-foreground list-decimal pl-5">
                <li>Forward exports or trial balance</li>
                <li>State the output and timeframe</li>
                <li>Receive the finished files</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Value Prop Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Shift to <GradientText>High-Value Advisory</GradientText>
              </h2>
            </SlideUp>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Before Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-muted-foreground">70%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Compliance & Bookkeeping</p>
                      <p className="text-muted-foreground">Low-margin, commodity work</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-muted-foreground">20%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Basic Analysis</p>
                      <p className="text-muted-foreground">Monthly reporting, variance analysis</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-muted-foreground">10%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Strategic Advisory</p>
                      <p className="text-muted-foreground">High-value consulting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">After Zibly</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-white">60%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Strategic Advisory</p>
                      <p className="text-muted-foreground">CFO services, growth strategy</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-white">30%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Advanced Analysis</p>
                      <p className="text-muted-foreground">Forecasting, scenario planning</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-3xl font-bold text-white">10%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Compliance Oversight</p>
                      <p className="text-muted-foreground">Review and sign-off only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-white">
                3x revenue per client. 50% higher margins. Actually enjoy your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <SlideUp>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Become the <GradientText>Advisor</GradientText> Your Clients Actually Need
                </h2>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join accountants who've transformed their practice with Zibly.
                  Your first analysis is free—see the difference AI makes.
                </p>
              </FadeIn>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={handleEmailClick}
                >
                  Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-background hover:text-primary"
                  asChild
                >
                  <Link href="/security">SOC 2 Compliant</Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
