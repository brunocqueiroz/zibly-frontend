"use client"

import { PRICING_PLANS } from '@/lib/pricing-config'
import PricingGrid from '@/components/pricing-grid'
import SlideUp from "@/components/animations/SlideUp"
import FadeIn from "@/components/animations/FadeIn"
import GradientText from "@/components/animations/GradientText"

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
    name: 'Zibly – Your AI Colleague',
    url: 'https://zibly.ai/pricing',
    description:
      'Delegate work by email to your AI colleague. Receive finished Excel models, decks, and research memos. First task free.',
    offers,
  }
  return (
    <div className="w-full bg-white">
      <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <FadeIn delay={0.2}>
          <PricingGrid plans={plansData as any} />
        </FadeIn>
      </div>
    </div>
  )
}
