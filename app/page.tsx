"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import TiltCard from "@/components/animations/TiltCard"
import MagneticButton from "@/components/animations/MagneticButton"
import ScrollingText from "@/components/animations/ScrollingText"

const PLACEHOLDERS = [
  "Create a pitch deck from our Q4 metrics",
  "Build a DCF model for this acquisition",
  "Analyze these customer interviews and find key themes",
  "Draft an investment memo for this SaaS company",
  "Create a competitive analysis of the fintech market",
  "Build a three-statement financial model with sensitivity tables"
]

export default function Home() {
  const [taskRequest, setTaskRequest] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  // Cycle through placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Prepare attachments array
      const attachments = files && files.length > 0
        ? Array.from(files).map(file => ({ filename: file.name }))
        : []

      // Make API request
      const response = await fetch("https://bgbd0pzte6.execute-api.us-east-1.amazonaws.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          from_email: email,
          subject: subject || "Request for analysis",
          body: taskRequest,
          attachments: attachments,
        }),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        // Success
        setShowSuccessModal(true)

        // Reset form
        setTaskRequest("")
        setEmail("")
        setSubject("")
        setFiles(null)
        // Reset file input
        const fileInput = document.getElementById('files') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        // API returned error
        setErrorMessage("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
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
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-12 py-20">
              {/* Main Heading */}
              <FadeIn>
                <h1 className="inter-section-heading text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-12 max-w-5xl mx-auto" style={{ fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                  Email Your Work.<br />Get Back <span className="text-primary">Finished Deliverables</span>.
                </h1>
              </FadeIn>

              {/* Email-style Form */}
              <FadeIn delay={0.2}>
                <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto mt-18">
                <div className="bg-white rounded-lg border-2 border-black shadow-lg hover:shadow-2xl transition-all overflow-hidden ring-4 ring-primary/10 hover:ring-primary/20">
                  {/* Header */}
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-center">
                    <span className="text-base font-semibold text-black">Send Your Task</span>
                  </div>

                  {/* Mail Icon */}
                  <div className="px-6 py-3 border-b border-gray-200">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>

                  {/* To Field */}
                  <div className="border-b border-gray-200 px-6 py-3 flex items-center">
                    <label className="text-sm font-semibold text-gray-700 w-20">To:</label>
                    <div className="flex-1 text-sm md:text-base text-primary font-bold">work@zibly.ai</div>
                  </div>

                  {/* From Field */}
                  <div className="border-b border-gray-200 px-6 py-3 flex items-center group hover:bg-gray-50/50 transition-colors">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 w-20">From:</label>
                    <div className="flex-1 relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => document.getElementById('email-cursor')?.classList.add('hidden')}
                        onBlur={() => !email && document.getElementById('email-cursor')?.classList.remove('hidden')}
                        required
                        className="flex-1 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base bg-transparent text-black placeholder:text-gray-400 px-0 cursor-text"
                      />
                      {/* Blinking cursor when empty and not focused */}
                      {!email && (
                        <span
                          id="email-cursor"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-primary pointer-events-none"
                          style={{
                            animation: 'blink 1.2s step-end infinite'
                          }}
                        />
                      )}
                      <style jsx>{`
                        @keyframes blink {
                          0%, 49% { opacity: 1; }
                          50%, 100% { opacity: 0; }
                        }
                      `}</style>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="border-b border-gray-200 px-6 py-3 flex items-center group hover:bg-gray-50/50 transition-colors">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700 w-20">Subject:</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Request for analysis"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base bg-transparent text-black placeholder:text-gray-400 px-0 cursor-text"
                    />
                  </div>

                  {/* Message Body */}
                  <div className="px-6 py-4 hover:bg-gray-50/50 transition-colors cursor-text relative">
                    {!taskRequest && (
                      <div className="absolute left-6 top-4 pointer-events-none text-base md:text-lg text-gray-400">
                        <div className="transition-opacity duration-500">
                          {PLACEHOLDERS[placeholderIndex]}
                        </div>
                      </div>
                    )}
                    <Textarea
                      value={taskRequest}
                      onChange={(e) => setTaskRequest(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base md:text-lg px-0 min-h-[150px] md:min-h-[180px] bg-transparent text-black placeholder:text-transparent resize-none w-full cursor-text"
                    />
                  </div>

                  {/* Email Footer with Actions */}
                  <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
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
                        size="sm"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto border-gray-300 bg-white hover:bg-gray-100 hover:scale-[1.02] text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => document.getElementById('files')?.click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        {files && files.length > 0 ? `${files.length} file(s) attached` : 'Attach files'}
                      </Button>
                    </div>

                    {/* Send button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-xl text-white px-8 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Email"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Error message */}
                  {errorMessage && (
                    <div className="px-6 py-3 bg-red-50 border-t border-red-200">
                      <p className="text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </FadeIn>
        </div>
      </section>

      {/* Scrolling Request Section */}
      <section className="w-full py-6 md:py-4 bg-white border-y border-black/10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-3 md:gap-6 text-black">
            <div className="flex-shrink-0 scale-75 sm:scale-100 md:scale-150">
              <Logo />
            </div>
            <div className="flex-1 min-w-0 max-w-full">
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
                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium"
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
              <div className="text-center mb-12">
                <h2 className="inter-section-heading mb-4 text-card-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>Delegate Work Over Email — Zibly Does the Rest.</h2>
                <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-card-foreground">Zibly isn't a chatbot — it's an AI coworker. Instead of typing prompts, just forward your email. Zibly figures out what's needed, asks questions when unclear, and sends back finished work.</p>
              </div>
            </SlideUp>

            {/* Email Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Arrow between panels */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                <div className="bg-primary text-white rounded-full p-3 shadow-lg">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>

              {/* User's Email */}
              <AnimatedCard delay={0.1}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Step 1</span>
                    <span className="text-sm inter-text-medium text-card-foreground">Forward your request to work@zibly.ai</span>
                  </div>
                  <div
                    className="rounded-lg border-2 border-border bg-card p-4 cursor-pointer hover:shadow-hover transition-all shadow-soft opacity-90 hover:opacity-100"
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
                  <Mail className="h-4 w-4 text-black" />
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
                    Please create a <strong>10-slide Q4 board update</strong> using the attached data. Include:
                    <br />
                    <br />
                    • YoY revenue analysis
                    <br />
                    • CAC trends
                    <br />
                    • Market opportunities
                    <br />
                    • 2025 priorities
                    <br />
                    <br />
                    Thanks,
                    <br />
                    <span className="text-card-foreground italic">Sarah</span>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2 border-black">
                      <FileText className="h-4 w-4 text-black" />
                      <span className="text-xs text-black">Q4_metrics_dashboard.xlsx (45KB)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2 border-black">
                      <FileText className="h-4 w-4 text-black" />
                      <span className="text-xs text-black">Q3_board_deck.pptx (2.1MB)</span>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </AnimatedCard>

              {/* AI Response */}
              <AnimatedCard delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Step 2</span>
                    <span className="text-sm inter-text-medium text-card-foreground">Zibly delivers the finished work</span>
                  </div>
                  <div
                    className="rounded-lg border-2 border-primary bg-card p-4 cursor-pointer hover:shadow-xl transition-all shadow-lg ring-2 ring-primary/20"
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
                  <Bot className="h-4 w-4 text-black" />
                  <div className="text-xs inter-text-medium text-card-foreground">Zibly AI Response</div>
                  <div className="ml-auto">
                    <span className="text-xs inter-text text-black bg-white border border-black px-2 py-1 rounded-full">✓ Delivered</span>
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
                </div>
              </AnimatedCard>
            </div>

            {/* What happened in between */}
            <FadeIn delay={0.4}>
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <div className="bg-white border-2 border-border rounded-lg p-8 shadow-soft">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl inter-text-medium text-card-foreground">What happens in between?</h3>
                  </div>
                  <p className="text-base md:text-lg inter-text text-card-foreground leading-relaxed">
                    Zibly reads your email, analyzes attachments, and delivers complete outputs — presentations, spreadsheets, or reports — just like a senior analyst would. Sarah forwarded the task and went to her next meeting while Zibly did the deep work.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* CTA Below Example */}
            <FadeIn delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-lg inter-text-medium text-card-foreground mb-4">
                  Try it now — forward any task to <span className="text-primary font-bold">work@zibly.ai</span>
                </p>
                <p className="text-base inter-text text-card-foreground mb-6">
                  Zibly will reply in minutes with your first draft.
                </p>
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 hover:shadow-xl transition-all text-white px-8"
                    onClick={handleEmailClick}
                  >
                    Send Your First Task <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Why Not ChatGPT Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  Stop Babysitting AI. Start <span className="text-primary">Delegating</span> Work.
                </h2>
                <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                  ChatGPT is brilliant—but it needs managing. Zibly works like a person on your team.
                </p>
              </div>
            </div>
          </SlideUp>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* VS divider */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-4 border-white">
                  VS
                </div>
              </div>

              {/* ChatGPT Column */}
              <AnimatedCard delay={0.1}>
                <TiltCard className="rounded-lg p-6 bg-gray-50 shadow-elevated hover:shadow-hover transition-shadow border-2 border-gray-200">
                  <div className="mb-4">
                    <p className="text-xs inter-text-medium text-gray-500 uppercase tracking-wide mb-2">The Old Way</p>
                    <h3 className="text-xl inter-heading-normal text-card-foreground">The ChatGPT Loop</h3>
                    <p className="text-sm inter-text text-gray-600 mt-1">(You're Still Doing the Work)</p>
                  </div>
                  <ul className="space-y-3 inter-text text-card-foreground">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Open new tab, paste data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>"Can you analyze this?" (again)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Keep tweaking the prompt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Copy, paste, format, repeat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>Lose another hour managing your AI</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-300">
                    <p className="text-sm inter-text text-gray-600">Time spent managing AI:</p>
                    <p className="text-2xl inter-text-medium text-red-600 font-bold">2-3 hours</p>
                  </div>
                </TiltCard>
              </AnimatedCard>

              {/* Zibly Column */}
              <AnimatedCard delay={0.2}>
                <TiltCard className="rounded-lg p-6 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary">
                  <div className="mb-4">
                    <p className="text-xs inter-text-medium text-primary uppercase tracking-wide mb-2">The Zibly Way</p>
                    <h3 className="text-xl inter-heading-normal text-card-foreground">Delegate & Move On</h3>
                    <p className="text-sm inter-text text-gray-700 mt-1">(You Don't Lift a Finger)</p>
                  </div>
                  <ul className="space-y-3 inter-text text-card-foreground">
                    <li className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Forward the email or describe the task</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Go to your next meeting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Return to find the finished deliverable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Send it to your boss or client</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-primary/30">
                    <p className="text-sm inter-text text-gray-700">Time spent managing Zibly:</p>
                    <div className="flex items-center gap-3 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                      <p className="text-3xl inter-text-medium text-primary font-bold">60 seconds</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedCard>
            </div>
          </div>

          {/* CTA Below Comparison */}
          <FadeIn delay={0.3}>
            <div className="text-center max-w-2xl mx-auto mt-12">
              <div className="bg-card border-2 border-border rounded-lg p-8 shadow-soft">
                <p className="text-lg md:text-xl inter-text-medium text-card-foreground mb-4">
                  Zibly doesn't wait for prompts. It gets the job done.
                </p>
                <p className="text-base inter-text text-card-foreground mb-6">
                  Ready to delegate your next task? Forward any request to <span className="text-primary font-bold">work@zibly.ai</span> and see what happens.
                </p>
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 hover:shadow-xl transition-all text-white px-8"
                    onClick={handleEmailClick}
                  >
                    Try Delegating Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
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
                <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  The Work You'd Do If You Had Time
                </h2>
                <p className="max-w-[900px] text-base md:text-lg inter-text text-black">
                  Zibly handles analytical work with the depth it deserves—not rushed AI responses
                </p>
              </div>
            </div>
          </SlideUp>
          <StaggerContainer className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-black">Financial Modeling & Analysis</h3>
                <p className="inter-text text-black">
                  DCF models, sensitivity tables, comparable company analysis, LBO models, variance reports. Excel files ready for investment committees.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <FileText className="h-6 w-6 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-black">Strategic Research & Reports</h3>
                <p className="inter-text text-black">
                  Market sizing with TAM/SAM/SOM, competitive landscapes, due diligence reports, investment memos. Professional PDFs with executive summaries.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border-2 border-black">
                <PenTool className="h-6 w-6 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal text-black">Data Synthesis & Presentation</h3>
                <p className="inter-text text-black">
                  Process 100+ earnings calls, survey responses, or contracts. Extract patterns, create dashboards, build slide decks. Everything formatted and ready.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Depth Takes Time Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>Good Work Takes Time. We Don't Rush It.</h2>
            <p className="text-base md:text-lg inter-text text-black max-w-3xl mx-auto">
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
            <p className="text-sm inter-text text-black pt-4">
              This is the analyst deep-dive you'd do if you had three uninterrupted hours. In your inbox. While you were in meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Amplify Your Impact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center text-card-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>Reclaim Your <span className="text-primary">Time</span></h2>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                That Task You've Been Avoiding?
              </h2>
              <p className="mx-auto max-w-[700px] text-base md:text-lg inter-text text-black">
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

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white border-2 border-black">
          <DialogHeader>
            <DialogTitle className="text-2xl text-black inter-heading-normal">Thank you for trying Zibly!</DialogTitle>
            <DialogDescription className="text-black inter-text pt-4">
              Check your email for Zibly's response to your task. You can ask for more tasks whenever by emailing work@zibly.ai.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-black hover:bg-black/90 text-white"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
