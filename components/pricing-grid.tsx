"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Minus, Plus, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { MAX_SEATS, seatAdjustedTotal, formatCurrency, getAnnualDiscount } from "@/lib/pricing-config"
import { config } from "@/lib/config"
import { useAuth } from "@/components/auth-provider"

// Backend API URL for Stripe operations
const STRIPE_API_URL = config.api.baseUrl

type Plan = {
  id: string
  name: string
  description: string
  priceMonthly: number | null
  priceAnnual: number | null
  features: string[]
  tasksPerMonth: string
  processingSpeed: string
  support: string
  popular?: boolean
}

const COUPONS: Record<string, number> = {
  FRIEND20: 0.2,
  REFERRAL20: 0.2,
  WELCOME10: 0.1,
  BETA50: 0.5,
}

export default function PricingGrid({
  plans,
  currentPlanId,
  onSwitchPlan,
  customerEmail,
}: {
  plans: Plan[]
  currentPlanId?: string
  onSwitchPlan?: (planId: string, seats: number, coupon: string, billingCycle: string) => void | Promise<void>
  customerEmail?: string
}) {
  const searchParams = useSearchParams()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [seats, setSeats] = useState<number>(1)
  const [coupon, setCoupon] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [isCheckingOut, setIsCheckingOut] = useState<string | null>(null)
  const discount = COUPONS[coupon.trim().toUpperCase()] ?? 0
  const { toast } = useToast()
  const router = useRouter()
  const { user } = useAuth()

  // Check for referral code in URL
  useEffect(() => {
    const ref = searchParams.get("ref")
    if (ref) {
      setReferralCode(ref.toUpperCase())
      toast({ title: "Referral code applied", description: `Code: ${ref.toUpperCase()}` })
    }
  }, [searchParams, toast])

  const priceForPlan = (plan: Plan) => {
    if (plan.priceMonthly == null) return "Contact Sales"
    const capped = Math.min(MAX_SEATS, Math.max(1, seats))
    const basePrice = billingCycle === "annual" ? (plan.priceAnnual ?? plan.priceMonthly * 12) : plan.priceMonthly
    const totalPreCoupon = seatAdjustedTotal(basePrice, capped)
    const total = totalPreCoupon * (1 - discount)
    return formatCurrency(total)
  }

  const annualSavingsForPlan = (plan: Plan) => {
    if (plan.priceMonthly == null || plan.priceAnnual == null) return 0
    return getAnnualDiscount(plan.priceMonthly, plan.priceAnnual)
  }

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase()
    if (COUPONS[code]) {
      toast({ title: "Discount applied", description: `${Math.round(COUPONS[code] * 100)}% off` })
    } else if (code) {
      // Check if it might be a referral code (ZIB-XXXXXX format)
      if (code.startsWith("ZIB-")) {
        setReferralCode(code)
        setCoupon("")
        toast({ title: "Referral code recognized", description: `Code: ${code}` })
      } else {
        toast({ variant: "destructive", title: "Invalid code", description: "Please check your referral or coupon code" })
      }
    }
  }

  const handleSwitch = async (planId: string) => {
    try {
      await onSwitchPlan?.(planId, seats, coupon, billingCycle)
      toast({ title: "Plan updated", description: `Switched to ${planId} plan` })
    } catch (e: any) {
      toast({ variant: "destructive", title: "Update failed", description: e?.message || "Could not switch plan" })
    }
  }

  // Handle checkout for public pricing page (no currentPlanId)
  const handleCheckout = async (planId: string) => {
    if (planId === "enterprise") {
      router.push("/contact")
      return
    }

    // If user is not logged in, redirect to signup with plan info
    if (!user) {
      const params = new URLSearchParams({
        plan: planId,
        seats: seats.toString(),
        billing: billingCycle,
        ...(coupon && { coupon }),
        ...(referralCode && { ref: referralCode }),
      })
      router.push(`/signup?${params.toString()}`)
      return
    }

    setIsCheckingOut(planId)

    try {
      const response = await fetch(`${STRIPE_API_URL}/stripe/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          billingCycle,
          seats: Math.min(MAX_SEATS, Math.max(1, seats)),
          couponCode: coupon || undefined,
          referralCode: referralCode || undefined,
          customerEmail: customerEmail || user.email,
          successUrl: `${window.location.origin}/dashboard/subscription?success=true`,
          cancelUrl: `${window.location.origin}/pricing?canceled=true`,
        }),
      })

      const result = await response.json()

      if (result.error) {
        throw new Error(result.error)
      }

      if (result.url) {
        window.location.href = result.url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Checkout failed",
        description: error.message || "Could not start checkout"
      })
      setIsCheckingOut(null)
    }
  }

  return (
    <div>
      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center rounded-lg border border-black p-1 bg-white">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              billingCycle === "monthly"
                ? "bg-black text-white"
                : "text-black hover:bg-black/5"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${
              billingCycle === "annual"
                ? "bg-black text-white"
                : "text-black hover:bg-black/5"
            }`}
          >
            Annual
            <span className={`text-xs px-1.5 py-0.5 rounded ${
              billingCycle === "annual"
                ? "bg-green-500 text-white"
                : "bg-green-100 text-green-700"
            }`}>
              Save ~17%
            </span>
          </button>
        </div>
      </div>

      {/* Referral code indicator */}
      {referralCode && (
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm">
            <CheckCircle className="h-4 w-4" />
            Referral code: {referralCode}
            <button
              type="button"
              onClick={() => setReferralCode("")}
              className="ml-1 text-green-800 hover:text-green-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex items-center rounded-lg border border-black p-1">
          <span className="px-2 text-xs text-black hidden sm:inline">Seats</span>
          <Button type="button" variant="ghost" size="sm" onClick={() => setSeats(Math.max(1, seats - 1))} disabled={seats <= 1}>
            <Minus className="h-3 w-3" />
          </Button>
          <div className="px-2 text-sm tabular-nums min-w-[2ch] text-center text-black">{seats}</div>
          <Button type="button" variant="ghost" size="sm" onClick={() => setSeats(Math.min(MAX_SEATS, seats + 1))} disabled={seats >= MAX_SEATS}>
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <div className="inline-flex items-center rounded-lg border border-black bg-white p-1">
          <span className="px-2 text-xs text-black hidden sm:inline">Referral/Coupon</span>
          <Input
            id="coupon"
            placeholder="ZIB-ABC123"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="h-8 border-none focus-visible:ring-0 focus:ring-0 w-36 text-black bg-white"
          />
          <Button type="button" size="sm" onClick={applyCoupon} className="bg-white text-black border border-black hover:bg-black/5">
            Apply
          </Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-3 items-stretch">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg shadow-primary-100 dark:shadow-none" : ""}`}>
            <CardHeader>
              {plan.popular && (
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2 w-fit">
                  Most Popular
                </div>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <div className="text-3xl">
                {plan.priceMonthly === null ? (
                  <span>Contact Sales</span>
                ) : (
                  <>
                    {priceForPlan(plan)}
                    <span className="text-sm">/{billingCycle === "annual" ? "year" : "month"}</span>
                    {billingCycle === "annual" && annualSavingsForPlan(plan) > 0 && (
                      <span className="ml-2 text-xs text-green-600">Save {annualSavingsForPlan(plan)}%</span>
                    )}
                  </>
                )}
              </div>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-white border border-black px-2 py-1 text-black">
                  {plan.tasksPerMonth}
                </span>
                <span className="inline-flex items-center rounded-full bg-white border border-black px-2 py-1 text-black">
                  {plan.processingSpeed}
                </span>
                <span className="inline-flex items-center rounded-full bg-white border border-black px-2 py-1 text-black">
                  {plan.support}
                </span>
                {seats > 1 && plan.priceMonthly !== null && (
                  <span className="inline-flex items-center rounded-full bg-white border border-black px-2 py-1 text-black">{seats} seats</span>
                )}
                {discount > 0 && plan.priceMonthly !== null && (
                  <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-2 py-1">-{Math.round(discount * 100)}%</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {currentPlanId ? (
                // Dashboard subscription page - switching plans
                plan.priceMonthly === null ? (
                  <Button asChild className="w-full bg-white text-black border-2 border-black hover:bg-black/5">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                ) : plan.id === currentPlanId ? (
                  <Button disabled variant="outline" className="w-full">Current Plan</Button>
                ) : (
                  <Button className="w-full bg-white text-black border-2 border-black hover:bg-black/5" onClick={() => handleSwitch(plan.id)}>
                    Switch Plan
                  </Button>
                )
              ) : (
                // Public pricing page - go to Stripe Checkout
                plan.priceMonthly === null ? (
                  <Button asChild className="w-full bg-white text-black border-2 border-black hover:bg-black/5">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-white text-black border-2 border-black hover:bg-black/5"
                    onClick={() => handleCheckout(plan.id)}
                    disabled={isCheckingOut === plan.id}
                  >
                    {isCheckingOut === plan.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Get Started"
                    )}
                  </Button>
                )
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
