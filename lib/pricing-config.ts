// Centralized pricing configuration for the entire application
// Update these values to change pricing across the entire site

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | null; // null for "Contact Sales"
  priceAnnual: number | null;
  features: string[];
  tasksPerMonth: string;
  processingSpeed: string;
  support: string;
  popular?: boolean;
  stripePriceIdMonthly?: string;
  stripePriceIdAnnual?: string;
}

export const PRICING_CONFIG = {
  // Core pricing values - change these to update prices site-wide
  free: {
    monthly: 0,
    annual: 0,
  },
  starter: {
    monthly: 59,
    annual: 590, // ~17% discount
  },
  professional: {
    monthly: 199,
    annual: 2000, // ~17% discount
  },
  enterprise: {
    monthly: null, // Contact sales
    annual: null,
  },

  // Currency formatting
  currency: 'USD',
  currencySymbol: '$',

  // Free trial
  freeTasksCount: 1,
};

// Stripe Price IDs - these should match your Stripe Dashboard products
// Set these via environment variables in production
export const STRIPE_PRICE_IDS = {
  starter: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER_MONTHLY || 'price_starter_monthly',
    annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER_ANNUAL || 'price_starter_annual',
  },
  professional: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_MONTHLY || 'price_professional_monthly',
    annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL_ANNUAL || 'price_professional_annual',
  },
};

// Stripe coupon codes for referrals
export const STRIPE_COUPONS = {
  FRIEND20: '20_percent_off',      // 20% off first month
  REFERRAL20: 'referral_20_off',   // 20% off for referral
  WELCOME10: '10_percent_off',     // 10% off first month
  BETA50: '50_percent_off',        // 50% off for beta users
};

// Get Stripe Price ID for a plan
export function getStripePriceId(planId: string, billingCycle: 'monthly' | 'annual'): string | null {
  const plan = STRIPE_PRICE_IDS[planId as keyof typeof STRIPE_PRICE_IDS];
  if (!plan) return null;
  return plan[billingCycle];
}

// Seat-based pricing configuration
export const MAX_SEATS = 10
export const SEAT_DISCOUNT_STEP = 0.03 // 3% less per additional seat (compounded)

// Total monthly price for N seats with compounding per-seat discount.
export function seatAdjustedTotal(basePerSeat: number, seats: number, step: number = SEAT_DISCOUNT_STEP): number {
  const n = Math.min(MAX_SEATS, Math.max(1, Math.floor(seats)))
  let total = 0
  let perUnit = basePerSeat
  for (let i = 0; i < n; i++) {
    total += perUnit
    perUnit = perUnit * (1 - step)
  }
  return total
}

export function formatCurrency(amount: number): string {
  return `${PRICING_CONFIG.currencySymbol}${amount.toFixed(2)}`
}

// Full plan details for pricing pages
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Get started and explore the platform at no cost',
    priceMonthly: PRICING_CONFIG.free.monthly,
    priceAnnual: PRICING_CONFIG.free.annual,
    features: [
      'Limited usage',
      'Basic features',
      'Community support',
    ],
    tasksPerMonth: 'Limited usage',
    processingSpeed: 'Standard processing',
    support: 'Community support',
  },
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal for solo practitioners and independent professionals',
    priceMonthly: PRICING_CONFIG.starter.monthly,
    priceAnnual: PRICING_CONFIG.starter.annual,
    features: [
      'Adaptive turnaround for all tasks',
      'Full SOC2 Data Compliance',
      'Zero Data Retention',
      'Never Trains Models with your Data',
      'Email support',
    ],
    tasksPerMonth: 'Standard usage',
    processingSpeed: 'Standard processing',
    support: 'Email support',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Perfect for teams and senior professionals',
    priceMonthly: PRICING_CONFIG.professional.monthly,
    priceAnnual: PRICING_CONFIG.professional.annual,
    features: [
      'Extended usage limits',
      'Always uses most advanced models',
      'Priority Processing',
      'Perfect for: Small Teams, Directors, VPs',
      'Full SOC2 Data Compliance',
      'Zero Data Retention',
      'Never Trains Models with your Data',
      'Priority support',
    ],
    tasksPerMonth: 'Extended usage',
    processingSpeed: 'Priority processing',
    support: 'Priority support',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Advanced features and dedicated support for large organizations',
    priceMonthly: PRICING_CONFIG.enterprise.monthly,
    priceAnnual: PRICING_CONFIG.enterprise.annual,
    features: [
      'Unlimited Tasks',
      'Dedicated Support',
      'On Premises Option',
      'Always uses most advanced models',
      'White Glove Onboarding',
      'Full SOC2 Data Compliance',
      'Zero Data Retention',
      'Never Trains Models with your Data',
      'Custom integrations',
      'Dedicated account manager',
    ],
    tasksPerMonth: 'Unlimited tasks',
    processingSpeed: 'Urgent processing',
    support: 'Dedicated support team',
  },
];

// Helper functions
export function formatPrice(price: number | null): string {
  if (price === null) return 'Contact Sales';
  return `${PRICING_CONFIG.currencySymbol}${price.toFixed(2)}`;
}

export function getAnnualDiscount(monthly: number, annual: number): number {
  return Math.round(((monthly * 12 - annual) / (monthly * 12)) * 100);
}

export function getPlanById(id: string): PricingPlan | undefined {
  return PRICING_PLANS.find(plan => plan.id === id);
}

// Text snippets for consistent messaging
export const PRICING_MESSAGES = {
  startingPrice: `Plans start at ${formatPrice(PRICING_CONFIG.starter.monthly)}/month`,
  freeTrial: `Your first ${PRICING_CONFIG.freeTasksCount} task${PRICING_CONFIG.freeTasksCount > 1 ? 's are' : ' is'} free`,
  noSetupFees: 'All plans include no setup fees',
  unlimitedRevisions: 'All plans include unlimited revisions',
};
