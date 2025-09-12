
import type { Metadata } from 'next'
import { PRICING_PLANS } from '@/lib/pricing-config'
import PricingGrid from '@/components/pricing-grid'

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable AI Analyst Support",
  description: "Choose the perfect zibly.ai plan for your needs. From starter to enterprise, get the analytical support to boost your productivity. First task is free.",
  alternates: { canonical: "https://zibly.ai/pricing" },
}

// Using centralized pricing configuration
const plansData = PRICING_PLANS

export default function PricingPage() {
  const offers = plansData
    .filter((p) => p.priceMonthly !== null)
    .map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.priceMonthly,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://zibly.ai/signup?plan=${p.id}`,
    }))
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zibly – Email AI for Deliverables',
    url: 'https://zibly.ai/pricing',
    description:
      'Send tasks by email and receive finished Excel models, decks, and research memos. First task free.',
    offers,
  }
  return (
    <div className="w-full bg-gradient-to-b from-primary-50 to-white">
      <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
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
        <PricingGrid plans={plansData as any} />
      </div>
    </div>
  )
}
