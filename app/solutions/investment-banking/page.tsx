'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const investmentBankingContent: UseCaseContent = {
  // Hero Section
  badge: "For Investment Bankers",
  headline: "Stop Pulling",
  headlineHighlight: "All-Nighters",
  subheadline: "Send your models, data rooms, or CIM drafts to Zibly. Get back finished models, transaction decks, and diligence memos — polished, accurate, and built to banking standards.",
  emailPlaceholderSubject: "Comparable Company Analysis Request",
  emailPlaceholderBody: "Please build a comparable company analysis for SaaS companies with $50M-$200M revenue. Include EV/Revenue, EV/EBITDA multiples, and create a valuation summary with median, mean, and range. Return Excel + 5-slide summary.",
  emailPlaceholderFrom: "your.email@bank.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Excel models or comps files",
    "PDF or PowerPoint pitch decks",
    "Links to data rooms or financial statements",
    "Short description of the transaction or analysis goal"
  ],
  whatYouGetBackItems: [
    "<strong>Excel model</strong> (cleaned, updated, or built from scratch)",
    "<strong>Valuation summary deck</strong> (5–10 slides, your template)",
    "<strong>Supporting memo</strong> (key findings or deal summary)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Comparable Company Analysis",
      taskDescription: "Update trading comps and valuation summary",
      deliverable: "Updated Excel + 5-slide summary deck",
      emailSubject: "Comparable Company Analysis Request",
      emailBody: "Please build a comparable company analysis for publicly-traded cybersecurity companies with $100M+ revenue. Include latest financials, trading multiples (EV/Revenue, EV/EBITDA, P/E), growth rates, and margins. Create valuation summary with median, mean, and range. Return Excel file + 5-slide summary deck."
    },
    {
      icon: TrendingUp,
      title: "Precedent Transactions Analysis",
      taskDescription: "Refresh deal comps with new data",
      deliverable: "Excel comps sheet + 3-slide summary",
      emailSubject: "Precedent Transactions Analysis",
      emailBody: "Please create a precedent transactions analysis for M&A deals in the enterprise SaaS space over the last 3 years. Include transaction multiples (EV/Revenue, EV/EBITDA), deal premiums, and strategic rationale. Filter for deals >$500M. Return Excel + 3-slide summary."
    },
    {
      icon: BarChart3,
      title: "DCF Model Build",
      taskDescription: "Create discounted cash flow model",
      deliverable: "Excel model + sensitivity tables",
      emailSubject: "DCF Model Build Request",
      emailBody: "Please build a 5-year DCF model for a B2B SaaS company with $75M ARR growing at 40% YoY. Include revenue build-up by segment, operating expense assumptions, working capital, capex, and terminal value calculation. Add sensitivity tables for WACC (8-12%) and terminal growth (2-4%). Return Excel model."
    },
    {
      icon: FileText,
      title: "Pitch Deck Formatting",
      taskDescription: "Clean, align, and polish slides",
      deliverable: "Branded 10-15 slide deck",
      emailSubject: "Pitch Deck Formatting Request",
      emailBody: "Please format and clean up my 12-slide pitch deck. Ensure consistent font usage, alignment, color scheme (blue-gray palette), proper chart formatting, and professional table styling. Fix any spacing issues and ensure all slides follow the same template style. Return formatted PowerPoint."
    },
    {
      icon: TrendingUp,
      title: "Company Profile Slides",
      taskDescription: "Build 1-page profiles for comps or targets",
      deliverable: "Slides with charts and summary metrics",
      emailSubject: "Company Profile Slides Request",
      emailBody: "Please create 1-page company profile slides for these 5 public fintech companies: Square, PayPal, Stripe, Adyen, and Affirm. Include company overview, key metrics, financial snapshot, recent performance trends, and valuation multiples. Use consistent formatting across all profiles. Return PowerPoint."
    },
    {
      icon: FileText,
      title: "LBO Model Analysis",
      taskDescription: "Build leveraged buyout model",
      deliverable: "Excel LBO + returns analysis",
      emailSubject: "LBO Model Request",
      emailBody: "Please build an LBO model for a manufacturing company with $500M revenue and 20% EBITDA margins. Assume 60% debt financing, 5-year hold period, and exit at 8x EBITDA. Include sources & uses, debt schedule with PIK and revolver, cash flow waterfall, and IRR/MOIC analysis. Add sensitivity for entry/exit multiples. Return Excel."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Investment Banking Analyst",
  benefitsSubheadline: "Zibly delivers the Excel models and pitch materials your team needs — without the burnout or bandwidth limits.",
  benefitCards: [
    {
      icon: Clock,
      title: "Overloaded Teams → Instant Capacity",
      description: "Handle more live deals without hiring another analyst."
    },
    {
      icon: TrendingUp,
      title: "Analyst Burnout Prevention",
      description: "Let Zibly take the midnight model updates."
    },
    {
      icon: BarChart3,
      title: "Client-Ready Materials, Overnight",
      description: "Decks and models arrive formatted to your bank's standards."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Analyst team: $150/hr × 40 hrs = <strong class=\"text-gray-700\">$6,000 per model</strong>",
    "Associate review cycles = <strong class=\"text-gray-700\">2 days</strong>",
    "<strong class=\"text-gray-700\">Late nights + weekend work</strong>",
    "Hiring costs rising"
  ],
  roiWithItems: [
    "Same deliverable from <strong class=\"text-primary\">$20</strong>",
    "<strong class=\"text-primary\">6–24 hour turnaround</strong>",
    "<strong class=\"text-primary\">Free weekends</strong>",
    "Scale without headcount"
  ],
  roiTagline: "Save $30,000+ per deal cycle. Deliver 10× faster.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Bankers",
  qualityStandardsSubheadline: "Built for precision, auditability, and confidentiality",
  qualityStandards: [
    {
      title: "Accurate, auditable models",
      description: "Traceable formulas, clear assumptions tabs"
    },
    {
      title: "Bank-style pitch formatting",
      description: "Standard color palette, consistent alignment"
    },
    {
      title: "Valuation rigor",
      description: "Checks for rounding, consistency, and error flags"
    },
    {
      title: "Confidential data handling",
      description: "Encryption and post-delivery deletion"
    },
    {
      title: "Client-ready charts",
      description: "Valuation bridges, football fields, scenario tables"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Send models, comps, or decks"
    },
    {
      title: "Describe the deliverable",
      description: "E.g., \"refresh trading comps, update charts\""
    },
    {
      title: "Receive the finished model or deck",
      description: "Polished and error-checked"
    }
  ],
  howItWorksSubheadline: "No data rooms. No prompts — just email and get it done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">10×</span> Your Deal Throughput?",
  ctaSubheadline: "Join top banking teams using Zibly to turn data into deal materials overnight. Try your first model free — no setup required.",
  ctaButtonText: "Start Your Free Model",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Private Equity",
      description: "Portfolio monitoring and deal analysis with institutional-grade outputs.",
      href: "/solutions/private-equity"
    },
    {
      title: "Management Consultants",
      description: "Strategic decks and market sizing for client engagements.",
      href: "/solutions/consultants"
    },
    {
      title: "Accountants",
      description: "Financial analysis and reporting automation.",
      href: "/solutions/accountants"
    }
  ]
}

export default function InvestmentBankingPage() {
  return <UseCaseTemplate content={investmentBankingContent} />
}
