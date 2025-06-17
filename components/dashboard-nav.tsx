"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BarChart3, CreditCard, Home, Mail, Settings, User, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Email History", href: "/dashboard/history", icon: Mail },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleSignOut = async () => {
    await logout()
    router.push("/")
  }

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">zibly.ai</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center space-x-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <User className="h-4 w-4 text-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name || "User"}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email || "user@example.com"}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start mt-2" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
