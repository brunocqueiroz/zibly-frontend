"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { registerUser } from "@/app/actions/auth"
import { PRICING_PLANS, formatPrice } from "@/lib/pricing-config"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get("plan") || "starter"
  const [selectedPlan, setSelectedPlan] = useState(initialPlan)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setFormErrors({})

    const formData = new FormData(e.currentTarget)
    // Add selected plan to form data
    formData.append("plan", selectedPlan)

    try {
      const result = await registerUser(formData)

      if (result?.error) {
        setError(result.error)
        if (result.errors) {
          setFormErrors(result.errors)
        }
        setIsLoading(false)
        return
      }

      // Registration successful, redirect handled by server action
    } catch (error) {
      setError("Something went wrong")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <h1 className="text-2xl tracking-tight inter-heading-normal text-black">Create an account</h1>
          <p className="text-sm inter-text text-black">Enter your information to create an account</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="bg-white border-2 border-black">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="inter-heading-normal text-black">Sign Up</CardTitle>
              <CardDescription className="inter-text text-black">Choose your plan and get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="inter-text-medium text-black">First Name</Label>
                  <Input id="first_name" name="first_name" placeholder="John" required />
                  {formErrors.first_name && <p className="text-xs text-red-500">{formErrors.first_name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="inter-text-medium text-black">Last Name</Label>
                  <Input id="last_name" name="last_name" placeholder="Doe" required />
                  {formErrors.last_name && <p className="text-xs text-red-500">{formErrors.last_name[0]}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="inter-text-medium text-black">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                {formErrors.email && <p className="text-xs text-red-500">{formErrors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="inter-text-medium text-black">Password</Label>
                <Input id="password" name="password" type="password" required />
                {formErrors.password && <p className="text-xs text-red-500">{formErrors.password[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan" className="inter-text-medium text-black">Select Plan</Label>
                <Select name="plan" value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="border-2 border-black">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRICING_PLANS.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{plan.name}</span>
                          <span className="text-sm text-muted-foreground ml-2">
                            {plan.priceMonthly ? formatPrice(plan.priceMonthly) : 'Contact Sales'}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formErrors.plan && <p className="text-xs text-red-500">{formErrors.plan[0]}</p>}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <p className="px-8 text-center text-sm inter-text text-black">
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="text-center text-sm inter-text text-black">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
