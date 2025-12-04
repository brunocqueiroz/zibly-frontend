"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DashboardNav from "@/components/dashboard-nav"
import { useAuth } from "@/components/auth-provider"
import { PRICING_CONFIG, formatPrice } from "@/lib/pricing-config"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { getApiClient } from "@/lib/api-client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"

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

  const analytics = useMemo(() => {
    // Use real API data if available, otherwise fall back to zeros
    const realTasks = apiData.monthlyUsage?.current_month_usage || []
    const validRealTasks = realTasks.filter((task: any) => task.task_status !== 'FAILED')

    let totals
    if (validRealTasks.length > 0) {
      // Calculate metrics from real API data
      const completed = validRealTasks.filter((task: any) => task.task_status === 'COMPLETED')
      const completionRate = Math.round((completed.length / validRealTasks.length) * 100)

      // Calculate real average turnaround in minutes
      let avgTurnMin = 0
      if (completed.length > 0) {
        const turnaroundTimes = completed
          .filter((task: any) => task.task_completed_at && task.task_completed_at !== 'NaT')
          .map((task: any) => {
            const created = new Date(task.task_created_at)
            const completedTime = new Date(task.task_completed_at)
            const diffMinutes = (completedTime.getTime() - created.getTime()) / (1000 * 60)
            return diffMinutes
          })

        if (turnaroundTimes.length > 0) {
          const totalMinutes = turnaroundTimes.reduce((sum: number, time: number) => sum + time, 0)
          avgTurnMin = Math.round(totalMinutes / turnaroundTimes.length)
        }
      }

      // Real data
      const emails = validRealTasks.length
      const deliverables = emails // 1:1 ratio - each email produces one deliverable
      const hoursSaved = Math.round(emails * 2.9) // Estimate based on typical hours saved per email

      totals = {
        emails,
        deliverables,
        avgTurnMin,
        completionRate,
        hoursSaved,
      }
    } else {
      // No real data available - default all values to 0
      totals = {
        emails: 0,
        deliverables: 0,
        avgTurnMin: 0,
        completionRate: 0,
        hoursSaved: 0,
      }
    }

    // Build 30-day sparkline with real API data
    const days = Array.from({ length: 30 }).map((_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (29 - i))
      const dateStr = d.toISOString().split('T')[0] // Format: YYYY-MM-DD
      const key = d.toLocaleDateString(undefined, { month: "short", day: "numeric" })

      // Count real tasks for this day
      const count = realTasks.filter((task: any) => {
        const taskDate = task.task_created_at?.split('T')[0]
        return taskDate === dateStr
      }).length

      return { day: key, emails: count }
    })

    return { totals, days }
  }, [apiData])
  
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
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border-2 border-black">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary">Emails this month</CardDescription>
                    <CardTitle className="text-2xl text-black">{analytics.totals.emails}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">{userData.usage.current}/{userData.usage.total} plan usage</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-black">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary">Avg turnaround</CardDescription>
                    <CardTitle className="text-2xl text-black">{analytics.totals.avgTurnMin} min</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Typical range 2–60 minutes</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-black">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary">Completion rate</CardDescription>
                    <CardTitle className="text-2xl text-black">{analytics.totals.completionRate}%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Completed / total emails</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-black">
                  <CardHeader className="pb-2">
                    <CardDescription className="text-primary">Uses left this period</CardDescription>
                    <CardTitle className="text-2xl text-black">{Math.max(0, userData.usage.total - userData.usage.current)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">Resets monthly</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6">
                <Card className="bg-white border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-black">Usage Over Last 30 Days</CardTitle>
                    <CardDescription className="text-primary">Emails sent per day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{ emails: { label: "Emails", color: "#6366f1" } }}
                      className="h-[300px] w-full"
                    >
                      <LineChart data={analytics.days} margin={{ left: 12, right: 12, top: 12, bottom: 12 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="day" 
                          tickLine={false} 
                          axisLine={false}
                          interval="preserveStartEnd"
                          minTickGap={0}
                        />
                        <YAxis allowDecimals={false} width={28} />
                        <ChartTooltip content={<ChartTooltipContent labelKey="day" nameKey="emails" />} />
                        <Line 
                          type="monotone" 
                          dataKey="emails" 
                          stroke="var(--color-emails)" 
                          strokeWidth={2} 
                          dot={{ fill: "#6366f1", r: 3 }}
                          activeDot={{ r: 5, fill: "#6366f1" }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="bg-white border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-black">Estimated Time Saved</CardTitle>
                    <CardDescription className="text-primary">Based on typical manual effort vs. turnaround</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <div className="text-sm text-black">Total hours saved</div>
                        <div className="text-2xl font-semibold text-black">{analytics.totals.hoursSaved} hrs</div>
                      </div>
                      <div>
                        <div className="text-sm text-black">Avg hours saved / email</div>
                        <div className="text-2xl font-semibold text-black">{(analytics.totals.hoursSaved / Math.max(1, analytics.totals.emails)).toFixed(1)} hrs</div>
                      </div>
                      <div>
                        <div className="text-sm text-black">Deliverables produced</div>
                        <div className="text-2xl font-semibold text-black">{analytics.totals.deliverables}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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