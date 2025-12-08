"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, FileText, Bot, Sparkles, AlertCircle, Rocket, Clock } from "lucide-react"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import TiltCard from "@/components/animations/TiltCard"
import MagneticButton from "@/components/animations/MagneticButton"

export default function WhyZiblyPage() {
  const handleEmailClick = () => {
    const subject = "Board deck prep - need by Friday"
    const body = `Hi Zibly,

Can you handle the board deck? I'm forwarding our Q4 data.

Please include:
- Revenue analysis with YoY comparisons
- Customer acquisition cost trends
- Market expansion opportunities
- 2025 strategic priorities

Make it look like our usual format - last quarter's deck attached for reference.

Thanks,
Sarah`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-white">
      <article className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="space-y-8">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                  Why Zibly
                </h1>

                {/* The Problem */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primary">The problem</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Large-language models are incredible — but they live in places we don't actually work.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You have to open a new tab, type a prompt, babysit its replies, and copy-paste the output back into email, PowerPoint, or Excel.
                  </p>
                  <p className="text-lg text-gray-900 font-medium leading-relaxed">
                    That's not productivity; that's project management.
                  </p>
                </div>

                {/* The Insight */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primary">The insight</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The best AI experience should feel like working with a colleague.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You don't micromanage your team through every step — you delegate.
                  </p>
                  <p className="text-lg text-gray-900 font-medium leading-relaxed">
                    And the universal language of delegation is email.
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primary">The solution</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Zibly makes AI live where real work happens: the inbox.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You forward a task — "Build a five-slide summary of this report," "Fill in this immigration form," or "Update this KPI deck."
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Zibly reads your email, the attachments, and the context, then sends back finished deliverables in hours: PPTX, XLSX, DOCX, or PDFs — perfectly formatted, ready to use.
                  </p>
                </div>

                {/* Why It Matters */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primary">Why it matters</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Zibly doesn't want to be another workspace.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    It wants to disappear into the one you already have.
                  </p>
                  <p className="text-lg text-gray-900 font-semibold leading-relaxed">
                    No dashboards, no prompts, no friction — just the speed of AI combined with the trust and simplicity of email.
                  </p>
                </div>

                {/* Bridge Statement */}
                <div className="py-6 my-6 border-t border-b border-gray-200">
                  <p className="text-xl text-gray-900 font-medium leading-relaxed">
                    Zibly isn't changing how you think. It's changing where you work — back to the tools you already know.
                  </p>
                </div>

                {/* How It Works */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">How it works</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-black">Email Zibly at work@zibly.ai</p>
                        <p className="text-base text-gray-700">With your brief or files.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-black">Your AI colleague gets to work</p>
                        <p className="text-base text-gray-700">Analyzing, formatting, completing — independently.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-black">You receive the deliverable</p>
                        <p className="text-base text-gray-700">In your inbox, ready to send or present.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold text-primary">Trust built-in</h2>
                  <p className="text-base text-gray-700">
                    Security and privacy aren't features — they're foundations.
                  </p>
                  <div className="grid gap-6 md:grid-cols-3 pt-2">
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-black">Files encrypted</p>
                      <p className="text-sm text-gray-600">In transit and at rest</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-black">Auto-deletion</p>
                      <p className="text-sm text-gray-600">After delivery</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-black">Never used for training</p>
                      <p className="text-sm text-gray-600">Your data stays yours</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </article>

      {/* Email Demo Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <SlideUp>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-black mb-4">See It in Action</h2>
                <p className="max-w-[900px] text-base md:text-lg mx-auto text-gray-700">Email Zibly like a trusted colleague. Get professional work back.</p>
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
                    <span className="text-sm font-medium text-gray-700">Forward your request to work@zibly.ai</span>
                  </div>
                  <div
                    className="rounded-lg border-2 border-gray-200 bg-white p-4 cursor-pointer hover:shadow-lg transition-all shadow-sm opacity-90 hover:opacity-100"
                    onClick={handleEmailClick}
                  >
                    {/* Mac Window Controls */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <div className="flex-1 text-center">
                        <span className="text-xs text-gray-500">New Message</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="h-4 w-4 text-black" />
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="text-xs">
                        <span className="font-medium text-gray-700">To:</span>
                        <span className="text-gray-700 font-medium ml-2">work@zibly.ai</span>
                      </div>

                      <div className="border-b border-gray-200 pb-2">
                        <span className="text-xs text-gray-500">Subject: </span>
                        <span className="text-sm font-bold text-gray-900">Fwd: Board deck needed by Friday</span>
                      </div>

                      <div className="text-sm text-gray-700 leading-relaxed pt-2">
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
                        <span className="italic">Sarah</span>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2 border-gray-300">
                          <FileText className="h-4 w-4 text-gray-600" />
                          <span className="text-xs text-gray-600">Q4_metrics_dashboard.xlsx (45KB)</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-white rounded border-dashed border-2 border-gray-300">
                          <FileText className="h-4 w-4 text-gray-600" />
                          <span className="text-xs text-gray-600">Q3_board_deck.pptx (2.1MB)</span>
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
                    <span className="text-sm font-medium text-gray-700">Zibly delivers the finished work</span>
                  </div>
                  <div
                    className="rounded-lg border-2 border-primary bg-white p-4 cursor-pointer hover:shadow-xl transition-all shadow-lg ring-2 ring-primary/20"
                    onClick={handleEmailClick}
                  >
                    {/* Mac Window Controls */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <div className="flex-1 text-center">
                        <span className="text-xs text-gray-500">Inbox - work@zibly.ai</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Bot className="h-4 w-4 text-black" />
                      <div className="text-xs font-medium text-gray-700">Zibly AI Response</div>
                      <div className="ml-auto">
                        <span className="text-xs text-black bg-gray-100 border border-gray-300 px-2 py-1 rounded-full">✓ Delivered</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="text-xs">
                        <span className="font-medium text-gray-700">From:</span>
                        <span className="text-gray-700 font-medium ml-2">work@zibly.ai</span>
                      </div>

                      <div className="border-b border-gray-200 pb-2">
                        <span className="text-xs text-gray-500">Subject: </span>
                        <span className="text-sm font-bold text-gray-900">Re: Fwd: Board deck needed by Friday</span>
                      </div>

                      <div className="text-sm text-gray-700 leading-relaxed pt-2">
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
                        Your AI Colleague
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* What happened in between */}
            <FadeIn delay={0.4}>
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-medium text-gray-900">What happens in between?</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Zibly reads your email, analyzes attachments, and delivers complete outputs — presentations, spreadsheets, or reports — just like a senior analyst would. Sarah forwarded the task and went to her next meeting while Zibly did the deep work.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ChatGPT vs Zibly Comparison */}
      <section className="w-full py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-black">
                  AI as a <span className="text-primary">Colleague</span>, Not a Tool
                </h2>
                <p className="max-w-[900px] text-base md:text-lg mx-auto text-gray-700">
                  Other AI requires constant prompting and supervision. Zibly works like a senior team member — understands context, asks clarifying questions, and delivers polished work while you move on.
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
                <TiltCard className="rounded-lg p-6 bg-gray-50 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200">
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">The Old Way</p>
                    <h3 className="text-xl font-normal text-gray-900">The Chatbot Treadmill</h3>
                    <p className="text-sm text-gray-600 mt-1">(You're the Manager, Not the Executive)</p>
                  </div>
                  <ul className="space-y-3 text-gray-700">
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
                    <p className="text-sm text-gray-600">Time spent managing AI:</p>
                    <p className="text-2xl font-bold text-gray-700">2-3 hours</p>
                  </div>
                </TiltCard>
              </AnimatedCard>

              {/* Zibly Column */}
              <AnimatedCard delay={0.2}>
                <TiltCard className="rounded-lg p-6 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary">
                  <div className="mb-4">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">The Zibly Way</p>
                    <h3 className="text-xl font-normal text-gray-900">Your AI Colleague</h3>
                    <p className="text-sm text-gray-700 mt-1">(Delegate Like You Would to a Team Member)</p>
                  </div>
                  <ul className="space-y-3 text-gray-700">
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
                    <p className="text-sm text-gray-700">Time spent managing Zibly:</p>
                    <div className="flex items-center gap-3 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                      <p className="text-3xl font-bold text-primary">60 seconds</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xl text-gray-900 font-light leading-relaxed">
                Zibly brings AI into the workflow you already trust: your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    <Link href="mailto:work@zibly.ai">
                      Send Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8">
                  <Link href="/solutions/consultants">
                    Explore Use Cases
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
