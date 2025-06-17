"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, FileText, BarChart3, PenTool, Mail, Bot, Clock, DollarSign, TrendingDown, TrendingUp, Rocket, Gem, AlertCircle } from 'lucide-react'
import type { Metadata } from 'next' // Import Metadata type

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      name: "Alex J.",
      title: "Private Equity Director",
      text: "I forward Zibly our portfolio company reports and get back investment committee memos. Last week it identified a margin compression issue I missed. It's not just fast—it's thorough.",
      rating: 5,
    },
    {
      name: "Jordan L.", 
      title: "Consulting Manager",
      text: "My team was burning out on production work. Now we use Zibly for data cleanup and first drafts, which lets my analysts focus on insights and client relationships. We're doing our best work ever.",
      rating: 5,
    },
    {
      name: "Taylor M.",
      title: "Tech Startup Founder", 
      text: "Zibly is like having a brilliant analyst on my team, without the management overhead. I can finally focus on strategy instead of spreadsheets. Best investment I make every month.",
      rating: 5,
    },
    {
      name: "Morgan R.",
      title: "VP of Strategy at Financial Firm",
      text: "I send Zibly market research requests that would take my team weeks. Get comprehensive reports back in hours. The quality rivals what we'd produce internally, but 10x faster.",
      rating: 5,
    },
  ];
  

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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-500" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <Star className="h-4 w-4 fill-current text-yellow-500 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      )
    }

    return stars
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your AI Analyst Works Where You Do
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Finally, an AI that works like your best analyst. Forward complex tasks, get back professional
                  deliverables. No apps to learn. No chatbot conversations. Just exceptional work, delivered.
                </p>
                <p className="max-w-[600px] text-primary font-semibold md:text-lg">
                  Try your first task free. See the difference in 10 minutes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                  Send Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="relative w-full max-w-[500px] aspect-video rounded-xl border bg-white p-4 shadow-lg dark:bg-gray-800 cursor-pointer hover:shadow-xl transition-shadow"
                onClick={handleEmailClick}
              >
                <div className="flex items-center gap-2 border-b pb-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-sm font-medium ml-2">New Email to Zibly</div>
                  <div className="ml-auto text-xs text-gray-500">Click to send</div>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <div className="font-medium">To:</div>
                    <div>work@zibly.ai</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="font-medium">Subject:</div>
                    <div>Fwd: Board deck needed by Friday</div>
                  </div>
                  <div className="mt-4 text-sm leading-relaxed">
                    Zibly,
                    <br />
                    <br />
                    Can you create a 10-slide board update from our Q4 data?
                    <br />
                    Need:
                    <br />- Revenue analysis with YoY comparisons
                    <br />- Customer acquisition cost trends
                    <br />- Market expansion opportunities
                    <br />- 2025 strategic priorities
                    <br />
                    <br />
                    I've attached our metrics dashboard and last quarter's deck.
                    <br />
                    <br />
                    Thanks,
                    <br />
                    Sarah
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-gray-50 rounded border-dashed border-2">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">Q4_metrics_dashboard.xlsx (45KB)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border-dashed border-2">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">Q3_board_deck.pptx (2.1MB)</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-lg bg-primary p-2 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Isn't ChatGPT Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                The Difference
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                This Isn't ChatGPT. This is Deep Work.
              </h2>
              <div className="max-w-[900px] space-y-4">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="font-semibold text-gray-600 dark:text-gray-400 mb-2">ChatGPT:</div>
                    <p className="text-gray-500 dark:text-gray-400 italic">"Here's how to analyze your data..."</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20">
                    <div className="font-semibold text-primary mb-2">Zibly:</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      "Here's your completed analysis with charts, insights, and recommendations."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">From Data Dump to Board Deck</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Send us your messiest spreadsheet. Get back pivot tables, visualizations, and a narrative that tells
                  the story behind the numbers.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Hours of Reading in Minutes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  50 contracts to review? 200-page industry report to digest? Zibly extracts exactly what matters and
                  delivers it in the format you need.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Writing That Sounds Like You</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Not generic AI content. Professional memos, strategic analyses, and client deliverables written in
                  your industry's language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Multiplier Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
              Value Proposition
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Multiply Your Value 10x</h2>
          </div>
          <div className="rounded-lg bg-white border shadow-lg p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">The Reality Check</div>
                <p className="text-gray-500">You're doing work that's beneath your pay grade. Here's the math:</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="text-lg font-semibold text-red-600 mb-2">Without Zibly</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-500" />
                      <span>20 hours/week on analysis & reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-red-500" />
                      <span>Your value: $200-500/hour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                      <span>Weekly waste: <strong>$4,000-10,000</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span>Annual opportunity cost: <strong>$200K-500K</strong></span>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="text-lg font-semibold text-green-600 mb-2">With Zibly</div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-green-500" />
                      <span>20 hours freed for strategic work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gem className="h-4 w-4 text-green-500" />
                      <span>Focus on $500-2000/hour decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span>Weekly value unlock: <strong>$10K-40K</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span>Annual impact: <strong>$500K-2M+</strong></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 text-center">
                <p className="font-semibold text-lg mb-2">
                  <strong>The Bottom Line</strong>
                </p>
                <p className="text-gray-600">
                  Every hour you spend on analytical grunt work is an hour you're not closing deals, making strategic decisions, or building relationships. <strong>Zibly gives you back 20+ hours per week</strong> to do the work only you can do.
                </p>
                <p className="mt-4 text-purple-700 font-semibold">
                  <strong>ROI in Week 1: 10-50x your investment</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Built for the Work That Matters
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Financial Modeling & Analysis</h3>
                <p className="text-gray-500">
                  DCF models, sensitivity analysis, comparable company analysis, LBO models—Zibly handles complex financial work with precision.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Strategic Research & Reports</h3>
                <p className="text-gray-500">
                  Market sizing, competitive landscapes, due diligence reports, investment memos—get comprehensive analysis that drives decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Data Synthesis & Insights</h3>
                <p className="text-gray-500">
                  Process hundreds of documents, transcripts, and data sources. Extract patterns and insights humans would need weeks to find.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Delegate Like You Would to a Human</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Forward Any Task</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Just like emailing a colleague. Attach files, give context, be as vague or specific as you want. Zibly
                  asks smart clarifying questions.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Real Work Takes Time</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This isn't instant AI chat. Zibly researches, analyzes, double-checks, and creates professional
                  deliverables. Average task: 5-10 minutes.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Get Finished Work</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Complete Excel files. Polished presentations. Professional documents. Everything ready to forward to
                  your boss or client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Leaders Who Demand Excellence</h2>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm bg-white"
                >
                  <div className="flex items-center space-x-2">
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.text}
                  </p>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Would You Accomplish With 20 Hours Back Each Week?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Zibly handles the analytical heavy lifting so you can focus on strategy, creativity, and growth. See the
                difference with your first task—completely free.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleEmailClick}
              >
                Send Your First Task Free → work@zibly.ai <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}