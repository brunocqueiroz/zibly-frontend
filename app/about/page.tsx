"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/animations/FadeIn"
import MagneticButton from "@/components/animations/MagneticButton"

export default function WhyZiblyPage() {
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
                    You don't "chat" your teammates through every step — you delegate.
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
                        <p className="text-lg font-semibold text-black">Zibly works behind the scenes</p>
                        <p className="text-base text-gray-700">Analyzing, formatting, completing.</p>
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
