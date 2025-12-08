"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, Mail, AlertCircle, Upload } from 'lucide-react'
import FadeIn from "@/components/animations/FadeIn"
import TaskStream from "@/components/TaskStream"

const ROTATING_TEXTS = [
  "pitch deck",
  "financial model",
  "competitive analysis",
  "market sizing",
  "board presentation",
  "due diligence report",
  "DCF model",
  "strategy memo",
  "pricing analysis",
  "quarterly review"
]

function RotatingText() {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length)
        setIsAnimating(false)
      }, 300)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <span
      className="text-primary transition-opacity duration-300"
      style={{ opacity: isAnimating ? 0 : 1 }}
    >
      {ROTATING_TEXTS[index]}
    </span>
  )
}

const PLACEHOLDERS = [
  "Can you handle the board deck? Need it by Friday with Q4 metrics",
  "I'm forwarding the acquisition target info - need a DCF model",
  "Please synthesize these 50 customer interviews into key themes",
  "Need you to draft an investment memo for this SaaS company",
  "Can you pull together competitive intel on our main rivals?",
  "Build me a three-statement model with sensitivity analysis"
]

export default function Home() {
  const [taskRequest, setTaskRequest] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  // Cycle through placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Helper function to read file as base64
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        // Remove data URL prefix (e.g., "data:image/png;base64,")
        const base64 = result.split(',')[1] || result
        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Total file size limit: 7 MB (sum of all files)
      const MAX_TOTAL_SIZE = 7 * 1024 * 1024 // 7 MB in bytes
      
      // Validate total file size before processing
      if (files && files.length > 0) {
        const totalSize = Array.from(files).reduce((sum, file) => sum + file.size, 0)
        if (totalSize > MAX_TOTAL_SIZE) {
          const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)
          setErrorMessage(`Total file size limit exceeded. Your files total ${totalSizeMB} MB, but the limit is 7 MB. Please reduce the total size of your attachments.`)
          setIsSubmitting(false)
          return
        }
      }

      // Prepare attachments array with base64 encoded content
      let attachments: Array<{ filename: string; content_base64: string }> = []
      
      if (files && files.length > 0) {
        try {
          attachments = await Promise.all(
            Array.from(files).map(async (file) => {
              const base64Content = await readFileAsBase64(file)
              return {
                filename: file.name,
                content_base64: base64Content,
              }
            })
          )
        } catch (fileError) {
          console.error("Error reading files:", fileError)
          setErrorMessage("Failed to read one or more files. Please try again.")
          setIsSubmitting(false)
          return
        }
      }

      // Make API request
      const response = await fetch("https://bgbd0pzte6.execute-api.us-east-1.amazonaws.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          from_email: email,
          subject: subject || "Request for analysis",
          body: taskRequest,
          attachments: attachments,
        }),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        // Success
        setShowSuccessModal(true)

        // Reset form
        setTaskRequest("")
        setEmail("")
        setSubject("")
        setFiles(null)
        // Reset file input
        const fileInput = document.getElementById('files') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        // API returned error
        setErrorMessage("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zibly",
          url: "https://www.zibly.ai/",
          logo: "https://www.zibly.ai/logo.png",
          sameAs: [],
          contactPoint: [{
            "@type": "ContactPoint",
            email: "work@zibly.ai",
            contactType: "customer support"
          }]
        }) }}
      />
      {/* Hero Section */}
      <section className="relative w-full flex items-start justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 md:px-6 lg:px-12 pt-16 pb-10">
              {/* Main Heading */}
              <FadeIn>
                <div className="text-center mb-8 max-w-5xl mx-auto">
                  <p className="text-xl sm:text-2xl md:text-3xl text-black inter-section-heading mb-1" style={{ fontWeight: '400' }}>
                    Need a...
                  </p>
                  <h1 className="inter-section-heading text-primary text-3xl sm:text-4xl md:text-5xl mb-3" style={{ fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                    <RotatingText />
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-black inter-section-heading" style={{ fontWeight: '400', lineHeight: '1.2' }}>
                    Ask your AI colleague. <span className="text-primary">Just hit send.</span>
                  </p>
                </div>
              </FadeIn>

              {/* Email-style Form */}
              <FadeIn delay={0.2}>
                <div className="relative w-full max-w-[700px] mx-auto">
                <form onSubmit={handleSubmit} className="">
                <div className="bg-white rounded-lg border-2 border-black shadow-lg hover:shadow-2xl transition-all overflow-hidden ring-4 ring-primary/10 hover:ring-primary/20">
                  {/* To Field */}
                  <div className="border-b border-gray-200 px-4 py-2 flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-3" />
                    <label className="text-sm font-semibold text-gray-700 w-16">To:</label>
                    <div className="flex-1 text-sm text-primary font-bold">work@zibly.ai</div>
                  </div>

                  {/* From Field */}
                  <div className="border-b border-gray-200 px-4 py-2 flex items-center group hover:bg-gray-50/50 transition-colors">
                    <div className="w-4 mr-3"></div>
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 w-16">From:</label>
                    <div className="flex-1 relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => document.getElementById('email-cursor')?.classList.add('hidden')}
                        onBlur={() => !email && document.getElementById('email-cursor')?.classList.remove('hidden')}
                        required
                        className="flex-1 w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base bg-transparent text-black placeholder:text-gray-400 px-0 cursor-text"
                      />
                      {/* Blinking cursor when empty and not focused */}
                      {!email && (
                        <span
                          id="email-cursor"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-primary pointer-events-none"
                          style={{
                            animation: 'blink 1.2s step-end infinite'
                          }}
                        />
                      )}
                      <style jsx>{`
                        @keyframes blink {
                          0%, 49% { opacity: 1; }
                          50%, 100% { opacity: 0; }
                        }
                      `}</style>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="border-b border-gray-200 px-4 py-2 flex items-center group hover:bg-gray-50/50 transition-colors">
                    <div className="w-4 mr-3"></div>
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700 w-16">Subject:</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Request for analysis"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm bg-transparent text-black placeholder:text-gray-400 px-0 cursor-text"
                    />
                  </div>

                  {/* Message Body */}
                  <div className="px-4 py-3 hover:bg-gray-50/50 transition-colors cursor-text relative">
                    {!taskRequest && (
                      <div className="absolute left-4 top-3 pointer-events-none text-sm text-gray-400">
                        <div className="transition-opacity duration-500">
                          {PLACEHOLDERS[placeholderIndex]}
                        </div>
                      </div>
                    )}
                    <Textarea
                      value={taskRequest}
                      onChange={(e) => setTaskRequest(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-0 min-h-[200px] bg-transparent text-black placeholder:text-transparent resize-none w-full cursor-text"
                    />
                    {/* Speech bubble prompt */}
                    <div className="pointer-events-none absolute left-6 bottom-4">
                      <div className="relative bg-primary/10 border border-primary/30 rounded-2xl px-4 py-2 shadow-sm">
                        <p className="inter-text text-sm font-medium text-primary">
                          Hello! Are you out there? Try me! I work!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Footer with Actions */}
                  <div className="border-t border-gray-200 px-4 py-2 bg-gray-50 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      {/* File upload button */}
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
                        className="border-gray-300 bg-white hover:bg-gray-100 text-black text-xs px-3 py-1 h-8 disabled:opacity-50"
                        onClick={() => document.getElementById('files')?.click()}
                      >
                        <Upload className="mr-1 h-3 w-3" />
                        {files && files.length > 0 ? `${files.length} file(s)` : 'Attach'}
                      </Button>
                    </div>

                    {/* Send button */}
                    <Button
                      type="submit"
                      size="sm"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-white px-4 h-8 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send"} <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>

                  {/* Error message */}
                  {errorMessage && (
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-300">
                      <p className="text-xs text-gray-700 flex items-center gap-2">
                        <AlertCircle className="h-3 w-3" />
                        {errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </form>
              </div>
            </FadeIn>
        </div>
      </section>

      {/* Task Stream */}
      <TaskStream />

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white border-2 border-black">
          <DialogHeader>
            <DialogTitle className="text-2xl text-black inter-heading-normal">Thank you for trying Zibly!</DialogTitle>
            <DialogDescription className="text-black inter-text pt-4">
              Check your email for Zibly's response to your task. You can ask for more tasks whenever by emailing work@zibly.ai.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-black hover:bg-black/90 text-white"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
