
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'
import { PRICING_PLANS, formatPrice, PRICING_MESSAGES } from '@/lib/pricing-config'

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable AI Analyst Support",
  description: "Choose the perfect zibly.ai plan for your needs. From starter to enterprise, get the analytical support to boost your productivity. First task is free.",
}

// Using centralized pricing configuration
const plansData = PRICING_PLANS

export default function PricingPage() {
  return (
    <div className="w-full bg-gradient-to-b from-primary-50 to-white">
      <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
              Give Yourself the Support You Deserve
            </h1>
            <p className="max-w-[900px] text-lg inter-text">
              Every professional should have a brilliant analyst on their team. Now you can.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 items-stretch">
          {plansData.map((plan) => (
            <Card key={plan.planId} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg shadow-primary-100 dark:shadow-none" : ""}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary mb-2 w-fit">
                    Most Popular
                  </div>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-3xl">
                  {plan.priceMonthly === null ? (
                    <span>Contact Sales</span>
                  ) : (
                    <>
                      {formatPrice(plan.priceMonthly)}<span className="text-sm">/month</span>
                    </>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
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
                <Button asChild className="w-full bg-primary hover:bg-primary-600">
                  {plan.priceMonthly === null ? (
                    <Link href="/contact">Contact Sales</Link>
                  ) : (
                    <Link href={`/signup?plan=${plan.id}`}>Get Started</Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
