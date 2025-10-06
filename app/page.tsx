"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles, Star, FileText, BarChart3, PenTool, Mail, Bot, Clock, DollarSign, TrendingDown, TrendingUp, Rocket, Gem, AlertCircle, Upload } from 'lucide-react'
import type { Metadata } from 'next'
import CopyEmailButton from "@/components/copy-email-button"
import Logo from "@/components/logo"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"
import WaveDivider from "@/components/WaveDivider"
import ScrollProgress from "@/components/ScrollProgress"
import AnimatedCounter from "@/components/animations/AnimatedCounter"
import GradientText from "@/components/animations/GradientText"
import TiltCard from "@/components/animations/TiltCard"
import MagneticButton from "@/components/animations/MagneticButton"
import ScrollingText from "@/components/animations/ScrollingText"

export default function Home() {
  const [taskRequest, setTaskRequest] = useState("")
  const [email, setEmail] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = "New Task Request"
    const body = `${taskRequest}\n\nEmail: ${email}${files ? `\n\nFiles attached: ${files.length}` : ''}`
    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleEmailClick = () => {
    const subject = "Fwd: Board deck needed by Friday"
    const body = `Zibly,

Can you create a 10-slide board update from our Q4 data?
Need:
- Revenue analysis with YoY comparisons
- Customer acquisition cost trends
- Market expansion opportunities
- 2025 strategic priorities

I've attached our metrics dashboard and last quarter's deck.

Thanks,
Sarah`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }


  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zibly",
          url: "https://zibly.ai/",
          logo: "https://zibly.ai/logo.png",
          sameAs: [],
          contactPoint: [{
            "@type": "ContactPoint",
            email: "work@zibly.ai",
            contactType: "customer support"
          }]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-white">
        <div className="container px-4 md:px-6 py-20">
          <div className="flex flex-col items-center justify-center space-y-12 text-center max-w-5xl mx-auto">
            {/* Main Heading */}
            <FadeIn>
              <h1 className="inter-section-heading text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                Email Your Work.<br />Get Back <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_auto] animate-gradient" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Finished Deliverables</span>.
              </h1>
            </FadeIn>

            {/* Form - Two rows */}
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="w-full px-4">
                <div className="w-full mx-auto flex flex-col gap-4" style={{ maxWidth: '98vw' }}>
                  {/* Top row: Main search input - full width */}
                  <div className="bg-white rounded-full border-2 border-background shadow-lg hover:shadow-xl transition-shadow p-3 flex items-center gap-4">
                    <Input
                      type="text"
                      placeholder="What do you need help with? E.g., Create a pitch deck..."
                      value={taskRequest}
                      onChange={(e) => setTaskRequest(e.target.value)}
                      required
                      className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xl px-6 h-24 bg-transparent text-black placeholder:text-gray-500"
                    />
                  </div>

                  {/* Bottom row: Email, Attach, Submit */}
                  <div className="flex items-center gap-3">
                    {/* Email input */}
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 border-2 border-gray-300 rounded-full px-6 h-[60px] text-base bg-white text-black placeholder:text-gray-500"
                    />

                    {/* File upload button */}
                    <Input
                      id="files"
                      type="file"
                      multiple
                      onChange={(e) => setFiles(e.target.files)}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full h-[60px] px-6 border-2 border-gray-300 bg-white hover:bg-gray-50 hover:text-background flex-shrink-0 text-background"
                      onClick={() => document.getElementById('files')?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {files && files.length > 0 ? `${files.length} file(s)` : 'Attach files'}
                    </Button>

                    {/* Submit button */}
                    <Button type="submit" size="lg" className="bg-background hover:bg-background/90 rounded-full px-10 h-[60px] text-base flex-shrink-0">
                      Try Free <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scrolling Request Section */}
      <section className="w-full py-4 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-6 text-white">
            <div className="flex-shrink-0" style={{ transform: 'scale(2)' }}>
              <Logo />
            </div>
            <div style={{ width: '800px' }}>
              <ScrollingText
                texts={[
                  "draft me a 15-slide pitch deck from our Q4 metrics",
                  "analyze this Excel file and build a DCF model",
                  "create a competitive analysis report on the fintech market",
                  "build me a three-statement financial model with sensitivity tables",
                  "write an investment memo analyzing this SaaS acquisition",
                  "summarize these 12 customer interviews into key themes",
                  "design a tiered pricing strategy with revenue projections"
                ]}
                className="text-2xl md:text-3xl font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Email Demo Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="inter-section-heading mb-4 text-card-foreground" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>How It Works</h2>
                <p className="max-w-[900px] text-lg inter-text mx-auto text-card-foreground">This isn't ChatGPT. Delegate like you would to a colleague—just describe what you need. Zibly asks questions when needed, not the other way around.</p>
              </div>
            </SlideUp>

            {/* Email Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* User's Email */}
              <AnimatedCard delay={0.1}>
                <div
                  className="rounded-lg border-2 border-border bg-card p-4 cursor-pointer hover:shadow-hover transition-all shadow-soft"
                  onClick={handleEmailClick}
                >
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-card-foreground">New Message</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-4 w-4 text-primary" />
                </div>

                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-card-foreground">To:</span>
                    <span className="inter-text text-card-foreground font-medium ml-2">work@zibly.ai</span>
                  </div>

                  <div className="border-b border-border pb-2">
                    <span className="text-xs inter-text text-card-foreground">Subject: </span>
                    <span className="text-sm inter-text-medium text-card-foreground font-bold">Fwd: Board deck needed by Friday</span>
                  </div>

                  <div className="text-sm inter-text text-card-foreground leading-relaxed pt-2">
                    <strong>Zibly,</strong>
                    <br />
                    <br />
                    Can you create a <strong>10-slide board update</strong> from our Q4 data? 
                    <br />
                    Need:
                    <br />
                    • Revenue analysis with YoY comparisons
                    <br />
                    • Customer acquisition cost trends
                    <br />
                    • Market expansion opportunities
                    <br />
                    • 2025 strategic priorities
                    <br />
                    <br />
                    I've attached our metrics dashboard and last quarter's deck.
                    <br />
                    <br />
                    Thanks,
                    <br />
                    <span className="text-card-foreground italic">Sarah</span>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 p-2 bg-background rounded border-dashed border-2">
                      <FileText className="h-4 w-4 text-foreground" />
                      <span className="text-xs text-foreground">Q4_metrics_dashboard.xlsx (45KB)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background rounded border-dashed border-2">
                      <FileText className="h-4 w-4 text-foreground" />
                      <span className="text-xs text-foreground">Q3_board_deck.pptx (2.1MB)</span>
                    </div>
                  </div>
                </div>
                </div>
              </AnimatedCard>

              {/* AI Response */}
              <AnimatedCard delay={0.2}>
                <div
                  className="rounded-lg border-2 border-primary bg-card p-4 cursor-pointer hover:shadow-hover transition-all shadow-soft"
                  onClick={handleEmailClick}
                >
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-card-foreground">Inbox - work@zibly.ai</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-4 w-4 text-primary" />
                  <div className="text-xs inter-text-medium text-card-foreground">Zibly AI Response</div>
                  <div className="ml-auto">
                    <span className="text-xs inter-text text-primary-foreground bg-primary px-2 py-1 rounded-full">✓ Delivered</span>
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-card-foreground">From:</span>
                    <span className="inter-text text-card-foreground font-medium ml-2">work@zibly.ai</span>
                  </div>

                  <div className="border-b border-border pb-2">
                    <span className="text-xs inter-text text-card-foreground">Subject: </span>
                    <span className="text-sm inter-text-medium text-card-foreground font-bold">Re: Fwd: Board deck needed by Friday</span>
                  </div>

                  <div className="text-sm inter-text text-card-foreground leading-relaxed pt-2">
                    <strong>Hi Sarah!</strong>
                    <br />
                    <br />
                    I've completed your <strong>Q4 board presentation</strong>. Here's what I've prepared:
                    <br />
                    <br />
                    <strong>📊 Q4_Board_Presentation.pptx</strong> (10 slides)
                    <br />
                    <strong>📈 Supporting_Analysis.xlsx</strong>
                    <br />
                    <strong>📋 Executive_Summary.pdf</strong>
                    <br />
                    <br />
                    <strong>Key insights from the analysis:</strong>
                    <br />
                    • Revenue up 47% YoY ($12.3M → $18.1M)
                    <br />
                    • CAC decreased 23% to $847/customer
                    <br />
                    • Identified 3 expansion markets worth $45M TAM
                    <br />
                    • 2025 priorities: Enterprise sales, API platform, EU expansion
                    <br />
                    <br />
                    The deck follows your standard template with updated branding. Let me know if you need any revisions!
                    <br />
                    <br />
                    <strong>Best regards,</strong>
                    <br />
                    Zibly AI Assistant
                  </div>
                </div>
                </div>
              </AnimatedCard>
            </div>

            {/* What happened in between */}
            <FadeIn delay={0.4}>
              <div className="mt-8 text-center">
              <p className="text-sm inter-text text-card-foreground mb-2">What happened in between?</p>
              <p className="text-base inter-text-medium text-card-foreground">
                Sarah forwarded the task and went to her next meeting. Zibly did the deep work—just like delegating to a senior analyst.
              </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Why Not ChatGPT Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="inter-section-heading text-white" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                  Stop Managing AI. Start <GradientText>Delegating</GradientText> To It.
                </h2>
                <p className="max-w-[900px] text-lg inter-text mx-auto text-white">
                  ChatGPT is brilliant—but you manage it like software. Zibly works like a person on your team.
                </p>
              </div>
            </div>
          </SlideUp>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChatGPT Column */}
              <AnimatedCard delay={0.1}>
                <TiltCard className="rounded-lg p-6 bg-white shadow-elevated hover:shadow-hover transition-shadow">
                  <h3 className="text-xl inter-heading-normal mb-4 text-card-foreground">The ChatGPT Workflow</h3>
                  <ul className="space-y-3 inter-text text-card-foreground">
                    <li>• Open new tab, paste data</li>
                    <li>• "Can you analyze this?"</li>
                    <li>• "Actually, make it more detailed"</li>
                    <li>• "Now add revenue comparisons"</li>
                    <li>• "Format as a table"</li>
                    <li>• Copy-paste into Excel</li>
                    <li>• Spend an hour formatting</li>
                    <li>• Repeat tomorrow for new task</li>
                  </ul>
                  <p className="mt-4 text-sm inter-text-medium text-primary">Time spent managing AI: 2-3 hours</p>
                </TiltCard>
              </AnimatedCard>

              {/* Zibly Column */}
              <AnimatedCard delay={0.2}>
                <TiltCard className="rounded-lg p-6 bg-white shadow-elevated hover:shadow-hover transition-shadow">
                  <h3 className="text-xl inter-heading-normal mb-4 text-card-foreground">The Zibly Workflow</h3>
                  <ul className="space-y-3 inter-text text-card-foreground">
                    <li>• Forward the task (or describe what you need)</li>
                    <li>• Go to your next meeting</li>
                    <li>• Open inbox to find finished deliverable</li>
                    <li className="text-card-foreground line-through">• No prompts to engineer</li>
                    <li className="text-card-foreground line-through">• No hand-holding required</li>
                    <li className="text-card-foreground line-through">• No cleanup needed</li>
                    <li className="text-card-foreground line-through">• No formatting work</li>
                    <li>• Send to boss/client</li>
                  </ul>
                  <p className="mt-4 text-sm inter-text-medium text-primary">Time spent managing Zibly: 60 seconds</p>
                </TiltCard>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Features Section - More Specific */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="inter-section-heading text-card-foreground" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                  The Work You'd Do If You Had Time
                </h2>
                <p className="max-w-[900px] text-lg inter-text text-card-foreground">
                  Zibly handles analytical work with the depth it deserves—not rushed AI responses
                </p>
              </div>
            </div>
          </SlideUp>
          <StaggerContainer className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-card-foreground">Financial Modeling & Analysis</h3>
                <p className="inter-text text-card-foreground">
                  DCF models, sensitivity tables, comparable company analysis, LBO models, variance reports. Excel files ready for investment committees.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-card-foreground">Strategic Research & Reports</h3>
                <p className="inter-text text-card-foreground">
                  Market sizing with TAM/SAM/SOM, competitive landscapes, due diligence reports, investment memos. Professional PDFs with executive summaries.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <PenTool className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-card-foreground">Data Synthesis & Presentation</h3>
                <p className="inter-text text-card-foreground">
                  Process 100+ earnings calls, survey responses, or contracts. Extract patterns, create dashboards, build slide decks. Everything formatted and ready.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="hsl(210 40% 16%)" flip={true} />

      {/* Depth Takes Time Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Good Work Takes Time. We Don't Rush It.</h2>
            <p className="text-lg inter-text max-w-3xl mx-auto">
              Zibly isn't instant. Simple tasks complete in minutes. Deep analysis can take up to an hour.
              This isn't a bug—it's the feature. Your work deserves the same depth a human analyst would give it.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2 text-card-foreground">Quick Tasks</h3>
                <p className="text-sm inter-text text-card-foreground">Simple analysis, data summaries, basic formatting—delivered in minutes</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2 text-card-foreground">Standard Work</h3>
                <p className="text-sm inter-text text-card-foreground">Full reports, models, decks—the thoughtful work that takes time to do right</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2 text-card-foreground">Deep Dives</h3>
                <p className="text-sm inter-text text-card-foreground">Complex analysis, multi-source research—up to an hour for comprehensive depth</p>
              </div>
            </div>
            <p className="text-sm inter-text pt-4">
              This is the analyst deep-dive you'd do if you had three uninterrupted hours. In your inbox. While you were in meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Amplify Your Impact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center text-card-foreground" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Reclaim Your <GradientText>Time</GradientText></h2>
          <div className="rounded-lg bg-card border shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl inter-text-medium text-primary">
                  $<AnimatedCounter value={200} />-<AnimatedCounter value={500} />
                </div>
                <div className="text-sm inter-text text-card-foreground">Your hourly value</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">
                  <AnimatedCounter value={15} />-<AnimatedCounter value={20} /> hours
                </div>
                <div className="text-sm inter-text text-card-foreground">Weekly analytical tasks</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">
                  $<AnimatedCounter value={3} />k-<AnimatedCounter value={10} />k
                </div>
                <div className="text-sm inter-text text-card-foreground">Weekly value reclaimed</div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-center inter-text text-card-foreground">
                Every hour formatting slides or building models is an hour not closing deals, building relationships, or making strategic decisions.
                Zibly handles the deep work so you can focus on what only you can do.
              </p>
              <div className="bg-accent rounded-lg p-6 text-center">
                <p className="inter-text-medium text-lg mb-2 text-accent-foreground">
                  Stop Spending Evenings on Excel
                </p>
                <p className="inter-text text-accent-foreground">
                  Forward your analytical work to Zibly at 5pm. Go home. The deliverable will be in your inbox tomorrow morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                That Task You've Been Avoiding?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg inter-text">
                The board deck. The financial model. The competitive analysis. Forward it to work@zibly.ai right now.
                Your first task is free—see what 20 hours back per week feels like.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:shadow-hover transition-all"
                  onClick={handleEmailClick}
                >
                  Try Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
