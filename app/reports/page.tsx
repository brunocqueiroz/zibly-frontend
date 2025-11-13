import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Chrome, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bias Analysis Reports</h1>
        <p className="text-xl text-gray-600">
          AI-powered media bias detection and analysis
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            About Bias Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Zibly Bias Checker analyzes news articles and web content to identify potential bias,
            omitted facts, and political orientation. Our AI-powered analysis helps readers understand
            different perspectives and make more informed decisions.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Bias Score</div>
              <div className="text-sm text-gray-600 mt-1">1-10 scale assessment</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Omitted Facts</div>
              <div className="text-sm text-gray-600 mt-1">Missing context identified</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Political Spectrum</div>
              <div className="text-sm text-gray-600 mt-1">Left-right positioning</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Chrome className="h-5 w-5" />
            Get the Chrome Extension
          </CardTitle>
          <CardDescription>
            Analyze any article instantly while browsing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Install the Zibly Bias Checker Chrome extension to analyze articles directly from your browser.
            Get instant bias assessments, identify omitted facts, and see political orientation analysis
            with just one click.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Extension
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                Learn More
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Reports are generated using advanced AI models and should be considered as one perspective among many.
        </p>
        <p className="mt-2">
          Always cross-reference important information with multiple sources.
        </p>
      </div>
    </div>
  )
}