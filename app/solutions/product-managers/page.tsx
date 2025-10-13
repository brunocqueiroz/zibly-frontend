'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const productManagersContent: UseCaseContent = {
  // Hero Section
  badge: "For Product Managers",
  headline: "Stop Spending Hours",
  headlineHighlight: "Writing PRDs and Reports",
  subheadline: "Send your product notes, specs, or meeting summaries to Zibly. Get back polished PRDs, strategy decks, or release notes — clear, structured, and ready to share with your team.",
  emailPlaceholderSubject: "Product Requirements Document – New Subscription Flow",
  emailPlaceholderBody: "Please draft a PRD based on the attached meeting notes. Include problem statement, user stories, acceptance criteria, and success metrics. Return as a clean Google Docs-compatible format and 5-slide summary deck.",
  emailPlaceholderFrom: "your.email@company.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Meeting notes or Slack exports",
    "User stories, JIRA tickets, or specs",
    "Roadmaps or spreadsheets"
  ],
  whatYouGetBackItems: [
    "<strong>Product Requirements Document (PRD)</strong>",
    "<strong>Launch or Strategy Deck</strong>",
    "<strong>Release Notes or Postmortem Summary</strong>"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: FileText,
      title: "Product Requirements Document (PRD)",
      taskDescription: "Draft from notes, tickets, or ideas",
      deliverable: "3–5 page PRD + summary deck",
      emailSubject: "PRD Request",
      emailBody: "Please create a PRD for a new mobile app onboarding flow redesign. Include problem statement, user personas, success metrics, user stories (as a [user] I want to [action] so that [benefit]), functional requirements, non-functional requirements, technical considerations, acceptance criteria, and open questions. Use attached user research findings and current flow screenshots. Return 4-page Word document + 5-slide summary deck."
    },
    {
      icon: BarChart3,
      title: "Product Launch Brief",
      taskDescription: "Create or clean up launch plan",
      deliverable: "Deck + 1-page summary",
      emailSubject: "Product Launch Brief Request",
      emailBody: "Please create a product launch brief for our new analytics dashboard feature launching in Q1. Include feature overview, target users, value proposition, go-to-market strategy, marketing channels, sales enablement needs, success metrics, launch timeline, and risks/dependencies. Use attached feature specs and GTM planning notes. Return 12-slide deck + 1-page launch checklist."
    },
    {
      icon: TrendingUp,
      title: "Postmortem Summary",
      taskDescription: "Summarize incidents or learnings",
      deliverable: "2-page PDF + chart highlights",
      emailSubject: "Postmortem Summary Request",
      emailBody: "Please create a postmortem summary for the API downtime incident on Nov 15th. Include incident timeline, root cause analysis, impact assessment (users affected, revenue lost), response actions taken, what went well, what didn't go well, and action items with owners. Use attached incident logs and Slack thread. Return 2-page document with timeline visual."
    },
    {
      icon: BarChart3,
      title: "Feature Comparison Table",
      taskDescription: "Compare competitors or features",
      deliverable: "Excel + visual chart",
      emailSubject: "Feature Comparison Request",
      emailBody: "Please create a competitive feature comparison analyzing how our project management tool compares to Asana, Monday.com, ClickUp, and Notion. Compare features across categories: task management, collaboration, automation, reporting, integrations, mobile app, and pricing. Rate each on a 1-5 scale with supporting notes. Return Excel matrix + visual chart showing competitive positioning."
    },
    {
      icon: FileText,
      title: "Quarterly Product Strategy Deck",
      taskDescription: "Summarize roadmap and progress",
      deliverable: "10-slide deck",
      emailSubject: "Quarterly Strategy Deck Request",
      emailBody: "Please create a Q4 product strategy deck for leadership review. Include Q3 recap (shipped features, metrics achieved), Q4 roadmap priorities, customer feedback themes, competitive landscape changes, resource requirements, risks/dependencies, and 2025 preview. Use attached product analytics, customer feedback summary, and roadmap tracker. Return 10-slide PowerPoint formatted for exec presentation."
    },
    {
      icon: TrendingUp,
      title: "Release Notes Summary",
      taskDescription: "Clean up engineering change logs",
      deliverable: "1-page summary + formatted version",
      emailSubject: "Release Notes Request",
      emailBody: "Please create customer-facing release notes for our November product release (v2.5). Review attached engineering change log and create summary organized by: New Features (with screenshots), Improvements, Bug Fixes, and Known Issues. Write in clear, user-friendly language avoiding technical jargon. Include links to help docs where relevant. Return 1-page formatted HTML + plain text versions."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Product Chief of Staff",
  benefitsSubheadline: "Zibly organizes notes, builds decks, and drafts documentation automatically. It's like having a full-time Chief of Staff who formats, summarizes, and organizes everything for you.",
  benefitCards: [
    {
      icon: Clock,
      title: "Faster PRDs and Reports",
      description: "Turn notes into clear, aligned documents in minutes."
    },
    {
      icon: TrendingUp,
      title: "Stakeholder Updates Simplified",
      description: "Zibly summarizes status and builds decks automatically."
    },
    {
      icon: BarChart3,
      title: "Product Strategy, Polished",
      description: "Deliver clean documentation that drives alignment."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Hours lost writing docs = <strong class=\"text-gray-700\">less time building</strong>",
    "Endless alignment decks = <strong class=\"text-gray-700\">meeting fatigue</strong>",
    "Buried in notes = <strong class=\"text-gray-700\">context switching</strong>",
    "Constant backlog pressure = <strong class=\"text-gray-700\">stress</strong>"
  ],
  roiWithItems: [
    "Finished drafts in minutes from <strong class=\"text-primary\">$20</strong>",
    "Ready-to-present slides = <strong class=\"text-primary\">faster decisions</strong>",
    "Structured PRDs = <strong class=\"text-primary\">team alignment</strong>",
    "More time for real strategy = <strong class=\"text-primary\">better products</strong>"
  ],
  roiTagline: "Save hours each week. Focus on building, not formatting.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Product Managers",
  qualityStandardsSubheadline: "Built for clarity, structure, and stakeholder readability",
  qualityStandards: [
    {
      title: "Structured documentation",
      description: "Clear sections, headings, and flow"
    },
    {
      title: "Consistent formatting",
      description: "Templates for decks and docs"
    },
    {
      title: "Accurate summaries",
      description: "Key points preserved from notes"
    },
    {
      title: "Confidentiality",
      description: "Product roadmaps and user data deleted after delivery"
    },
    {
      title: "Supports all formats",
      description: "DOCX, PPTX, Markdown, Confluence-ready"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your notes or docs to work@zibly.ai",
      description: "Send meeting summaries, tickets, or templates"
    },
    {
      title: "Describe the task",
      description: "E.g., \"draft PRD,\" \"create postmortem deck,\" \"summarize roadmap\""
    },
    {
      title: "Receive your deliverable",
      description: "Formatted, clear, and team-ready"
    }
  ],
  howItWorksSubheadline: "No tools. No prompts. Just email your work and get it back, done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Automate Your Product Docs</span>?",
  ctaSubheadline: "Join product teams using Zibly to generate PRDs, decks, and summaries instantly. Your first deliverable is free — start saving time today.",
  ctaButtonText: "Start Your Free PRD",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Marketing Teams",
      description: "Campaign decks and creative briefs — automated.",
      href: "/solutions/marketing"
    },
    {
      title: "Management Consultants",
      description: "Strategic decks and market analysis, same structure.",
      href: "/solutions/consultants"
    },
    {
      title: "Strategy Executives",
      description: "Board materials and KPI reports, cleanly formatted.",
      href: "/solutions/strategy"
    }
  ]
}

export default function ProductManagersPage() {
  return <UseCaseTemplate content={productManagersContent} />
}
