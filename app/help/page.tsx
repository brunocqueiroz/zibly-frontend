import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertTriangle, Lightbulb, Shield, DollarSign, Zap, Users, HelpCircle, Mail } from 'lucide-react'
import Link from "next/link"
import CopyEmailButton from "@/components/copy-email-button"
import type { Metadata } from 'next'
import { PRICING_CONFIG, PRICING_MESSAGES, formatPrice } from '@/lib/pricing-config'

export const metadata: Metadata = {
  title: "FAQ | Security, Pricing & How It Works - zibly.ai",
  description: "SOC 2 compliant. Adaptive AI analysis - from quick insights to deep research. No app required. Get answers about data security, task limits, file types, and enterprise features.",
}

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does zibly.ai work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply email your tasks to work@zibly.ai with any attachments. Our AI analyzes your request, processes the data, and sends back professional deliverables (Excel models, presentations, reports). Simple tasks complete in minutes, while complex analyses receive the deep attention they deserve. No app downloads or logins required."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure with zibly.ai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zibly is SOC 2 Type II compliant, uses bank-grade encryption, and never trains on your data. We delete all task data after 30 days unless you request otherwise. Your information is never shared with third parties."
      }
    },
    {
      "@type": "Question",
      "name": "What types of tasks can zibly.ai handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zibly excels at financial modeling, data analysis, research synthesis, report writing, presentation creation, and document processing. We handle Excel analysis, PowerPoint decks, market research, competitive analysis, and any task requiring turning raw data into professional deliverables."
      }
    },
    {
      "@type": "Question",
      "name": "How much does zibly.ai cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${PRICING_MESSAGES.freeTrial}. ${PRICING_MESSAGES.startingPrice}. ${PRICING_MESSAGES.unlimitedRevisions} and ${PRICING_MESSAGES.noSetupFees}.`
      }
    },
    {
      "@type": "Question",
      "name": "How long do tasks take to complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zibly adapts to your needs - simple tasks complete in minutes, while complex analyses can take up to an hour. This isn't ChatGPT-style instant responses - it's thorough, professional work that matches the effort a human analyst would invest."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                <HelpCircle className="h-3 w-3 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl inter-section-heading">
                Everything You Need to Know
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl inter-text">
                Get answers about security, pricing, capabilities, and how to make the most of your AI analyst. 
                Can't find what you're looking for? Email us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="mailto:work@zibly.ai?subject=Question about zibly.ai">
                    Ask a Question <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <CopyEmailButton size="sm" variant="outline" />
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
                <CopyEmailButton size="sm" variant="outline" email="work@zibly.ai" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full py-8 bg-background border-y">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium inter-text-medium">SOC 2 Compliant</p>
              <p className="text-xs text-muted-foreground inter-text">Bank-grade security</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium inter-text-medium">Adaptive analysis</p>
              <p className="text-xs text-muted-foreground inter-text">Average turnaround</p>
            </div>
            <div>
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium inter-text-medium">No app required</p>
              <p className="text-xs text-muted-foreground inter-text">Just use email</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium inter-text-medium">Growing fast</p>
              <p className="text-xs text-muted-foreground inter-text">Join our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="container max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="space-y-8">
          
          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Getting Started
              </CardTitle>
              <CardDescription className="inter-text">Everything you need to know to get up and running</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="inter-text-medium">How does zibly.ai work?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>It's incredibly simple:</p>
                      <ol className="space-y-2 list-decimal pl-6">
                        <li>Email your task to <strong>work@zibly.ai</strong> with any attachments</li>
                        <li>Our AI analyzes your request and may ask clarifying questions</li>
                        <li>We process your task using advanced AI models</li>
                        <li>You receive professional deliverables in your inbox - timing adapted to task complexity</li>
                      </ol>
                      <p>No apps to download, no accounts to manage, no interfaces to learn. Just email.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="inter-text-medium">Do I need to sign up or install anything?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      No! Zibly works entirely through email. Just send your first task to work@zibly.ai and you're ready to go. 
                      We'll create your account automatically after your first task. No passwords, no software, no hassle.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="inter-text-medium">What should my first task be?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Send a real task from your to-do list. Great first tasks include:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>Data analysis:</strong> "Analyze this sales data and create a dashboard"</li>
                        <li><strong>Research:</strong> "Research our top 5 competitors' pricing strategies"</li>
                        <li><strong>Document creation:</strong> "Turn these meeting notes into a client memo"</li>
                        <li><strong>Financial modeling:</strong> "Build a 3-year revenue forecast from this data"</li>
                      </ul>
                      <div className="bg-secondary p-4 rounded-lg dark:bg-teal-900/20 mt-4">
                        <p className="text-sm">
                          <strong>Pro tip:</strong> Include context about how you'll use the output. 
                          This helps Zibly tailor the deliverable to your specific needs.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="inter-text-medium">Can I try it for free?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      Yes! Your first task is completely free, no credit card required. 
                      This lets you experience the quality of Zibly's work before committing to a plan. 
                      After your free task, plans start at just {formatPrice(PRICING_CONFIG.starter.monthly)}/month.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security & Compliance
              </CardTitle>
              <CardDescription className="inter-text">Your data protection is our top priority</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="inter-text-medium">Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Absolutely. Zibly implements enterprise-grade security:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>SOC 2 Type II compliant</strong> - Independently audited security</li>
                        <li><strong>256-bit encryption</strong> - Bank-grade data protection</li>
                        <li><strong>No training on your data</strong> - Your information stays yours</li>
                        <li><strong>Auto-deletion</strong> - Data removed after 30 days</li>
                        <li><strong>GDPR compliant</strong> - Full regulatory compliance</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="inter-text-medium">Who can see my tasks and data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      Only you can see your tasks and data. Our AI processes your requests in isolated environments. 
                      No human reviews your tasks unless you explicitly request support. We never share, sell, or use 
                      your data for any purpose other than completing your requested tasks.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="inter-text-medium">Can I use Zibly for confidential client work?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Yes. Zibly is designed for professional use with confidential information:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>SOC 2 compliance meets most client security requirements</li>
                        <li>Signed BAAs available for Enterprise customers</li>
                        <li>Data processing agreements (DPAs) available</li>
                        <li>Custom security reviews for large organizations</li>
                      </ul>
                      <p className="mt-4">
                        Professional teams across industries trust Zibly with their analytical work.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="inter-text-medium">How long do you retain my data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      We automatically delete all task data after 30 days. You can request immediate deletion at any time. 
                      For compliance purposes, we maintain minimal account information (email address, billing details) 
                      according to legal requirements. Enterprise customers can configure custom retention policies.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Capabilities & Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Capabilities & Use Cases
              </CardTitle>
              <CardDescription className="inter-text">What Zibly can (and can't) do for you</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="inter-text-medium">What types of tasks does Zibly excel at?</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 inter-text">
                      <div>
                        <h4 className="font-semibold mb-2">Financial & Data Analysis</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>Financial modeling (DCF, LBO, comps)</li>
                          <li>Data visualization and dashboards</li>
                          <li>Variance analysis and reporting</li>
                          <li>Excel automation and cleanup</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Research & Strategy</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>Market research and sizing</li>
                          <li>Competitive analysis</li>
                          <li>Industry reports</li>
                          <li>Strategic recommendations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Document Creation</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>PowerPoint presentations</li>
                          <li>Executive memos</li>
                          <li>Board reports</li>
                          <li>Investment committee decks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Data Processing</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>Document synthesis (100s of pages)</li>
                          <li>Contract analysis</li>
                          <li>Survey data analysis</li>
                          <li>Pattern identification</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="inter-text-medium">What are Zibly's limitations?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Zibly can't handle tasks that require:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>Real-time data:</strong> Live stock prices, breaking news, current weather</li>
                        <li><strong>External actions:</strong> Making phone calls, sending emails to others, booking meetings</li>
                        <li><strong>Creative design:</strong> Logo creation, artistic layouts, video editing</li>
                        <li><strong>Physical tasks:</strong> Printing, scanning, mailing documents</li>
                        <li><strong>Specialized software:</strong> CAD, specialized trading platforms, proprietary tools</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="inter-text-medium">What file types can I send?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Zibly accepts virtually all common business file formats:</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Documents</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• PDF</li>
                            <li>• Word (.docx, .doc)</li>
                            <li>• PowerPoint (.pptx, .ppt)</li>
                            <li>• Text files (.txt, .rtf)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Data Files</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Excel (.xlsx, .xls, .csv)</li>
                            <li>• JSON</li>
                            <li>• XML</li>
                            <li>• Database exports</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Maximum attachment size: 25MB per file, 100MB total per email
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="inter-text-medium">Can Zibly access the internet or external data?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      Zibly works with the information you provide in your email. We don't access external websites, 
                      APIs, or databases. This ensures security and gives you complete control over what data is analyzed. 
                      For research tasks, provide relevant source materials or specify that you want analysis based on 
                      general industry knowledge.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Pricing & Billing */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Pricing & Billing
              </CardTitle>
              <CardDescription className="inter-text">Simple, transparent pricing with no hidden fees</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-13">
                  <AccordionTrigger className="inter-text-medium">How much does Zibly cost?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <div className="grid gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold">Starter - {formatPrice(PRICING_CONFIG.starter.monthly)}/month</h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• 20 tasks per month</li>
                            <li>• Standard processing</li>
                            <li>• Email support</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4 border-primary">
                          <h4 className="font-semibold">Professional - {formatPrice(PRICING_CONFIG.professional.monthly)}/month</h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• 80 tasks per month</li>
                            <li>• Priority processing</li>
                            <li>• Priority support</li>
                            <li>• Custom templates</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold">Enterprise - Custom pricing</h4>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Unlimited tasks</li>
                            <li>• Urgent processing</li>
                            <li>• Dedicated account manager</li>
                            <li>• Custom integrations</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm">All plans include unlimited revisions and no setup fees.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="inter-text-medium">What counts as a "task"?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>One task = one email request with a specific deliverable. Examples:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>✓ "Analyze this data and create a report" = 1 task</li>
                        <li>✓ "Build a financial model from these assumptions" = 1 task</li>
                        <li>✓ "Research competitors and create comparison deck" = 1 task</li>
                      </ul>
                      <p className="mt-4">Revisions don't count as new tasks. Complex projects can be split across multiple tasks.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="inter-text-medium">Can I change or cancel my plan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      Yes! You can upgrade, downgrade, or cancel anytime. Changes take effect at your next billing cycle. 
                      No long-term contracts, no cancellation fees. Unused tasks don't roll over to the next month. 
                      Enterprise annual contracts receive a 20% discount.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16">
                  <AccordionTrigger className="inter-text-medium">Do you offer discounts?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Yes, we offer several discount programs:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>Annual billing:</strong> Save 20% when you pay annually</li>
                        <li><strong>Non-profits:</strong> 30% discount with valid 501(c)(3) status</li>
                        <li><strong>Students:</strong> 50% discount with valid .edu email</li>
                        <li><strong>Referrals:</strong> Get 1 month free for each referral who signs up</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                How to Use Zibly
              </CardTitle>
              <CardDescription className="inter-text">Tips for getting the best results</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-17">
                  <AccordionTrigger className="inter-text-medium">How do I write effective task emails?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Follow this simple structure for best results:</p>
                      <div className="bg-secondary p-4 rounded-lg dark:bg-gray-800">
                        <div className="font-mono text-sm space-y-2">
                          <div><strong>Subject:</strong> Clear description of the task</div>
                          <div className="mt-4">
                            <strong>Body:</strong>
                            <div className="mt-2 space-y-1 pl-4">
                              <div>1. Context: "I need this for [purpose]"</div>
                              <div>2. Task: "Please [specific action]"</div>
                              <div>3. Format: "Deliver as [Excel/PPT/PDF]"</div>
                              <div>4. Details: Any specific requirements</div>
                            </div>
                          </div>
                          <div className="mt-4"><strong>Attachments:</strong> All relevant files</div>
                        </div>
                      </div>
                      <p className="text-sm">
                        <strong>Pro tip:</strong> The more context you provide, the better the output. 
                        Include examples of preferred formats when possible.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18">
                  <AccordionTrigger className="inter-text-medium">How long do tasks take?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <div className="grid gap-3">
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-primary" />
                          <div>
                            <strong>Simple tasks:</strong> Basic analysis, short summaries, simple calculations - typically complete in minutes
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          <div>
                            <strong>Standard tasks:</strong> Full reports, complex models, detailed research - receive focused attention
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <div>
                            <strong>Complex tasks:</strong> Multi-source analysis, extensive modeling, large documents - up to an hour for comprehensive depth
                          </div>
                        </div>
                      </div>
                      <p className="text-sm">
                        Professional and Enterprise plans include priority processing for faster turnaround.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19">
                  <AccordionTrigger className="inter-text-medium">What if I'm not satisfied with the output?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>We offer unlimited revisions on all plans. Simply reply to the delivery email with:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>What needs to be changed</li>
                        <li>Specific feedback on improvements</li>
                        <li>Examples of preferred format/style (if applicable)</li>
                      </ul>
                      <p className="mt-4">
                        Revisions are handled quickly with the same adaptive approach. Our goal is 100% satisfaction on every task.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20">
                  <AccordionTrigger className="inter-text-medium">Can I save templates for recurring tasks?</AccordionTrigger>
                  <AccordionContent>
                    <p className="inter-text">
                      Yes! Simply mention in your email that you'd like to save this as a template. 
                      For future similar tasks, reference the template name. This is perfect for weekly reports, 
                      standard analyses, or any recurring work. Professional and Enterprise plans can store 
                      unlimited custom templates.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Support & Help */}
          <Card>
            <CardHeader>
              <CardTitle className="inter-heading-normal flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Support & Resources
              </CardTitle>
              <CardDescription className="inter-text">We're here to help you succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-21">
                  <AccordionTrigger className="inter-text-medium">How do I get help if I'm stuck?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Multiple ways to get support:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>Email:</strong> support@zibly.ai (24-hour response)</li>
                        <li><strong>In-task help:</strong> Just ask Zibly for clarification</li>
                        <li><strong>Knowledge base:</strong> help.zibly.ai</li>
                        <li><strong>Priority support:</strong> Professional plans (4-hour response)</li>
                        <li><strong>Dedicated support:</strong> Enterprise plans (30-min response)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-22">
                  <AccordionTrigger className="inter-text-medium">Do you offer training or onboarding?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Yes, we offer several resources:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li><strong>Getting Started Guide:</strong> Sent after your first task</li>
                        <li><strong>Template library:</strong> 50+ examples for common use cases</li>
                        <li><strong>Best practices webinar:</strong> Monthly for new users</li>
                        <li><strong>1-on-1 onboarding:</strong> Included with Enterprise plans</li>
                        <li><strong>Team training:</strong> Custom sessions for organizations</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-23">
                  <AccordionTrigger className="inter-text-medium">Can I integrate Zibly with other tools?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 inter-text">
                      <p>Currently, Zibly works through email, which integrates naturally with your workflow. 
                      Enterprise customers can access:</p>
                      <ul className="space-y-2 list-disc pl-6">
                        <li>Custom email domains (tasks@yourcompany.com)</li>
                        <li>API access (coming soon)</li>
                        <li>Slack integration (beta)</li>
                        <li>Microsoft Teams integration (roadmap)</li>
                      </ul>
                      <p className="mt-4">
                        Email actually provides the most flexible integration—it works with every tool you already use.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions? */}
          <Card className="border-primary bg-secondary">
            <CardHeader>
              <CardTitle className="inter-heading-normal text-center">Still Have Questions?</CardTitle>
              <CardDescription className="inter-text text-center">
                We're here to help. Reach out anytime.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="mailto:support@zibly.ai?subject=Question about zibly.ai">
                    Email Support <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <CopyEmailButton size="sm" variant="outline" email="support@zibly.ai" />
                <Button asChild variant="outline" size="lg">
                  <Link href="mailto:work@zibly.ai?subject=Test task">
                    Try Your First Task Free
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
