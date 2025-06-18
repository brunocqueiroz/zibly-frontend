import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, FileText, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Our Story</h2>
                <div className="space-y-4 text-lg inter-text">
                  <p>
                    We are professionals in the technology space—a lawyer, a physicist, and a computer scientist—and we're passionate about democratizing AI by putting powerful tools in the hands of as many people as possible.
                  </p>
                  <p>
                    We think ChatGPT is an amazing product, but believe it's in the wrong place. We aim to meet professionals exactly where they work.
                  </p>
                  <p>
                    We are at a turning point where intelligent agents, equipped with the right tools, can empower humans to focus solely on the work that truly matters.
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
                  ChatGPT is a conversationalist. Zibly is an employee. We don't just give you answers—we complete your work.
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
                  Good work takes time. Zibly thoughtfully researches, analyzes, and refines. This isn't instant AI—this is thoughtful work.
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
