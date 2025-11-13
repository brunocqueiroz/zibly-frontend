import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Share2, Calendar, Globe, AlertCircle } from 'lucide-react'
import Link from 'next/link'

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
  metadata: {
    createdAt?: string
    analyzedAt?: string
    version?: string
  }
  createdAt: string
}

async function getReport(id: string): Promise<ReportData | null> {
  try {
    const response = await fetch(
      `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/bias-reports/${id}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
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

export default async function ReportPage({ params }: { params: { id: string } }) {
  const report = await getReport(params.id)

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Report Title */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">{report.title}</CardTitle>
          <CardDescription className="flex items-center gap-4 mt-2">
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
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Bias Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <BiasScoreIndicator score={report.biasScore} />
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700">{report.biasExplanation}</p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap">{report.analysis}</p>
          </div>
        </CardContent>
      </Card>

      {/* Political Spectrum */}
      {report.politicalSpectrum && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Political Orientation</CardTitle>
          </CardHeader>
          <CardContent>
            <PoliticalSpectrum
              lean={report.politicalSpectrum.lean}
              analysis={report.politicalSpectrum.analysis}
            />
          </CardContent>
        </Card>
      )}

      {/* Omitted Facts */}
      {report.omittedFacts && report.omittedFacts.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
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
      <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
        <p>
          This report was generated by Zibly Bias Checker using AI analysis.
          Results should be considered as one perspective among many.
        </p>
        <p className="mt-2">
          Report ID: {report.reportId}
        </p>
      </div>
    </div>
  )
}