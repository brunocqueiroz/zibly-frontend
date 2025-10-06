import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, X } from "lucide-react"
import { Metadata } from 'next'

// Metadata will be generated dynamically based on tag filter

interface BlogPost {
  id: string
  title: string
  slug: string
  tags: string[]
  publish_date: string
}

interface BlogResponse {
  posts: BlogPost[]
}

async function getBlogPosts(tag?: string): Promise<BlogPost[]> {
  try {
    const url = tag 
      ? `https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts/by-tags?tags=${encodeURIComponent(tag)}`
      : 'https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts'
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    const data: BlogResponse = await response.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
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

// Generate metadata dynamically based on tag filter
export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: Promise<{ tag?: string }> 
}): Promise<Metadata> {
  const { tag } = await searchParams
  
  if (tag) {
    // Get tag-specific posts to create more accurate descriptions
    const tagPosts = await getBlogPosts(tag)
    const postCount = tagPosts.length
    
    // Create tag-specific descriptions
    const getTagDescription = (tagName: string, count: number) => {
      const descriptions: { [key: string]: string } = {
        'Technology': `Discover ${count} cutting-edge technology articles covering AI tools, software solutions, and tech trends that boost productivity.`,
        'Business': `Read ${count} business strategy articles on growth, operations, and leveraging AI for competitive advantage.`,
        'Productivity': `Explore ${count} productivity guides and tips for optimizing workflows with AI-powered tools and techniques.`,
        'SaaS': `Browse ${count} SaaS articles covering software tools, platform comparisons, and digital transformation strategies.`,
        'Tutorial': `Follow ${count} step-by-step tutorials and practical guides for implementing AI solutions in your workflow.`,
        'Marketing': `Learn from ${count} marketing articles about AI-driven campaigns, automation, and growth strategies.`,
        'News': `Stay updated with ${count} latest news articles on AI developments, industry trends, and tech updates.`,
      }
      
      return descriptions[tagName] || `Explore ${count} articles about ${tagName.toLowerCase()} on AI, productivity, and the future of work.`
    }
    
    const description = getTagDescription(tag, postCount)
    
    return {
      title: `${tag} Articles (${postCount}) - Zibly.ai Blog`,
      description,
      openGraph: {
        title: `${tag} Articles - Zibly.ai Blog`,
        description,
        url: `https://zibly.ai/blog?tag=${encodeURIComponent(tag)}`,
        siteName: 'Zibly.ai',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${tag} Articles - Zibly.ai Blog`,
        description,
      },
      alternates: {
        canonical: `https://zibly.ai/blog?tag=${encodeURIComponent(tag)}`,
      },
      robots: {
        index: postCount > 0, // Only index if there are posts
        follow: true,
      },
    }
  }

  return {
    title: 'Blog - Zibly.ai',
    description: 'Insights on AI, productivity, and the future of work. Learn how to leverage technology to get more done with zibly.ai.',
    openGraph: {
      title: 'Blog - Zibly.ai',
      description: 'Insights on AI, productivity, and the future of work. Learn how to leverage technology to get more done with zibly.ai.',
      url: 'https://zibly.ai/blog',
      siteName: 'Zibly.ai',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog - Zibly.ai',
      description: 'Insights on AI, productivity, and the future of work. Learn how to leverage technology to get more done with zibly.ai.',
    },
    alternates: {
      canonical: 'https://zibly.ai/blog',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ tag?: string }> 
}) {
  const { tag } = await searchParams
  const posts = await getBlogPosts(tag)

  return (
    <div className="container max-w-4xl px-4 py-16 md:px-6 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">
          {tag ? `${tag} Posts` : 'Blog'}
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          {tag
            ? `Explore ${tag} related articles on AI, productivity, and the future of work.`
            : 'Insights on AI, productivity, and the future of work. Learn how to leverage technology to get more done.'
          }
        </p>
        
        {/* Tag Filter UI */}
        {tag && (
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2">
              <span className="text-sm text-white">Filtering by:</span>
              <Badge variant="secondary">{tag}</Badge>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
              >
                <Link href="/blog">
                  <X className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-primary">
            {tag ? `No posts found for "${tag}"` : 'No posts yet'}
          </h3>
          <p className="text-white">
            {tag ? (
              <>
                Try browsing{' '}
                <Link href="/blog" className="text-primary hover:underline">
                  all posts
                </Link>{' '}
                or select a different tag.
              </>
            ) : (
              'Check back soon for new content!'
            )}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <h2 className="text-xl font-semibold leading-tight text-primary group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-card-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publish_date)}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((postTag) => (
                      <Link key={postTag} href={`/blog?tag=${encodeURIComponent(postTag)}`}>
                        <Badge 
                          variant={tag === postTag ? "default" : "secondary"} 
                          className="text-xs cursor-pointer hover:bg-primary/80 transition-colors"
                        >
                          {postTag}
                        </Badge>
                      </Link>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-lg font-semibold mb-2 text-primary">
            Want more insights like these?
          </h3>
          <p className="text-card-foreground mb-4">
            Get AI-powered analysis delivered to your inbox. Try zibly.ai today.
          </p>
          <Link 
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
} 