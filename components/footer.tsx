"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string
  title: string
  slug: string
  publish_date: string
}

// Helper function to truncate long titles
function truncateTitle(title: string, maxLength: number = 30): string {
  if (title.length <= maxLength) return title
  return title.substring(0, maxLength).trim() + '...'
}

export default function Footer() {
  const pathname = usePathname()
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Fetch recent posts
    fetch('https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly/blog/posts')
      .then(res => res.json())
      .then(data => {
        const posts = Array.isArray(data) ? data : (data.posts || [])
        const sorted = posts
          .sort((a: BlogPost, b: BlogPost) =>
            new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
          )
          .slice(0, 4)
        setRecentPosts(sorted)
      })
      .catch(err => console.error('Error fetching blog posts:', err))
  }, [])

  // Don't show footer on dashboard pages
  if (pathname?.startsWith("/dashboard")) {
    return null
  }

  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {/* Product Links */}
            <div>
              <h3 className="text-base font-bold mb-4 text-black">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/solutions" className="text-black hover:text-primary transition-colors">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-black hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-black hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-base font-bold mb-4 text-black">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-black hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-black hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-black hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Use Cases - Professionals */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-base font-bold mb-4 text-black">Use Cases</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/solutions/consultants" className="text-black hover:text-primary transition-colors">
                    Consultants
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/investment-banking" className="text-black hover:text-primary transition-colors">
                    Investment Bankers
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/private-equity" className="text-black hover:text-primary transition-colors">
                    Private Equity
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/accountants" className="text-black hover:text-primary transition-colors">
                    Accountants
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/attorneys" className="text-black hover:text-primary transition-colors">
                    Attorneys
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/marketing" className="text-black hover:text-primary transition-colors">
                    Marketing Teams
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/product-managers" className="text-black hover:text-primary transition-colors">
                    Product Managers
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/strategy" className="text-black hover:text-primary transition-colors">
                    Strategy Executives
                  </Link>
                </li>
              </ul>
            </div>

            {/* Use Cases - Students */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <h3 className="text-base font-bold mb-4 text-black">Students</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/solutions/mba-students" className="text-black hover:text-primary transition-colors">
                    MBA Students
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/law-students" className="text-black hover:text-primary transition-colors">
                    Law Students
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/undergraduates" className="text-black hover:text-primary transition-colors">
                    Undergraduates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recent Blog Posts */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <h3 className="text-base font-bold mb-4 text-black">Recent Blog Posts</h3>
              <ul className="space-y-3 text-sm">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-black hover:text-primary transition-colors"
                        title={post.title}
                      >
                        {truncateTitle(post.title)}
                      </Link>
                    </li>
                  ))
                ) : (
                  // Fallback links while loading
                  <>
                    <li>
                      <Link href="/blog/avoiding-api-pricing-pitfalls-a-comprehensive-guide" className="text-black hover:text-primary transition-colors">
                        API Pricing Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/mba-course-a-comprehensive-guide-to-organizational-behaviour" className="text-black hover:text-primary transition-colors">
                        MBA: Organizational Behaviour
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/law-school-a-comprehensive-guide-to-criminal-law" className="text-black hover:text-primary transition-colors">
                        Law School: Criminal Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/a-comprehensive-and-complete-guide-to-pricing-of-saas-products" className="text-black hover:text-primary transition-colors">
                        SaaS Pricing Strategies
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link href="/blog" className="text-primary font-semibold hover:underline transition-colors">
                    View All Articles →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-black/70">
              <p>© 2025 Zibly. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span className="hidden md:inline">•</span>
                <span>Email: <a href="mailto:work@zibly.ai" className="text-primary hover:underline">work@zibly.ai</a></span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-black/70 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-black/70 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/security" className="text-black/70 hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
