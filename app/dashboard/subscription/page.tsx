"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, AlertCircle, Loader2, ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cancelSubscription, reactivateSubscription } from "@/app/actions/subscription"
import DashboardNav from "@/components/dashboard-nav"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { MAX_SEATS } from "@/lib/pricing-config"
import PricingGrid from "@/components/pricing-grid"
import { PRICING_PLANS } from "@/lib/pricing-config"

interface Subscription {
  plan: string
  status: string
  cancelAtPeriodEnd: boolean
  currentPeriodEnd: string | null
  currentPeriodStart: string | null
  stripeCustomerId: string | null
  stripeSubscriptionId: string | null
}

interface Invoice {
  id: string
  number: string | null
  date: string | null
  amount: number
  currency: string
  status: string | null
  planName: string
  pdfUrl: string | null
  hostedUrl: string | null
}

interface PaymentMethod {
  id: string
  brand: string
  last4: string
  expMonth: number
  expYear: number
  isDefault: boolean
}

export default function SubscriptionPage() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [subscription, setSubscription] = useState<Subscription>({
    plan: "starter",
    status: "active",
    cancelAtPeriodEnd: false,
    currentPeriodEnd: null,
    currentPeriodStart: null,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
  })
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [isDeletingPayment, setIsDeletingPayment] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (user?.email) {
      fetchAllData()
    }
  }, [user?.email])

  const fetchAllData = async () => {
    if (!user?.email) return

    setIsDataLoading(true)

    try {
      // Fetch all data in parallel
      const [subRes, invRes, pmRes] = await Promise.all([
        fetch(`/api/stripe/subscription?email=${encodeURIComponent(user.email)}`),
        fetch(`/api/stripe/invoices?email=${encodeURIComponent(user.email)}&limit=10`),
        fetch(`/api/stripe/payment-methods?email=${encodeURIComponent(user.email)}`),
      ])

      if (subRes.ok) {
        const subData = await subRes.json()
        setSubscription(subData)
      }

      if (invRes.ok) {
        const invData = await invRes.json()
        setInvoices(invData.invoices || [])
      }

      if (pmRes.ok) {
        const pmData = await pmRes.json()
        setPaymentMethods(pmData.paymentMethods || [])
      }
    } catch (error) {
      console.error("Error fetching subscription data:", error)
    } finally {
      setIsDataLoading(false)
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

  const handleDeletePaymentMethod = async (paymentMethodId: string) => {
    setIsDeletingPayment(paymentMethodId)

    try {
      const res = await fetch(`/api/stripe/payment-methods?id=${paymentMethodId}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setPaymentMethods(paymentMethods.filter(pm => pm.id !== paymentMethodId))
        toast({
          title: "Success",
          description: "Payment method removed.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to remove payment method",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove payment method",
      })
    } finally {
      setIsDeletingPayment(null)
    }
  }

  const handleManagePayments = async () => {
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ returnUrl: window.location.href, email: user?.email }),
      })

      if (res.ok) {
        const { url } = await res.json()
        window.location.href = url
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to open billing portal",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open billing portal",
      })
    }
  }

  const formatCardBrand = (brand: string) => {
    const brands: Record<string, string> = {
      visa: "Visa",
      mastercard: "Mastercard",
      amex: "American Express",
      discover: "Discover",
      diners: "Diners Club",
      jcb: "JCB",
      unionpay: "UnionPay",
    }
    return brands[brand.toLowerCase()] || brand.charAt(0).toUpperCase() + brand.slice(1)
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A"
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8 bg-white">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Subscription</h1>
              <p className="text-black">Manage your subscription and billing</p>
            </div>

            {isDataLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-black">Loading subscription data...</span>
              </div>
            ) : (
              <>
                {subscription.cancelAtPeriodEnd && (
                  <Alert className="bg-background border-border">
                    <AlertCircle className="h-4 w-4 text-amber-400" />
                    <AlertTitle className="text-amber-300">Subscription Canceling</AlertTitle>
                    <AlertDescription className="text-amber-200">
                      Your subscription will be canceled on {formatDate(subscription.currentPeriodEnd)}.
                      You can reactivate your subscription anytime before this date.
                    </AlertDescription>
                    <Button
                      className="mt-2 bg-amber-500 hover:bg-amber-600 text-white"
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
                      customerEmail={user?.email}
                      onSwitchPlan={async (planId, seats, coupon) => {
                        setIsLoading(true)
                        try {
                          // For enterprise, redirect to contact page
                          if (planId === "enterprise") {
                            window.location.href = "/contact"
                            return
                          }

                          // Create Stripe checkout session via API
                          const response = await fetch("/api/stripe/checkout", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              planId,
                              billingCycle: "monthly",
                              seats: Math.min(MAX_SEATS, Math.max(1, seats)),
                              couponCode: coupon,
                              customerEmail: user?.email,
                              successUrl: `${window.location.origin}/dashboard/subscription?success=true`,
                              cancelUrl: `${window.location.origin}/dashboard/subscription?canceled=true`,
                            }),
                          })

                          const result = await response.json()

                          if (result.error) {
                            throw new Error(result.error)
                          }

                          if (result.url) {
                            // Redirect to Stripe Checkout
                            window.location.href = result.url
                          } else {
                            throw new Error("No checkout URL returned")
                          }
                        } catch (error: any) {
                          toast({
                            variant: "destructive",
                            title: "Error",
                            description: error.message || "Failed to start checkout",
                          })
                          setIsLoading(false)
                        }
                      }}
                    />
                  </TabsContent>

                  <TabsContent value="billing" className="space-y-4 pt-4">
                    <Card className="bg-white border-2 border-black">
                      <CardHeader>
                        <CardTitle className="text-black">Billing History</CardTitle>
                        <CardDescription className="text-primary">View your recent invoices</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {invoices.length === 0 ? (
                          <p className="text-black text-center py-8">No billing history yet</p>
                        ) : (
                          <div className="space-y-4">
                            {invoices.map((invoice) => (
                              <div key={invoice.id} className="grid grid-cols-[1fr,auto,auto] items-center gap-4">
                                <div>
                                  <div className="font-medium text-black">{invoice.planName}</div>
                                  <div className="text-sm text-black">{formatDate(invoice.date)}</div>
                                </div>
                                <div className="font-medium text-black">
                                  {formatCurrency(invoice.amount, invoice.currency)}
                                </div>
                                {invoice.hostedUrl ? (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-2 border-black text-black hover:bg-black hover:text-white"
                                    onClick={() => window.open(invoice.hostedUrl!, "_blank")}
                                  >
                                    <ExternalLink className="h-4 w-4 mr-1" />
                                    View
                                  </Button>
                                ) : (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-2 border-black text-black"
                                    disabled
                                  >
                                    {invoice.status}
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="payment" className="space-y-4 pt-4">
                    <Card className="bg-white border-2 border-black">
                      <CardHeader>
                        <CardTitle className="text-black">Payment Methods</CardTitle>
                        <CardDescription className="text-primary">Manage your payment methods</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {paymentMethods.length === 0 ? (
                          <p className="text-black text-center py-4">No payment methods saved</p>
                        ) : (
                          paymentMethods.map((pm) => (
                            <div key={pm.id} className="flex items-center justify-between rounded-lg border-2 border-black p-4">
                              <div className="flex items-center space-x-4">
                                <CreditCard className="h-6 w-6 text-black" />
                                <div>
                                  <div className="font-medium text-black">
                                    {formatCardBrand(pm.brand)} ending in {pm.last4}
                                    {pm.isDefault && (
                                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                        Default
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-sm text-black">
                                    Expires {pm.expMonth.toString().padStart(2, "0")}/{pm.expYear}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-2 border-black text-black hover:bg-black hover:text-white"
                                  onClick={handleManagePayments}
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-2 border-black text-black hover:bg-red-500 hover:text-white hover:border-red-500"
                                  onClick={() => handleDeletePaymentMethod(pm.id)}
                                  disabled={isDeletingPayment === pm.id}
                                >
                                  {isDeletingPayment === pm.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    "Remove"
                                  )}
                                </Button>
                              </div>
                            </div>
                          ))
                        )}
                        <Button className="w-full" onClick={handleManagePayments}>
                          {paymentMethods.length > 0 ? "Manage Payment Methods" : "Add Payment Method"}
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
