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
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
              Turn Your Inbox Into Your Most Powerful Asset. Email Tasks, Receive Complete Deliverables.
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl inter-text mx-auto text-gray-600">
                Send complex tasks to work@zibly.ai. Get back finished Excel models, 
                slide decks, and strategic reports. Not advice—actual deliverables.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Email Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="flex justify-center mt-1">
              <CopyEmailButton size="sm" variant="outline" />
            </div>
            {/* Removed: attachment/workflow/deliverables tagline per request */}
          </div>
        </div>
      </section>

      {/* Removed: Common tasks links per request */}

      {/* Email Demo Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="inter-section-heading mb-4" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>See How It Works</h2>
              <p className="max-w-[900px] text-lg inter-text mx-auto">This isn't ChatGPT. This is deep work, delivered — typically within 2 minutes to 1 hour depending on task complexity.</p>
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
          </div>
        </div>
      </section>

      {/* Features Section - More Specific */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Built for the Work That Matters
              </h2>
              <p className="max-w-[900px] text-lg inter-text">
                Specific deliverables for professionals who need results, not tutorials
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
                <h3 className="text-xl inter-heading-normal">Data Synthesis & Insights</h3>
                <p className="inter-text">
                  Process 100+ earnings calls, survey responses, or contracts. Extract patterns, create dashboards, identify risks and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amplify Your Impact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Amplify Your Impact</h2>
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
                <div className="text-sm inter-text">Weekly value unlocked</div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-center inter-text">
                Every hour on spreadsheet work is an hour not closing deals, building relationships, or making strategic decisions. Zibly handles the analysis so you can focus on work only you can do.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
                <p className="inter-text-medium text-lg mb-2">
                  The math is simple:
                </p>
                <p className="inter-text">
                  20 hours saved × $200-500/hour = <strong className="text-primary">$4,000-10,000 per week</strong>
                  <br />
                  Annual impact: <strong className="text-primary">$200,000-500,000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - More Specific */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>As Simple as Sending an Email</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Email Your Task</h3>
                <p className="inter-text">
                  Forward that data dump from your boss. Attach the 47 files from due diligence. Write "analyze this" or a detailed brief. Zibly figures it out.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">We Do The Work</h3>
                <p className="inter-text">
                  Zibly researches, analyzes, creates charts, writes copy, builds models. Turnaround typically ranges from <strong>2 minutes to 1 hour</strong> depending on task complexity. This isn't instant chat—it's thorough, professional work.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Get Finished Deliverables</h3>
                <p className="inter-text">
                  Complete Excel models. Formatted slide decks. Professional memos. Everything ready to forward to your boss, client, or board. No cleanup needed.
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
                What Would You Accomplish With 20 Hours Back Each Week?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg inter-text">
                Zibly handles the analytical heavy lifting so you can focus on strategy, creativity, and growth. Typical turnaround is 2 minutes to 1 hour depending on complexity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-600"
                onClick={handleEmailClick}
              >
                Send Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
