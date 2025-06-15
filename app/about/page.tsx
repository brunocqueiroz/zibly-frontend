import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, FileText, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Every Professional Deserves a Brilliant Analyst
              </h1>
              <p className="mx-auto max-w-[800px] text-lg inter-text">
                We're not here to replace human intelligence—we're here to amplify it. Zibly handles the analytical heavy lifting so you can focus on strategy, relationships, and the work that truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Our Story</h2>
                <div className="space-y-4 text-lg inter-text">
                  <p>
                    Picture this: It's 11 PM on a Sunday, and you're still formatting spreadsheets for Monday's board meeting. Sound familiar?
                  </p>
                  <p>
                    We've all been there—brilliant professionals spending their weekends on work that, while important, doesn't require their unique expertise. That's why we built Zibly.
                  </p>
                  <p>
                    Imagine having a world-class analyst who genuinely loves diving into 200-page industry reports, never makes calculation errors, and delivers polished work faster than you thought possible.
                  </p>
                  <p>
                    That's Zibly. We handle the analytical groundwork so you can focus on what humans do best: strategic thinking, creative problem-solving, and building meaningful relationships.
                  </p>
                  <p className="inter-text-medium text-primary text-xl">
                    This isn't about replacement—it's about elevation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative w-32 h-32">
                <Image src="/logo.png" alt="zibly.ai Logo" fill className="object-contain" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl inter-text-medium text-gray-900">zibly ai</h3>
                <p className="text-sm inter-text text-gray-600 mt-1">Your AI Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Zibly Difference Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>The Zibly Difference</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">We Don't Do Chat</h3>
                <p className="inter-text">
                  ChatGPT is a conversationalist. Zibly is an employee. We don't give you answers—we complete your work.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Quality Takes Time</h3>
                <p className="inter-text">
                  Good work takes time. Zibly spends a few minutes on each task, researching, analyzing, and refining. This isn't instant AI—this is thoughtful work.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">We Deliver Files</h3>
                <p className="inter-text">
                  Real deliverables you can use. Formatted Excel files. Professional presentations. Documents ready for your signature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Built by People Who Get It</h2>
              <p className="max-w-[900px] text-lg inter-text">
                Created by former consultants, investment bankers, and operators who spent too many nights doing work that brilliant minds shouldn't have to do manually.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="rounded-lg bg-white shadow-sm p-6">
                <div className="text-3xl inter-text-medium text-primary">50+</div>
                <div className="text-sm inter-text text-gray-600">Years Combined Experience</div>
              </div>
              <p className="text-sm inter-text">In top-tier consulting and investment banking</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="rounded-lg bg-white shadow-sm p-6">
                <div className="text-3xl inter-text-medium text-primary">100,000+</div>
                <div className="text-sm inter-text text-gray-600">Tasks Completed</div>
              </div>
              <p className="text-sm inter-text">Across every industry and business function</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-lg">
              <div className="rounded-lg bg-white shadow-sm p-6">
                <div className="text-3xl inter-text-medium text-primary">1M+</div>
                <div className="text-sm inter-text text-gray-600">Hours Reclaimed</div>
              </div>
              <p className="text-sm inter-text">For professionals to focus on strategic work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Ready to Reclaim Your Time?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg inter-text">
                Stop spending your evenings on analytical work. Let Zibly handle the heavy lifting while you focus on strategy, growth, and the work that truly requires your expertise.
              </p>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <Link href="/signup">
                  Get Started Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
