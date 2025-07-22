"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { changePlan, cancelSubscription, reactivateSubscription } from "@/app/actions/subscription"
import DashboardNav from "@/components/dashboard-nav"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { PRICING_CONFIG, formatPrice } from "@/lib/pricing-config"

export default function SubscriptionPage() {
  const { user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [isLoading, setIsLoading] = useState(false)
  const [subscription, setSubscription] = useState({
    plan: "professional",
    status: "active",
    cancelAtPeriodEnd: false,
    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  })
  const { toast } = useToast()

  useEffect(() => {
    // Initialize with user subscription data if available
    if (user?.subscription) {
      setSubscription(user.subscription)
      setSelectedPlan(user.subscription.plan)
    }
  }, [user])

  const handleChangePlan = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("plan", selectedPlan)
    formData.append("billingCycle", billingCycle)

    try {
      const result = await changePlan(formData)

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        })
      } else {
        toast({
          title: "Success",
          description: "Your subscription has been updated.",
        })
        setSubscription({
          ...subscription,
          plan: selectedPlan,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update subscription",
      })
    } finally {
      setIsLoading(false)
    }
  }

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
                <form onSubmit={handleChangePlan}>
                  <div className="flex justify-end">
                    <div className="inline-flex items-center rounded-lg border p-1">
                      <Button
                        type="button"
                        variant={billingCycle === "monthly" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setBillingCycle("monthly")}
                        className={billingCycle === "monthly" ? "bg-primary" : ""}
                      >
                        Monthly
                      </Button>
                      <Button
                        type="button"
                        variant={billingCycle === "annual" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setBillingCycle("annual")}
                        className={billingCycle === "annual" ? "bg-primary" : ""}
                      >
                        Annual (Save 20%)
                      </Button>
                    </div>
                  </div>

                  <RadioGroup
                    value={selectedPlan}
                    onValueChange={setSelectedPlan}
                    className="grid gap-4 md:grid-cols-3 mt-4"
                  >
                    <div>
                      <RadioGroupItem value="starter" id="starter" className="peer sr-only" />
                      <Label
                        htmlFor="starter"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="mb-4 text-center">
                          <div className="text-xl font-bold">Starter</div>
                          <div className="text-3xl font-bold">
                            {billingCycle === "monthly" ? formatPrice(PRICING_CONFIG.starter.monthly) : formatPrice(PRICING_CONFIG.starter.annual)}
                            <span className="text-sm font-normal text-muted-foreground">
                              /{billingCycle === "monthly" ? "month" : "year"}
                            </span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>15 tasks per month</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Standard processing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Email support</span>
                          </li>
                        </ul>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem value="professional" id="professional" className="peer sr-only" />
                      <Label
                        htmlFor="professional"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="mb-4 text-center">
                          {subscription.plan === "professional" && (
                            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-xs text-primary dark:bg-primary-800/30 dark:text-primary-400">
                              Current Plan
                            </div>
                          )}
                          <div className="text-xl font-bold">Professional</div>
                          <div className="text-3xl font-bold">
                            {billingCycle === "monthly" ? formatPrice(PRICING_CONFIG.professional.monthly) : formatPrice(PRICING_CONFIG.professional.annual)}
                            <span className="text-sm font-normal text-muted-foreground">
                              /{billingCycle === "monthly" ? "month" : "year"}
                            </span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>50 tasks per month</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Priority processing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Priority processing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Priority support</span>
                          </li>
                        </ul>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem value="enterprise" id="enterprise" className="peer sr-only" />
                      <Label
                        htmlFor="enterprise"
                        className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="mb-4 text-center">
                          {subscription.plan === "enterprise" && (
                            <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-xs text-primary dark:bg-primary-800/30 dark:text-primary-400">
                              Current Plan
                            </div>
                          )}
                          <div className="text-xl font-bold">Enterprise</div>
                          <div className="text-3xl font-bold">
                            {billingCycle === "monthly" ? "Contact Sales" : "Contact Sales"}
                            <span className="text-sm font-normal text-muted-foreground">
                              /{billingCycle === "monthly" ? "month" : "year"}
                            </span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Unlimited tasks</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Urgent processing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Dedicated workspace</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Custom training</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            <span>Dedicated manager</span>
                          </li>
                        </ul>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="flex justify-end mt-6 space-x-2">
                    {!subscription.cancelAtPeriodEnd && subscription.plan !== selectedPlan && (
                      <Button type="submit" className="bg-primary hover:bg-primary-600" disabled={isLoading}>
                        {isLoading ? "Updating..." : "Change Plan"}
                      </Button>
                    )}

                    {!subscription.cancelAtPeriodEnd && (
                      <Button type="button" variant="outline" onClick={handleCancelSubscription} disabled={isLoading}>
                        Cancel Subscription
                      </Button>
                    )}
                  </div>
                </form>
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
