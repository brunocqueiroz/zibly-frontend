"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3, FileText, GraduationCap, CheckCircle } from "lucide-react"
import CopyEmailButton from "@/components/copy-email-button"

export default function UndergradsPage() {
  const handleEmailClick = () => {
    const subject = "Undergrad help: research summary and slides"
    const body = `Hi Zibly,

Please produce [deliverable: research summary/slides/analysis] from the attached sources and notes.

Thanks!`
    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 mb-4">For Students</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">From Sources to Instructor‑Ready Deliverables</h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">Email sources, notes, or data. Get a clean summary, analysis, or slide deck you can refine.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-600" onClick={handleEmailClick}>
                Start Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <CopyEmailButton size="sm" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">We Know Your Juggle</h2>
            <p className="mt-4 text-gray-600 md:text-lg">Multiple classes, deadlines, and group projects.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                <Clock className="h-6 w-6 text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold">Time Pressure</h3>
              <p className="text-gray-600">Research, write, and present — often all at once.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                <BarChart3 className="h-6 w-6 text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold">Data to Insight</h3>
              <p className="text-gray-600">Turn raw spreadsheets into readable charts and commentary.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                <GraduationCap className="h-6 w-6 text-pink-700" />
              </div>
              <h3 className="text-xl font-semibold">Presentation Quality</h3>
              <p className="text-gray-600">Slides and structure matter — even for class.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your On‑Call Research Assistant</h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">From summaries to analysis and slides — done cleanly</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Research Summaries</h3>
              <p className="text-gray-600 mb-4">Synthesize sources with citations and key takeaways</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Annotated bibliographies</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Literature matrices</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Summary tables</span></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-600 mb-4">Clean datasets and generate charts with commentary</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>CSV/Excel cleanup</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Basic statistics</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Visualizations</span></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Presentations</h3>
              <p className="text-gray-600 mb-4">Slides with speaker notes and clear structure</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Title/agenda flow</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>Charts + takeaways</span></div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /><span>References slide</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Research summaries (DOCX/PDF)</li>
                <li>• Cleaned datasets + charts</li>
                <li>• Slide decks with notes (PPTX)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Popular requests</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Literature review outlines</li>
                <li>• Presentation storylines</li>
                <li>• Basic statistical analysis</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                <li>Forward sources or datasets</li>
                <li>Specify output and timeframe</li>
                <li>Receive the finished deliverable</li>
              </ol>
              <p className="text-xs text-gray-500 mt-3">Use responsibly and follow your school’s honor code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Time Back for What Matters</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">Send a task to work@zibly.ai. Your first task is free.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={handleEmailClick}>
                Start Your Free Task <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/features#workflow">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
