import { MetadataRoute } from 'next'

// Function to fetch blog posts for sitemap
async function getBlogPosts() {
  try {
    const response = await fetch('https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts', {
      next: { revalidate: 3600 }
    })
    if (!response.ok) return []
    const data = await response.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

// Function to fetch recent bias reports for sitemap
// Only include high-quality reports (bias score 5+ or enhanced reports)
async function getBiasReports() {
  try {
    // Fetch public reports from API
    const response = await fetch('https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/bias-reports/public?limit=100&min_bias_score=5', {
      next: { revalidate: 3600 }  // Cache for 1 hour
    })

    if (!response.ok) {
      console.error('Failed to fetch public reports:', response.status)
      return []
    }

    const data = await response.json()
    return data.reports || []
  } catch (error) {
    console.error('Error fetching bias reports for sitemap:', error)
    return []
  }
}

// Function to extract popular tags from blog posts
function getPopularTags(posts: any[]) {
  const tagCounts: { [key: string]: number } = {}
  
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach((tag: string) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })
  
  // Return tags that appear in at least 2 posts, sorted by frequency
  return Object.entries(tagCounts)
    .filter(([_, count]) => count >= 2)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10) // Limit to top 10 tags
    .map(([tag]) => tag)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.zibly.ai'

  // Get blog posts
  const blogPosts = await getBlogPosts()

  // Get bias reports (when API is ready)
  const biasReports = await getBiasReports()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/solutions/mba-students`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/law-students`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/undergraduates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/consultants`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/private-equity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/attorneys`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/investment-banking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/strategy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/marketing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/product-managers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions/accountants`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
  
  // Add blog posts to sitemap
  const blogPostPages = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publish_date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Add popular tag pages to sitemap
  const popularTags = getPopularTags(blogPosts)
  const tagPages = popularTags.map(tag => ({
    url: `${baseUrl}/blog?tag=${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Add bias reports to sitemap
  const reportPages = biasReports.map((report: any) => ({
    url: `${baseUrl}/reports/${report.reportId}`,
    lastModified: new Date(report.createdAt || report.createdAtISO),
    changeFrequency: 'never' as const, // Reports don't change after creation
    priority: 0.5,
  }))

  return [...staticPages, ...blogPostPages, ...tagPages, ...reportPages]
} 
