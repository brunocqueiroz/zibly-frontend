"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CreditCard, Home, Mail, Settings, User, LogOut, Users } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Team", href: "/dashboard/team", icon: Users },
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
    <div className="fixed left-0 top-0 h-screen w-64 flex-col border-r-2 border-black bg-white flex">
      <div className="flex h-16 items-center border-b-2 border-black px-6 flex-shrink-0">
        <Link href="/" className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-black">zibly.ai</span>
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
                  ? "bg-gray-100 text-black border-2 border-black"
                  : "text-black hover:bg-gray-50",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="border-t-2 border-black p-4">
        <div className="flex items-center space-x-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-black">
            <User className="h-4 w-4 text-black" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-black">{user?.name || "User"}</p>
            <p className="text-xs truncate text-black">{user?.email || "user@example.com"}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full justify-start mt-2 text-black hover:bg-gray-50" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
