"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import DashboardNav from "@/components/dashboard-nav"
import { useSession } from "@/components/auth-provider"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const user = session?.user
  const loading = status === "loading"
  const [userData, setUserData] = useState({
    usage: { current: 32, total: 50 },
    recentActivity: [
      { task: "Financial analysis for Q4 board deck", time: "2 hours ago", status: "Completed" },
      { task: "Competitive research on AI tools", time: "Yesterday", status: "Completed" },
      { task: "Content creation for investor update", time: "3 days ago", status: "Completed" },
    ],
  })

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 lg:p-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Loading...</h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 lg:p-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Please sign in</h1>
                <p className="text-muted-foreground">You need to be signed in to access the dashboard.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const planName = user.subscription?.plan || "starter"
  const planPrice = planName === "professional" ? "$299" : planName === "enterprise" ? "$999" : "$99"

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Usage</CardTitle>
                  <CardDescription>Your monthly email usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        {userData.usage.current}/{userData.usage.total} emails
                      </span>
                      <span className="text-muted-foreground">
                        {Math.round((userData.usage.current / userData.usage.total) * 100)}%
                      </span>
                    </div>
                    <Progress value={(userData.usage.current / userData.usage.total) * 100} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription className="capitalize">{planName} Plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold">{planPrice}/month</div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/dashboard/subscription">Manage Subscription</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent emails to Zibly</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {userData.recentActivity.map((activity, index) => (
                      <div key={index} className="text-sm">
                        <div className="font-medium">{activity.task}</div>
                        <div className="text-muted-foreground">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history">Email History</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="history" className="space-y-4 pt-4">
                <div className="rounded-lg border">
                  {userData.recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr,auto,auto] items-center gap-4 p-4 hover:bg-muted/50"
                    >
                      <div>
                        <div className="font-medium">{activity.task}</div>
                        <div className="text-sm text-muted-foreground">Sent {activity.time}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.status}</div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Load More
                </Button>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Analytics</CardTitle>
                    <CardDescription>Your email usage over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full rounded-lg border bg-muted/50 flex items-center justify-center">
                      <p className="text-muted-foreground">Analytics chart placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
