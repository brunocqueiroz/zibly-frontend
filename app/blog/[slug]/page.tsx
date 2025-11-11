import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import { Metadata } from 'next'
import BlogSidebar from "@/components/blog-sidebar"

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

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      'https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts',
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const data = await response.json()
    // API returns an object with posts array, not a direct array
    return Array.isArray(data) ? data : (data.posts || [])
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
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
  
  const canonicalUrl = `https://www.zibly.ai/blog/${post.slug}`
  
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

  // Get all posts for sidebar and navigation
  const allPosts = await getAllPosts()
  const sortedPosts = allPosts.sort((a, b) =>
    new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
  )

  // Find next and previous posts
  const currentIndex = sortedPosts.findIndex(p => p.slug === slug)
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null

  // Calculate reading time
  const readingTime = post.content_markdown ? calculateReadingTime(post.content_markdown) : 0

  // Share URLs
  const postUrl = `https://www.zibly.ai/blog/${slug}`
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`

  return (
    <div className="bg-white min-h-screen">
      <div className="container px-4 py-16 md:px-6 md:py-24">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Post Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-black">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-black">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publish_date)}
                </div>
                <div className="flex items-center gap-2 text-sm text-black">
                  <Clock className="h-4 w-4" />
                  {readingTime} min read
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
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

              {/* Share Buttons */}
              <div className="flex items-center gap-3 pb-6 border-b border-black">
                <span className="text-sm font-medium text-black flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share:
                </span>
                <a
                  href={linkedinShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black rounded-md bg-white text-black hover:bg-black hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black rounded-md bg-white text-black hover:bg-black hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </header>

            {/* Post Content */}
            <article className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-li:text-black prose-strong:text-black prose-a:text-primary">
              {post.content_markdown ? (
                <ReactMarkdown>{post.content_markdown}</ReactMarkdown>
              ) : (
                <div className="text-center py-12">
                  <p className="mb-4 text-black">
                    Content not available.
                  </p>
                </div>
              )}
            </article>

            {/* Next/Previous Navigation */}
            {(nextPost || prevPost) && (
              <nav className="mt-12 pt-8 border-t border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prevPost && (
                    <Link href={`/blog/${prevPost.slug}`} className="group">
                      <div className="border-2 border-black rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <p className="text-xs text-gray-600 mb-2">← Previous</p>
                        <p className="text-sm font-medium text-black group-hover:text-primary">
                          {prevPost.title}
                        </p>
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
                      <div className="border-2 border-black rounded-lg p-4 hover:bg-gray-50 transition-colors text-right">
                        <p className="text-xs text-gray-600 mb-2">Next →</p>
                        <p className="text-sm font-medium text-black group-hover:text-primary">
                          {nextPost.title}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              </nav>
            )}

            {/* CTA Section */}
            <div className="mt-16 border-t border-black pt-16">
              <div className="bg-white rounded-lg p-8 text-center border-2 border-black">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Ready to transform your workflow?
                </h3>
                <p className="text-black mb-4">
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

          {/* Right Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar currentSlug={slug} posts={sortedPosts} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
} 
