import { ExampleItem } from "./types";

export const EXAMPLES: ExampleItem[] = [
  {
    id: "redline",
    title: "Contract Redline with Rationale",
    category: "Legal & Ops",
    complexity: "High",
    dept: "Legal",
    email:
`Subject: Redline this MSA for a 12-month SaaS ($120k ARR)

Body: Mark up vendor-friendly clauses (data, liability cap, SLA credits). Keep tone professional; include a 1-page rationale summary with risks, fallback positions, and a clean version. Deadline EOD.`,
    did: [
      "Produced tracked-changes DOCX",
      "Generated a rationale memo with citations",
      "Clean export ready for signature",
    ],
    deliverables: ["MSA_redline.docx", "Rationale_memo.pdf", "Clean_MSA.docx"],
    // For local demo until API fills it in:
    preview: { pdfUrl: "/demo.pdf" }
  },
  {
    id: "deck",
    title: "Investor Deck from a One-Paragraph Brief",
    category: "Strategy & GTM",
    complexity: "Medium",
    dept: "Founder/BD",
    email:
`Subject: Build a 10-slide seed deck for Everis (marine wellness)

Body: Please craft a clear story: problem → solution → traction → market → product → business model → go-to-market → roadmap → team → ask. Use attached brand notes + the 3 press links. Cite sources on the final slide.`,
    did: [
      "Structured narrative and slide order",
      "Pulled market sizing with citations",
      "Exported PPTX + PDF, plus speaker notes",
    ],
    deliverables: ["SeedDeck.pptx", "SeedDeck.pdf", "SpeakerNotes.txt"],
  },
  {
    id: "data",
    title: "Clean & Chart a Messy CSV",
    category: "Data & Analytics",
    complexity: "Medium",
    dept: "Ops/Finance",
    email:
`Subject: Clean this CSV and chart KPI trends

Body: Remove dupes, infer missing country codes, and output weekly MAU, conversion rate, ARR added. Add a 1-pager with takeaways and 3 recommendations.`,
    did: [
      "Validated schema & repaired missing values",
      "Built MAU, CVR, ARR time-series",
      "Authored a plain-English insights page",
    ],
    deliverables: ["Cleaned.csv", "KPI_charts.pdf", "Insights_onepager.pdf"],
  },
];

