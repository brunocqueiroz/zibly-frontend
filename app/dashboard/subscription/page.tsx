"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cancelSubscription, reactivateSubscription } from "@/app/actions/subscription"
import DashboardNav from "@/components/dashboard-nav"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { PRICING_CONFIG, formatPrice, MAX_SEATS } from "@/lib/pricing-config"
import PricingGrid from "@/components/pricing-grid"
import { PRICING_PLANS } from "@/lib/pricing-config"
import { changePlan } from "@/app/actions/subscription"
import { setSeatsAction } from "@/app/actions/team"

export default function SubscriptionPage() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [subscription, setSubscription] = useState({
    plan: "professional",
    status: "active",
    cancelAtPeriodEnd: false,
    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  })
  const { toast } = useToast()

  useEffect(() => {
    if (user?.subscription) {
      setSubscription(user.subscription)
    }
  }, [user])

  const handleCancelSubscription = async () => {
    setIsLoading(true)

    try {
      const result = await cancelSubscription()

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success",
          description: "Your subscription will be canceled at the end of the billing period.",
        })
        setSubscription({
          ...subscription,
          cancelAtPeriodEnd: true,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to cancel subscription",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleReactivateSubscription = async () => {
    setIsLoading(true)

    try {
      const result = await reactivateSubscription()

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success",
          description: "Your subscription has been reactivated.",
        })
        setSubscription({
          ...subscription,
          cancelAtPeriodEnd: false,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to reactivate subscription",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Subscription</h1>
              <p className="text-muted-foreground">Manage your subscription and billing</p>
            </div>

            {subscription.cancelAtPeriodEnd && (
              <Alert className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Subscription Canceling</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Your subscription will be canceled on {new Date(subscription.currentPeriodEnd).toLocaleDateString()}.
                  You can reactivate your subscription anytime before this date.
                </AlertDescription>
                <Button
                  className="mt-2 bg-amber-600 hover:bg-amber-700"
                  onClick={handleReactivateSubscription}
                  disabled={isLoading}
                >
                  Reactivate Subscription
                </Button>
              </Alert>
            )}

            <Tabs defaultValue="plans">
              <TabsList>
                <TabsTrigger value="plans">Plans</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              </TabsList>

              <TabsContent value="plans" className="space-y-4 pt-4">
                <PricingGrid
                  plans={PRICING_PLANS as any}
                  currentPlanId={subscription.plan}
                  onSwitchPlan={async (planId, seats, coupon) => {
                    setIsLoading(true)
                    try {
                      const fd = new FormData()
                      fd.append("plan", planId)
                      fd.append("billingCycle", "monthly")
                      const result = await changePlan(fd)
                      if ((result as any)?.error) {
                        throw new Error((result as any).error)
                      }
                      const seatsFd = new FormData()
                      seatsFd.append("seats", String(Math.min(MAX_SEATS, Math.max(1, seats))))
                      await setSeatsAction(seatsFd)
                      setSubscription((prev) => ({ ...prev, plan: planId }))
                    } finally {
                      setIsLoading(false)
                    }
                  }}
                />
              </TabsContent>

              <TabsContent value="billing" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your recent invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
                        <div>
                          <div className="font-medium">Professional Plan - Monthly</div>
                          <div className="text-sm text-muted-foreground">Dec 1, 2024</div>
                        </div>
                        <div className="font-medium">{formatPrice(PRICING_CONFIG.professional.monthly)}.00</div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
                        <div>
                          <div className="font-medium">Professional Plan - Monthly</div>
                          <div className="text-sm text-muted-foreground">Nov 1, 2024</div>
                        </div>
                        <div className="font-medium">{formatPrice(PRICING_CONFIG.professional.monthly)}.00</div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
                        <div>
                          <div className="font-medium">Professional Plan - Monthly</div>
                          <div className="text-sm text-muted-foreground">Oct 1, 2024</div>
                        </div>
                        <div className="font-medium">{formatPrice(PRICING_CONFIG.professional.monthly)}.00</div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-6 w-6" />
                        <div>
                          <div className="font-medium">Visa ending in 4242</div>
                          <div className="text-sm text-muted-foreground">Expires 04/2025</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full">Add Payment Method</Button>
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
