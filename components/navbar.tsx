"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "@/components/logo"
import { useAuth } from "@/components/auth-provider"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading } = useAuth()

  // Don't show navbar on auth pages or dashboard
  if (pathname?.startsWith("/login") || pathname?.startsWith("/signup") || pathname?.startsWith("/dashboard")) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Pricing
            </Link>
            <Link href="/solutions" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Solutions
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
          </nav>
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
            <Link href="mailto:work@zibly.ai">Try Free Task</Link>
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
                <Link href="/solutions" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Solutions
                </Link>
                <Link href="/blog" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
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
