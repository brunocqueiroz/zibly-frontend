"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FileSpreadsheet, Search, Users, FileText, ArrowRight, CheckCircle, Upload } from "lucide-react"

interface TaskCard {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  timeSaved: string
  promptTemplate: string
  inputLabel: string
  inputPlaceholder: string
  isTextarea?: boolean
  isSpecialty?: boolean
}

const TASK_CARDS: TaskCard[] = [
  {
    id: "create-presentation",
    icon: FileText,
    title: "Create Presentation",
    subtitle: "Slides from your notes",
    timeSaved: "45 mins",
    promptTemplate: "Create a professional PowerPoint presentation about: [BLANK]. Output as PPTX.",
    inputLabel: "What's the presentation about?",
    inputPlaceholder: "e.g., Q4 sales results for the board meeting",
    isSpecialty: true,
  },
  {
    id: "spreadsheet-analysis",
    icon: FileSpreadsheet,
    title: "Spreadsheet Analysis",
    subtitle: "Analyze data & find insights",
    timeSaved: "30 mins",
    promptTemplate: "Analyze the attached data and provide insights, trends, and recommendations. [BLANK]. Output as Excel.",
    inputLabel: "What should I look for?",
    inputPlaceholder: "e.g., Revenue trends and top customers",
    isSpecialty: true,
  },
  {
    id: "fill-form",
    icon: FileText,
    title: "Fill Out Form",
    subtitle: "Complete any form fast",
    timeSaved: "20 mins",
    promptTemplate: "Fill out the attached form using the information provided: [BLANK]",
    inputLabel: "Info for the form",
    inputPlaceholder: "e.g., Company: Acme Inc, Address: 123 Main St...",
    isTextarea: true,
    isSpecialty: true,
  },
  {
    id: "data-to-slides",
    icon: FileText,
    title: "Data to Slides",
    subtitle: "Turn spreadsheet into deck",
    timeSaved: "40 mins",
    promptTemplate: "Convert the attached spreadsheet data into a presentation with charts and key findings. [BLANK]. Output as PPTX.",
    inputLabel: "Focus areas (optional)",
    inputPlaceholder: "e.g., Highlight YoY growth",
    isSpecialty: true,
  },
  {
    id: "summarize-doc",
    icon: FileText,
    title: "Summarize Document",
    subtitle: "Key points from any file",
    timeSaved: "15 mins",
    promptTemplate: "Summarize the attached document into key points and action items. [BLANK]",
    inputLabel: "Additional instructions (optional)",
    inputPlaceholder: "e.g., Focus on action items",
  },
  {
    id: "build-model",
    icon: FileSpreadsheet,
    title: "Build Financial Model",
    subtitle: "Projections & analysis",
    timeSaved: "60 mins",
    promptTemplate: "Build a financial model for: [BLANK]. Include projections and assumptions. Output as Excel.",
    inputLabel: "What should I model?",
    inputPlaceholder: "e.g., 3-year revenue forecast for a SaaS startup",
    isSpecialty: true,
  },
  {
    id: "compare-docs",
    icon: FileSpreadsheet,
    title: "Compare Documents",
    subtitle: "Find differences & changes",
    timeSaved: "25 mins",
    promptTemplate: "Compare the attached documents and highlight key differences, changes, or discrepancies. [BLANK]",
    inputLabel: "What to focus on (optional)",
    inputPlaceholder: "e.g., Focus on pricing terms",
  },
  {
    id: "client-deck",
    icon: FileText,
    title: "Client Presentation",
    subtitle: "Professional client deck",
    timeSaved: "50 mins",
    promptTemplate: "Create a client-facing presentation for: [BLANK]. Make it professional and persuasive. Output as PPTX.",
    inputLabel: "What's this for?",
    inputPlaceholder: "e.g., Proposal for new accounting services",
    isSpecialty: true,
  },
]

// Duplicate cards for seamless infinite scroll
const SCROLLING_CARDS = [...TASK_CARDS, ...TASK_CARDS, ...TASK_CARDS]

export default function TaskStream() {
  const [selectedTask, setSelectedTask] = useState<TaskCard | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [email, setEmail] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Helper function to read file as base64
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        const base64 = result.split(',')[1] || result
        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  // Handle scroll animation
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPos = prev + 1
        // Reset when we've scrolled through one set of cards
        if (scrollRef.current) {
          const totalWidth = scrollRef.current.scrollWidth / 3
          if (newPos >= totalWidth) {
            return 0
          }
        }
        return newPos
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isPaused])

  const handleCardClick = (task: TaskCard) => {
    setSelectedTask(task)
    setInputValue("")
    setEmail("")
    setFiles(null)
    setErrorMessage("")
  }

  const handleCloseModal = () => {
    setSelectedTask(null)
    setInputValue("")
    setEmail("")
    setFiles(null)
    setErrorMessage("")
  }

  const getPromptWithValue = (template: string, value: string) => {
    if (!value.trim()) {
      return template
    }
    return template.replace("[BLANK]", value)
  }

  const handleSubmit = async () => {
    if (!selectedTask || !email.trim()) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Total file size limit: 7 MB
      const MAX_TOTAL_SIZE = 7 * 1024 * 1024

      if (files && files.length > 0) {
        const totalSize = Array.from(files).reduce((sum, file) => sum + file.size, 0)
        if (totalSize > MAX_TOTAL_SIZE) {
          const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)
          setErrorMessage(`Files total ${totalSizeMB} MB, but limit is 7 MB.`)
          setIsSubmitting(false)
          return
        }
      }

      // Prepare attachments
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
          setErrorMessage("Failed to read files. Please try again.")
          setIsSubmitting(false)
          return
        }
      }

      const prompt = getPromptWithValue(selectedTask.promptTemplate, inputValue || "(see attached)")

      const response = await fetch("https://bgbd0pzte6.execute-api.us-east-1.amazonaws.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          from_email: email,
          subject: `Task: ${selectedTask.title}`,
          body: prompt,
          attachments: attachments,
        }),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        handleCloseModal()
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 4000)
      } else {
        setErrorMessage("Failed to send. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting task:", error)
      setErrorMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Task Stream Section */}
      <section className="w-full py-6 bg-white overflow-hidden">
        {/* Scrolling Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 px-4"
            style={{
              width: "max-content",
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {SCROLLING_CARDS.map((task, index) => {
              const Icon = task.icon
              return (
                <div
                  key={`${task.id}-${index}`}
                  onClick={() => handleCardClick(task)}
                  className="flex-shrink-0 w-60 bg-white rounded-lg border border-gray-200 p-5 cursor-pointer transition-all duration-200 ease-out hover:border-primary hover:shadow-md hover:-translate-y-1 active:scale-[0.98]"
                >
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-8 w-8 rounded-md bg-gray-100 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-gray-700" />
                    </div>
                    {/* Time Badge */}
                    <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {task.timeSaved}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    {task.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-gray-500">
                    {task.subtitle}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Task Modal */}
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="bg-white border-2 border-black max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-black">
              Delegate: {selectedTask?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 pt-2">
            {/* Prompt Display */}
            <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedTask && (
                  <>
                    {getPromptWithValue(selectedTask.promptTemplate, inputValue).split(inputValue || "[BLANK]").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className={`font-semibold ${inputValue ? "text-primary bg-primary/10 px-1 rounded" : "text-gray-400 bg-gray-200 px-1 rounded"}`}>
                            {inputValue || `[${selectedTask.inputLabel}]`}
                          </span>
                        )}
                      </span>
                    ))}
                  </>
                )}
              </p>
            </div>

            {/* Input Field 1 - Dynamic based on task */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {selectedTask?.inputLabel}
              </label>
              {selectedTask?.isTextarea ? (
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={selectedTask?.inputPlaceholder}
                  className="min-h-[100px] border-gray-300 focus:border-primary focus:ring-primary"
                />
              ) : (
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={selectedTask?.inputPlaceholder}
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
              )}
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Attach Files (optional)
              </label>
              <div className="flex items-center gap-2">
                <Input
                  id="task-files"
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-gray-300 bg-white hover:bg-gray-100 text-black"
                  onClick={() => document.getElementById('task-files')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {files && files.length > 0 ? `${files.length} file(s) selected` : 'Choose files'}
                </Button>
                {files && files.length > 0 && (
                  <button
                    type="button"
                    className="text-xs text-gray-500 hover:text-gray-700"
                    onClick={() => setFiles(null)}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Input Field 2 - Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Your Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!email.trim() || isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : `Start ${selectedTask?.title}`}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
            <CheckCircle className="h-5 w-5" />
            <p className="font-medium">Agent has started working! Check your inbox.</p>
          </div>
        </div>
      )}
    </>
  )
}
