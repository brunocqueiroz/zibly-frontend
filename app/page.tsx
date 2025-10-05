"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, FileText, BarChart3, PenTool, Mail, Bot, Clock, DollarSign, TrendingDown, TrendingUp, Rocket, Gem, AlertCircle } from 'lucide-react'
import type { Metadata } from 'next'
import CopyEmailButton from "@/components/copy-email-button"

export default function Home() {

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
      {/* Hero Section - Mobile Friendly */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-300/40 to-blue-300/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/30 to-purple-200/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div className="space-y-4 pt-4">
              <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Email Your Work. Get Back Finished Deliverables.
              </h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Try Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <CopyEmailButton size="lg" variant="outline" />
            </div>
            {/* Removed: attachment/workflow/deliverables tagline per request */}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* Email Demo Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="inter-section-heading mb-4" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>How It Works</h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto">This isn't ChatGPT. Delegate like you would to a colleague—just describe what you need. Zibly asks questions when needed, not the other way around.</p>
            </div>
            
            {/* Email Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* User's Email */}
              <div 
                className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={handleEmailClick}
              >
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-gray-600">New Message</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-gray-700">To:</span>
                    <span className="inter-text text-blue-600 font-medium ml-2">work@zibly.ai</span>
                  </div>
                  
                  <div className="border-b border-gray-300 pb-2">
                    <span className="text-xs inter-text text-gray-600">Subject: </span>
                    <span className="text-sm inter-text-medium text-gray-900 font-bold">Fwd: Board deck needed by Friday</span>
                  </div>
                  
                  <div className="text-sm inter-text text-gray-700 leading-relaxed pt-2">
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
                    <span className="text-gray-600 italic">Sarah</span>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">Q4_metrics_dashboard.xlsx (45KB)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">Q3_board_deck.pptx (2.1MB)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div 
                className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={handleEmailClick}
              >
                {/* Mac Window Controls */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <span className="text-xs inter-text text-gray-600">Inbox - work@zibly.ai</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-4 w-4 text-purple-600" />
                  <div className="text-xs inter-text-medium text-purple-800">Zibly AI Response</div>
                  <div className="ml-auto">
                    <span className="text-xs inter-text text-gray-500 bg-green-100 px-2 py-1 rounded-full">✓ Delivered</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="text-xs">
                    <span className="inter-text-medium text-gray-700">From:</span>
                    <span className="inter-text text-purple-600 font-medium ml-2">work@zibly.ai</span>
                  </div>
                  
                  <div className="border-b border-purple-300 pb-2">
                    <span className="text-xs inter-text text-purple-600">Subject: </span>
                    <span className="text-sm inter-text-medium text-purple-900 font-bold">Re: Fwd: Board deck needed by Friday</span>
                  </div>
                  
                  <div className="text-sm inter-text text-gray-800 leading-relaxed pt-2">
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

            {/* What happened in between */}
            <div className="mt-8 text-center">
              <p className="text-sm inter-text text-gray-600 mb-2">What happened in between?</p>
              <p className="text-base inter-text-medium text-gray-900">
                Sarah forwarded the task and went to her next meeting. Zibly did the deep work—just like delegating to a senior analyst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not ChatGPT Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Stop Managing AI. Start Delegating To It.
              </h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto">
                ChatGPT is brilliant—but you manage it like software. Zibly works like a person on your team.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChatGPT Column */}
              <div className="rounded-lg border-2 border-gray-200 p-6 bg-gray-50">
                <h3 className="text-xl inter-heading-normal mb-4 text-gray-700">The ChatGPT Workflow</h3>
                <ul className="space-y-3 inter-text text-gray-600">
                  <li>• Open new tab, paste data</li>
                  <li>• "Can you analyze this?"</li>
                  <li>• "Actually, make it more detailed"</li>
                  <li>• "Now add revenue comparisons"</li>
                  <li>• "Format as a table"</li>
                  <li>• Copy-paste into Excel</li>
                  <li>• Spend an hour formatting</li>
                  <li>• Repeat tomorrow for new task</li>
                </ul>
                <p className="mt-4 text-sm inter-text-medium text-gray-700">Time spent managing AI: 2-3 hours</p>
              </div>

              {/* Zibly Column */}
              <div className="rounded-lg border-2 border-primary p-6 bg-primary-50">
                <h3 className="text-xl inter-heading-normal mb-4 text-primary-900">The Zibly Workflow</h3>
                <ul className="space-y-3 inter-text text-gray-700">
                  <li>• Forward the task (or describe what you need)</li>
                  <li>• Go to your next meeting</li>
                  <li>• Open inbox to find finished deliverable</li>
                  <li className="text-gray-400 line-through">• No prompts to engineer</li>
                  <li className="text-gray-400 line-through">• No hand-holding required</li>
                  <li className="text-gray-400 line-through">• No cleanup needed</li>
                  <li className="text-gray-400 line-through">• No formatting work</li>
                  <li>• Send to boss/client</li>
                </ul>
                <p className="mt-4 text-sm inter-text-medium text-primary-900">Time spent managing Zibly: 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - More Specific */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                The Work You'd Do If You Had Time
              </h2>
              <p className="max-w-[900px] text-lg inter-text">
                Zibly handles analytical work with the depth it deserves—not rushed AI responses
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Financial Modeling & Analysis</h3>
                <p className="inter-text">
                  DCF models, sensitivity tables, comparable company analysis, LBO models, variance reports. Excel files ready for investment committees.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Strategic Research & Reports</h3>
                <p className="inter-text">
                  Market sizing with TAM/SAM/SOM, competitive landscapes, due diligence reports, investment memos. Professional PDFs with executive summaries.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <PenTool className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Data Synthesis & Presentation</h3>
                <p className="inter-text">
                  Process 100+ earnings calls, survey responses, or contracts. Extract patterns, create dashboards, build slide decks. Everything formatted and ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depth Takes Time Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Good Work Takes Time. We Don't Rush It.</h2>
            <p className="text-lg inter-text text-gray-600 max-w-3xl mx-auto">
              Zibly isn't instant. Simple tasks complete in minutes. Deep analysis can take up to an hour.
              This isn't a bug—it's the feature. Your work deserves the same depth a human analyst would give it.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              <div className="p-6 rounded-lg bg-green-50 border border-green-200">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2">Quick Tasks</h3>
                <p className="text-sm inter-text text-gray-600">Simple analysis, data summaries, basic formatting—delivered in minutes</p>
              </div>
              <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2">Standard Work</h3>
                <p className="text-sm inter-text text-gray-600">Full reports, models, decks—the thoughtful work that takes time to do right</p>
              </div>
              <div className="p-6 rounded-lg bg-purple-50 border border-purple-200">
                <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="inter-text-medium text-lg mb-2">Deep Dives</h3>
                <p className="text-sm inter-text text-gray-600">Complex analysis, multi-source research—up to an hour for comprehensive depth</p>
              </div>
            </div>
            <p className="text-sm inter-text text-gray-600 pt-4">
              This is the analyst deep-dive you'd do if you had three uninterrupted hours. In your inbox. While you were in meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Amplify Your Impact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Reclaim Your Time</h2>
          <div className="rounded-lg bg-white border shadow-lg p-8">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl inter-text-medium text-primary">$200-500</div>
                <div className="text-sm inter-text">Your hourly value</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">15-20 hours</div>
                <div className="text-sm inter-text">Weekly analytical tasks</div>
              </div>
              <div>
                <div className="text-2xl inter-text-medium text-primary">$3,000-10,000</div>
                <div className="text-sm inter-text">Weekly value reclaimed</div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-center inter-text">
                Every hour formatting slides or building models is an hour not closing deals, building relationships, or making strategic decisions.
                Zibly handles the deep work so you can focus on what only you can do.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
                <p className="inter-text-medium text-lg mb-2">
                  Stop Spending Evenings on Excel
                </p>
                <p className="inter-text">
                  Forward your analytical work to Zibly at 5pm. Go home. The deliverable will be in your inbox tomorrow morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
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
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600"
                onClick={handleEmailClick}
              >
                Try Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
