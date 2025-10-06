"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Logo from "@/components/logo"
import { useAuth } from "@/components/auth-provider"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, user, loading: authLoading, refetch } = useAuth() // Keep refetch if needed elsewhere, but not for immediate post-login
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const registered = searchParams.get("registered") === "true"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    console.log("Attempting login with:", email)

    try {
      const success = await login(email, password)
      console.log("Login call returned:", success)
      // The redirect is now handled by the useEffect below,
      // which waits for the user state in AuthProvider to update.
      if (!success) {
        setError("Invalid email or password")
        setIsSubmitting(false) // Only set submitting to false if login failed here
      }
      // If successful, isSubmitting will be reset by the redirect or if authLoading becomes false without a user
    } catch (error) {
      console.error("Login error:", error)
      setError("Something went wrong")
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    // Only redirect if auth is not loading and user is successfully set
    if (!authLoading && user) {
      console.log("Auth state updated. User:", user.email, "Redirecting to:", callbackUrl)
      router.push(callbackUrl)
    } else if (!authLoading && !user && isSubmitting) {
      // If login attempt finished (isSubmitting was true), auth is not loading, but no user
      // it means login failed at some point, ensure isSubmitting is reset.
      setIsSubmitting(false)
    }
  }, [user, authLoading, router, callbackUrl, isSubmitting])

  if (authLoading && !user) {
    // Show loading only if genuinely loading initial auth state or during login
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Logo size="lg" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const handleDemoLogin = () => {
    const emailInput = document.getElementById("email") as HTMLInputElement
    const passwordInput = document.getElementById("password") as HTMLInputElement

    if (emailInput && passwordInput) {
      emailInput.value = "demo@zibly.ai"
      passwordInput.value = "password123"
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Logo size="lg" />
          <h1 className="text-2xl tracking-tight inter-heading-normal">Welcome back</h1>
          <p className="text-sm inter-text">Enter your credentials to access your account</p>
        </div>

        {registered && (
          <Alert className="bg-secondary border-primary">
            <AlertDescription className="text-primary">
              Account created successfully! Please sign in.
            </AlertDescription>
          </Alert>
        )}

        <Alert className="bg-secondary border-border">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-foreground">
            <div className="space-y-1">
              <div className="font-medium">Demo Account Available</div>
              <div className="text-sm">Email: demo@zibly.ai | Password: password123</div>
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 text-primary hover:text-foreground"
                onClick={handleDemoLogin}
              >
                Click to fill demo credentials
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <form onSubmit={handleSubmit} noValidate>
            <CardHeader>
              <CardTitle className="inter-heading-normal">Sign In</CardTitle>
              <CardDescription className="inter-text">Sign in with your email and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="inter-text-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="inter-text-medium">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:underline inter-text">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required autoComplete="current-password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting || authLoading}
              >
                {isSubmitting || authLoading ? "Signing in..." : "Sign in"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm inter-text">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
