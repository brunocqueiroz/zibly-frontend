'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const mbaStudentsContent: UseCaseContent = {
  // Hero Section
  badge: "For MBA Students",
  headline: "Stop Pulling",
  headlineHighlight: "All-Nighters on Case Decks",
  subheadline: "Send your case prompts, data, and notes to Zibly. Get back structured frameworks, Excel models, and polished decks — so you can focus on insights and interviews.",
  emailPlaceholderSubject: "Case Competition Deck Request",
  emailPlaceholderBody: "Please create a 12-slide case competition deck analyzing market entry strategy for a fintech startup expanding to Europe. Include market sizing, competitive landscape, go-to-market recommendations, and 3-year financial projections. Use attached case packet and market data. Return PowerPoint deck.",
  emailPlaceholderFrom: "your.email@business-school.edu",

  // What You Send/Get Section
  whatYouSendItems: [
    "Case prompts or assignment instructions",
    "Excel files with data or company financials",
    "Class notes, readings, or previous templates"
  ],
  whatYouGetBackItems: [
    "<strong>PowerPoint deck</strong> (10–15 slides, professionally formatted)",
    "<strong>Excel financial model</strong> or analysis",
    "<strong>Executive summary</strong> or recommendation memo"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: FileText,
      title: "Case Study Presentation",
      taskDescription: "Build structured deck from case materials",
      deliverable: "12-slide PowerPoint + exec summary",
      emailSubject: "Case Study Presentation Request",
      emailBody: "Please create a case presentation analyzing whether Company X should enter the Southeast Asian market. Include situation analysis, market sizing, competitive landscape, strategic options (3 scenarios), financial impact, and recommendation. Use attached case packet and exhibits. Return 12-slide PowerPoint with executive summary."
    },
    {
      icon: BarChart3,
      title: "Financial Model Cleanup",
      taskDescription: "Polish and structure Excel model",
      deliverable: "Clean Excel model + charts",
      emailSubject: "Financial Model Cleanup Request",
      emailBody: "Please clean up and structure my 3-statement financial model for a SaaS company valuation project. Add proper formatting, create an assumptions page, build sensitivity tables for revenue growth (20-40%) and discount rate (8-12%), and generate 5 charts (revenue build, cash flow waterfall, valuation bridge). Return formatted Excel file."
    },
    {
      icon: TrendingUp,
      title: "Market Entry Analysis",
      taskDescription: "Research and analyze new market opportunity",
      deliverable: "10-slide market analysis deck",
      emailSubject: "Market Entry Analysis Request",
      emailBody: "Please analyze the opportunity for a US-based meal kit company to enter the Canadian market. Research market size, growth trends, key competitors (HelloFresh, GoodFood, Chef's Plate), regulatory requirements, and distribution challenges. Create TAM/SAM/SOM analysis and provide go/no-go recommendation. Return 10-slide deck."
    },
    {
      icon: FileText,
      title: "Recruiting Deck",
      taskDescription: "Create professional interview deck",
      deliverable: "8-10 slide polished deck",
      emailSubject: "Recruiting Deck Request",
      emailBody: "Please create a professional consulting case interview deck about improving profitability for a retail chain. Include situation overview, issue tree, analysis across 3 areas (revenue, costs, operations), data exhibits, and structured recommendation with implementation roadmap. Format to McKinsey/Bain style. Return polished PowerPoint."
    },
    {
      icon: BarChart3,
      title: "Business Plan Summary",
      taskDescription: "Draft startup business plan sections",
      deliverable: "15-page business plan + financial model",
      emailSubject: "Business Plan Summary Request",
      emailBody: "Please draft a business plan for my entrepreneurship class for a B2B SaaS startup in HR tech. Include executive summary, market analysis, competitive landscape, business model (pricing/unit economics), go-to-market strategy, team overview, and 3-year financial projections. Use attached pitch deck and research. Return Word doc + Excel model."
    },
    {
      icon: TrendingUp,
      title: "Class Project Slides",
      taskDescription: "Build presentation from project notes",
      deliverable: "15-slide presentation deck",
      emailSubject: "Class Project Slides Request",
      emailBody: "Please create presentation slides for my operations management project analyzing supply chain optimization at Amazon. Cover current state analysis, problem identification, solution framework (3 recommendations), implementation plan, expected benefits, and risks. Use attached research notes and professor's template. Return 15-slide PowerPoint."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Study Partner",
  benefitsSubheadline: "Zibly helps you produce the polished deliverables your professors and recruiters expect — without sacrificing sleep or social life.",
  benefitCards: [
    {
      icon: Clock,
      title: "All-Nighters → Actual Sleep",
      description: "Get professional-quality work done faster so you can focus on learning and interviews."
    },
    {
      icon: TrendingUp,
      title: "Polish That Impresses",
      description: "Slides and models that look consultant-grade, not student-rushed."
    },
    {
      icon: BarChart3,
      title: "More Time for What Matters",
      description: "Spend less time formatting, more time networking and preparing for recruiting."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Formatting slides until 3 AM = <strong class=\"text-gray-700\">exhaustion + mistakes</strong>",
    "Excel errors in model = <strong class=\"text-gray-700\">points off + stress</strong>",
    "<strong class=\"text-gray-700\">20+ hours per case</strong> leaves no time for recruiting prep",
    "Amateur-looking work doesn't impress recruiters"
  ],
  roiWithItems: [
    "Polished deliverables from <strong class=\"text-primary\">$20</strong>",
    "<strong class=\"text-primary\">6-24 hour turnaround</strong> for most projects",
    "<strong class=\"text-primary\">Professional-quality work</strong> that stands out",
    "More time for interview prep and networking events"
  ],
  roiTagline: "Better grades. Better sleep. Better recruiting outcomes.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Students",
  qualityStandardsSubheadline: "Academic rigor meets professional polish",
  qualityStandards: [
    {
      title: "Professional formatting",
      description: "Slides and models that look consultant/banker-grade"
    },
    {
      title: "Structured thinking",
      description: "MECE frameworks, clear storylines, and logical flow"
    },
    {
      title: "Accurate calculations",
      description: "Error-checked models with clear assumptions"
    },
    {
      title: "Academic integrity support",
      description: "We provide drafts and frameworks — you own the final work and insights"
    },
    {
      title: "Fast turnaround",
      description: "Most projects delivered within 6-24 hours"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your assignment to work@zibly.ai",
      description: "Send case prompts, data files, or project instructions"
    },
    {
      title: "Describe what you need",
      description: "E.g., \"12-slide deck + exec summary\" or \"clean up my Excel model\""
    },
    {
      title: "Receive polished deliverable",
      description: "Review, customize, and submit per your school's guidelines"
    }
  ],
  howItWorksSubheadline: "No learning curve. No subscriptions. Just email and get help.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Level Up</span> Your MBA Work?",
  ctaSubheadline: "Join MBA students at top schools already using Zibly to deliver better work in less time. Your first project is free — see the quality for yourself.",
  ctaButtonText: "Start Your Free Project",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Management Consultants",
      description: "See how professionals use Zibly for client-ready decks and analysis.",
      href: "/solutions/consultants"
    },
    {
      title: "Investment Banking",
      description: "Professional-grade pitch decks and financial models.",
      href: "/solutions/investment-banking"
    },
    {
      title: "Law Students",
      description: "Legal research, briefs, and memo drafting assistance.",
      href: "/solutions/law-students"
    }
  ]
}

export default function MBAStudentsPage() {
  return <UseCaseTemplate content={mbaStudentsContent} />
}
