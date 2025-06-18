"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ArrowRight,Menu, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"
import { useAuth } from "@/components/auth-provider"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading } = useAuth()

  // Don't show navbar on auth pages or dashboard
  if (pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/dashboard")) {
    return null
  }

  const solutionsItems = [
    { title: "Consultants", href: "/solutions/consultants", description: "Strategic analysis and client deliverables" },
    { title: "Investment Bankers", href: "/solutions/investment-banking", description: "Deal analysis and pitch decks" },
    { title: "Private Equity", href: "/solutions/private-equity", description: "Portfolio analysis and due diligence" },
    { title: "Accountants", href: "/solutions/accountants", description: "Financial analysis and reporting" },
    { title: "Attorneys", href: "/solutions/attorneys", description: "Legal research and document review" },
    { title: "Marketing Teams", href: "/solutions/marketing", description: "Market research and campaign analysis" },
    { title: "Product Managers", href: "/solutions/product-managers", description: "Competitive analysis and user research" },
    { title: "Strategy Executives", href: "/solutions/strategy", description: "Strategic planning and market intelligence" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/features" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {solutionsItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {!loading && user ? (
            <Button asChild variant="ghost">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost">
              <Link href="/login">Sign In</Link>
            </Button>
          )}
          <Button asChild className="bg-primary hover:bg-primary-600">
            <Link href="mailto:work@zibly.ai">Try Free Task <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        {/* Mobile menu button - positioned on the right */}
        <div className="flex md:hidden flex-1 justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-lg font-semibold mb-4">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4">
                <Link href="/features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
                <Link href="/pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-medium">Solutions</div>
                  <div className="pl-4 space-y-2">
                    {solutionsItems.map((item) => (
                      <Link 
                        key={item.title}
                        href={item.href} 
                        className="block text-sm text-muted-foreground hover:text-foreground" 
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/faq" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <Link href="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                
                <div className="flex flex-col space-y-2 pt-4">
                  {!loading && user ? (
                    <Button asChild variant="outline">
                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        Dashboard
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                  )}
                  <Button asChild className="bg-primary hover:bg-primary-600">
                    <Link href="mailto:work@zibly.ai" onClick={() => setIsOpen(false)}>
                      Try Free Task
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}