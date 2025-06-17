import Link from "next/link";
import Logo from "@/components/logo";

const solutionsItems = [
  { title: "Consultants", href: "/solutions/consultants" },
  { title: "Investment Bankers", href: "/solutions/investment-banking" },
  { title: "Private Equity", href: "/solutions/private-equity" },
  { title: "Accountants", href: "/solutions/accountants" },
  { title: "Attorneys", href: "/solutions/attorneys" },
  { title: "Marketing Teams", href: "/solutions/marketing" },
  { title: "Product Managers", href: "/solutions/product-managers" },
  { title: "Strategy Executives", href: "/solutions/strategy" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Your AI analyst that handles the analytical heavy lifting so you can focus on strategy, creativity, and growth.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="text-xs text-muted-foreground">Your first task is free</div>
                  <div className="text-xs font-medium">work@zibly.ai</div>
                  <div className="text-xs text-muted-foreground">Average response: Under 5 minutes</div>
                </div>
              </div>
            </div>
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
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="text-sm font-semibold">Solutions</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {solutionsItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:order-1">
              <p className="text-sm text-muted-foreground">© 2025 zibly.ai. All rights reserved.</p>
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
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
