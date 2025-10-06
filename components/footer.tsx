import Link from "next/link";
import Logo from "@/components/logo";
import CopyEmailButton from "@/components/copy-email-button";

const solutionsItems = [
  { title: "Consultants", href: "/solutions/consultants" },
  { title: "Investment Bankers", href: "/solutions/investment-banking" },
  { title: "Private Equity", href: "/solutions/private-equity" },
  { title: "Accountants", href: "/solutions/accountants" },
  { title: "Attorneys", href: "/solutions/attorneys" },
  { title: "Marketing Teams", href: "/solutions/marketing" },
  { title: "Product Managers", href: "/solutions/product-managers" },
  { title: "Strategy Executives", href: "/solutions/strategy" },
  { title: "MBA Students", href: "/solutions/mba-students" },
  { title: "Law Students", href: "/solutions/law-students" },
  { title: "Undergraduates", href: "/solutions/undergraduates" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Company Info - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-sm inter-text text-foreground mb-6 max-w-sm">
                Your AI analyst that handles the analytical heavy lifting so you can focus on strategy, creativity, and growth.
              </p>
              <div className="space-y-2">
                <p className="text-sm inter-text-medium text-foreground">
                  Email: <a href="mailto:work@zibly.ai" className="text-white hover:underline">work@zibly.ai</a>
                </p>
                <div className="flex items-center gap-2">
                  <CopyEmailButton size="sm" variant="outline" />
                  <span className="text-xs text-foreground">No model training • Configurable retention • Email-based workflow</span>
                </div>
                <p className="text-sm inter-text text-foreground">
                  First task free • Typical turnaround: 2 minutes to 1 hour
                </p>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold inter-heading-normal mb-4 text-foreground">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/features" className="inter-text text-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="inter-text text-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="inter-text text-foreground hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold inter-heading-normal mb-4 text-foreground">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="inter-text text-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="inter-text text-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="inter-text text-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold inter-heading-normal mb-4">Solutions</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {solutionsItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inter-text text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-b py-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm inter-text text-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Zero Data Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Never Trains AI Models</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm inter-text text-muted-foreground">
              © 2025 zibly.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-sm inter-text text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm inter-text text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
