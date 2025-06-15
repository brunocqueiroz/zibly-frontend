import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, AlertTriangle, Lightbulb } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Help Center & FAQ - zibly.ai",
  description: "Find answers to common questions about zibly.ai. Learn how to get started, best practices for task delegation, and troubleshoot common issues.",
}

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I send my first task to zibly.ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Send an actual task from your to-do list via email to work@zibly.ai. Include context, specifics, desired format, and any relevant attachments. Zibly will acknowledge receipt and may ask clarifying questions."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of tasks does zibly.ai excel at?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zibly excels at multi-source research, data analysis with insights, professional document creation (memos, reports, presentations), complex calculations, and turning messy inputs into polished outputs."
      }
    },
    {
      "@type": "Question",
      "name": "What if Zibly's output isn't what I expected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can always reply with feedback, and Zibly will revise the work."
      }
    },
    {
        "@type": "Question",
        "name": "How long does a typical task take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple tasks take around 30 minutes, standard tasks around 60 minutes, and complex tasks around 90 minutes. Zibly will confirm the timeline after receiving your request."
        }
    }
  ]
};


export default function HelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <div className="container max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">Help Center</h1>
            <p className="max-w-[900px] text-lg inter-text">
              Get the most out of your AI employee
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Getting Started</CardTitle>
              <CardDescription className="inter-text">Your first task with Zibly</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="inter-text-medium">Your First Task</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="inter-text">
                        Make it real. Don't test Zibly with "write me a poem." Send an actual task from your to-do list:
                      </p>
                      <ul className="space-y-2 list-disc pl-6 inter-text">
                        <li>That Excel analysis you've been putting off</li>
                        <li>The research report due next week</li>
                        <li>The presentation that needs updating</li>
                        <li>The documents that need summarizing</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="inter-text-medium">How to Write Great Task Emails</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                        <div className="font-mono text-sm">
                          <div className="inter-text-medium">Subject:</div>
                          <div className="mb-2 inter-text">[Fwd: Original email] or clear task description</div>
                          <div className="inter-text-medium">Body:</div>
                          <div className="inter-text">1. Context: "I need this for [purpose]"</div>
                          <div className="inter-text">2. Specifics: "Please analyze/create/summarize..."</div>
                          <div className="inter-text">3. Format: "Deliver as [Excel/PPT/Word]"</div>
                          <div className="inter-text">4. Deadline: "Need by [date/time]" (optional)</div>
                          <div className="mt-2">
                            <div className="inter-text-medium">Attachments:</div>
                            <div className="inter-text">Include all relevant files</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="inter-text-medium">What Happens Next</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs flex-shrink-0">
                            1
                          </div>
                          <div>
                            <div className="inter-text-medium">Zibly acknowledges receipt within 5 minutes</div>
                            <div className="text-sm inter-text">You'll get a confirmation email</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs flex-shrink-0">
                            2
                          </div>
                          <div>
                            <div className="inter-text-medium">May ask 1-2 clarifying questions</div>
                            <div className="text-sm inter-text">To ensure we understand your needs</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs flex-shrink-0">
                            3
                          </div>
                          <div>
                            <div className="inter-text-medium">Confirms understanding and timeline</div>
                            <div className="text-sm inter-text">Sets expectations for delivery</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs flex-shrink-0">
                            4
                          </div>
                          <div>
                            <div className="inter-text-medium">Delivers completed work to your inbox</div>
                            <div className="text-sm inter-text">Ready-to-use files and deliverables</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Best Practices</CardTitle>
              <CardDescription className="inter-text">How to get the most out of Zibly</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="inter-text-medium">Tasks Zibly Excels At</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Multi-source research and synthesis</div>
                          <div className="text-sm inter-text">
                            Combining information from multiple sources into insights
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Data analysis with insights</div>
                          <div className="text-sm inter-text">Not just charts, but what the data means</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Professional document creation</div>
                          <div className="text-sm inter-text">Memos, reports, presentations that look polished</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Complex calculations and modeling</div>
                          <div className="text-sm inter-text">Financial models, scenario analysis, projections</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Turning messy inputs into polished outputs</div>
                          <div className="text-sm inter-text">Raw data becomes professional deliverables</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="inter-text-medium">Tasks to Avoid</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Real-time data needs</div>
                          <div className="text-sm inter-text">Live stock prices, breaking news, current events</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Tasks requiring phone calls</div>
                          <div className="text-sm inter-text">Customer interviews, sales calls, negotiations</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Physical document handling</div>
                          <div className="text-sm inter-text">Scanning, printing, physical signatures</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Creative design work</div>
                          <div className="text-sm inter-text">Logo design, artistic layouts, brand creation</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="inter-text-medium">Legal or medical advice</div>
                          <div className="text-sm inter-text">Professional advice requiring licensed expertise</div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Common Issues</CardTitle>
              <CardDescription className="inter-text">Troubleshooting and solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="inter-text-medium">"Zibly's output wasn't what I expected"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <ul className="space-y-2 list-disc pl-6 inter-text">
                        <li>Be specific about format and structure</li>
                        <li>Provide examples when possible</li>
                        <li>Reply with feedback—Zibly will revise</li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900/20">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div className="text-sm">
                            <strong>Pro tip:</strong> Include a sample of your preferred format or reference a previous
                            task that was done well.
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="inter-text-medium">"The task is taking too long"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <ul className="space-y-2 list-disc pl-6 inter-text">
                        <li>Complex tasks take 60-90 minutes</li>
                        <li>Check spam folder for updates</li>
                        <li>Reply to check status</li>
                      </ul>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <strong>Expected timeframes:</strong> Simple tasks (30 min), Standard tasks (60 min), Complex
                          tasks (90 min)
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="inter-text-medium">"I need this urgently"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <ul className="space-y-2 list-disc pl-6 inter-text">
                        <li>Upgrade to Professional for 12-hour turnaround</li>
                        <li>Enterprise gets 2-hour urgent processing</li>
                        <li>Mark "URGENT" in subject line</li>
                      </ul>
                      <div className="bg-amber-50 p-4 rounded-lg dark:bg-amber-900/20">
                        <div className="text-sm">
                          <strong>Note:</strong> Urgent requests may incur additional fees on Starter plans.
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Power User Tips</CardTitle>
              <CardDescription className="inter-text">Advanced techniques for maximum efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="inter-text-medium">Templates Speed Everything Up</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="inter-text">Save your common requests as templates:</p>
                      <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                        <ul className="space-y-1 text-sm font-mono">
                          <li>• "Weekly sales analysis template"</li>
                          <li>• "Board update structure"</li>
                          <li>• "Competitor research framework"</li>
                        </ul>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href="/templates">Browse Templates</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="inter-text-medium">Batch Similar Tasks</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="inter-text">Send multiple files in one email for bulk processing:</p>
                      <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-sm">
                          "Please analyze all attached quarterly reports and create a summary comparison table showing
                          revenue, growth rates, and key metrics for each."
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger className="inter-text-medium">Build on Previous Work</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p className="inter-text">Reference past tasks to maintain consistency:</p>
                      <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-sm">
                          "Like the analysis you did last week for Q3 data, but for Q4 data. Use the same format and
                          structure."
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
