"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, BarChart3, PenTool, Search, Calculator, Database, Clock, Shield, Target, Mail, CheckCircle, Sparkles, TrendingUp, Brain, FileSpreadsheet, Lightbulb, Users, Zap, Cpu, Network, Bot } from 'lucide-react'
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


export default function DeepWorkPage() {
  const handleEmailClick = () => {
    const subject = "Complex analysis needed"
    const body = `Hi Zibly,

I need deep analysis on [describe your complex task].

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
                <Badge variant="secondary" className="mb-4">
                  <Cpu className="h-3 w-3 mr-1" />
                  Zibly's Agent Engine
                </Badge>
                <h1 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  Deep Work: <span className="text-primary">Days of Analysis</span> in Under an Hour
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="max-w-[800px] text-base md:text-lg lg:text-xl inter-text mx-auto text-black">
                  When your task needs more than a quick response, Zibly's Deep Work engine activates.
                  Our agent system works autonomously for up to an hour, orchestrating multiple AI models
                  to deliver work that would take a human analyst days or weeks to complete.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto px-4">
                <MagneticButton className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Try Deep Work Now <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
                <CopyEmailButton size="sm" variant="outline" className="w-full sm:w-auto" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick vs Deep Work Comparison */}
      <section className="w-full py-8 bg-white border-y border-black/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 text-center">
            <div>
              <Badge variant="secondary" className="mb-2">Quick Response</Badge>
              <p className="text-2xl font-bold text-black inter-text-medium mt-2">2-10 minutes</p>
              <p className="text-sm text-black inter-text">Tasks that would take you hours to complete</p>
            </div>
            <div>
              <Badge variant="default" className="mb-2 bg-primary">Deep Work Mode</Badge>
              <p className="text-2xl font-bold text-primary inter-text-medium mt-2">Up to 1 hour</p>
              <p className="text-sm text-black inter-text">Tasks that would take you days or weeks to complete</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Deep Work Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                What Makes <span className="text-primary">Deep Work</span> Different
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Deep Work isn't just another LLM response. It's an orchestrated agent system that thinks,
                researches, analyzes, and iterates — just like a senior analyst would over several days.
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid gap-8 lg:grid-cols-3">
              {/* Multi-Model Intelligence */}
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Network className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Multi-Model Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black mb-4">
                      Deep Work uses the highest-end models from OpenAI, Anthropic, Gemini, and Grok,
                      selecting each model for what it does best. We're always on the cutting edge.
                    </p>
                    <ul className="space-y-2 text-sm inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Latest models from leading AI providers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automatic model selection for each task</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Specialized models for code & data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Custom models for industry-specific tasks</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              {/* Autonomous Agent Flow */}
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Bot className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Autonomous Agent Flow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black mb-4">
                      Like a skilled colleague working independently, Deep Work breaks down complex
                      tasks, creates a plan, and executes it step-by-step.
                    </p>
                    <ul className="space-y-2 text-sm inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Plans the approach autonomously</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Iterates and refines outputs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Self-checks for quality & accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Handles multi-step workflows</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              {/* Professional-Grade Output */}
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Sparkles className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Professional-Grade Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black mb-4">
                      Deep Work produces deliverables that are vastly superior to standard AI responses,
                      matching the quality of work from top-tier consultants.
                    </p>
                    <ul className="space-y-2 text-sm inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Structured, logical narratives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Properly formatted deliverables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive appendices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Executive-ready presentations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Deep Work Examples */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Deep Work in <span className="text-primary">Action</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Real examples of complex tasks that trigger Deep Work mode — and the comprehensive deliverables it produces
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl space-y-8">
            {/* Example 1: Market Entry Strategy */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <AnimatedCard delay={0.1}>
                <Card className="border-border bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Mail className="h-4 w-4" />
                    <span className="inter-text-medium">You send (triggers Deep Work):</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Market Entry Analysis Request</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm inter-text text-black">
                    "We're considering entering the Southeast Asian market with our SaaS product.
                    Need comprehensive analysis including regulatory landscape, competitive positioning,
                    go-to-market strategy, and 3-year financial projections."
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-black">
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Current_financials.xlsx</span>
                  </div>
                  <Badge variant="secondary" className="mt-3">
                    <Clock className="h-3 w-3 mr-1" />
                    Deep Work: ~45 minutes
                  </Badge>
                </CardContent>
              </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="border-primary shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Brain className="h-4 w-4" />
                    <span className="inter-text-medium">Deep Work delivers:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Complete Market Entry Package</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm inter-text text-black">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>60-page market analysis report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Regulatory compliance matrix (5 countries)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Competitive landscape & positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>GTM strategy with channel analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>3-year P&L with sensitivity analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>15-slide executive presentation</span>
                    </li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-black">
                      <FileText className="h-3 w-3" />
                      <span>SEA_Market_Entry.pdf</span>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <FileSpreadsheet className="h-3 w-3" />
                      <span>Financial_Model.xlsx</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>
            </div>

            {/* Example 2: Competitive Intelligence */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <AnimatedCard delay={0.3}>
                <Card className="border-border bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Mail className="h-4 w-4" />
                    <span className="inter-text-medium">You send (triggers Deep Work):</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Competitive Intelligence Request</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm inter-text text-black">
                    "Need comprehensive competitive analysis on our top 5 competitors.
                    Focus on product capabilities, pricing strategy, market positioning, and recent strategic moves.
                    Include recommendations for competitive response."
                  </p>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-black">
                      <FileText className="h-4 w-4" />
                      <span>Our_product_specs.pdf</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-3">
                    <Clock className="h-3 w-3 mr-1" />
                    Deep Work: ~50 minutes
                  </Badge>
                </CardContent>
              </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <Card className="border-primary shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-black mb-2">
                    <Brain className="h-4 w-4" />
                    <span className="inter-text-medium">Deep Work delivers:</span>
                  </div>
                  <CardTitle className="text-lg inter-heading-normal text-black">Complete Competitive Package</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm inter-text text-black">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Competitor capability matrix (5 companies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Feature-by-feature comparison analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Pricing & packaging strategy teardown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Win/loss analysis from public data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Strategic recommendations (12 initiatives)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Competitive battle cards for sales</span>
                    </li>
                  </ul>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-black">
                      <FileText className="h-3 w-3" />
                      <span>Competitive_Analysis.pdf</span>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <BarChart3 className="h-3 w-3" />
                      <span>Feature_Matrix.xlsx</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* How Deep Work Works */}
      <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                How Deep Work <span className="text-primary">Delivers Results</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Your complex request transforms into comprehensive deliverables
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Step 1: Understanding */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <span className="text-xl font-bold text-black">1</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl inter-heading-normal mb-2 text-black">Understanding Your Request</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          Zibly analyzes the complexity and scope of your task. Complex requests automatically
                          trigger Deep Work mode for comprehensive analysis.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm inter-text text-black">
                            <strong>Intelligent routing:</strong> Simple tasks get quick responses, complex work gets deep analysis
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 2: Processing */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <span className="text-xl font-bold text-black">2</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl inter-heading-normal mb-2 text-black">Deep Processing</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          Our agent system works autonomously, leveraging the best AI models
                          from leading providers to tackle different aspects of your request.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm inter-text text-black">
                            <strong>Working in parallel:</strong> Research, analysis, and creation happening simultaneously
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 3: Quality */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <span className="text-xl font-bold text-black">3</span>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl inter-heading-normal mb-2 text-black">Quality Assurance</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          Deep Work doesn't just generate content — it refines and polishes
                          until the output meets professional standards.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm inter-text text-black">
                            <strong>Professional polish:</strong> Consistency, accuracy, and formatting all checked
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 4: Delivery */}
              <div className="relative">
                <div className="relative flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black z-10">
                    <span className="text-xl font-bold text-black">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl inter-heading-normal mb-2 text-black">Delivery to Your Inbox</h3>
                    <Card className="bg-white border-2 border-black">
                      <CardContent className="pt-6">
                        <p className="text-sm inter-text text-black mb-3">
                          After up to an hour of deep work, you receive comprehensive,
                          ready-to-use deliverables directly in your email.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <p className="text-sm inter-text text-black">
                            <strong>Ready to use:</strong> Professional documents, models, and presentations in the formats you need
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

      {/* Security Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Enterprise-Grade <span className="text-primary">Security</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Deep Work processes your most sensitive data with bank-grade security
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-black">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="inter-heading-normal">SOC 2 Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm inter-text text-black">
                    Fully audited security controls. Your data is encrypted at rest and in transit,
                    with zero retention after processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="inter-heading-normal">Isolated Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm inter-text text-black">
                    Each Deep Work session runs in an isolated environment. Your data never
                    mingles with other users' information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="inter-heading-normal">No Training on Your Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm inter-text text-black">
                    Your confidential information is never used to train AI models. What you
                    share with Zibly stays with you alone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <Badge variant="secondary" className="mb-4">
                      <Sparkles className="h-3 w-3 mr-1" />
                      First Deep Work task free
                    </Badge>
                    <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                      Ready for <span className="text-primary">Deep Work</span>?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-base md:text-lg inter-text text-black">
                      That complex analysis you've been putting off? The comprehensive research that would take your team weeks?
                      Send it to Zibly and experience what an hour of Deep Work can accomplish.
                    </p>
                    <div className="pt-4">
                      <MagneticButton>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={handleEmailClick}>
                          Activate Deep Work Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </MagneticButton>
                      <p className="mt-4 text-sm inter-text text-black">
                        work@zibly.ai • Complex tasks welcome • Up to 1 hour processing
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