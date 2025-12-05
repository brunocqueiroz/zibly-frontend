"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DashboardNav from "@/components/dashboard-nav"
import { useAuth } from "@/components/auth-provider"
import { PRICING_CONFIG, formatPrice } from "@/lib/pricing-config"
import { getApiClient } from "@/lib/api-client"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  
  // State for real API data
  const [apiData, setApiData] = useState({
    usage: null as any,
    monthlyUsage: null as any,
    loading: true
  })

  // State for subscription data from Stripe
  const [subscriptionData, setSubscriptionData] = useState<{
    plan: string
    currentPeriodEnd: string | null
  } | null>(null)

  // Load real data from API
  useEffect(() => {
    const loadApiData = async () => {
      if (!user?.id) return

      try {
        const apiClient = getApiClient()

        // Fetch user usage data
        const [userUsage, monthlyUsage] = await Promise.all([
          apiClient.getUserUsage(user.id as number),
          apiClient.getUserMonthlyUsage(user.id as number)
        ])

        setApiData({
          usage: userUsage,
          monthlyUsage: monthlyUsage,
          loading: false
        })
      } catch (error) {
        // Gracefully handle missing user data - dashboard will show fallback values
        setApiData({
          usage: null,
          monthlyUsage: { current_month_usage: [], count: 0 }, // Empty but valid structure
          loading: false
        })
      }
    }

    // Fetch subscription data from Stripe
    const loadSubscriptionData = async () => {
      if (!user?.email) return

      try {
        const response = await fetch(`/api/stripe/subscription?email=${encodeURIComponent(user.email)}`)
        if (response.ok) {
          const data = await response.json()
          setSubscriptionData({
            plan: data.plan || 'starter',
            currentPeriodEnd: data.currentPeriodEnd
          })
        }
      } catch (error) {
        // Use defaults on error
        setSubscriptionData({ plan: 'starter', currentPeriodEnd: null })
      }
    }

    if (user) {
      loadApiData()
      loadSubscriptionData()
    }
  }, [user])

  // Calculate usage from real API data
  const userData = useMemo(() => {
    // Calculate real usage from API data if available
    const realUsage = apiData.monthlyUsage?.current_month_usage || []
    const validTasks = realUsage.filter((task: any) => task.task_status !== 'FAILED')
    const currentUsage = validTasks.length

    // Determine plan limits based on subscription
    const planName = subscriptionData?.plan || "free"
    const planLimits: Record<string, number> = {
      free: 3,        // Free tier: 3 emails
      starter: 20,    // $59/month
      professional: 80, // $199/month
      enterprise: 999,
    }
    const total = planLimits[planName] || 3

    return {
      usage: {
        current: currentUsage,
        total
      },
    }
  }, [apiData, subscriptionData])
  
  // Show loading state if auth is still loading
  if (loading) {
    return (
      <div className="p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Loading...</h1>
          </div>
        </div>
      </div>
    )
  }

  // Show login prompt if no user
  if (!user) {
    return (
      <div className="p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black">Please sign in</h1>
            <p className="text-black">You need to be signed in to access the dashboard.</p>
          </div>
        </div>
      </div>
    )
  }

  const planName = subscriptionData?.plan || "free"
  const planPrice = planName === "professional" ? formatPrice(PRICING_CONFIG.professional.monthly) :
                   planName === "enterprise" ? formatPrice(PRICING_CONFIG.enterprise.monthly) :
                   planName === "starter" ? formatPrice(PRICING_CONFIG.starter.monthly) :
                   "Free"

  return (
    <div className="p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Dashboard</h1>
              <p className="text-black">Welcome back, {user.name}!</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-2 border-black">
                <CardHeader className="pb-2">
                  <CardTitle className="text-black">Usage</CardTitle>
                  <CardDescription className="text-primary">Your monthly email usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-black">
                      <span>
                        {userData.usage.current}/{userData.usage.total} emails
                      </span>
                      <span className="text-black">
                        {Math.round((userData.usage.current / userData.usage.total) * 100)}%
                      </span>
                    </div>
                    <Progress value={(userData.usage.current / userData.usage.total) * 100} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-black">
                <CardHeader className="pb-2">
                  <CardTitle className="text-black">Current Plan</CardTitle>
                  <CardDescription className="text-primary capitalize">{planName} Plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold text-black">
                    {planName === "free" ? "Free" : `${planPrice}/month`}
                  </div>
                  <Button asChild variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white">
                    <Link href="/dashboard/subscription">{planName === "free" ? "Upgrade" : "Manage Subscription"}</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Removed Recent Activity card as requested */}
            </div>

            {/* Analytics (Email History removed to avoid data retention implication) */}
            <section className="space-y-4 pt-2">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="bg-white border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-black">Billing Summary</CardTitle>
                    <CardDescription className="text-primary">Your current plan and next invoice</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black">Plan</span>
                      <span className="text-sm text-black capitalize">{planName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black">Price</span>
                      <span className="text-sm text-black">
                        {planName === "free" ? "Free" : `${planPrice}/month`}
                      </span>
                    </div>
                    {planName !== "free" && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Next invoice</span>
                        <span className="text-sm text-black">
                          {subscriptionData?.currentPeriodEnd
                            ? new Date(subscriptionData.currentPeriodEnd).toLocaleDateString()
                            : "—"
                          }
                        </span>
                      </div>
                    )}
                    <div className="pt-2 flex justify-end">
                      <Button asChild variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white">
                        <Link href="/dashboard/subscription">{planName === "free" ? "Upgrade" : "Manage Subscription"}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
    </div>
  )
}