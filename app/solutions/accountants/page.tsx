'use client';

import UseCaseTemplate, { UseCaseContent } from "@/components/UseCaseTemplate"
import { BarChart3, TrendingUp, FileText, Clock } from "lucide-react"

const accountantsContent: UseCaseContent = {
  // Hero Section
  badge: "For Accountants",
  headline: "Stop Spending Nights",
  headlineHighlight: "Cleaning Spreadsheets",
  subheadline: "Send your data exports, trial balances, or reports to Zibly. Get back reconciled schedules, summaries, and formatted management reports — built to accounting standards.",
  emailPlaceholderSubject: "Monthly P&L and Variance Summary",
  emailPlaceholderBody: "Please summarize the attached P&L and balance sheet. Create a 5-slide management summary showing revenue, expenses, and profit trends vs. budget, and include a variance analysis table in Excel.",
  emailPlaceholderFrom: "your.email@accountingfirm.com",

  // What You Send/Get Section
  whatYouSendItems: [
    "Trial balances or general ledger exports (Excel/CSV)",
    "Financial statements or templates",
    "Notes or commentary on key changes"
  ],
  whatYouGetBackItems: [
    "<strong>Reconciled Excel reports</strong> (cleaned, formula-checked)",
    "<strong>Variance and trend analyses</strong> (tables and charts)",
    "<strong>Presentation deck</strong> (summary slides for management)"
  ],

  // Task Recipes
  taskRecipes: [
    {
      icon: BarChart3,
      title: "Month-End Variance Analysis",
      taskDescription: "Compare actuals vs. budget",
      deliverable: "Excel report + 5-slide deck",
      emailSubject: "Month-End Variance Analysis Request",
      emailBody: "Please create a variance analysis comparing October actuals to budget. Include revenue breakdown by product line, expense analysis by department, EBITDA variance, key drivers of differences, and recommendations. Use attached trial balance and budget file. Return Excel variance report + 5-slide management summary deck."
    },
    {
      icon: TrendingUp,
      title: "Balance Sheet Reconciliation",
      taskDescription: "Match and verify account balances",
      deliverable: "Reconciled Excel workbook",
      emailSubject: "Balance Sheet Reconciliation Request",
      emailBody: "Please reconcile Q3 balance sheet accounts including cash, AR, AP, inventory, fixed assets, and debt. Match general ledger to sub-ledgers, identify discrepancies, and create reconciliation schedules for each account. Flag any items requiring adjustment. Use attached GL export and sub-ledger files. Return reconciled workbook with supporting schedules."
    },
    {
      icon: FileText,
      title: "Management Summary Pack",
      taskDescription: "Turn financials into a clean slide deck",
      deliverable: "PPTX deck + charts",
      emailSubject: "Management Summary Pack Request",
      emailBody: "Please create a management summary deck from Q3 financial statements. Include executive summary, P&L highlights, balance sheet review, cash flow analysis, KPI dashboard, and variance commentary. Add charts showing trends and comparisons. Use attached financials and prior quarter deck template. Return 10-12 slide PowerPoint presentation."
    },
    {
      icon: BarChart3,
      title: "Cash Flow Forecast",
      taskDescription: "Build or update rolling forecast",
      deliverable: "Excel model + summary slides",
      emailSubject: "Cash Flow Forecast Request",
      emailBody: "Please build a 13-week cash flow forecast starting November 1st. Include beginning cash, expected receipts (by customer), planned disbursements (by category), net cash flow, and ending balance. Use attached AR aging, AP schedule, and payroll forecast. Add sensitivity analysis for collection timing. Return Excel model + 3-slide summary."
    },
    {
      icon: TrendingUp,
      title: "Expense Analysis",
      taskDescription: "Categorize spend and identify trends",
      deliverable: "Excel pivot + summary table",
      emailSubject: "Expense Analysis Request",
      emailBody: "Please analyze year-to-date operating expenses from attached GL export. Categorize by department and expense type, calculate percentage of revenue, identify top 10 expense drivers, compare to prior year, and flag unusual trends or outliers. Create pivot tables and variance analysis. Return Excel workbook with analysis tabs and charts."
    },
    {
      icon: FileText,
      title: "Audit Support Pack",
      taskDescription: "Compile schedules and notes for auditors",
      deliverable: "Excel binder + checklist",
      emailSubject: "Audit Support Pack Request",
      emailBody: "Please prepare audit support schedules for year-end audit. Compile account reconciliations, fixed asset rollforward, debt schedule, AR/AP aging, inventory valuation, accruals schedule, and supporting documentation index. Use attached trial balance and supporting files. Organize in Excel workbook with tabs by account. Return audit binder with checklist."
    }
  ],

  // Benefits Section
  benefitsHeadline: "Your <span class=\"text-primary\">24/7</span> Accounting Assistant",
  benefitsSubheadline: "Zibly delivers reconciled reports, formatted management packs, and accurate summaries — so your accounting team can close faster and sleep better.",
  benefitCards: [
    {
      icon: Clock,
      title: "Close the Books Faster",
      description: "Delegate repetitive reporting and reconciliations."
    },
    {
      icon: TrendingUp,
      title: "Improve Accuracy",
      description: "Zibly checks, structures, and formats automatically."
    },
    {
      icon: BarChart3,
      title: "Save Time Every Cycle",
      description: "Automate the 80% of work that isn't analysis."
    }
  ],

  // ROI Section
  roiWithoutItems: [
    "Manual reconciliations every month = <strong class=\"text-gray-700\">20+ hours</strong>",
    "Hours lost to formatting = <strong class=\"text-gray-700\">wasted time</strong>",
    "Errors in versioning = <strong class=\"text-gray-700\">rework + stress</strong>",
    "<strong class=\"text-gray-700\">5–7 day close process</strong>"
  ],
  roiWithItems: [
    "Automated and verified reports from <strong class=\"text-primary\">$20</strong>",
    "Clean, standardized outputs = <strong class=\"text-primary\">time savings</strong>",
    "Consistent files every time = <strong class=\"text-primary\">no errors</strong>",
    "<strong class=\"text-primary\">Close in 2–3 days</strong>"
  ],
  roiTagline: "Close books faster. Deliver cleaner reports. Sleep better.",

  // Quality Standards
  qualityStandardsHeadline: "Quality Standards for Accountants",
  qualityStandardsSubheadline: "Built to accounting standards with accuracy and security",
  qualityStandards: [
    {
      title: "Verified formulas",
      description: "Tested calculations and linked checks"
    },
    {
      title: "Standardized templates",
      description: "Consistent formatting across cycles"
    },
    {
      title: "Audit-ready formatting",
      description: "Clear headers, reconciliations, and notes"
    },
    {
      title: "Confidentiality guaranteed",
      description: "Automatic file deletion after delivery"
    },
    {
      title: "Supports GAAP and IFRS conventions",
      description: "Professional accounting standards maintained"
    }
  ],

  // How It Works
  howItWorksSteps: [
    {
      title: "Forward your files to work@zibly.ai",
      description: "Attach reports, exports, or trial balances"
    },
    {
      title: "Describe the output you need",
      description: "E.g., \"variance analysis,\" \"reconciliation,\" or \"management summary\""
    },
    {
      title: "Receive your completed deliverable",
      description: "Accurate, formatted, and ready to review"
    }
  ],
  howItWorksSubheadline: "No portals. No prompts. Just email it and get the results back.",

  // CTA
  ctaHeadline: "Ready to <span class=\"text-primary\">Close the Books Faster</span>?",
  ctaSubheadline: "Join accountants using Zibly to automate month-end reporting, reconciliations, and management summaries. Your first deliverable is free.",
  ctaButtonText: "Start Your Free Report",

  // Related Use Cases
  relatedUseCases: [
    {
      title: "Investment Banking",
      description: "Clean, reconciled models and financial decks for deal teams.",
      href: "/solutions/investment-banking"
    },
    {
      title: "Private Equity",
      description: "Portfolio-level reporting and KPI dashboards delivered overnight.",
      href: "/solutions/private-equity"
    },
    {
      title: "Strategy Executives",
      description: "Forecasting and management reporting simplified.",
      href: "/solutions/strategy"
    }
  ]
}

export default function AccountantsPage() {
  return <UseCaseTemplate content={accountantsContent} />
}
