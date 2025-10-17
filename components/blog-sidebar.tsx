import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string
  title: string
  slug: string
  tags: string[]
  publish_date: string
}

interface BlogSidebarProps {
  currentSlug?: string
  posts: BlogPost[]
}

export default function BlogSidebar({ currentSlug, posts }: BlogSidebarProps) {
  // Get recent posts (excluding current)
  const recentPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 5)

  // Get all unique tags with counts
  const tagCounts: { [key: string]: number } = {}
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)

  return (
    <aside className="space-y-6">
      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <Card className="bg-white border-2 border-black">
          <CardHeader>
            <CardTitle className="text-lg">Recent Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block text-sm text-black hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <Card className="bg-white border-2 border-black">
          <CardHeader>
            <CardTitle className="text-lg">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(([tag, count]) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    {tag} ({count})
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <Card className="bg-primary text-white border-2 border-black">
        <CardHeader>
          <CardTitle className="text-lg">Try Zibly Free</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Email your first task to your AI colleague. No credit card required.
          </p>
          <Link
            href="mailto:work@zibly.ai"
            className="inline-block bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition-colors text-sm font-medium"
          >
            Email Your First Task →
          </Link>
        </CardContent>
      </Card>
    </aside>
  )
}