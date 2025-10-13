'use client';

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Upload, AlertCircle, FileText, CheckCircle, LucideIcon } from "lucide-react"
import FadeIn from "@/components/animations/FadeIn"
import SlideUp from "@/components/animations/SlideUp"
import AnimatedCard from "@/components/animations/AnimatedCard"
import MagneticButton from "@/components/animations/MagneticButton"
import WaveDivider from "@/components/WaveDivider"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"

export interface TaskRecipe {
  icon: LucideIcon
  title: string
  taskDescription: string
  deliverable: string
  emailSubject: string
  emailBody: string
}

export interface BenefitCard {
  icon: LucideIcon
  title: string
  description: string
}

export interface QualityStandard {
  title: string
  description: string
}

export interface RelatedUseCase {
  title: string
  description: string
  href: string
}

export interface UseCaseContent {
  // Hero Section
  badge: string
  headline: string
  headlineHighlight: string
  subheadline: string
  emailPlaceholderSubject: string
  emailPlaceholderBody: string
  emailPlaceholderFrom: string

  // What You Send/Get Section
  whatYouSendItems: string[]
  whatYouGetBackItems: string[]

  // Task Recipes
  taskRecipes: TaskRecipe[]

  // Benefits Section
  benefitsHeadline: string
  benefitsSubheadline: string
  benefitCards: BenefitCard[]

  // ROI Section
  roiWithoutItems: string[]
  roiWithItems: string[]
  roiTagline: string

  // Quality Standards
  qualityStandardsHeadline: string
  qualityStandardsSubheadline: string
  qualityStandards: QualityStandard[]

  // How It Works
  howItWorksSteps: { title: string; description: string }[]
  howItWorksSubheadline: string

  // CTA
  ctaHeadline: string
  ctaSubheadline: string
  ctaButtonText: string

  // Related Use Cases
  relatedUseCases: RelatedUseCase[]
}

interface UseCaseTemplateProps {
  content: UseCaseContent
}

export default function UseCaseTemplate({ content }: UseCaseTemplateProps) {
  const [taskRequest, setTaskRequest] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const attachments = files && files.length > 0
        ? Array.from(files).map(file => ({ filename: file.name }))
        : []

      const response = await fetch("https://bgbd0pzte6.execute-api.us-east-1.amazonaws.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          from_email: email,
          subject: subject || "Analysis Request",
          body: taskRequest,
          attachments: attachments,
        }),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setShowSuccess(true)
        setTaskRequest("")
        setEmail("")
        setSubject("")
        setFiles(null)
        const fileInput = document.getElementById('files') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        setErrorMessage("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const prefillEmail = (subjectText: string, bodyText: string) => {
    setSubject(subjectText)
    setTaskRequest(bodyText)
    document.getElementById('email-box')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="relative w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mb-4">
                {content.badge}
              </div>
              <SlideUp>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black" style={{ fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                  {content.headline} <span className="text-primary">{content.headlineHighlight}</span>.
                </h1>
              </SlideUp>
              <FadeIn delay={0.2}>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-700">
                  {content.subheadline}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex justify-center">
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => document.getElementById('email-box')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Try Your First Analysis Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>

            {/* Live Email Box */}
            <FadeIn delay={0.4}>
              <div id="email-box">
                <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto">
                  <div className="bg-white rounded-lg border-2 border-black shadow-lg hover:shadow-2xl transition-all overflow-hidden ring-4 ring-primary/10 hover:ring-primary/20">
                    <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-center">
                      <span className="text-base font-semibold text-black">Send Your Task</span>
                    </div>

                    <div className="px-6 py-3 border-b border-gray-200">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>

                    <div className="border-b border-gray-200 px-6 py-3 flex items-center">
                      <label className="text-sm font-semibold text-gray-700 w-20">To:</label>
                      <div className="flex-1 text-sm md:text-base text-primary font-bold">work@zibly.ai</div>
                    </div>

                    <div className="border-b border-gray-200 px-6 py-3 flex items-center group hover:bg-gray-50/50 transition-colors">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 w-20">From:</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={content.emailPlaceholderFrom}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base bg-transparent text-black placeholder:text-gray-400 px-0"
                      />
                    </div>

                    <div className="border-b border-gray-200 px-6 py-3 flex items-center group hover:bg-gray-50/50 transition-colors">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700 w-20">Subject:</label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder={content.emailPlaceholderSubject}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base bg-transparent text-black placeholder:text-gray-400 px-0"
                      />
                    </div>

                    <div className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                      <Textarea
                        value={taskRequest}
                        onChange={(e) => setTaskRequest(e.target.value)}
                        placeholder={content.emailPlaceholderBody}
                        required
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base md:text-lg px-0 min-h-[150px] bg-transparent text-black placeholder:text-gray-400 resize-none w-full"
                      />
                    </div>

                    <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <Input
                          id="files"
                          type="file"
                          multiple
                          onChange={(e) => setFiles(e.target.files)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto border-gray-300 bg-white hover:bg-gray-100 text-black transition-all"
                          onClick={() => document.getElementById('files')?.click()}
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          {files && files.length > 0 ? `${files.length} file(s) attached` : 'Attach files'}
                        </Button>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 hover:shadow-xl text-white px-8 transition-all"
                      >
                        {isSubmitting ? "Sending..." : "Send Email"} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {errorMessage && (
                      <div className="px-6 py-3 bg-gray-50 border-t border-gray-300">
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    {showSuccess && (
                      <div className="px-6 py-3 bg-green-50 border-t border-green-200">
                        <p className="text-sm text-green-600 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Email sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Section 2: What You Send → What You Get Back */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }}>
              What You Send → What You Get Back
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Your inbox is the workspace. Zibly does the work.
            </p>
          </SlideUp>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative">
            {/* Arrow divider */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-primary text-white rounded-full p-3 shadow-lg">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>

            <AnimatedCard delay={0.1}>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-black">What you send</h3>
                <ul className="space-y-4">
                  {content.whatYouSendItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-primary rounded-lg p-8 h-full shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-black">What you get back</h3>
                <ul className="space-y-4">
                  {content.whatYouGetBackItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Zibly handles everything in between.
          </p>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Section 3: Ready-to-Send Tasks */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }}>
              Ready-to-Send Tasks
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Click any task to prefill your email and get started immediately
            </p>
          </SlideUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {content.taskRecipes.map((task, index) => {
              const IconComponent = task.icon
              return (
                <StaggerItem key={index}>
                  <div className="bg-white border-2 border-black rounded-lg p-6 h-full flex flex-col">
                    <IconComponent className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold mb-2 text-black">{task.title}</h3>
                    <p className="text-sm text-gray-600 mb-2"><strong>Task:</strong> {task.taskDescription}</p>
                    <p className="text-sm text-gray-600 mb-4"><strong>Deliverable:</strong> {task.deliverable}</p>
                    <div className="mt-auto">
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => prefillEmail(task.emailSubject, task.emailBody)}
                      >
                        Use This Task
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Section 4: Benefits */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }} dangerouslySetInnerHTML={{ __html: content.benefitsHeadline }} />
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              {content.benefitsSubheadline}
            </p>
          </SlideUp>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.benefitCards.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                  <div className="bg-white border-2 border-black rounded-lg p-8 text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Section 5: The ROI is Undeniable */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }}>
              The <span className="text-primary">ROI</span> is Undeniable
            </h2>
          </SlideUp>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-black">Without Zibly</h3>
                <ul className="space-y-4 text-gray-700">
                  {content.roiWithoutItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-primary rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-black">With Zibly</h3>
                <ul className="space-y-4 text-gray-700">
                  {content.roiWithItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center bg-white border-2 border-primary rounded-lg p-8">
              <p className="text-3xl font-bold text-primary">
                {content.roiTagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Section 6: Quality Standards */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }}>
              {content.qualityStandardsHeadline}
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              {content.qualityStandardsSubheadline}
            </p>
          </SlideUp>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-black rounded-lg p-8">
              <ul className="space-y-4">
                {content.qualityStandards.map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-black">{standard.title}</strong>
                      <p className="text-gray-600 text-sm mt-1">{standard.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <Link href="/security" className="text-primary hover:underline text-sm">
                  See full security & confidentiality policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Section 7: How It Works */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }}>
              How It Works
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              {content.howItWorksSubheadline}
            </p>
          </SlideUp>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {content.howItWorksSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white border-2 border-black rounded-lg p-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-black">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Section 8: CTA */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center bg-white border-2 border-black rounded-lg p-12 shadow-lg">
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black" style={{ fontWeight: '400', lineHeight: '1.15' }} dangerouslySetInnerHTML={{ __html: content.ctaHeadline }} />
            </SlideUp>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-600 mb-8">
                {content.ctaSubheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8"
                    onClick={() => document.getElementById('email-box')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {content.ctaButtonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white px-8"
                    asChild
                  >
                    <Link href="/solutions">See More Use Cases</Link>
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 9: Related Use Cases */}
      <section className="w-full py-16 bg-gray-50 border-t-2 border-black">
        <div className="container px-4 md:px-6">
          <h3 className="text-2xl font-bold text-center mb-8 text-black">Related Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {content.relatedUseCases.map((useCase, index) => (
              <Link key={index} href={useCase.href} className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold mb-2 text-black">{useCase.title}</h4>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
