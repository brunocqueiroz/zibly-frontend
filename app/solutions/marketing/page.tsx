'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const marketingContent: UseCaseContent = {
  // Hero Section
  badge: "For Marketing Teams",
  headline: "Stop Drowning in",
  headlineHighlight: "Decks, Briefs, and Reports",
  subheadline: "Send your campaign briefs, data reports, or outlines to Zibly. Get back polished decks, summaries, or content plans — consistent, branded, and ready to share.",
  emailPlaceholderSubject: "Q4 Campaign Performance Report",
  emailPlaceholderBody: "Please create a 10-slide performance deck summarizing the attached campaign data. Include top-performing channels, ROI breakdown, and key learnings. Use a clean, executive-friendly layout with charts and concise text.",
  emailPlaceholderFrom: "your.email@company.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Campaign data exports (Google Ads, Meta, HubSpot, etc.)",
    "Marketing briefs or brainstorm notes",
    "Brand assets or design templates"
  ],
  whatYouGetBackItems: [
    "<strong>Campaign reports and decks</strong> (10–15 slides, formatted and visualized)",
    "<strong>Content calendars or briefs</strong> (structured and templated)",
    "<strong>Market or competitor summaries</strong> (PDFs, slides, or memos)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Campaign Performance Report",
      taskDescription: "Summarize ad data and ROI",
      deliverable: "Deck + summary PDF",
      emailSubject: "Campaign Performance Report Request",
      emailBody: "Please create a campaign performance report for our Q3 paid media efforts across Google Ads, Meta, and LinkedIn. Include spend by channel, impressions, clicks, conversions, CPA, ROI, and top 5 performing ad creatives. Add YoY comparison and recommendations for Q4 optimization. Use attached campaign exports. Return 12-slide PowerPoint + 1-page PDF summary."
    },
    {
      icon: FileText,
      title: "Creative Brief Draft",
      taskDescription: "Turn brainstorm notes into a clear brief",
      deliverable: "1–2 page brief (DOCX/PDF)",
      emailSubject: "Creative Brief Request",
      emailBody: "Please create a creative brief for our new product launch campaign targeting B2B SaaS buyers. Include campaign objectives, target audience profile, key messaging pillars, brand voice guidelines, deliverables needed (video, display ads, landing page), success metrics, and timeline. Use attached brainstorm notes and brand guidelines. Return 2-page Word document."
    },
    {
      icon: TrendingUp,
      title: "Content Calendar",
      taskDescription: "Build a month of content from ideas",
      deliverable: "Spreadsheet + summary plan",
      emailSubject: "Content Calendar Request",
      emailBody: "Please create a content calendar for November covering blog posts, social media, email newsletters, and webinars. Include content themes, target keywords, distribution channels, owner assignments, and publishing dates. Use attached content ideas doc and previous month's performance data. Return Excel calendar + 1-page content strategy summary."
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      taskDescription: "Analyze competitor campaigns or websites",
      deliverable: "Deck + table of insights",
      emailSubject: "Competitor Analysis Request",
      emailBody: "Please analyze the top 4 competitors in our space (Company A, B, C, D). Research their website messaging, value propositions, pricing models, content marketing approach, social media presence, and recent campaign themes. Create comparison table and SWOT analysis. Include screenshots and links. Return 10-slide deck + Excel comparison matrix."
    },
    {
      icon: FileText,
      title: "Blog or Article Outline",
      taskDescription: "Turn topic ideas into structured outlines",
      deliverable: "800–1,000 word outline",
      emailSubject: "Blog Outline Request",
      emailBody: "Please create a detailed outline for a blog post titled 'The Complete Guide to Marketing Automation for B2B Companies.' Include introduction, 5-7 main sections with subheadings, key points to cover in each section, internal/external linking opportunities, and conclusion with CTA. Target 2,000 words. Use attached topic research and keyword list. Return formatted outline document."
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy Deck",
      taskDescription: "Summarize goals, channels, KPIs",
      deliverable: "10-slide strategy deck",
      emailSubject: "Marketing Strategy Deck Request",
      emailBody: "Please create a 2025 marketing strategy deck covering our goals (pipeline, revenue, brand awareness), target audience segments, channel mix (paid, organic, events), budget allocation, key campaigns, success metrics/KPIs, and timeline. Use attached strategic planning notes and 2024 performance data. Format for executive presentation. Return 10-slide PowerPoint."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Marketing Coordinator",
  benefitsSubheadline: "Zibly helps marketing teams plan, analyze, and report faster. From campaign decks to content briefs, it works like the assistant you wish you had — reliable, fast, and perfectly formatted.",
  benefitCards: [
    {
      icon: Clock,
      title: "Instant Campaign Reporting",
      description: "Turn analytics into executive decks overnight."
    },
    {
      icon: TrendingUp,
      title: "Briefs and Content Plans",
      description: "Zibly structures your creative notes into clean, reusable briefs."
    },
    {
      icon: BarChart3,
      title: "Team Alignment",
      description: "Everyone works from the same templates and formats — automatically."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Hours lost formatting decks and slides = <strong class=\"text-gray-700\">wasted time</strong>",
    "Disorganized brainstorming notes = <strong class=\"text-gray-700\">confusion</strong>",
    "Repetitive end-of-quarter reports = <strong class=\"text-gray-700\">burnout</strong>",
    "Missed deadlines, late nights = <strong class=\"text-gray-700\">stress</strong>"
  ],
  roiWithItems: [
    "Ready-to-share reports in hours from <strong class=\"text-primary\">$20</strong>",
    "Structured, formatted briefs = <strong class=\"text-primary\">clarity</strong>",
    "Automated summaries = <strong class=\"text-primary\">efficiency</strong>",
    "Instant outputs, no prompts = <strong class=\"text-primary\">peace of mind</strong>"
  ],
  roiTagline: "Save hours every week. Present data beautifully — without the grind.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Marketing Teams",
  qualityStandardsSubheadline: "Built for brand consistency and marketing excellence",
  qualityStandards: [
    {
      title: "Brand consistency",
      description: "Decks match fonts, colors, and voice guidelines"
    },
    {
      title: "Data visualization",
      description: "Charts automatically generated and cleanly formatted"
    },
    {
      title: "Structured storytelling",
      description: "Clear insights, summaries, and takeaways"
    },
    {
      title: "Version control",
      description: "Consistent templates across campaigns"
    },
    {
      title: "Confidentiality",
      description: "All client and campaign data deleted after delivery"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Attach reports, briefs, or campaign data"
    },
    {
      title: "Describe what you need",
      description: "E.g., \"campaign report,\" \"creative brief,\" \"competitor analysis\""
    },
    {
      title: "Receive your deliverable",
      description: "Polished, branded, and ready to share"
    }
  ],
  howItWorksSubheadline: "No dashboards. No prompts. Just email your work — Zibly takes care of the rest.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Automate Your Marketing Workflow</span>?",
  ctaSubheadline: "Join marketing teams using Zibly to create campaign reports, content briefs, and strategy decks in record time. Your first project is free.",
  ctaButtonText: "Start Your Free Project",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Management Consultants",
      description: "Strategy decks and market analyses — built the same way.",
      href: "/solutions/consultants"
    },
    {
      title: "Strategy Executives",
      description: "Executive reports and investor updates, formatted automatically.",
      href: "/solutions/strategy"
    },
    {
      title: "MBA Students",
      description: "Clear, professional decks and business reports made from notes.",
      href: "/solutions/mba-students"
    }
  ]
}

export default function MarketingPage() {
  return <UseCaseTemplate content={marketingContent} />
}
