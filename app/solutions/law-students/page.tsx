'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const lawStudentsContent: UseCaseContent = {
  // Hero Section
  badge: "For Law Students",
  headline: "Stop Spending",
  headlineHighlight: "All Night Writing Case Briefs",
  subheadline: "Send your readings, case citations, and assignment prompts to Zibly. Get back structured briefs, outlines, and research memos — so you can focus on understanding the law.",
  emailPlaceholderSubject: "Case Brief Request - Constitutional Law",
  emailPlaceholderBody: "Please create an IRAC case brief for Marbury v. Madison (5 U.S. 137). Include facts, procedural history, issue, rule, analysis, holding, and significance. Focus on judicial review establishment. Return 2-page Word document.",
  emailPlaceholderFrom: "your.email@law-school.edu",

  // What You Send/Get Section
  whatYouSendItems: [
    "Case citations or reading assignments",
    "Class notes or professor outlines",
    "Assignment instructions or memo prompts"
  ],
  whatYouGetBackItems: [
    "<strong>Case briefs</strong> with IRAC/CREAC structure",
    "<strong>Course outlines</strong> organized by topic",
    "<strong>Research memos</strong> or exam study materials"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: FileText,
      title: "Case Brief",
      taskDescription: "IRAC/CREAC brief from case citation",
      deliverable: "2-3 page structured brief",
      emailSubject: "Case Brief Request",
      emailBody: "Please create an IRAC case brief for Brown v. Board of Education (347 U.S. 483). Include complete facts, procedural history, legal issue, applicable constitutional rules, court's analysis and reasoning, final holding, and case significance for future doctrine. Return 2-3 page Word document formatted for class preparation."
    },
    {
      icon: BarChart3,
      title: "Legal Outline",
      taskDescription: "Organize course material by topic",
      deliverable: "20-30 page course outline",
      emailSubject: "Legal Outline Request",
      emailBody: "Please create a comprehensive outline for my Civil Procedure course covering personal jurisdiction, subject matter jurisdiction, pleadings, discovery, summary judgment, and trial procedure. Include black-letter law, key case holdings, tests and factors for each topic, exceptions, and practice tips. Use attached syllabus and case list. Return formatted Word outline."
    },
    {
      icon: TrendingUp,
      title: "Research Memo",
      taskDescription: "Legal research and analysis memo",
      deliverable: "8-12 page legal memo",
      emailSubject: "Research Memo Request",
      emailBody: "Please draft a legal research memo analyzing whether a non-compete agreement is enforceable in California for a software engineer. Research relevant statutes (Bus. & Prof. Code § 16600), case law precedents, exceptions for trade secrets, and provide recommendation. Use IRAC structure with pinpoint citations. Return 8-12 page memo in Bluebook format."
    },
    {
      icon: FileText,
      title: "Practice Question Summary",
      taskDescription: "Answer outline for exam practice",
      deliverable: "Answer outline with analysis",
      emailSubject: "Practice Question Summary Request",
      emailBody: "Please create a detailed answer outline for this Contracts practice exam question about statute of frauds and promissory estoppel. Identify all legal issues, state applicable rules from UCC and Restatement (Second) of Contracts, apply facts systematically using IRAC, and reach conclusions for each issue. Return organized answer outline."
    },
    {
      icon: BarChart3,
      title: "Exam Study Sheet",
      taskDescription: "Condensed topic summaries for exam",
      deliverable: "10-page exam study guide",
      emailSubject: "Exam Study Sheet Request",
      emailBody: "Please create a condensed exam study sheet for my Criminal Law final covering actus reus, mens rea, homicide (murder degrees and manslaughter), inchoate crimes, accomplice liability, and defenses. For each topic: state the rule, list key cases, note important exceptions, and include memory aids. Keep to 10 pages. Return formatted Word document."
    },
    {
      icon: TrendingUp,
      title: "Argument Map",
      taskDescription: "Structure both sides of legal issue",
      deliverable: "Visual argument outline",
      emailSubject: "Argument Map Request",
      emailBody: "Please create an argument map for a Fourth Amendment search and seizure issue involving warrantless cell phone location tracking. Map out plaintiff's arguments (reasonable expectation of privacy, Carpenter precedent), defendant's counter-arguments (third-party doctrine, exigent circumstances), and likely court analysis. Include supporting cases for each point. Return structured outline."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Study Partner",
  benefitsSubheadline: "Zibly helps you organize readings and draft materials faster — so you can spend more time actually learning the law.",
  benefitCards: [
    {
      icon: Clock,
      title: "Reading Overload → Clear Structure",
      description: "Turn 100+ pages of dense case law into organized, reviewable briefs and outlines."
    },
    {
      icon: TrendingUp,
      title: "Consistent Quality",
      description: "Every brief follows proper IRAC/CREAC structure with complete analysis."
    },
    {
      icon: BarChart3,
      title: "More Time for Understanding",
      description: "Spend less time on mechanical briefing, more time on doctrine and exam prep."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Briefing 15 cases per week = <strong class=\"text-gray-700\">15+ hours</strong>",
    "Outline creation during finals = <strong class=\"text-gray-700\">40+ hours of stress</strong>",
    "<strong class=\"text-gray-700\">Inconsistent formatting</strong> wastes review time",
    "Less time for practice exams and understanding"
  ],
  roiWithItems: [
    "Professional briefs from <strong class=\"text-primary\">$20</strong>",
    "<strong class=\"text-primary\">6-24 hour turnaround</strong> for most assignments",
    "<strong class=\"text-primary\">Consistent structure</strong> makes review efficient",
    "More time for practice questions and comprehension"
  ],
  roiTagline: "Better organization. Better understanding. Better exam performance.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Law Students",
  qualityStandardsSubheadline: "Legal precision meets academic rigor",
  qualityStandards: [
    {
      title: "IRAC/CREAC structure",
      description: "Every brief follows proper legal writing frameworks"
    },
    {
      title: "Complete analysis",
      description: "Facts, holdings, reasoning, and significance fully developed"
    },
    {
      title: "Proper citations",
      description: "Bluebook-compliant citations when cases are provided"
    },
    {
      title: "Academic integrity support",
      description: "Study aids and drafts for your review — you own the final analysis"
    },
    {
      title: "Organized formatting",
      description: "Clear headings, readable structure, ready for class and review"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward readings to work@zibly.ai",
      description: "Send case citations, assignment prompts, or class notes"
    },
    {
      title: "Describe what you need",
      description: "E.g., \"IRAC brief for Palsgraf\" or \"outline my Torts course\""
    },
    {
      title: "Receive structured draft",
      description: "Review, customize, and use per your school's honor code"
    }
  ],
  howItWorksSubheadline: "No complex tools. No subscriptions. Just email and get help.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Master</span> Your Readings?",
  ctaSubheadline: "Join law students already using Zibly to stay on top of their reading load. Your first brief is free — see how it helps your study process.",
  ctaButtonText: "Start Your Free Brief",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "MBA Students",
      description: "Case decks, financial models, and business analysis.",
      href: "/solutions/mba-students"
    },
    {
      title: "Attorneys",
      description: "See how practicing attorneys use Zibly for research and drafting.",
      href: "/solutions/attorneys"
    },
    {
      title: "Management Consultants",
      description: "Professional analysis and presentation creation.",
      href: "/solutions/consultants"
    }
  ]
}

export default function LawStudentsPage() {
  return <UseCaseTemplate content={lawStudentsContent} />
}
