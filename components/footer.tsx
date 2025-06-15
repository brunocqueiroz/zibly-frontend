import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your secure AI assistant that handles complex analysis and research while keeping your data completely private. We never store your information or use it to train AI models.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-muted-foreground hover:text-foreground">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-muted-foreground hover:text-foreground">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Solutions</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/industries/financial-services" className="text-muted-foreground hover:text-foreground">
                    Financial Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/industries/consulting" className="text-muted-foreground hover:text-foreground">
                    Research Reports
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Data Processing
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Presentations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:order-1">
              <p className="text-sm text-muted-foreground">© 2024 zibly.ai. All rights reserved.</p>
            </div>
            
            <div className="mt-4 md:mt-0 md:order-2">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                <span>• Zero Data Retention Policy</span>
                <span>• Your Data Never Trains AI Models</span>
                <span>• No Credit Card for First Task</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 md:order-3">
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
