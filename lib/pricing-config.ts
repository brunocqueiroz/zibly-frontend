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
}

export const PRICING_CONFIG = {
  // Core pricing values - change these to update prices site-wide
  starter: {
    monthly: 20,
    annual: 200, // ~17% discount
  },
  professional: {
    monthly: 200,
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

// Full plan details for pricing pages
export const PRICING_PLANS: PricingPlan[] = [
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
    tasksPerMonth: '50 tasks per month',
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
      '10,000 Tasks a month (effectively unlimited)',
      'Always uses most advanced models',
      'Priority Processing',
      'Perfect for: Small Teams, Directors, VPs',
      'Full SOC2 Data Compliance',
      'Zero Data Retention',
      'Never Trains Models with your Data',
      'Priority support',
    ],
    tasksPerMonth: '10,000 tasks per month',
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
  return `${PRICING_CONFIG.currencySymbol}${price}`;
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