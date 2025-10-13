'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const privateEquityContent: UseCaseContent = {
  // Hero Section
  badge: "For Private Equity",
  headline: "Stop Drowning in",
  headlineHighlight: "Portco Spreadsheets",
  subheadline: "Send us your portfolio data, financials, or deal models. Get back QBR packs, investment memos, and valuation updates — institutional-grade, overnight.",
  emailPlaceholderSubject: "Q4 Portfolio KPI Dashboard Request",
  emailPlaceholderBody: "Please update our portfolio dashboard with Q4 financials for 8 companies. Include revenue, EBITDA, burn, and ARR trends. Flag any companies off-plan by >15%. Return Excel dashboard + 3-slide summary.",
  emailPlaceholderFrom: "your.email@pefirm.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Excel portfolio tracking files or company financials",
    "Investment memos or data room links",
    "Brief instructions on analysis or update needed"
  ],
  whatYouGetBackItems: [
    "<strong>Updated Excel dashboard</strong> with KPIs and variance analysis",
    "<strong>Investment memo</strong> or diligence summary",
    "<strong>QBR presentation deck</strong> (10–15 slides, your template)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Portfolio KPI Dashboard Update",
      taskDescription: "Refresh portfolio company metrics and trends",
      deliverable: "Excel dashboard + 3-slide summary",
      emailSubject: "Portfolio KPI Dashboard Update Request",
      emailBody: "Please update our portfolio dashboard with latest quarterly financials for all 12 portfolio companies. Include revenue growth, EBITDA margins, cash burn, ARR/MRR trends, and headcount changes. Flag any companies >15% off plan. Add YoY and QoQ comparisons. Return Excel dashboard + 3-slide executive summary."
    },
    {
      icon: TrendingUp,
      title: "LBO or DCF Model Refresh",
      taskDescription: "Update deal model with new assumptions",
      deliverable: "Excel model + sensitivity tables",
      emailSubject: "LBO Model Refresh Request",
      emailBody: "Please refresh our LBO model for Target Co with updated Q3 actuals and revised projections. Update revenue assumptions to reflect 35% growth (down from 40%), adjust EBITDA margins, and revise exit multiple to 8x (from 9x). Recalculate IRR and MOIC. Add sensitivity tables for exit timing and multiples. Return updated Excel model."
    },
    {
      icon: FileText,
      title: "Investment Memo Draft",
      taskDescription: "Create IC memo from diligence materials",
      deliverable: "15-page investment memo",
      emailSubject: "Investment Memo Draft Request",
      emailBody: "Please draft an investment committee memo for a $50M Series B investment in a B2B SaaS company. Include executive summary, market overview, business model analysis, competitive positioning, financial projections, valuation (comps + DCF), key risks, and investment thesis. Use attached management deck and financials. Return Word document memo."
    },
    {
      icon: BarChart3,
      title: "Market Scan / Add-On Target List",
      taskDescription: "Identify add-on acquisition targets",
      deliverable: "Target list Excel + 5-slide summary",
      emailSubject: "Add-On Target List Request",
      emailBody: "Please create a target list of potential add-on acquisitions for our healthcare IT portfolio company. Focus on companies with $10M-$50M revenue in patient engagement software. Include company overview, estimated revenue, geographic focus, product capabilities, and strategic rationale. Prioritize top 15 targets. Return Excel list + 5-slide summary deck."
    },
    {
      icon: TrendingUp,
      title: "QBR Pack Preparation",
      taskDescription: "Quarterly board review materials",
      deliverable: "20-slide QBR deck + Excel backup",
      emailSubject: "QBR Pack Preparation Request",
      emailBody: "Please prepare Q4 QBR materials for PortCo Board meeting. Include financial performance (actuals vs. plan), key metrics dashboard, operational highlights, strategic initiatives update, market developments, and upcoming milestones. Use attached financials and previous QBR template. Return PowerPoint deck + supporting Excel."
    },
    {
      icon: FileText,
      title: "Valuation Cross-Check",
      taskDescription: "Validate portfolio company valuations",
      deliverable: "Valuation memo + comps analysis",
      emailSubject: "Valuation Cross-Check Request",
      emailBody: "Please perform a valuation cross-check for our cybersecurity portfolio company ahead of year-end mark. Build trading comps (5-7 public peers) and precedent transactions analysis (last 2 years). Compare to our current carrying value of 10x revenue. Include sensitivity analysis and market trends. Return memo + Excel comps."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Portfolio Operations Team",
  benefitsSubheadline: "Zibly delivers the models, memos, and board materials your portfolio demands — without adding headcount.",
  benefitCards: [
    {
      icon: Clock,
      title: "Small Team → Enterprise Output",
      description: "Monitor 20+ portcos without building a massive ops team."
    },
    {
      icon: TrendingUp,
      title: "Deal Flow Bottleneck Relief",
      description: "Your associates focus on sourcing, not spreadsheets."
    },
    {
      icon: BarChart3,
      title: "Institutional-Grade Materials",
      description: "IC memos and QBR decks arrive polished and audit-ready."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Associate $200/hr × 30 hrs = <strong class=\"text-gray-700\">$6,000 per QBR</strong>",
    "Analyst team for 10 portcos = <strong class=\"text-gray-700\">$400K+ annually</strong>",
    "<strong class=\"text-gray-700\">2-week turnaround</strong> for investment memos",
    "Deal flow constrained by bandwidth"
  ],
  roiWithItems: [
    "Same QBR pack from <strong class=\"text-primary\">$20</strong>",
    "Scale portfolio without ops headcount: <strong class=\"text-primary\">save $300K+/year</strong>",
    "<strong class=\"text-primary\">24-hour turnaround</strong> on most deliverables",
    "Evaluate 3× more deals per quarter"
  ],
  roiTagline: "Save $40,000+ per month. Scale without hiring.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for PE Firms",
  qualityStandardsSubheadline: "Built for the precision and confidentiality institutional investors demand",
  qualityStandards: [
    {
      title: "Audit-ready models and variance analysis",
      description: "Clear formulas, assumption tabs, and change logs"
    },
    {
      title: "IC-ready formatting and structure",
      description: "Professional memos and decks matching your firm's standards"
    },
    {
      title: "Confidential data handling",
      description: "Enterprise-grade encryption and post-delivery deletion"
    },
    {
      title: "Institutional valuation rigor",
      description: "Traceable comps, defensible DCF assumptions, sensitivity tables"
    },
    {
      title: "Portfolio-grade KPI dashboards",
      description: "Consistent metrics, trend analysis, and variance flags"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Send portco financials, models, or data rooms"
    },
    {
      title: "Describe the deliverable",
      description: "E.g., \"refresh KPI dashboard, flag outliers\""
    },
    {
      title: "Receive the finished analysis or deck",
      description: "Polished, institutional-grade materials"
    }
  ],
  howItWorksSubheadline: "No new platforms. No training. Just email and get it done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">3×</span> Your Deal Capacity?",
  ctaSubheadline: "Join PE firms already using Zibly to manage larger portfolios with leaner teams. Your first analysis is free — see the institutional quality for yourself.",
  ctaButtonText: "Start Your Free Analysis",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Investment Banking",
      description: "Pitch materials and valuation models built to banking standards.",
      href: "/solutions/investment-banking"
    },
    {
      title: "Management Consultants",
      description: "Strategic decks and market sizing for client engagements.",
      href: "/solutions/consultants"
    },
    {
      title: "Strategy Executives",
      description: "Market intelligence and competitive analysis on demand.",
      href: "/solutions/strategy"
    }
  ]
}

export default function PrivateEquityPage() {
  return <UseCaseTemplate content={privateEquityContent} />
}
