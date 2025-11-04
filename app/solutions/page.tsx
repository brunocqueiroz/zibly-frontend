"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Briefcase, TrendingUp, PieChart, Calculator, Scale, Megaphone, Target, Lightbulb, GraduationCap, Gavel, BookOpen, Mail } from 'lucide-react'
import CopyEmailButton from "@/components/copy-email-button"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import TiltCard from "@/components/animations/TiltCard"
import MagneticButton from "@/components/animations/MagneticButton"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"

export default function SolutionsPage() {
  const handleEmailClick = () => {
    const subject = "Need help with analysis"
    const body = `Hi Zibly,

I need you to handle [describe the work you're delegating].

Thanks!`

    const mailtoLink = `mailto:work@zibly.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const professionalUseCases = [
    {
      title: "Consultants",
      href: "/solutions/consultants",
      description: "Strategic analysis and client deliverables",
      icon: Briefcase
    },
    {
      title: "Investment Bankers",
      href: "/solutions/investment-banking",
      description: "Deal analysis and pitch decks",
      icon: TrendingUp
    },
    {
      title: "Private Equity",
      href: "/solutions/private-equity",
      description: "Portfolio analysis and due diligence",
      icon: PieChart
    },
    {
      title: "Accountants",
      href: "/solutions/accountants",
      description: "Financial analysis and reporting",
      icon: Calculator
    },
    {
      title: "Attorneys",
      href: "/solutions/attorneys",
      description: "Legal research and document review",
      icon: Scale
    },
    {
      title: "Marketing Teams",
      href: "/solutions/marketing",
      description: "Market research and campaign analysis",
      icon: Megaphone
    },
    {
      title: "Product Managers",
      href: "/solutions/product-managers",
      description: "Competitive analysis and user research",
      icon: Target
    },
    {
      title: "Strategy Executives",
      href: "/solutions/strategy",
      description: "Strategic planning and market intelligence",
      icon: Lightbulb
    }
  ]

  const studentUseCases = [
    {
      title: "MBA Students",
      href: "/solutions/mba-students",
      description: "Case prep, modeling, recruiting decks",
      icon: GraduationCap
    },
    {
      title: "Law Students",
      href: "/solutions/law-students",
      description: "Outlines, briefs, exam checklists",
      icon: Gavel
    },
    {
      title: "Undergraduates",
      href: "/solutions/undergraduates",
      description: "Summaries, analysis, presentations",
      icon: BookOpen
    }
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <SlideUp>
                <h1 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  Your AI Colleague <span className="text-primary">For Every Role</span>
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="max-w-[700px] text-base md:text-lg lg:text-xl inter-text mx-auto text-black">
                  From consulting decks to legal briefs, Zibly works like a skilled team member who understands your field. Delegate the work, get professional deliverables.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto px-4">
                <MagneticButton className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
                    Delegate Your First Task <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <CopyEmailButton size="sm" variant="outline" className="w-full sm:w-auto" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                For <span className="text-primary">Professionals</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Trusted by consultants, bankers, and executives who delegate analytical work to their AI colleague
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {professionalUseCases.map((useCase, index) => (
                <StaggerItem key={useCase.href}>
                  <Link href={useCase.href}>
                    <TiltCard>
                      <Card className="border-2 hover:border-primary transition-all h-full group cursor-pointer">
                        <CardHeader>
                          <useCase.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                          <CardTitle className="inter-heading-normal text-lg">{useCase.title}</CardTitle>
                          <CardDescription className="inter-text">
                            {useCase.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-primary font-medium">
                            Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Students */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                For <span className="text-primary">Students</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Get an AI colleague who handles your analytical work while you focus on learning
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-4xl">
            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {studentUseCases.map((useCase, index) => (
                <StaggerItem key={useCase.href}>
                  <Link href={useCase.href}>
                    <TiltCard>
                      <Card className="border-2 hover:border-primary transition-all h-full group cursor-pointer bg-white">
                        <CardHeader>
                          <useCase.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                          <CardTitle className="inter-heading-normal text-lg">{useCase.title}</CardTitle>
                          <CardDescription className="inter-text">
                            {useCase.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-primary font-medium">
                            Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <h2 className="inter-section-heading text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                      Ready to <span className="text-primary">Delegate</span>?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-base md:text-lg inter-text text-black">
                      No signup required. No credit card needed. Just email your work to your AI colleague and see the results.
                    </p>
                    <div className="pt-4">
                      <MagneticButton>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={handleEmailClick}>
                          Delegate Your First Task <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </MagneticButton>
                      <p className="mt-4 text-sm inter-text text-black">
                        work@zibly.ai • First task free • Professional deliverables
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
