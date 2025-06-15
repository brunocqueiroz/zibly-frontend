import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calculator, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable AI Analyst Support",
  description: "Choose the perfect zibly.ai plan for your needs. From starter to enterprise, get the analytical support to boost your productivity. First task is free.",
  openGraph: {
    title: "zibly.ai Pricing: Plans for Every Professional",
    description: "Find the right zibly.ai subscription. Delegate tasks and save hours with our AI email assistant.",
  },
  twitter: {
    title: "zibly.ai Pricing: Plans for Every Professional",
    description: "Find the right zibly.ai subscription. Delegate tasks and save hours with our AI email assistant.",
  },
}

const plansData = [
  {
    name: "Starter",
    priceMonthly: "20",
    priceAnnual: "200", // $200/year
    description: "For professionals who need an extra pair of hands",
    features: [
      "15 tasks per month (~3-4 per week)",
      "24-hour turnaround",
      "Perfect for: Consultants, analysts, solo founders",
      "Example tasks: Weekly reports, data analysis, research briefs",
    ],
    planId: "starter",
  },
  {
    name: "Professional",
    priceMonthly: "200",
    priceAnnual: "2000", // $2000/year
    description: "For leaders who delegate real work",
    features: [
      "50 tasks per month (~2-3 per day)",
      "12-hour turnaround",
      "Priority processing",
      "Perfect for: Directors, VPs, small teams",
      "Example tasks: Board decks, financial models, competitive analysis",
    ],
    planId: "professional",
    popular: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "Contact Sales",
    priceAnnual: "Contact Sales",
    description: "For teams replacing junior headcount",
    features: [
      "Unlimited tasks",
      "2-hour turnaround for urgent work",
      "Dedicated workspace",
      "Custom training on your materials",
      "Perfect for: Full teams, high-volume users",
      "White-glove onboarding",
    ],
    planId: "enterprise",
    isContactSales: true,
  },
]

export default function PricingPage() {
  const generateProductSchema = (plan: any, billingCycle: 'monthly' | 'annual') => {
    const price = billingCycle === 'monthly' ? plan.priceMonthly : (parseFloat(plan.priceAnnual) / 12).toFixed(2);
    const url = `https://zibly.ai/pricing?plan=${plan.planId}&cycle=${billingCycle}`;

    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": `zibly.ai - ${plan.name} Plan (${billingCycle})`,
      "description": plan.description,
      "image": "https://zibly.ai/logo.png",
      "brand": {
        "@type": "Brand",
        "name": "zibly.ai"
      },
      "offers": {
        "@type": "Offer",
        "url": url,
        "priceCurrency": "USD",
        "price": price,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31", // Optional: set an expiry for the price
        "itemCondition": "https://schema.org/NewCondition",
        "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 1
        },
        "seller": {
            "@type": "Organization",
            "name": "zibly.ai"
        }
      },
      // You can add aggregateRating or reviews if you have them
    };
  };


  return (
    <>
      {/* JSON-LD Product Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plansData.map(plan => generateProductSchema(plan, 'monthly'))) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plansData.map(plan => generateProductSchema(plan, 'annual'))) }}
      />

      <div className="w-full bg-gradient-to-b from-primary-50 to-white">
        <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="inter-section-heading" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Give Yourself the Support You Deserve</h1>
              <p className="max-w-[900px] text-lg inter-text">
                Every professional should have a brilliant analyst on their team. Now you can.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {plansData.map((plan) => (
              <Card key={plan.planId} className={plan.popular ? "border-primary shadow-lg shadow-primary-100 dark:shadow-none" : ""}>
                <CardHeader>
                  {plan.popular && (
                    <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary dark:bg-primary-800/30 dark:text-primary-400 mb-2 w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="inter-heading-normal">{plan.name}</CardTitle>
                  <div className="text-3xl inter-text-medium">
                    {plan.isContactSales ? (
                      <span>Contact Sales</span>
                    ) : (
                      <>
                        ${plan.priceMonthly}<span className="text-sm inter-text">/month</span>
                      </>
                    )}
                  </div>
                  <CardDescription className="inter-text">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-center gap-2">
                         <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                         <span className="inter-text">{feature}</span>
                       </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary-600">
                    {plan.isContactSales ? (
                      <Link href="/contact">Contact Sales</Link>
                    ) : (
                      <Link href={`/signup?plan=${plan.planId}`}>Get Started</Link>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Task Calculator Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>How We Count Tasks</h2>
          <p className="max-w-3xl mx-auto text-center text-lg inter-text mb-12 text-gray-700">
            We count tasks based on complexity and deliverables. Simple text responses count as half a task, while comprehensive reports with multiple attachments count as two tasks. This ensures fair pricing based on the actual work involved.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-green-500" />
                <div>
                  <h3 className="inter-text-medium">Simple (0.5 tasks)</h3>
                  <p className="text-xs text-gray-500 mt-1">Text-only work, no files needed</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm inter-text">
                <li>• Quick email responses</li>
                <li>• Basic calculations</li>
                <li>• Short summaries</li>
                <li>• Text formatting</li>
                <li className="text-gray-600 italic">• Email reply with text only</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="inter-text-medium">Standard (1 task)</h3>
                  <p className="text-xs text-gray-500 mt-1">One document or file delivered</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm inter-text">
                <li>• Market research report</li>
                <li>• Data analysis with charts</li>
                <li>• PowerPoint presentation</li>
                <li>• Excel financial model</li>
                <li className="text-gray-600 italic">• One professional document attached</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                <div>
                  <h3 className="inter-text-medium">Complex (2 tasks)</h3>
                  <p className="text-xs text-gray-500 mt-1">Multiple files and deep analysis</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm inter-text">
                <li>• Complete investment memo</li>
                <li>• Multi-company analysis</li>
                <li>• Strategic planning package</li>
                <li>• Due diligence report</li>
                <li className="text-gray-600 italic">• Multiple documents and datasets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="inter-section-heading mb-8 text-center" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-center text-lg inter-text mb-12 text-gray-700">
            Everything you need to know about working with your AI analyst.
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">How quickly will I get my work back?</h3>
              <p className="inter-text text-gray-700">Starter plans get 24-hour turnaround, Professional gets 12-hour, and Enterprise gets 2-hour urgent processing. Most tasks are completed faster than the guaranteed time.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">What if I don't use all my tasks in a month?</h3>
              <p className="inter-text text-gray-700">Up to 50% of your unused tasks automatically roll over to the next month. This gives you flexibility for busy periods without losing value from quieter months.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">Can my entire team use one account?</h3>
              <p className="inter-text text-gray-700">Yes! Enterprise plans include a shared workspace where your whole team can send tasks and access completed work. Perfect for departments or project teams.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">What types of files can I send?</h3>
              <p className="inter-text text-gray-700">We accept all common business formats: Excel, PowerPoint, Word, PDF, CSV, images, and more. If you have a special format, just ask - we're very flexible.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">Is my data secure and confidential?</h3>
              <p className="inter-text text-gray-700">Absolutely. We use enterprise-grade security, never store your data permanently, and can sign NDAs. Your sensitive business information is completely protected.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">What if I need revisions or have questions?</h3>
              <p className="inter-text text-gray-700">Minor revisions and clarifications are included at no extra cost. We want you to be completely satisfied with every deliverable before considering the task complete.</p>
            </div>
            <div className="rounded-lg border-2 border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="inter-text-medium text-lg mb-3 text-gray-900">Can I cancel or change my plan anytime?</h3>
              <p className="inter-text text-gray-700">Yes, you can upgrade, downgrade, or cancel anytime. Changes take effect at your next billing cycle, and there are no cancellation fees or long-term contracts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
