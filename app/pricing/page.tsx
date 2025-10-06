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
    name: 'Zibly – Email AI for Deliverables',
    url: 'https://zibly.ai/pricing',
    description:
      'Send tasks by email and receive finished Excel models, decks, and research memos. First task free.',
    offers,
  }
  return (
    <div className="w-full bg-background">
      <div className="container max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <SlideUp>
            <div className="space-y-2">
              <h1 className="inter-section-heading text-white" style={{ fontSize: '56px', fontWeight: '400', lineHeight: '64px', letterSpacing: '-0.01em' }}>
                Give Yourself the <GradientText>Support You Deserve</GradientText>
              </h1>
              <p className="max-w-[900px] text-lg inter-text text-white">
                Every professional should have a brilliant analyst on their team. Now you can.
              </p>
            </div>
          </SlideUp>
        </div>
        <FadeIn delay={0.2}>
          <PricingGrid plans={plansData as any} />
        </FadeIn>
      </div>
    </div>
  )
}
