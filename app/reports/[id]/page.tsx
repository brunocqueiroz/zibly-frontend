import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import ReportClient from './report-client'

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const response = await fetch(
      `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/bias-reports/${params.id}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      return {
        title: 'Report Not Found - Zibly Bias Checker',
        description: 'The requested bias analysis report could not be found.',
        robots: 'noindex, nofollow',
      }
    }

    const report = await response.json()

    // Determine if this report should be indexed
    const shouldIndex =
      report.biasScore >= 5 || // Significant bias
      report.metadata?.enhanced || // Enhanced report
      report.metadata?.featured || // Featured report
      report.metadata?.public === true // Explicitly marked as public

    // Generate title and description
    const title = `Bias Analysis: ${report.title.slice(0, 50)}${report.title.length > 50 ? '...' : ''}`
    const description = `Detailed bias analysis of "${report.title}" with a bias score of ${report.biasScore}/10. ${report.biasExplanation.slice(0, 120)}...`

    return {
      title: `${title} - Zibly Bias Checker`,
      description,
      keywords: `bias analysis, media bias, ${report.title}, fact checking, news analysis`,
      robots: shouldIndex ? 'index, follow' : 'noindex, follow',
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: report.createdAt,
        authors: ['Zibly AI Bias Checker'],
        siteName: 'Zibly',
        url: `https://zibly.ai/reports/${params.id}`,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
      alternates: {
        canonical: `https://zibly.ai/reports/${params.id}`,
      },
    }
  } catch (error) {
    return {
      title: 'Bias Analysis Report - Zibly',
      description: 'View detailed bias analysis reports powered by AI.',
      robots: 'noindex, nofollow',
    }
  }
}

export default async function ReportPage({ params }: { params: { id: string } }) {
  // Fetch report data server-side
  let report = null
  let structuredData = null

  try {
    const response = await fetch(
      `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/bias-reports/${params.id}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      notFound()
    }

    report = await response.json()

    // Generate structured data for SEO
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `https://zibly.ai/reports/${report.reportId}`,
      headline: report.title,
      description: report.biasExplanation,
      datePublished: report.createdAt,
      dateModified: report.createdAt,
      author: {
        '@type': 'Organization',
        name: 'Zibly AI',
        url: 'https://zibly.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zibly',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zibly.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://zibly.ai/reports/${report.reportId}`,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: report.biasScore,
        bestRating: 10,
        worstRating: 1,
        ratingCount: 1,
      },
      articleBody: report.analysis,
    }
  } catch (error) {
    notFound()
  }

  return (
    <>
      {/* Structured Data for SEO */}
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Client Component for interactivity */}
      <ReportClient initialReport={report} />
    </>
  )
}