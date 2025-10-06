"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, FileText, Scale, BookOpen, CheckCircle, Users } from "lucide-react"
import JsonLd from "@/components/json-ld"
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"

export default function LawStudentsPage() {
  const handleEmailClick = () => {
    const subject = "Law school help: outlines and briefs"
    const body = `Hi Zibly,

Please create [deliverable: outline/case brief/memo] using the attached materials and citations.

Thanks!`
    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zibly.ai/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: "https://zibly.ai/solutions" },
          { "@type": "ListItem", position: 3, name: "Law Students", item: "https://zibly.ai/solutions/law-students" },
        ],
      }} />
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <FadeIn>
              <div className="space-y-4 max-w-3xl">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">For Law Students</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">Turn Readings Into Clear Outlines and Briefs</h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">Email readings and notes. Get structured outlines, case briefs, and study checklists you can review and refine.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                  Start Your First Task Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <CopyEmailButton size="sm" variant="outline" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">We Know Your Load</h2>
            </SlideUp>
            <p className="mt-4 text-card-foreground md:text-lg">Dense readings, exact citations, tight deadlines.</p>
          </div>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Dense Readings</h3>
                <p className="text-card-foreground">Turn long casebooks and notes into usable outlines.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Time Pressure</h3>
                <p className="text-card-foreground">Class prep, moot court, journals — and exams around the corner.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Precision & Format</h3>
                <p className="text-card-foreground">Headings and structure exactly as requested.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <SlideUp>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Your On‑Call Study Assistant</h2>
            </SlideUp>
            <p className="mt-4 text-white md:text-lg max-w-2xl mx-auto">From course outlines to case briefs and checklists, drafted cleanly for you to review</p>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Course Outlines</h3>
                  <p className="text-card-foreground mb-4">Concise outlines from readings and class notes</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Black‑letter law and elements</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Tests and factors</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Key cases organized</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Case Briefs</h3>
                  <p className="text-card-foreground mb-4">IRAC/CREAC briefs with facts and cites you provide</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Issue, Rule, Application, Conclusion</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Pinpoint cites (if provided)</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Comparable case links</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <Scale className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">Memos & Checklists</h3>
                  <p className="text-card-foreground mb-4">Exam checklists and memo scaffolds to study from</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Elements checklists</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Outline‑to‑memo draft</span></div>
                    <div className="flex items-center gap-2 text-sm text-card-foreground"><CheckCircle className="h-4 w-4 text-primary" /><span>Formatting to your template</span></div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Deliverables + Popular Requests */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">Deliverables we often send</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>• Course outlines (DOCX/PDF)</li>
                <li>• Case briefs (DOCX/PDF)</li>
                <li>• Exam checklists (DOCX)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">Popular requests</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>• Elements and tests summaries</li>
                <li>• Closed‑memo scaffolds</li>
                <li>• Reading summaries</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-background">
              <h3 className="text-lg font-semibold mb-2 text-white">How it works</h3>
              <ol className="space-y-2 text-sm text-white list-decimal pl-5">
                <li>Forward readings/notes and prompt</li>
                <li>Specify structure and formatting</li>
                <li>Review, refine, and submit per your rules</li>
              </ol>
              <p className="text-xs text-white/70 mt-3">Use responsibly and follow your school's honor code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Study Smarter This Semester</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">Send a task to work@zibly.ai. Your first task is free.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={handleEmailClick}>
                Start Your Free Task <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-background hover:text-primary" asChild>
                <Link href="/features#workflow">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
