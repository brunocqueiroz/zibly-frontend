'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const consultantsContent: UseCaseContent = {
  // Hero Section
  badge: "For Management Consultants",
  headline: "Stop Burning",
  headlineHighlight: "Midnight Oil",
  subheadline: "Delegate your analysis requests, models, or data files to your AI colleague. Zibly delivers polished decks, models, and executive summaries — built to consulting standards.",
  emailPlaceholderSubject: "Q4 Market Expansion Analysis",
  emailPlaceholderBody: "Build a 10-slide deck on TAM and expansion opportunities using attached market data. Include 3 regional recommendations and YoY trends.",
  emailPlaceholderFrom: "your.email@company.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Excel or CSV with KPIs, client metrics, or market data",
    "Previous decks or templates",
    "Brief description of the goal"
  ],
  whatYouGetBackItems: [
    "<strong>PowerPoint deck</strong> (10–15 slides, your template)",
    "<strong>Supporting Excel model</strong> or analysis",
    "<strong>Executive summary memo</strong> (optional PDF)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Market Sizing Analysis",
      taskDescription: "Research and analyze a specific market",
      deliverable: "10-slide TAM/SAM/SOM deck + Excel model",
      emailSubject: "Market Sizing Analysis Request",
      emailBody: "Please analyze the US fintech payment processing market and create a TAM/SAM/SOM analysis with top 5 competitors, market trends, and a 3-year growth forecast. Include an Excel model with assumptions."
    },
    {
      icon: TrendingUp,
      title: "Competitive Analysis",
      taskDescription: "Compare competitors in a specific industry",
      deliverable: "12-slide competitive landscape deck",
      emailSubject: "Competitive Analysis Request",
      emailBody: "Please create a competitive analysis of the top cloud infrastructure providers (AWS, Azure, Google Cloud, Oracle). Include market share, pricing strategies, key differentiators, and SWOT analysis for each."
    },
    {
      icon: BarChart3,
      title: "Market Entry Strategy",
      taskDescription: "Develop go-to-market strategy",
      deliverable: "15-slide strategy deck + timeline",
      emailSubject: "Market Entry Strategy Request",
      emailBody: "Please develop a market entry strategy for a B2B SaaS company expanding from the US to the UK market. Include competitive landscape, regulatory considerations, pricing strategy, distribution channels, and 12-month go-to-market plan."
    },
    {
      icon: FileText,
      title: "Due Diligence Framework",
      taskDescription: "Create comprehensive DD checklist",
      deliverable: "Excel checklist + process deck",
      emailSubject: "Due Diligence Framework Request",
      emailBody: "Please create a comprehensive due diligence framework for technology company acquisitions. Include financial, technical, legal, and operational workstreams with specific tasks, timeline, and key risk areas to evaluate."
    },
    {
      icon: TrendingUp,
      title: "Business Model Analysis",
      taskDescription: "Evaluate and improve business model",
      deliverable: "10-slide analysis + recommendations",
      emailSubject: "Business Model Analysis Request",
      emailBody: "Please analyze the subscription business model for enterprise software companies. Compare different pricing tiers, customer acquisition strategies, retention tactics, and provide recommendations for optimizing unit economics and LTV:CAC ratio."
    },
    {
      icon: FileText,
      title: "Industry Trends Report",
      taskDescription: "Research emerging industry trends",
      deliverable: "12-slide trends deck + summary memo",
      emailSubject: "Industry Trends Report Request",
      emailBody: "Please research and analyze the top 5 trends shaping the healthcare technology industry over the next 3 years. Include market drivers, key players, investment patterns, regulatory impacts, and strategic implications for incumbents and new entrants."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Senior Analyst",
  benefitsSubheadline: "Your AI colleague produces the decks, models, and memos your clients expect — with the quality your reputation demands.",
  benefitCards: [
    {
      icon: Clock,
      title: "80-Hour Weeks → 40-Hour Deliverables",
      description: "Delegate the repetitive production work — focus on insights."
    },
    {
      icon: TrendingUp,
      title: "Analyst Burnout Prevention",
      description: "Stop losing talent to formatting and data cleaning."
    },
    {
      icon: BarChart3,
      title: "Margin Pressure Relief",
      description: "Deliver more work with fewer hires."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Senior consultant $300/hr × 20 hrs = <strong class=\"text-gray-700\">$6,000 per deck</strong>",
    "Analyst team $150/hr × 40 hrs = <strong class=\"text-gray-700\">$6,000 per analysis</strong>",
    "<strong class=\"text-gray-700\">5–7 day turnaround</strong>",
    "Weekend work becomes norm"
  ],
  roiWithItems: [
    "Same deck from <strong class=\"text-primary\">$20</strong>",
    "Handle <strong class=\"text-primary\">10× more projects</strong>",
    "<strong class=\"text-primary\">6–24 hour turnaround</strong>",
    "Free weekends"
  ],
  roiTagline: "Save $50,000+ per month. Deliver 10× faster.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Consultants",
  qualityStandardsSubheadline: "Built for the rigor and precision that consulting demands",
  qualityStandards: [
    {
      title: "Consistent slide formatting",
      description: "Title case, chart hierarchy, and clear storylines"
    },
    {
      title: "MECE logic and slide-level insight phrasing",
      description: "Mutually exclusive, collectively exhaustive frameworks"
    },
    {
      title: "Proper chart selection",
      description: "Waterfalls, bridges, segmentation, and more"
    },
    {
      title: "Excel traceability and source tabs",
      description: "Clear formulas and audit trails for all calculations"
    },
    {
      title: "Confidentiality and deletion after completion",
      description: "Enterprise-grade security and data handling"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Email your work to work@zibly.ai",
      description: "Delegate the task with data, attachments, or just a description"
    },
    {
      title: "Tell your colleague what you need",
      description: "Brief instructions about the deliverable and format"
    },
    {
      title: "Get the finished deliverable in your inbox",
      description: "Polished, professional work ready for your client"
    }
  ],
  howItWorksSubheadline: "No new tools. No dashboards. No prompts.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">10×</span> Your Consulting Practice?",
  ctaSubheadline: "Join consulting teams already delegating to their AI colleague. Your first task is free — experience the quality for yourself.",
  ctaButtonText: "Delegate Your First Task",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Investment Banking",
      description: "Zibly builds investor-ready models and decks straight from your data.",
      href: "/solutions/investment-banking"
    },
    {
      title: "Private Equity",
      description: "Deal analysis and portfolio monitoring with institutional-grade outputs.",
      href: "/solutions/private-equity"
    },
    {
      title: "Strategy Executives",
      description: "Market intelligence and strategic planning delivered on demand.",
      href: "/solutions/strategy"
    }
  ]
}

export default function ConsultantsPage() {
  return <UseCaseTemplate content={consultantsContent} />
}
