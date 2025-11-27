import Link from "next/link"
import { Shield, Lock, Cloud, Server, CheckCircle2, Eye, KeyRound, ShieldCheck, Database, Scan, Mail } from "lucide-react"

export const metadata = {
  title: "Security at Zibly",
  description: "Built for Trust. Engineered for Privacy. Learn how Zibly protects your data with world-class infrastructure and strict No-Train data policies.",
  alternates: { canonical: "https://www.zibly.ai/security" },
  openGraph: {
    title: "Security at Zibly",
    description: "Built for Trust. Engineered for Privacy. Learn how Zibly protects your data with world-class infrastructure and strict No-Train data policies.",
  },
  twitter: {
    title: "Security at Zibly",
    description: "Built for Trust. Engineered for Privacy. Learn how Zibly protects your data with world-class infrastructure and strict No-Train data policies.",
  },
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <Shield className="h-14 w-14 text-primary mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-semibold inter-heading-normal text-primary">
                Security at Zibly
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-800">
                Built for Trust. Engineered for Privacy.
              </p>
              <p className="mx-auto max-w-3xl text-lg inter-text text-gray-700">
                Zibly was architected from day one to serve the high-compliance needs of professional services firms. We combine world-class infrastructure with strict "No-Train" data policies to ensure your client data remains confidential, secure, and under your control.
              </p>
            </div>
          </div>
        </section>

        {/* The "No-Train" Promise */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center text-center mb-12">
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-semibold inter-heading-normal text-primary mb-4">
                  The "No-Train" Promise
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl">
                  The most important question we answer for accountants and consultants is: <strong>"Is my data training the AI?"</strong>
                </p>
                <p className="text-2xl font-bold text-primary mt-4">
                  The answer is No.
                </p>
              </div>

              <p className="text-lg text-gray-700 text-center mb-8">
                We understand that your competitive advantage lies in your proprietary data and client confidentiality.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Lock className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Zero Retention for Training</h3>
                  </div>
                  <p className="text-gray-700">
                    Zibly is configured so that your inputs and the AI's outputs are never used to train our models.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Server className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Isolated Processing</h3>
                  </div>
                  <p className="text-gray-700">
                    We utilize the enterprise APIs of our model partners (OpenAI, Anthropic, Google, etc.). These agreements contractually prohibit the model providers from using data sent via API for model training.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Data Silos</h3>
                  </div>
                  <p className="text-gray-700">
                    Your firm's workspace is logically isolated. It is architecturally impossible for your data to "leak" into another customer's Zibly instance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Compliance */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center text-center mb-12">
                <Cloud className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-semibold inter-heading-normal text-primary mb-4">
                  Infrastructure & Compliance
                </h2>
                <p className="text-lg text-gray-700">
                  We do not manage physical servers. We leverage the security posture of the world's leading cloud providers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Cloud Infrastructure */}
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-primary mb-4">Cloud Infrastructure (AWS)</h3>
                  <p className="text-gray-700 mb-4">
                    Zibly is hosted entirely on Amazon Web Services (AWS). We do not maintain physical data centers. By building on AWS, we inherit the physical security, network monitoring, and compliance certifications of the industry leader.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Certifications Inherited:</strong> ISO 27001, SOC 2 Type II, PCI-DSS Level 1</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Data Residency:</strong> All data is processed and stored within the United States in secure VPCs (Virtual Private Clouds)</span>
                    </div>
                  </div>
                </div>

                {/* SOC 2 Alignment */}
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-primary mb-4">Alignment with SOC 2</h3>
                  <p className="text-gray-700 mb-4">
                    While Zibly is an early-stage partner, our internal controls are designed in accordance with the AICPA Trust Services Criteria for Security, Availability, and Confidentiality. We implement the same rigorous controls as a certified organization, including:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Encryption at Rest:</strong> AES-256 encryption for all databases</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Encryption in Transit:</strong> TLS 1.2+ for all data moving between your browser and our servers</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Least Privilege Access:</strong> Zibly employees have no access to customer data unless explicitly required for a support ticket you initiate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Security */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center text-center mb-12">
                <KeyRound className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-semibold inter-heading-normal text-primary">
                  Application Security
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Authentication */}
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-primary mb-4">Authentication</h3>
                  <p className="text-gray-700 mb-4">
                    We support robust authentication standards to prevent unauthorized access.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>SSO Ready:</strong> We support Single Sign-On via Google Workspace and Microsoft 365, allowing you to manage access via your existing identity provider.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>MFA:</strong> We enforce or support Multi-Factor Authentication flows.</span>
                    </div>
                  </div>
                </div>

                {/* Vulnerability Management */}
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-primary mb-4">Vulnerability Management</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Scan className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Daily Scanning:</strong> We use automated tools to scan our code dependencies for known CVEs (Common Vulnerabilities and Exposures).</span>
                    </div>
                    <div className="flex items-start">
                      <Eye className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Penetration Testing:</strong> We conduct periodic security reviews of our application logic to ensure no doors are left open.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 inter-heading-normal text-primary">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-2">Does Zibly sell my data?</h3>
                  <p className="inter-text text-gray-700">
                    <strong>Never.</strong> Our business model is subscription-based. Your data is not our product.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-2">Which AI models do you use?</h3>
                  <p className="inter-text text-gray-700">
                    We employ a "Model Agnostic" architecture, routing tasks to the best-in-class models from OpenAI, Anthropic, Google, and X.AI. All are accessed via enterprise-grade APIs with zero-retention policies for training.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-2">Can we delete our data?</h3>
                  <p className="inter-text text-gray-700">
                    <strong>Yes.</strong> In compliance with GDPR and CCPA, you have the "Right to be Forgotten." If you delete a workspace or cancel your account, your data is permanently purged from our active databases within the retention window defined in our <Link href="/terms" className="text-primary underline">Terms</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-primary mb-4">Questions?</h2>
              <p className="text-gray-700 mb-4">
                For security or legal questions, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:security@zibly.ai" className="text-primary underline font-medium">
                  security@zibly.ai
                </Link>
                <span className="hidden sm:inline text-gray-400">|</span>
                <Link href="mailto:support@zibly.ai" className="text-primary underline font-medium">
                  support@zibly.ai
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
