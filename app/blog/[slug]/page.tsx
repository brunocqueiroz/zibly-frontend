import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import { Metadata } from 'next'

interface BlogPost {
  id: string
  title: string
  slug: string
  tags: string[]
  publish_date: string
  content_markdown?: string
  // Add other fields that might come from the API
}

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts/${slug}`,
      { next: { revalidate: 3600 } }
    )
    
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error('Failed to fetch post')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Zibly.ai Blog',
      description: 'The requested blog post could not be found.',
    }
  }
  
  // Extract first paragraph for description (limit to 160 chars)
  const description = post.content_markdown
    ? post.content_markdown
        .replace(/^#.*$/gm, '') // Remove headers
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
        .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
        .split('\n')
        .find(line => line.trim().length > 20)
        ?.trim()
        .substring(0, 160) + '...'
    : `Read about ${post.title} on the Zibly.ai blog. Insights on AI, productivity, and the future of work.`
  
  const canonicalUrl = `https://zibly.ai/blog/${post.slug}`
  
  return {
    title: `${post.title} - Zibly.ai Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      url: canonicalUrl,
      siteName: 'Zibly.ai',
      type: 'article',
      publishedTime: post.publish_date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-4xl px-4 py-16 md:px-6 md:py-24">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publish_date)}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/80 transition-colors"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </header>

      {/* Post Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        {post.content_markdown ? (
          <ReactMarkdown>{post.content_markdown}</ReactMarkdown>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Content not available.
            </p>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <div className="mt-16 border-t pt-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">
            Ready to transform your workflow?
          </h3>
          <p className="text-muted-foreground mb-4">
            Experience the power of email-driven AI automation with zibly.ai
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/pricing">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 