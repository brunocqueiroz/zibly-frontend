'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const strategyContent: UseCaseContent = {
  // Hero Section
  badge: "For Strategy Executives",
  headline: "Stop Producing Strategy.",
  headlineHighlight: "Start Executing It",
  subheadline: "Send your research, notes, or models to Zibly. Get back finished decks, memos, and summaries — clear, executive-ready, and formatted for impact.",
  emailPlaceholderSubject: "Strategy Update – Competitive Positioning",
  emailPlaceholderBody: "Please create a 10-slide deck summarizing the attached market data and notes. Include SWOT, market share, and key strategic recommendations. Format for executive presentation.",
  emailPlaceholderFrom: "your.email@company.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Strategy notes, market research, or analyst reports",
    "Excel models or dashboards",
    "Outline or draft deck content"
  ],
  whatYouGetBackItems: [
    "<strong>Strategy deck</strong> (executive presentation, 10–15 slides)",
    "<strong>Memo or executive summary</strong> (structured and concise)",
    "<strong>Data-backed visualizations</strong> (charts and KPIs)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Market Analysis Deck",
      taskDescription: "Summarize research and trends",
      deliverable: "10-slide presentation",
      emailSubject: "Market Analysis Deck Request",
      emailBody: "Please create a market analysis deck for the electric vehicle charging infrastructure market. Include market size and growth projections, key trends and drivers, competitive landscape (top 5 players), regulatory environment, customer segments, barriers to entry, and strategic implications for our business. Use attached market research reports and competitor data. Return 10-slide executive presentation."
    },
    {
      icon: TrendingUp,
      title: "Competitor Benchmarking",
      taskDescription: "Compare metrics and positioning",
      deliverable: "Excel + deck summary",
      emailSubject: "Competitor Benchmarking Request",
      emailBody: "Please create a competitive benchmarking analysis comparing our company to top 4 competitors across key metrics: revenue growth, market share, product offerings, pricing strategy, customer satisfaction, geographic presence, and strategic positioning. Include SWOT analysis for each competitor and strategic recommendations. Use attached financial data and market research. Return Excel analysis + 8-slide summary deck."
    },
    {
      icon: FileText,
      title: "Executive Strategy Memo",
      taskDescription: "Turn notes into an exec-ready memo",
      deliverable: "2-page summary + key takeaways",
      emailSubject: "Executive Strategy Memo Request",
      emailBody: "Please draft an executive strategy memo on our international expansion opportunity in Southeast Asia. Include market opportunity assessment, strategic rationale, recommended market entry approach, investment requirements, key risks and mitigations, success metrics, and decision framework. Use attached market research and financial models. Format for C-suite review. Return 2-page memo with executive summary."
    },
    {
      icon: BarChart3,
      title: "M&A Pipeline Summary",
      taskDescription: "Structure deal pipeline or due diligence",
      deliverable: "Excel + 5-slide deck",
      emailSubject: "M&A Pipeline Summary Request",
      emailBody: "Please create an M&A pipeline summary tracking 8 potential acquisition targets. Include company overview, strategic fit score, financial metrics (revenue, EBITDA, growth rate), valuation range, deal status, key risks, and prioritization recommendation. Organize targets by priority (tier 1, 2, 3). Use attached target profiles and financial data. Return Excel tracker + 5-slide portfolio view deck."
    },
    {
      icon: FileText,
      title: "Board Update Prep",
      taskDescription: "Create a slide pack for board review",
      deliverable: "15-slide deck + KPI summary",
      emailSubject: "Board Update Prep Request",
      emailBody: "Please prepare Q4 board update materials covering: business performance vs. plan, key strategic initiatives progress, market and competitive dynamics, financial outlook, capital allocation priorities, risks and opportunities, and management recommendations. Use attached quarterly performance data, strategic initiative trackers, and CFO deck. Format for board presentation. Return 15-slide deck + 1-page KPI dashboard."
    },
    {
      icon: TrendingUp,
      title: "Annual Planning Deck",
      taskDescription: "Turn goals and initiatives into slides",
      deliverable: "10–20-slide presentation",
      emailSubject: "Annual Planning Deck Request",
      emailBody: "Please create a 2025 annual strategic planning deck covering: market outlook and trends, strategic priorities and goals, key initiatives by pillar (growth, efficiency, innovation), resource allocation and investment plan, organizational capabilities needed, success metrics and milestones, risks and dependencies, and quarterly roadmap. Use attached strategic planning workshop notes and departmental plans. Return 18-slide executive presentation."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Strategy Analyst",
  benefitsSubheadline: "Zibly helps strategy executives and chiefs of staff translate analysis into action. It produces decks, memos, and models overnight — so you can focus on leading the discussion, not building the slides.",
  benefitCards: [
    {
      icon: Clock,
      title: "Executive-Ready Decks",
      description: "Polished slides aligned to corporate templates."
    },
    {
      icon: TrendingUp,
      title: "Research Summaries",
      description: "Turn 50 pages of reports into 2 pages of insights."
    },
    {
      icon: BarChart3,
      title: "Faster Decision Cycles",
      description: "Get deliverables back in hours, not days."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Analysts buried in deck production = <strong class=\"text-gray-700\">bottleneck</strong>",
    "Research reports piling up = <strong class=\"text-gray-700\">delayed decisions</strong>",
    "Slow decision cycles = <strong class=\"text-gray-700\">missed opportunities</strong>",
    "Expensive external consultants = <strong class=\"text-gray-700\">high costs</strong>"
  ],
  roiWithItems: [
    "Decks built automatically from <strong class=\"text-primary\">$20</strong>",
    "Clear summaries overnight = <strong class=\"text-primary\">faster insights</strong>",
    "Instant executive deliverables = <strong class=\"text-primary\">agility</strong>",
    "Strategy execution on demand = <strong class=\"text-primary\">competitive advantage</strong>"
  ],
  roiTagline: "Save weeks of analyst time. Move from analysis to action faster.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Strategy Executives",
  qualityStandardsSubheadline: "Built for precision, clarity, and executive polish",
  qualityStandards: [
    {
      title: "Executive formatting",
      description: "Clean layouts and storytelling flow"
    },
    {
      title: "Data accuracy",
      description: "Charts and KPIs double-checked for consistency"
    },
    {
      title: "Strategic structure",
      description: "MECE logic and business frameworks applied"
    },
    {
      title: "Confidentiality",
      description: "Full encryption and auto-deletion of sensitive data"
    },
    {
      title: "Multi-format support",
      description: "PPTX, DOCX, Excel, or combined deliverables"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your materials to work@zibly.ai",
      description: "Send notes, research, or models"
    },
    {
      title: "Describe the outcome",
      description: "E.g., \"board deck,\" \"competitive summary,\" or \"planning memo\""
    },
    {
      title: "Receive your deliverable",
      description: "Formatted, insight-ready, and presentation-grade"
    }
  ],
  howItWorksSubheadline: "No tools. No dashboards. Just email your strategy — and get it back, done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Scale Your Strategy Execution</span>?",
  ctaSubheadline: "Join executives using Zibly to transform notes, data, and reports into finished strategy decks and memos overnight. Your first deliverable is free.",
  ctaButtonText: "Start Your Free Deck",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Management Consultants",
      description: "Strategic decks and market analyses, ready overnight.",
      href: "/solutions/consultants"
    },
    {
      title: "Product Managers",
      description: "PRDs and launch decks formatted automatically.",
      href: "/solutions/product-managers"
    },
    {
      title: "Private Equity",
      description: "Board and investor reports built from your data.",
      href: "/solutions/private-equity"
    }
  ]
}

export default function StrategyPage() {
  return <UseCaseTemplate content={strategyContent} />
}
