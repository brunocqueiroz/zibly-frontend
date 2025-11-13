import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileX, Home } from 'lucide-react'

export default function ReportNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <FileX className="h-8 w-8 text-gray-400" />
          </div>
          <CardTitle className="text-2xl">Report Not Found</CardTitle>
          <CardDescription className="mt-2">
            The bias analysis report you're looking for doesn't exist or has been removed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            This could happen if:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 text-left max-w-sm mx-auto">
            <li>• The report URL is incorrect</li>
            <li>• The report has expired (reports are kept for 90 days)</li>
            <li>• The report was deleted</li>
          </ul>
          <div className="pt-4">
            <Link href="/">
              <Button>
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}