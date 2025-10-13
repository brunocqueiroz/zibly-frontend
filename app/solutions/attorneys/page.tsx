'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const attorneysContent: UseCaseContent = {
  // Hero Section
  badge: "For Attorneys",
  headline: "Stop Wasting Hours on",
  headlineHighlight: "Forms and Routine Documents",
  subheadline: "Send client forms, filings, or draft documents to Zibly. Get back completed forms, formatted exhibits, or polished drafts — accurate, secure, and ready for review.",
  emailPlaceholderSubject: "Fill USCIS Form I-130 – Petition for Alien Relative",
  emailPlaceholderBody: "Please complete the attached PDF form using the client information in the attached intake document. Return a filled and validated version of the form (PDF and editable copy). Highlight any missing or unclear fields.",
  emailPlaceholderFrom: "your.email@lawfirm.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Blank or partially filled PDF/DOCX forms",
    "Intake sheets, client data, or prior filings",
    "Reference documents or templates"
  ],
  whatYouGetBackItems: [
    "<strong>Completed forms</strong> (fillable PDFs or Word docs, with validation checks)",
    "<strong>Draft legal documents</strong> (motions, letters, memos, agreements)",
    "<strong>Summaries or chronologies</strong> (case outlines, deposition digests)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: FileText,
      title: "Form Filling (PDFs)",
      taskDescription: "Complete government or client intake forms",
      deliverable: "Filled, validated PDF or DOCX",
      emailSubject: "Form Filling Request",
      emailBody: "Please complete USCIS Form I-485 (Application to Register Permanent Residence) using the client information in the attached intake spreadsheet. Fill all applicable sections, validate required fields, and flag any missing information or inconsistencies. Return completed PDF form + editable Word version with validation notes."
    },
    {
      icon: BarChart3,
      title: "Deposition Summary",
      taskDescription: "Summarize transcript or video text",
      deliverable: "2–3 page summary + key issues table",
      emailSubject: "Deposition Summary Request",
      emailBody: "Please summarize the attached 200-page deposition transcript from defendant's expert witness. Create a chronological summary of key testimony, identify contradictions or admissions, extract important quotes with page/line citations, and create an issues table organizing testimony by topic (liability, damages, causation). Return 2-3 page summary + Excel issues matrix."
    },
    {
      icon: TrendingUp,
      title: "Client Intake Prep",
      taskDescription: "Convert notes into structured intake document",
      deliverable: "Editable form or summary sheet",
      emailSubject: "Client Intake Prep Request",
      emailBody: "Please convert the attached initial consultation notes into a structured client intake document for a personal injury case. Organize by sections: client information, accident details, injuries/treatment, witnesses, insurance, damages, and case timeline. Flag items requiring follow-up. Use our standard intake template. Return formatted Word document."
    },
    {
      icon: FileText,
      title: "Pleading Summary",
      taskDescription: "Extract key facts, dates, and rulings",
      deliverable: "1–2 page outline",
      emailSubject: "Pleading Summary Request",
      emailBody: "Please summarize the attached motion for summary judgment and opposition briefs (150 pages total). Extract key arguments from each side, identify undisputed vs. disputed facts, note legal standards cited, and summarize procedural history. Create a 1-2 page outline with section headings and bullet points. Return Word document."
    },
    {
      icon: BarChart3,
      title: "Draft Legal Letter",
      taskDescription: "Generate or format a professional client or opposing counsel letter",
      deliverable: "DOCX + formatted PDF",
      emailSubject: "Draft Legal Letter Request",
      emailBody: "Please draft a demand letter to opposing counsel in a breach of contract case. Include background facts, legal basis for claim, damages calculation ($50K + interest), demand for settlement within 30 days, and statement of intent to file if not resolved. Use professional but firm tone. Follow standard business letter format on firm letterhead template. Return Word doc + PDF."
    },
    {
      icon: TrendingUp,
      title: "Exhibit Index / Binder",
      taskDescription: "Create exhibit lists, labels, and organized index",
      deliverable: "Excel + PDF index",
      emailSubject: "Exhibit Index Request",
      emailBody: "Please create an exhibit index for trial preparation. Review attached folder of 75 documents (contracts, emails, invoices, correspondence). Assign exhibit numbers, create descriptive titles, note dates and parties, categorize by type, and organize chronologically. Create exhibit labels and binder tabs. Return Excel index + PDF with formatted labels for printing."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Paralegal",
  benefitsSubheadline: "Zibly prepares the documents, forms, and summaries your team needs — instantly. From intake forms to deposition digests, Zibly handles the routine so attorneys can focus on strategy.",
  benefitCards: [
    {
      icon: Clock,
      title: "Form-Filling Automation",
      description: "Zibly fills client, court, or government forms directly from your notes or data."
    },
    {
      icon: TrendingUp,
      title: "Faster Document Prep",
      description: "Draft memos, letters, and filings automatically — ready for attorney review."
    },
    {
      icon: BarChart3,
      title: "Case Management Simplified",
      description: "Generate summaries, timelines, and exhibit indexes in minutes."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Manual form filling takes hours = <strong class=\"text-gray-700\">wasted billable time</strong>",
    "Associates handling repetitive tasks = <strong class=\"text-gray-700\">$200+/hr cost</strong>",
    "Risk of missing fields or typos = <strong class=\"text-gray-700\">delays + rework</strong>",
    "Heavy admin costs = <strong class=\"text-gray-700\">reduced margins</strong>"
  ],
  roiWithItems: [
    "Forms completed in minutes from <strong class=\"text-primary\">$20</strong>",
    "Delegated to Zibly = <strong class=\"text-primary\">free up billable hours</strong>",
    "Validated, consistent entries = <strong class=\"text-primary\">no errors</strong>",
    "Lean operations = <strong class=\"text-primary\">better profitability</strong>"
  ],
  roiTagline: "Save hundreds of hours per month. Delegate forms and drafts securely.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Attorneys",
  qualityStandardsSubheadline: "Built for accuracy, security, and compliance",
  qualityStandards: [
    {
      title: "Field validation",
      description: "Checks for completeness and consistency"
    },
    {
      title: "Formatting compliance",
      description: "Consistent fonts, citations, and sectioning"
    },
    {
      title: "Confidential data protection",
      description: "Encryption and auto-deletion after delivery"
    },
    {
      title: "Jurisdiction templates supported",
      description: "U.S. federal and state-level forms"
    },
    {
      title: "Attorney oversight always required",
      description: "Outputs are drafts, not legal advice"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Attach forms, templates, or documents"
    },
    {
      title: "Describe the task",
      description: "E.g., \"fill this form,\" \"summarize this pleading,\" \"draft a client letter\""
    },
    {
      title: "Receive your deliverable",
      description: "Completed form, formatted document, or summary memo"
    }
  ],
  howItWorksSubheadline: "No new software. No training. Just email your work and get it done.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Automate Your Legal Workflow</span>?",
  ctaSubheadline: "Attorneys and firms use Zibly to complete forms, draft documents, and prepare filings in record time. Your first document is free — see how much time you can save.",
  ctaButtonText: "Start Your Free Document",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Law Students",
      description: "Case briefs and outlines for study and preparation.",
      href: "/solutions/law-students"
    },
    {
      title: "Management Consultants",
      description: "Professional document preparation and analysis.",
      href: "/solutions/consultants"
    },
    {
      title: "Private Equity",
      description: "Legal and financial documentation for portfolio transactions.",
      href: "/solutions/private-equity"
    }
  ]
}

export default function AttorneysPage() {
  return <UseCaseTemplate content={attorneysContent} />
}
