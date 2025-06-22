import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/login/', '/signup/'],
    },
    sitemap: 'https://zibly.ai/sitemap.xml',
  }
} 