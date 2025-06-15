import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, BarChart3, PenTool, Search, Calculator, Database, Clock, Shield, Target } from 'lucide-react'
import type { Metadata } from 'next' // Import Metadata type

export const metadata: Metadata = {
  title: "Features - What zibly.ai Can Do For You",
  description: "Explore the powerful analytical, research, and content creation features of zibly.ai. Delegate tasks like data analysis, market research, and professional writing.",
  openGraph: {
    title: "zibly.ai Features: Your AI Analyst's Capabilities",
    description: "Discover how zibly.ai handles complex tasks from data analysis to professional document creation, saving you hours.",
  },
  twitter: {
    title: "zibly.ai Features: Your AI Analyst's Capabilities",
    description: "Discover how zibly.ai handles complex tasks from data analysis to professional document creation, saving you hours.",
  },
}

export default function FeaturesPage() {
  // ... rest of the component code
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none inter-heading-normal">
                Finally, the Analytical Support You Deserve
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl inter-text">
                Zibly handles the time-consuming analysis, research, and creation tasks that eat up your day—so you can
                focus on the strategic work that matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Analyst Tasks */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">Your Data Backlog</h2>
              <p className="max-w-[900px] text-lg inter-text">
                Every spreadsheet gathering dust, every analysis you've been putting off—Zibly clears your backlog
                overnight.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Raw sales data → Segmented analysis with growth opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Send us your CRM export or sales spreadsheet. Get back customer segmentation, cohort analysis, and
                  specific recommendations for growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calculator className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Financial statements → Ratio analysis and peer benchmarking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Upload your financials and get comprehensive ratio analysis, industry comparisons, and trend
                  identification with actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Survey responses → Sentiment analysis and actionable insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Raw survey data becomes structured insights with sentiment scoring, key themes, and specific
                  recommendations for improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">KPI dashboards → Trend analysis and variance explanations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Send your dashboard data and get detailed variance analysis, trend explanations, and forecasting with
                  confidence intervals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">The Research Nobody Wants to Do</h2>
              <p className="max-w-[900px] text-lg inter-text">
                Those 10-hour research projects that junior staff dread? Zibly thrives on them.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Competitive Intelligence Gathering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text mb-4">
                  Complete SWOT analysis of your competitors with pricing, positioning, and strategic insights.
                </p>
                <ul className="space-y-2 text-sm inter-text">
                  <li>• Product feature comparisons</li>
                  <li>• Pricing strategy analysis</li>
                  <li>• Market positioning assessment</li>
                  <li>• Competitive threat evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Market Sizing with TAM/SAM/SOM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text mb-4">
                  Comprehensive market analysis with multiple validation approaches and growth projections.
                </p>
                <ul className="space-y-2 text-sm inter-text">
                  <li>• Bottom-up market calculations</li>
                  <li>• Top-down validation</li>
                  <li>• Addressable market segmentation</li>
                  <li>• 5-year growth projections</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Industry Trend Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text mb-4">
                  Deep industry analysis with implications specific to your business and strategic recommendations.
                </p>
                <ul className="space-y-2 text-sm inter-text">
                  <li>• Technology disruption analysis</li>
                  <li>• Regulatory impact assessment</li>
                  <li>• Consumer behavior shifts</li>
                  <li>• Strategic implications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Due Diligence Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text mb-4">
                  Comprehensive due diligence with red flag identification and risk assessment.
                </p>
                <ul className="space-y-2 text-sm inter-text">
                  <li>• Financial health analysis</li>
                  <li>• Management team background</li>
                  <li>• Market position validation</li>
                  <li>• Risk factor identification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Factory */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">Professional Writing, Not AI Slop</h2>
              <p className="max-w-[900px] text-lg inter-text">
                Forget "write me a blog post." Think bigger.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <PenTool className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Board Narratives That Compel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Transform your bullet points into compelling board narratives that tell the story behind the numbers
                  and drive decision-making.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Client-Ready Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Turn meeting notes and rough ideas into polished, professional proposals that win business and advance
                  projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Executive Summaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Convert complex data findings into clear, actionable executive summaries that drive strategic
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="inter-heading-normal">Investor Updates That Get Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="inter-text">
                  Draft investor updates that tell your growth story compellingly and maintain strong investor
                  relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Zibly Different */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-5xl inter-heading-normal">What Makes Zibly Different</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <Clock className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Deep Work, Not Quick Answers</h3>
                <p className="inter-text">
                  We spend 15-30 minutes on each task because good work takes time. Every output is checked for
                  accuracy, completeness, and professional polish.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <Database className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">It Learns Your Business</h3>
                <p className="inter-text">
                  Zibly remembers your company context, industry terminology, and preferred formats. Outputs that
                  actually sound like they came from your company.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <FileText className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl inter-heading-normal">Real Files, Not Text</h3>
                <p className="inter-text">
                  Complete Excel files. Polished presentations. Professional documents. Everything ready to use, share,
                  or present immediately.
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
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl inter-heading-normal">
                See Zibly Handle Your Specific Work
              </h2>
              <p className="mx-auto max-w-[700px] text-lg inter-text">
                Send us your actual task—the one that's been sitting on your desk. First one's free.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <Link href="mailto:work@zibly.ai">
                  Forward Your Task Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
