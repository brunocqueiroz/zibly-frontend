'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const undergraduatesContent: UseCaseContent = {
  // Hero Section
  badge: "For Undergraduates",
  headline: "Stop Pulling",
  headlineHighlight: "All-Nighters on Essays and Slides",
  subheadline: "Send your notes, drafts, or research sources to Zibly. Get back polished essays, summaries, or presentations — structured, cited, and ready to learn from.",
  emailPlaceholderSubject: "Essay Outline – Climate Policy Paper",
  emailPlaceholderBody: "Please turn the attached notes into a 1,500-word essay outline on climate policy. Include an introduction, three supporting arguments, and conclusion. Add 3–5 credible academic sources (APA format).",
  emailPlaceholderFrom: "your.email@university.edu",

  // What You Send/Get Section
  whatYouSendItems: [
    "Notes, slides, or draft essays",
    "Reading material or links to articles",
    "Instructions or assignment prompts"
  ],
  whatYouGetBackItems: [
    "<strong>Essay or outline</strong> (structured, with introduction and arguments)",
    "<strong>Presentation deck</strong> (clean, visual slides)",
    "<strong>Summary notes or study guide</strong> (1–2 pages, easy to revise from)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: FileText,
      title: "Essay Outline",
      taskDescription: "Turn notes into a clear essay structure",
      deliverable: "1,500-word outline or draft",
      emailSubject: "Essay Outline Request",
      emailBody: "Please create a 1,500-word essay outline analyzing the impact of social media on mental health among teenagers. Include an introduction with thesis statement, three body paragraphs (each with main argument and supporting evidence), counterargument section, and conclusion. Add 5 academic sources in APA format. Use attached research notes and articles."
    },
    {
      icon: BarChart3,
      title: "Research Summary",
      taskDescription: "Summarize 3–5 articles or readings",
      deliverable: "1-page summary sheet",
      emailSubject: "Research Summary Request",
      emailBody: "Please summarize the 4 attached journal articles about renewable energy policy. For each article, include author/year, main thesis, key findings, and methodology. Create a comparison table showing similarities and differences. Format in APA style. Return 1-2 page summary document."
    },
    {
      icon: TrendingUp,
      title: "Presentation Deck",
      taskDescription: "Build slides from essay or group project notes",
      deliverable: "10-slide presentation",
      emailSubject: "Presentation Deck Request",
      emailBody: "Please create a 10-slide presentation deck for my biology group project on CRISPR gene editing. Include title slide, background/context (2 slides), how CRISPR works (2 slides), applications and benefits (2 slides), ethical concerns (2 slides), and conclusion. Add speaker notes for each slide. Use attached group notes and research."
    },
    {
      icon: FileText,
      title: "Lab Report Summary",
      taskDescription: "Summarize data or experiment results",
      deliverable: "Report outline + charts",
      emailSubject: "Lab Report Summary Request",
      emailBody: "Please create a lab report summary for my chemistry experiment on acid-base titration. Include introduction, materials/methods, results section with 2-3 charts from attached data, discussion of findings, sources of error, and conclusion. Follow standard lab report format. Return Word document with embedded charts."
    },
    {
      icon: BarChart3,
      title: "Study Guide",
      taskDescription: "Create a concise exam review sheet",
      deliverable: "2-page summary by topic",
      emailSubject: "Study Guide Request",
      emailBody: "Please create a study guide for my psychology midterm covering chapters 1-6. Include key concepts, important theories (with researchers/dates), definitions, and examples for each chapter. Organize by topic with clear headings. Keep to 2-3 pages. Use attached textbook notes and lecture slides. Return formatted PDF."
    },
    {
      icon: TrendingUp,
      title: "Group Project Brief",
      taskDescription: "Combine group notes into one unified deck",
      deliverable: "Polished PPTX + summary doc",
      emailSubject: "Group Project Brief Request",
      emailBody: "Please combine our team's notes into one cohesive presentation deck for our marketing class project. Create 12-15 slides analyzing Nike's brand strategy including market analysis, target audience, competitive positioning, marketing mix, and recommendations. Ensure consistent formatting and clear storyline. Use attached notes from 4 team members. Return PowerPoint + 1-page exec summary."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Study Partner",
  benefitsSubheadline: "Zibly helps you organize your thoughts, write better, and study smarter. Whether you're preparing for exams or pulling together a group project, Zibly turns chaos into clarity.",
  benefitCards: [
    {
      icon: Clock,
      title: "No More Last-Minute Panic",
      description: "Submit clean, structured work — even on tight deadlines."
    },
    {
      icon: TrendingUp,
      title: "Learn by Example",
      description: "See how top-tier writing and analysis are structured."
    },
    {
      icon: BarChart3,
      title: "Polished and Professional",
      description: "Get work that's easy to understand, easy to present."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Late-night writing and stress = <strong class=\"text-gray-700\">exhaustion</strong>",
    "Confusing research notes = <strong class=\"text-gray-700\">wasted hours</strong>",
    "Weak presentation visuals = <strong class=\"text-gray-700\">lower grades</strong>",
    "Cramming before exams = <strong class=\"text-gray-700\">poor retention</strong>"
  ],
  roiWithItems: [
    "Projects done in hours from <strong class=\"text-primary\">$20</strong>",
    "Clean, summarized outlines = <strong class=\"text-primary\">better learning</strong>",
    "Beautifully formatted slides = <strong class=\"text-primary\">confidence</strong>",
    "Study guides ready in advance = <strong class=\"text-primary\">less stress</strong>"
  ],
  roiTagline: "Save hours every week. Submit work you're proud of.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Undergraduates",
  qualityStandardsSubheadline: "Academic rigor meets academic integrity",
  qualityStandards: [
    {
      title: "Clear structure",
      description: "Logical flow and strong organization"
    },
    {
      title: "Readable academic language",
      description: "Clear but formal tone appropriate for college work"
    },
    {
      title: "Citation support",
      description: "APA, MLA, or Chicago formatting on request"
    },
    {
      title: "Academic integrity",
      description: "Supports understanding and drafting, not plagiarism"
    },
    {
      title: "Privacy and deletion",
      description: "All uploads removed after delivery"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Send notes, drafts, or instructions"
    },
    {
      title: "Describe what you need",
      description: "E.g., \"essay outline,\" \"presentation deck\""
    },
    {
      title: "Receive your deliverable",
      description: "Organized, formatted, and ready to learn from"
    }
  ],
  howItWorksSubheadline: "No new tools. No templates. Just email and get it done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Study Smarter</span>?",
  ctaSubheadline: "Undergraduates everywhere use Zibly to organize notes, structure essays, and build beautiful decks — all over email. Your first project is free.",
  ctaButtonText: "Start Your Free Project",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "MBA Students",
      description: "Polished decks and business reports built from notes.",
      href: "/solutions/mba-students"
    },
    {
      title: "Law Students",
      description: "Structured case briefs and legal outlines, ready to review.",
      href: "/solutions/law-students"
    },
    {
      title: "Management Consultants",
      description: "Professional-grade decks and models — the skills you're learning, automated.",
      href: "/solutions/consultants"
    }
  ]
}

export default function UndergraduatesPage() {
  return <UseCaseTemplate content={undergraduatesContent} />
}
