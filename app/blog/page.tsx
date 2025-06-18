"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BlogPage() {
  const router = useRouter()

  useEffect(() => {
    // Open Medium blog in new tab
    window.open('https://medium.com/@zibly.ai', '_blank')
    
    // Redirect back to home after a short delay
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Opening Blog...</h1>
        <p className="text-muted-foreground">
          We're opening our blog in a new tab. You'll be redirected shortly.
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      </div>
    </div>
  )
} 