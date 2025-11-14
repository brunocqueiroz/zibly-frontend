'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Download, Share2, Calendar, Globe, AlertCircle, FileText, Edit3, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface OpposingArticle {
  url: string
  title: string
  source: string
  snippet: string
  facts_extracted: string[]
}

interface ReportData {
  reportId: string
  url: string
  title: string
  biasScore: number
  biasExplanation: string
  analysis: string
  omittedFacts: string[]
  politicalSpectrum?: {
    lean: number
    analysis: string
  }
  opposingArticles?: OpposingArticle[]
  rewrittenArticle?: string
  metadata: {
    createdAt?: string
    analyzedAt?: string
    version?: string
    enhanced?: boolean
  }
  createdAt: string
}

async function getReport(id: string): Promise<ReportData | null> {
  try {
    const response = await fetch(
      `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/bias-reports/${id}`,
      {
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error('Failed to fetch report')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching report:', error)
    return null
  }
}

function BiasScoreIndicator({ score }: { score: number }) {
  const getScoreColor = (score: number) => {
    if (score <= 3) return 'bg-green-500'
    if (score <= 6) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getScoreLabel = (score: number) => {
    if (score <= 3) return 'Low Bias'
    if (score <= 6) return 'Moderate Bias'
    return 'High Bias'
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl font-bold">{score}/10</div>
      <div className="flex-1">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${getScoreColor(score)} transition-all duration-500`}
            style={{ width: `${score * 10}%` }}
          />
        </div>
        <Badge className="mt-2" variant={score <= 3 ? 'default' : score <= 6 ? 'secondary' : 'destructive'}>
          {getScoreLabel(score)}
        </Badge>
      </div>
    </div>
  )
}

function PoliticalSpectrum({ lean, analysis }: { lean: number; analysis: string }) {
  const position = ((lean + 10) / 20) * 100

  return (
    <div className="space-y-4">
      <div className="relative h-8 bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 rounded-full">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-800 rounded-full shadow-lg transition-all duration-500"
          style={{ left: `${position}%`, transform: 'translateX(-50%) translateY(-50%)' }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Far Left</span>
        <span>Center</span>
        <span>Far Right</span>
      </div>
      <p className="text-sm text-gray-700">{analysis}</p>
    </div>
  )
}

function handleShare(report: ReportData) {
  const shareData = {
    title: `Bias Analysis: ${report.title}`,
    text: `Check out this bias analysis report on ${report.title}. Bias Score: ${report.biasScore}/10`,
    url: window.location.href
  }

  if (navigator.share) {
    navigator.share(shareData).catch(err => console.log('Error sharing:', err))
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Report link copied to clipboard!')
    })
  }
}

function generatePDF(report: ReportData) {
  // Create a printable version and trigger print dialog
  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${report.title} - Bias Analysis Report</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          color: #333;
        }
        h1 { color: #1a1a1a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
        h2 { color: #2563eb; margin-top: 30px; }
        .header { margin-bottom: 30px; }
        .score { font-size: 24px; font-weight: bold; color: ${report.biasScore <= 3 ? '#22c55e' : report.biasScore <= 6 ? '#eab308' : '#ef4444'}; }
        .section { margin: 20px 0; }
        .fact-item { margin: 10px 0; padding-left: 20px; }
        .metadata { color: #666; font-size: 14px; }
        @media print {
          body { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Bias Analysis Report</h1>
        <div class="metadata">
          <p><strong>Article:</strong> ${report.title}</p>
          <p><strong>URL:</strong> ${report.url}</p>
          <p><strong>Analyzed:</strong> ${new Date(report.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div class="section">
        <h2>Bias Assessment</h2>
        <p class="score">Bias Score: ${report.biasScore}/10</p>
        <p>${report.biasExplanation}</p>
      </div>

      <div class="section">
        <h2>Detailed Analysis</h2>
        <p>${report.analysis}</p>
      </div>

      ${report.politicalSpectrum ? `
      <div class="section">
        <h2>Political Orientation</h2>
        <p>Position: ${report.politicalSpectrum.lean > 0 ? 'Right' : report.politicalSpectrum.lean < 0 ? 'Left' : 'Center'} (${report.politicalSpectrum.lean})</p>
        <p>${report.politicalSpectrum.analysis}</p>
      </div>
      ` : ''}

      ${report.omittedFacts && report.omittedFacts.length > 0 ? `
      <div class="section">
        <h2>Potentially Omitted Facts</h2>
        ${report.omittedFacts.map(fact => `<div class="fact-item">• ${fact}</div>`).join('')}
      </div>
      ` : ''}

      ${report.opposingArticles && report.opposingArticles.length > 0 ? `
      <div class="section">
        <h2>Opposing Viewpoints</h2>
        ${report.opposingArticles.map(article => `
          <div style="margin: 15px 0;">
            <strong>${article.title}</strong><br>
            <em>${article.source}</em><br>
            ${article.snippet}
          </div>
        `).join('')}
      </div>
      ` : ''}

      <div class="section" style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc;">
        <p style="font-size: 12px; color: #666;">
          Generated by Zibly Bias Checker | Report ID: ${report.reportId}<br>
          This report was generated using AI analysis and should be considered as one perspective among many.
        </p>
      </div>
    </body>
    </html>
  `

  printWindow.document.write(htmlContent)
  printWindow.document.close()

  // Trigger print after content loads
  printWindow.onload = () => {
    printWindow.print()
  }
}

export default function ReportPage({ params }: { params: { id: string } }) {
  const [report, setReport] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Force light theme for this page
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'

    // Fetch report
    getReport(params.id).then(data => {
      setReport(data)
      setLoading(false)
    })

    // Cleanup
    return () => {
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [params.id])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!report) {
    notFound()
  }

  const analyzedDate = new Date(report.metadata?.analyzedAt || report.createdAt)
  const formattedDate = analyzedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const isEnhanced = report.metadata?.enhanced || (report.opposingArticles && report.opposingArticles.length > 0)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare(report)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => generatePDF(report)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Report Title */}
        <Card className="mb-6 border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">{report.title}</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate max-w-md">
                  {new URL(report.url).hostname}
                </a>
              </span>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bias Score */}
        <Card className="mb-6 border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-gray-900">Bias Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BiasScoreIndicator score={report.biasScore} />
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700">{report.biasExplanation}</p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Original vs Rewritten (if enhanced) */}
        {isEnhanced && report.rewrittenArticle ? (
          <Tabs defaultValue="analysis" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="analysis">
                <FileText className="mr-2 h-4 w-4" />
                Original Analysis
              </TabsTrigger>
              <TabsTrigger value="rewritten">
                <Edit3 className="mr-2 h-4 w-4" />
                Unbiased Rewrite
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analysis" className="space-y-6">
              {/* Original Analysis */}
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Detailed Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap">{report.analysis}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Political Spectrum */}
              {report.politicalSpectrum && (
                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Political Orientation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PoliticalSpectrum
                      lean={report.politicalSpectrum.lean}
                      analysis={report.politicalSpectrum.analysis}
                    />
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="rewritten" className="space-y-6">
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Unbiased Rewrite</CardTitle>
                  <CardDescription className="text-gray-600">
                    This is an AI-generated attempt to present the same story with reduced bias and additional context
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap">{report.rewrittenArticle}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        ) : (
          /* Non-tabbed view for non-enhanced reports */
          <>
            <Card className="mb-6 border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Detailed Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">{report.analysis}</p>
                </div>
              </CardContent>
            </Card>

            {report.politicalSpectrum && (
              <Card className="mb-6 border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Political Orientation</CardTitle>
                </CardHeader>
                <CardContent>
                  <PoliticalSpectrum
                    lean={report.politicalSpectrum.lean}
                    analysis={report.politicalSpectrum.analysis}
                  />
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Opposing Articles (if enhanced) */}
        {report.opposingArticles && report.opposingArticles.length > 0 && (
          <Card className="mb-6 border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <ExternalLink className="h-5 w-5 text-blue-500" />
                Opposing Viewpoints
              </CardTitle>
              <CardDescription className="text-gray-600">
                Articles from different perspectives on the same topic
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {report.opposingArticles.map((article, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      {article.title}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{article.source}</p>
                  <p className="text-sm text-gray-700 mt-2">{article.snippet}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Omitted Facts */}
        {report.omittedFacts && report.omittedFacts.length > 0 && (
          <Card className="mb-6 border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Potentially Omitted Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {report.omittedFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            This report was generated by Zibly Bias Checker using AI analysis.
            Results should be considered as one perspective among many.
          </p>
          <p className="mt-2">
            Report ID: {report.reportId}
          </p>
        </div>
      </div>
    </div>
  )
}