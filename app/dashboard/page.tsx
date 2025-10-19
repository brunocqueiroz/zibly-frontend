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

  // Load real data from API
  useEffect(() => {
    const loadApiData = async () => {
      if (!user?.id) return
      
      try {
        const apiClient = getApiClient()
        console.log('🔍 Dashboard: Loading API data for user:', user.id)
        console.log('🌐 API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL || 'using default')
        
        // Fetch user usage data
        const [userUsage, monthlyUsage] = await Promise.all([
          apiClient.getUserUsage(user.id as number),
          apiClient.getUserMonthlyUsage(user.id as number)
        ])
        
        console.log('✅ Dashboard: API data loaded successfully')
        console.log('📊 Usage data:', userUsage)
        console.log('📅 Monthly data:', monthlyUsage)
        
        setApiData({
          usage: userUsage,
          monthlyUsage: monthlyUsage,
          loading: false
        })
        
      } catch (error) {
        console.error('❌ Dashboard: API data loading failed:', error)
        console.log('🔧 Falling back to empty data structure')
        // Gracefully handle missing user data - dashboard will show fallback values
        setApiData({
          usage: null,
          monthlyUsage: { current_month_usage: [], count: 0 }, // Empty but valid structure
          loading: false
        })
      }
    }

    if (user) {
      loadApiData()
    }
  }, [user])

  // Merge real API data with mock data structure
  const userData = useMemo(() => {
    // Calculate real usage from API data if available
    const realUsage = apiData.monthlyUsage?.current_month_usage || []
    const validTasks = realUsage.filter((task: any) => task.task_status !== 'FAILED')
    const currentUsage = validTasks.length
    
    return {
      usage: { 
        current: currentUsage, // Always use real data (removed loading condition for testing)
        total: 50 
      },
      recentActivity: [
        { task: "Financial analysis for Q4 board deck", time: "2 hours ago", status: "Completed" },
        { task: "Competitive research on AI tools", time: "Yesterday", status: "Completed" },
        { task: "Content creation for investor update", time: "3 days ago", status: "Completed" },
      ],
      history: [
        {
          id: "ZX-1042",
          subject: "Board update: Q4 performance and 2025 priorities",
          category: "Slides",
          sentAt: Date.now() - 2 * 60 * 60 * 1000,
          durationMin: 28,
          attachments: 2,
          deliverables: ["Presentation.pptx", "Executive_Summary.pdf"],
          status: "Completed",
          onTime: true,
          hoursSaved: 3.5,
        },
        {
          id: "ZX-1041",
          subject: "CAC by cohort with YoY trendlines",
          category: "Modeling",
          sentAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
          durationMin: 41,
          attachments: 1,
          deliverables: ["CAC_Analysis.xlsx"],
          status: "Completed",
          onTime: true,
          hoursSaved: 2.8,
        },
        {
          id: "ZX-1040",
          subject: "Synthesize 100+ interview transcripts: key themes",
          category: "Research",
          sentAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
          durationMin: 57,
          attachments: 1,
          deliverables: ["Research_Report.pdf", "Themes.csv"],
          status: "Completed",
          onTime: true,
          hoursSaved: 4.2,
        },
        {
          id: "ZX-1039",
          subject: "Build LBO sensitivity table",
          category: "Modeling",
          sentAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
          durationMin: 36,
          attachments: 2,
          deliverables: ["LBO_Sensitivity.xlsx"],
          status: "Completed",
          onTime: true,
          hoursSaved: 2.2,
        },
        {
          id: "ZX-1038",
          subject: "Marketing campaign: performance summary + next actions",
          category: "Slides",
          sentAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
          durationMin: 22,
          attachments: 1,
          deliverables: ["Campaign_Summary.pptx"],
          status: "Completed",
          onTime: true,
          hoursSaved: 1.8,
        },
        {
          id: "ZX-1037",
          subject: "Quarterly metrics deck refresh",
          category: "Slides",
          sentAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
          durationMin: 33,
          attachments: 3,
          deliverables: ["Q_Metrics_Deck.pptx"],
          status: "Completed",
          onTime: true,
          hoursSaved: 2.6,
        },
        {
          id: "ZX-1036",
          subject: "Benchmark competitors: pricing & packaging",
          category: "Research",
          sentAt: Date.now() - 9 * 24 * 60 * 60 * 1000,
          durationMin: 45,
          attachments: 1,
          deliverables: ["Pricing_Benchmark.xlsx", "Summary.pdf"],
          status: "Completed",
          onTime: true,
          hoursSaved: 3.1,
        },
        {
          id: "ZX-1035",
          subject: "Clean revenue dump and build cohort chart",
          category: "Analysis",
          sentAt: Date.now() - 11 * 24 * 60 * 60 * 1000,
          durationMin: 31,
          attachments: 1,
          deliverables: ["Revenue_Cohorts.xlsx"],
          status: "Completed",
          onTime: true,
          hoursSaved: 2.4,
        },
      ],
    }
  }, [apiData])

  const historyThisMonth = useMemo(() => {
    const start = new Date()
    start.setDate(1)
    return userData.history.filter((h) => h.sentAt >= start.getTime())
  }, [userData.history])

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
      let avgTurnMin = 37 // fallback
      if (completed.length > 0) {
        const turnaroundTimes = completed
          .filter((task: any) => task.task_completed_at !== 'NaT')
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

      // Real data with some mock constants for missing pieces
      const emails = validRealTasks.length
      const deliverables = emails // 1:1 ratio - each email produces one deliverable
      const hoursSaved = Math.round(emails * 2.9) // Estimate based on typical hours saved per email
      
      totals = {
        emails,
        deliverables,
        avgTurnMin,
        completionRate,
        onTimeRate: Math.round(Math.random() * 20 + 85), // Mock: 85-100%
        hoursSaved,
      }
    } else {
      // No real data available - default all values to 0
      totals = {
        emails: 0,
        deliverables: 0,
        avgTurnMin: 0,
        completionRate: 0,
        onTimeRate: 0,
        hoursSaved: 0,
      }
    }

    // Build 30-day sparkline with real API data
    const days = Array.from({ length: 30 }).map((_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (29 - i))
      const dateStr = d.toISOString().split('T')[0] // Format: YYYY-MM-DD
      const key = d.toLocaleDateString(undefined, { month: "short", day: "numeric" })
      
      // Count real tasks for this day (include all tasks, not just valid ones for daily activity)
      const count = realTasks.filter((task: any) => {
        const taskDate = task.task_created_at?.split('T')[0]
        return taskDate === dateStr
      }).length
      
      return { day: key, emails: count }
    })

    return { totals, days }
  }, [historyThisMonth, userData.history, apiData])
  
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

  const planName = user.subscription?.plan || "starter"
  const planPrice = planName === "professional" ? formatPrice(PRICING_CONFIG.professional.monthly) :
                   planName === "enterprise" ? formatPrice(PRICING_CONFIG.enterprise.monthly) :
                   formatPrice(PRICING_CONFIG.starter.monthly)

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
                  <div className="text-2xl font-bold text-black">{planPrice}/month</div>
                  <Button asChild variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white">
                    <Link href="/dashboard/subscription">Manage Subscription</Link>
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
                      <LineChart data={analytics.days} margin={{ left: 12, right: 12, top: 12, bottom: 12 }} width="100%">
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
                      <span className="text-sm text-black">{planPrice}/month</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black">Next invoice</span>
                      <span className="text-sm text-black">
                        {(() => {
                          const raw = user?.subscription?.currentPeriodEnd
                          const date = raw ? new Date(raw) : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                          return date.toLocaleDateString()
                        })()}
                      </span>
                    </div>
                    <div className="pt-2 flex justify-end">
                      <Button asChild variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white">
                        <Link href="/dashboard/subscription">Manage Subscription</Link>
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