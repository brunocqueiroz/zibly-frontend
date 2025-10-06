"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, BarChart3, PenTool, Search, Calculator, Database, Clock, Shield, Target, Mail, CheckCircle, Sparkles, TrendingUp, Brain, FileSpreadsheet, Lightbulb, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import TiltCard from "@/components/animations/TiltCard"
import MagneticButton from "@/components/animations/MagneticButton"
import GradientText from "@/components/animations/GradientText"
import AnimatedCounter from "@/components/animations/AnimatedCounter"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"


export default function FeaturesPage() {
  const handleEmailClick = () => {
    const subject = "I need help with analysis"
    const body = `Hi Zibly,

Can you help me with [describe your task]?

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <SlideUp>
                <h1 className="inter-section-heading text-black" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                  Turn <span className="text-primary">6-Hour Tasks</span> Into 6-Minute Emails
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="max-w-[700px] text-lg md:text-xl inter-text mx-auto text-black">
                  Transform how you work. Email your analytical tasks and get back finished deliverables. From data chaos to executive clarity with the depth your work deserves — typically within 2 minutes to 1 hour depending on complexity.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center">
                <MagneticButton>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Email Your First Task Free <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg">
                  <Link href="#workflow">See How It Works</Link>
                </Button>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
            {/* Removed: attachment/workflow taglines per request */}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="w-full py-8 bg-white border-y border-black/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold text-black inter-text-medium"><AnimatedCounter value={100} />x</p>
              <p className="text-sm text-black inter-text">Faster than manual analysis</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black inter-text-medium"><AnimatedCounter value={50} />+</p>
              <p className="text-sm text-black inter-text">File types support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black inter-text-medium">Adaptive</p>
              <p className="text-sm text-black inter-text">Task-driven timing</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black inter-text-medium">Zero</p>
              <p className="text-sm text-black inter-text">Training with your Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black" style={{ fontSize: '48px', fontWeight: '400', lineHeight: '56px', letterSpacing: '-0.01em' }}>
                Your Work, <span className="text-primary">Transformed</span>
              </h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto text-black">
                Real examples of how professionals use Zibly every day — from <Link href="/solutions/consultants" className="text-primary hover:underline">consulting decks</Link> and <Link href="/solutions/investment-banking" className="text-primary hover:underline">banking pitch books</Link> to <Link href="/solutions/marketing" className="text-primary hover:underline">marketing campaign analysis</Link>.
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl space-y-8">
            {/* Example 1 */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <AnimatedCard delay={0.1}>
                <Card className="border-border bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Mail className="h-4 w-4" />
                    <span className="inter-text-medium">You send:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Sales data dump (47 sheets)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm inter-text text-black">
                    "Can you analyze our Q4 sales data and identify growth opportunities?
                    Focus on customer segments and regional performance."
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-black">
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Q4_sales_raw_data.xlsx (12MB)</span>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="border-primary shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Zap className="h-4 w-4" />
                    <span className="inter-text-medium">Zibly delivers:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Complete Sales Analysis Package</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm inter-text text-black">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Executive dashboard with KPIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Customer segmentation analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Regional heat maps & trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>5 specific growth opportunities</span>
                    </li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-black">
                      <FileSpreadsheet className="h-3 w-3" />
                      <span>Sales_Analysis.xlsx</span>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <FileText className="h-3 w-3" />
                      <span>Executive_Summary.pdf</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>
            </div>

            {/* Example 2 */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <AnimatedCard delay={0.3}>
                <Card className="border-border bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Mail className="h-4 w-4" />
                    <span className="inter-text-medium">You send:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">100+ customer interviews</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm inter-text text-black">
                    "Synthesize these interview transcripts and identify key themes,
                    pain points, and feature requests."
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-black">
                    <FileText className="h-4 w-4" />
                    <span>Interview_transcripts.zip (85 files)</span>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <Card className="border-primary shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Zap className="h-4 w-4" />
                    <span className="inter-text-medium">Zibly delivers:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Comprehensive Research Report</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm inter-text text-black">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Thematic analysis with quotes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Prioritized feature roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Customer persona profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Strategic recommendations</span>
                    </li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-black">
                      <FileText className="h-3 w-3" />
                      <span>Research_Findings.pptx</span>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <BarChart3 className="h-3 w-3" />
                      <span>Data_Analysis.xlsx</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Core Capabilities */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black" style={{ fontSize: '48px', fontWeight: '400', lineHeight: '56px', letterSpacing: '-0.01em' }}>
                Three Ways Zibly <span className="text-primary">Saves Your Time</span>
              </h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto text-black">
                From quick analysis to complex research, we handle the work you're too valuable to do
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid gap-8 lg:grid-cols-3">
              {/* Data Analysis */}
              <StaggerItem className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                    <BarChart3 className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl inter-heading-normal text-black">Data Analysis</h3>
                </div>
                <p className="inter-text text-black">
                  Turn raw data into actionable insights with professional visualizations and clear recommendations.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Financial Modeling</h4>
                    <p className="text-sm inter-text text-black">
                      DCF models, sensitivity analysis, scenario planning
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Performance Analytics</h4>
                    <p className="text-sm inter-text text-black">
                      KPI dashboards, variance analysis, trend identification
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Data Visualization</h4>
                    <p className="text-sm inter-text text-black">
                      Interactive dashboards, executive summaries, reports
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Research & Intelligence */}
              <StaggerItem className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                    <Search className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl inter-heading-normal text-black">Research & Intel</h3>
                </div>
                <p className="inter-text text-black">
                  Deep research and synthesis that would take analysts days to complete.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Market Research</h4>
                    <p className="text-sm inter-text text-black">
                      TAM/SAM/SOM sizing, competitive analysis, trends
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Due Diligence</h4>
                    <p className="text-sm inter-text text-black">
                      Company analysis, risk assessment, opportunity ID
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Document Synthesis</h4>
                    <p className="text-sm inter-text text-black">
                      Contract review, survey analysis, report summaries
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Content Creation */}
              <StaggerItem className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                    <PenTool className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl inter-heading-normal text-black">Content Creation</h3>
                </div>
                <p className="inter-text text-black">
                  Professional documents that look like your best work, not AI-generated content.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Executive Comms</h4>
                    <p className="text-sm inter-text text-black">
                      Board memos, investor updates, strategic plans
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Client Deliverables</h4>
                    <p className="text-sm inter-text text-black">
                      Proposals, presentations, project reports
                    </p>
                  </div>
                  <div className="rounded-lg border border-black/20 p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold inter-text-medium mb-1 text-black">Internal Docs</h4>
                    <p className="text-sm inter-text text-black">
                      Process documentation, training materials, SOPs
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Workflow Section */}
      <section id="workflow" className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-card-foreground" style={{ fontSize: '48px', fontWeight: '400', lineHeight: '56px', letterSpacing: '-0.01em' }}>
                How <span className="text-primary">Professionals</span> Use Zibly
              </h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto text-card-foreground">
                A typical day with your AI analyst
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Morning */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl inter-heading-normal mb-2 text-card-foreground">8:47 AM - Board Meeting Prep</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          <strong>You forward:</strong> "FYI - Board meeting next week. Can you prep the quarterly metrics deck?"
                        </p>
                        <div className="bg-card rounded-lg p-3">
                          <p className="text-sm inter-text text-card-foreground">
                            <strong>8:55 AM - Zibly delivers:</strong> 15-slide deck with revenue analysis,
                            cohort retention, burn rate trends, and talking points for each slide.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Midday */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <TrendingUp className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl inter-heading-normal mb-2 text-card-foreground">11:23 AM - Competitive Intel</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          <strong>You send:</strong> "Team asking about CompetitorX's new pricing. Need comparison."
                        </p>
                        <div className="bg-card rounded-lg p-3">
                          <p className="text-sm inter-text text-card-foreground">
                            <strong>11:31 AM - Zibly delivers:</strong> Feature comparison matrix,
                            pricing analysis, positioning recommendations, and suggested counter-messaging.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Afternoon */}
              <div className="relative">
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <Brain className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl inter-heading-normal mb-2 text-card-foreground">3:15 PM - Data Deep Dive</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          <strong>You forward:</strong> Sales team data dump with "Why did EMEA miss targets?"
                        </p>
                        <div className="bg-card rounded-lg p-3">
                          <p className="text-sm inter-text text-card-foreground">
                            <strong>3:28 PM - Zibly delivers:</strong> Root cause analysis showing product-market fit issues,
                            competitive pressure in 3 countries, and 5 specific remediation strategies.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Why Zibly Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black" style={{ fontSize: '48px', fontWeight: '400', lineHeight: '56px', letterSpacing: '-0.01em' }}>
                Why Professionals <span className="text-primary">Choose Zibly</span>
              </h2>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-5xl">
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">Enterprise Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        SOC 2 compliant, zero data retention, never trains on your data.
                        Your confidential information stays confidential.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">Built for Professionals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        Not a chatbot. Zibly understands business context and delivers
                        work that meets professional standards.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <Zap className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">No Learning Curve</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        Works through email. No apps, no prompts, no training.
                        Just forward tasks like you would to a colleague.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <FileSpreadsheet className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">Real Deliverables</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        Complete Excel files, formatted PowerPoints, polished PDFs.
                        Everything ready to use immediately.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <Clock className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">Reliable Turnaround</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        Turnaround typically ranges from <strong>2 minutes to 1 hour</strong> depending on task complexity. Simple tasks finish fast; deep analyses get the time they need.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard>
                  <Card className="border-2 hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <Lightbulb className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="inter-heading-normal">Actually Understands</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm inter-text text-card-foreground">
                        Trained on professional work. Understands context, asks smart
                        questions, delivers what you actually need.
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <Badge variant="secondary" className="mb-4">
                      <Sparkles className="h-3 w-3 mr-1" />
                      First task free
                    </Badge>
                    <h2 className="inter-section-heading text-black" style={{ fontSize: '48px', fontWeight: '400', lineHeight: '56px', letterSpacing: '-0.01em' }}>
                      Stop Reading. Start <span className="text-primary">Delegating</span>.
                    </h2>
                    <p className="mx-auto max-w-[600px] text-lg inter-text text-black">
                      That task you've been avoiding? The analysis that's been on your list for weeks?
                      Send it now. See what 20 hours back per week feels like.
                    </p>
                    <div className="pt-4">
                      <MagneticButton>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={handleEmailClick}>
                          Email Your First Task Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </MagneticButton>
                      <p className="mt-4 text-sm inter-text text-black">
                        work@zibly.ai • No signup required • Adaptive delivery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
