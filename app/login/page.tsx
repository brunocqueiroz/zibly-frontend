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
import { useAuth } from "@/components/auth-provider"
import { createDemoUser } from "@/app/actions/auth"
import { GoogleSignInButton } from "@/components/google-signin-button"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, loginWithGoogle, user, loading: authLoading, refetch } = useAuth() // Keep refetch if needed elsewhere, but not for immediate post-login
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
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

    try {
      const success = await login(email, password)
      
      // The redirect is now handled by the useEffect below,
      // which waits for the user state in AuthProvider to update.
      if (!success) {
        setError("Invalid email or password")
        setIsSubmitting(false) // Only set submitting to false if login failed here
      }
      // If successful, isSubmitting will be reset by the redirect or if authLoading becomes false without a user
    } catch (error) {
      setError("Something went wrong")
      setIsSubmitting(false)
    }
  }

  const handleGoogleSignIn = async (idToken: string) => {
    setIsGoogleLoading(true)
    setError(null)
    
    try {
      const result = await loginWithGoogle(idToken)
      if (!result.success) {
        setError(result.error || "Google sign-in failed. Please try again.")
        setIsGoogleLoading(false)
      }
      // Success redirect is handled by useEffect below
    } catch (error: any) {
      // Fallback error handling
      const errorMessage = error?.message || "Something went wrong with Google sign-in"
      setError(errorMessage)
      setIsGoogleLoading(false)
    }
  }

  useEffect(() => {
    // Only redirect if auth is not loading and user is successfully set
    if (!authLoading && user) {
      router.push(callbackUrl)
      // Reset loading states after redirect
      setIsSubmitting(false)
      setIsGoogleLoading(false)
    } else if (!authLoading && !user && (isSubmitting || isGoogleLoading)) {
      // If login attempt finished (isSubmitting or isGoogleLoading was true), auth is not loading, but no user
      // it means login failed at some point, ensure loading states are reset.
      setIsSubmitting(false)
      setIsGoogleLoading(false)
    }
  }, [user, authLoading, router, callbackUrl, isSubmitting, isGoogleLoading])

  if (authLoading && !user) {
    // Show loading only if genuinely loading initial auth state or during login
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <p className="text-black">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl tracking-tight inter-heading-normal text-black">Welcome back</h1>
          <p className="text-sm inter-text text-black">Enter your credentials to access your account</p>
        </div>

        {registered && (
          <Alert className="bg-secondary border-primary">
            <AlertDescription className="text-primary">
              Account created successfully! Please sign in.
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="bg-white border-2 border-black">
          <form onSubmit={handleSubmit} noValidate>
            <CardHeader>
              <CardTitle className="inter-heading-normal text-black">Sign In</CardTitle>
              <CardDescription className="inter-text text-black">Sign in with your email and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <GoogleSignInButton
                onSuccess={handleGoogleSignIn}
                onError={(error) => {
                  setError(`Google sign-in error: ${error.message}`)
                  setIsGoogleLoading(false)
                }}
                text="signin_with"
                className="w-full flex justify-center"
              />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="inter-text-medium text-black">Email</Label>
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
                  <Label htmlFor="password" className="inter-text-medium text-black">Password</Label>
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
                disabled={isSubmitting || authLoading || isGoogleLoading}
              >
                {isSubmitting || authLoading ? "Signing in..." : "Sign in"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm inter-text text-black">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
