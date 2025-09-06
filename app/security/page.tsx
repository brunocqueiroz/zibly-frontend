import Link from "next/link"
import CopyEmailButton from "@/components/copy-email-button"
import { Shield, Lock, FileText, Database, CheckCircle2, AlertCircle, Mail, RefreshCw } from "lucide-react"

export const metadata = {
  title: "Security at Zibly.ai",
  description: "How Zibly protects your data: encryption, privacy, compliance, and responsible AI use.",
  alternates: { canonical: "https://zibly.ai/security" },
  openGraph: {
    title: "Security at Zibly.ai",
    description: "See how Zibly secures your business data and ensures privacy at every step.",
  },
  twitter: {
    title: "Security at Zibly.ai",
    description: "See how Zibly secures your business data and ensures privacy at every step.",
  },
}

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <Shield className="h-14 w-14 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-semibold inter-heading-normal">
              Security & Trust at Zibly
            </h1>
            <p className="mx-auto max-w-2xl text-lg inter-text">
              Your data deserves world-class protection. Here’s how we safeguard every file, document, and project you send to Zibly.
            </p>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Data Encryption */}
            <div className="flex flex-col items-center text-center space-y-3">
              <Lock className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">Encryption, Always</h2>
              <p className="inter-text text-muted-foreground">
                All files and data are encrypted both in transit (TLS 1.2+) and at rest (AES-256). Your work is protected every step of the way—no exceptions.
              </p>
            </div>
            {/* Privacy & Confidentiality */}
            <div className="flex flex-col items-center text-center space-y-3">
              <FileText className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">Privacy & Confidentiality</h2>
              <p className="inter-text text-muted-foreground">
                We treat your data as if it were our own—never used for training, never shared with third parties, and always handled according to strict privacy policies.
              </p>
            </div>
            {/* SOC2 Compliance */}
            <div className="flex flex-col items-center text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">SOC2: Designed for Compliance</h2>
              <p className="inter-text text-muted-foreground">
                Zibly is built with SOC2 best practices in mind, from access controls to logging and incident response. We are working towards full accreditation as we scale.
              </p>
            </div>
            {/* Data Residency & Retention */}
            <div className="flex flex-col items-center text-center space-y-3">
              <Database className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">Data Residency & Retention</h2>
              <p className="inter-text text-muted-foreground">
                All data is stored securely in US-based cloud data centers. You control retention: delete your files at any time or request permanent erasure.
              </p>
            </div>
            {/* Responsible AI */}
            <div className="flex flex-col items-center text-center space-y-3">
              <RefreshCw className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">Vendor Risk Management</h2>
              <p className="inter-text text-muted-foreground">
              All third-party vendors and partners undergo rigorous security evaluations, ensuring our entire ecosystem upholds the highest standards of trust.
              </p>
            </div>
            {/* Incident Response */}
            <div className="flex flex-col items-center text-center space-y-3">
              <AlertCircle className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-semibold inter-heading-normal">Incident Response</h2>
              <p className="inter-text text-muted-foreground">
                Security incidents are rare, but our team is ready 24/7. All incidents are logged, reviewed, and customers notified in accordance with our policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-tr from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 inter-heading-normal">Frequently Asked Security Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Is Zibly SOC2 Compliant?</h3>
                <p className="inter-text text-muted-foreground">
                  Our infrastructure and processes follow SOC2 requirements. We’re on the path to accreditation and happy to provide a detailed overview of our security controls on request.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Where is my data stored?</h3>
                <p className="inter-text text-muted-foreground">
                  All files and data are securely stored in US-based cloud data centers that meet top industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How is my data used?</h3>
                <p className="inter-text text-muted-foreground">
                  Your data is never shared, sold, or used for AI model training. It is only used to complete your requested work, then archived or deleted according to your instructions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Who has access to my files?</h3>
                <p className="inter-text text-muted-foreground">
                  Access is strictly limited to the Zibly operations and engineering team, and only for the purpose of fulfilling your task. All access is logged and regularly reviewed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How do I delete my data?</h3>
                <p className="inter-text text-muted-foreground">
                  You can request deletion at any time by emailing <Link href="mailto:security@zibly.ai" className="text-primary underline">security@zibly.ai</Link> <span className="inline-block ml-2 align-middle"><CopyEmailButton size="sm" variant="outline" email="security@zibly.ai" /></span>. Deleted files are permanently removed from all systems within 7 days.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How does Zibly handle AI output privacy?</h3>
                <p className="inter-text text-muted-foreground">
                  All AI outputs are reviewed by our team before delivery. We never send your data to public models, and outputs are only shared with you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How can I report a security concern?</h3>
                <p className="inter-text text-muted-foreground">
                  Email <Link href="mailto:security@zibly.ai" className="text-primary underline">security@zibly.ai</Link> <span className="inline-block ml-2 align-middle"><CopyEmailButton size="sm" variant="outline" email="security@zibly.ai" /></span>. We respond to all security concerns within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
