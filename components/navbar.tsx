"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ArrowRight,Menu, ChevronDown } from "lucide-react"
import Logo from "@/components/logo"
import { useAuth } from "@/components/auth-provider"
import CopyEmailButton from "@/components/copy-email-button"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, loading } = useAuth()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't show navbar on dashboard
  if (pathname?.startsWith("/dashboard")) {
    return null
  }

  const solutionsPros = [
    { title: "Consultants", href: "/solutions/consultants", description: "Strategic analysis and client deliverables" },
    { title: "Investment Bankers", href: "/solutions/investment-banking", description: "Deal analysis and pitch decks" },
    { title: "Private Equity", href: "/solutions/private-equity", description: "Portfolio analysis and due diligence" },
    { title: "Accountants", href: "/solutions/accountants", description: "Financial analysis and reporting" },
    { title: "Attorneys", href: "/solutions/attorneys", description: "Legal research and document review" },
    { title: "Marketing Teams", href: "/solutions/marketing", description: "Market research and campaign analysis" },
    { title: "Product Managers", href: "/solutions/product-managers", description: "Competitive analysis and user research" },
    { title: "Strategy Executives", href: "/solutions/strategy", description: "Strategic planning and market intelligence" },
  ]
  const solutionsStudents = [
    { title: "MBA Students", href: "/solutions/mba-students", description: "Case prep, modeling, recruiting decks" },
    { title: "Law Students", href: "/solutions/law-students", description: "Outlines, briefs, exam checklists" },
    { title: "Undergraduates", href: "/solutions/undergraduates", description: "Summaries, analysis, presentations" },
  ]

  const isHomePage = pathname === "/"
  const isFaqPage = pathname === "/faq"
  const isBlogPage = pathname?.startsWith("/blog")
  const isSolutionsPage = pathname?.startsWith("/solutions")
  const isLoginPage = pathname?.startsWith("/login")
  const isSignupPage = pathname?.startsWith("/signup")
  const isTermsPage = pathname === "/terms"
  const isPrivacyPage = pathname === "/privacy"
  const isSecurityPage = pathname === "/security"
  const isPricingPage = pathname === "/pricing"
  const isFeaturesPage = pathname === "/features"
  const isReportsPage = pathname?.startsWith("/reports")
  const isWhitePage = isHomePage || isFaqPage || isBlogPage || isSolutionsPage || isLoginPage || isSignupPage || isTermsPage || isPrivacyPage || isSecurityPage || isPricingPage || isFeaturesPage || isReportsPage
  const navBg = isWhitePage ? (isScrolled ? 'bg-white/80' : 'bg-white') : (isScrolled ? 'bg-background/80' : 'bg-background')
  const textColor = isWhitePage ? 'text-black' : 'text-white'

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/20 backdrop-blur-sm shadow-sm transition-all duration-300 ${navBg}`}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/features" legacyBehavior passHref>
                  <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${textColor} transition-colors hover:text-black focus:text-black focus:outline-none`}>
                    Deep Work Agent
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/security" legacyBehavior passHref>
                  <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${textColor} transition-colors hover:text-black focus:text-black focus:outline-none`}>
                    Security + Privacy
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/solutions" legacyBehavior passHref>
                  <NavigationMenuTrigger className={`${textColor} hover:text-black`}>Use Cases</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <div className={`w-[560px] p-4 grid grid-cols-2 gap-4 ${isWhitePage ? 'bg-white border-2 border-black' : 'bg-background border border-border'}`}>
                    <div>
                      <div className={`text-xs uppercase mb-2 ${isWhitePage ? 'text-black/70' : 'text-white/70'}`}>Professionals</div>
                      <ul className="space-y-1">
                        {solutionsPros.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors hover:bg-accent group"
                              >
                                <div className={`font-medium ${isWhitePage ? 'text-black group-hover:text-white' : 'text-white group-hover:text-white'}`}>{item.title}</div>
                                <p className={`text-xs ${isWhitePage ? 'text-black/70 group-hover:text-white' : 'text-white/70 group-hover:text-white'}`}>{item.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className={`text-xs uppercase mb-2 ${isWhitePage ? 'text-black/70' : 'text-white/70'}`}>Students</div>
                      <ul className="space-y-1">
                        {solutionsStudents.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors hover:bg-accent group"
                              >
                                <div className={`font-medium ${isWhitePage ? 'text-black group-hover:text-white' : 'text-white group-hover:text-white'}`}>{item.title}</div>
                                <p className={`text-xs ${isWhitePage ? 'text-black/70 group-hover:text-white' : 'text-white/70 group-hover:text-white'}`}>{item.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${textColor} transition-colors hover:text-black focus:text-black focus:outline-none`}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${textColor} transition-colors hover:text-black focus:text-black focus:outline-none`}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${textColor} transition-colors hover:text-black focus:text-black focus:outline-none`}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {!loading && user ? (
            <Button asChild variant="ghost" className={`${textColor} ${isWhitePage ? 'hover:text-primary' : 'hover:text-white'}`}>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild variant="ghost" className={`${textColor} ${isWhitePage ? 'hover:text-primary' : 'hover:text-white'}`}>
              <Link href="/login">Sign In</Link>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <Button asChild className="bg-black hover:bg-black/90 text-white">
              <Link href="mailto:work@zibly.ai">Email Your First Task Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <CopyEmailButton size="sm" variant="outline" className={`${isWhitePage ? 'bg-black text-white border-white/30 hover:bg-black/80' : 'bg-black text-white border-white/30 hover:bg-black/80'}`} />
          </div>
        </div>

        {/* Mobile menu button - positioned on the right */}
        <div className="flex md:hidden flex-1 justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={textColor}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-black border-l-2 border-black">
              <SheetTitle className="text-lg font-semibold mb-4 text-black">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4">
                <Link href="/features" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                  Deep Work Agent
                </Link>
                <Link href="/security" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                  Security + Privacy
                </Link>
                <div className="space-y-2">
                  <Link href="/solutions" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                    Use Cases
                  </Link>
                  <div className="pl-4">
                    <div className="text-xs uppercase text-black/70 mb-1">Professionals</div>
                    <div className="pl-2 space-y-1 mb-2">
                      {solutionsPros.map((item) => (
                        <Link key={item.title} href={item.href} className="block text-sm text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="text-xs uppercase text-black/70 mb-1">Students</div>
                    <div className="pl-2 space-y-1">
                      {solutionsStudents.map((item) => (
                        <Link key={item.title} href={item.href} className="block text-sm text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/pricing" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link href="/faq" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <Link href="/blog" className="text-lg font-medium text-black hover:text-primary" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>

                <div className="flex flex-col space-y-2 pt-4">
                  {!loading && user ? (
                    <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        Dashboard
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                  )}
                  <div className="flex items-center gap-2">
                    <Button asChild className="bg-black hover:bg-black/90 text-white flex-1">
                      <Link href="mailto:work@zibly.ai" onClick={() => setIsOpen(false)}>
                        Email Your First Task Free
                      </Link>
                    </Button>
                    <CopyEmailButton size="sm" variant="outline" className="border-black text-black hover:bg-black hover:text-white" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
