"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname()

  // Don't show footer on dashboard pages
  if (pathname?.startsWith("/dashboard")) {
    return null
  }

  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Product Links */}
            <div>
              <h3 className="text-base font-bold mb-4 text-black">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/features" className="text-black hover:text-primary transition-colors">
                    Features
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

            {/* Solutions - Professionals */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-base font-bold mb-4 text-black">Solutions</h3>
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

            {/* Solutions - Students */}
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
