"use client"

import FAQ from "@/components/ui/FAQ"



export default function FAQPage() {
  const faqItems = [
    // Getting Started & Core Features
    {
      question: "What is an AI email assistant and how is Zibly.ai different?",
      answer:
        "An AI email assistant processes tasks sent via email. Zibly.ai goes beyond basic chat responses to offer comprehensive workflow automation—modifying documents, handling spreadsheet model editing, PDF form filling, and full financial analyses quickly and accurately.",
    },
    {
      question: "Do I need to learn prompt engineering?",
      answer:
        "No. Just email your requests in plain English. Zibly.ai understands context directly from your documents, providing intuitive, professional results without specialized prompt crafting.",
    },
    {
      question: "What's the best way to test Zibly.ai?",
      answer:
        "Start with a real task that's currently manual and time-consuming. Email your actual working files to Zibly.ai and see how swiftly your workflow improves.",
    },
    {
      question: "What makes Zibly different from ChatGPT plug-ins or browser extensions?",
      answer:
        "Zibly offers comprehensive professional workflow automation, handling full projects end-to-end, modifying actual documents, and delivering complete professional-grade outputs rather than mere conversational advice.",
    },

    // Technical Capabilities & File Handling
    {
      question: "Which file types can I email to Zibly.ai?",
      answer:
        "Zibly processes Excel, PDF, Word, PowerPoint, CSV, text files, images, and scanned documents, extracting data seamlessly for comprehensive task automation.",
    },
    {
      question: "How does Zibly build a market-sizing model from my notes?",
      answer:
        "Email your market research notes, competitor data, and assumptions to Zibly. It constructs detailed Excel models including assumptions, scenario analysis, and executive summaries.",
    },
    {
      question: "Can it run a Monte Carlo simulation in Excel?",
      answer:
        "Yes, Zibly sets up Monte Carlo simulations in Excel, handling extensive iterations and providing detailed probability distributions with clear interpretations.",
    },
    {
      question: "Does Zibly support sensitivity analysis and KPI dashboards?",
      answer:
        "Absolutely. Zibly creates dynamic sensitivity analyses, tornado charts, and automated KPI dashboards for comprehensive strategic and operational insights.",
    },
    {
      question: "Does Zibly integrate with cloud storage?",
      answer:
        "Currently, Zibly operates via email. Integrations with Google Drive, Dropbox, and OneDrive are in development, providing future direct cloud storage integrations.",
    },
    {
      question: "What size limits apply to attachments?",
      answer:
        "Zibly accepts emails up to 50MB total. Larger projects can be split into multiple emails or compressed files.",
    },

    // Security & Compliance
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. Zibly employs bank-level security, AES-256 encryption, and is SOC 2 Type II compliant, ensuring your data is safe and confidential at all times.",
    },
    {
      question: "How is my data secured in transit and at rest?",
      answer:
        "Data is secured with TLS 1.3 in transit and AES-256 encryption at rest. All processing occurs in isolated containers, with data deleted shortly after task completion.",
    },

    // Industry-Specific Capabilities
    {
      question: "Can Zibly.ai fill out USCIS immigration forms?",
      answer:
        "Yes, Zibly excels at USCIS form automation, accurately completing forms like I-129, I-130, I-485, and many more, ensuring validation and reducing RFE triggers.",
    },
    {
      question: "Does Zibly validate immigration data?",
      answer:
        "Absolutely. Zibly comprehensively validates date logic, travel calculations, name consistency, address formatting, and completeness of dependent information.",
    },

    // Pricing & Commercial
    {
      question: "How does pricing work?",
      answer:
        "Zibly offers simple, usage-based pricing with no setup fees. Plans range from pay-per-use to unlimited subscriptions, with volume discounts available.",
    },
    {
      question: "Is there a student or non-profit discount?",
      answer:
        "Yes, qualified educational institutions and 501(c)(3) organizations receive a 50% discount on all plans.",
    },

    // Support & Implementation
    {
      question: "Can multiple teammates use the same account?",
      answer:
        "Yes, team plans support multiple users with unique credentials, centralized billing, and administration for streamlined access.",
    },
    {
      question: "Do you offer onboarding training sessions?",
      answer:
        "Yes, enterprise customers receive customized training sessions tailored to their specific use cases, ensuring successful adoption.",
    },
  ]

  return (
    <div className="container max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Zibly.ai Frequently Asked Questions</h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started & Core Features</h2>
        <FAQ items={faqItems.slice(0, 4)} />

        <h2 className="text-2xl font-semibold">Technical Capabilities & File Handling</h2>
        <FAQ items={faqItems.slice(4, 10)} />

        <h2 className="text-2xl font-semibold">Security & Compliance</h2>
        <FAQ items={faqItems.slice(10, 12)} />

        <h2 className="text-2xl font-semibold">Industry-Specific Capabilities</h2>
        <FAQ items={faqItems.slice(12, 14)} />

        <h2 className="text-2xl font-semibold">Pricing & Commercial</h2>
        <FAQ items={faqItems.slice(14, 16)} />

        <h2 className="text-2xl font-semibold">Support & Implementation</h2>
        <FAQ items={faqItems.slice(16, 18)} />
      </section>
    </div>
  )
}