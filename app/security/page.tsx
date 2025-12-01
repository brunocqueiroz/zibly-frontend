"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Cloud, Server, CheckCircle, Eye, KeyRound, ShieldCheck, Database, Scan, Mail, FileText, HelpCircle, Building, Fingerprint } from "lucide-react"
import SlideUp from "@/components/animations/SlideUp"
import FadeIn from "@/components/animations/FadeIn"
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer"
import MagneticButton from "@/components/animations/MagneticButton"
import WaveDivider from "@/components/WaveDivider"

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <SlideUp>
              <div className="space-y-4 max-w-3xl">
                <Badge variant="secondary" className="mb-4">
                  <Shield className="h-3 w-3 mr-1" />
                  Security & Privacy
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl inter-section-heading text-black">
                  Built for <span className="text-primary">Trust</span>. Engineered for <span className="text-primary">Privacy</span>.
                </h1>
                <p className="mx-auto max-w-[800px] md:text-xl inter-text text-black">
                  Zibly was purpose-built to meet the stringent security and privacy standards of professional services firms.
                  From day one, we've prioritized the protection of your confidential data. When using Zibly, your data is as
                  secure and private as using trusted email providers like Gmail or Outlook.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full py-8 bg-white border-y border-black/20">
        <div className="container px-4 md:px-6">
          <StaggerContainer className="grid justify-center gap-8 md:grid-cols-4 text-center">
            <StaggerItem>
              <div>
                <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium inter-text-medium text-black">No AI Training</p>
                <p className="text-xs text-black inter-text">Your data stays yours</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium inter-text-medium text-black">AES-256 Encryption</p>
                <p className="text-xs text-black inter-text">Data at rest & in transit</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium inter-text-medium text-black">AWS Infrastructure</p>
                <p className="text-xs text-black inter-text">Enterprise-grade hosting</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium inter-text-medium text-black">Complete Isolation</p>
                <p className="text-xs text-black inter-text">Per-customer data silos</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* No-Train Guarantee Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Your Data is <span className="text-primary">Never</span> Used to Train AI
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                The most important assurance we provide is simple: Your data is never used to train or enhance AI models.
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid gap-8 lg:grid-cols-3">
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <FileText className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Contractual Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black">
                      We exclusively use Commercial and Enterprise-tier APIs from providers such as OpenAI, Anthropic, Google, and Amazon.
                      These providers are legally bound by contracts forbidding the use of your data for AI training.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Lock className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Zero Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black">
                      Your inputs and the AI's outputs are processed securely, temporarily stored only to fulfill your immediate requests,
                      and then permanently discarded.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Confidentiality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black">
                      This arrangement maintains your professional confidentiality, preserving attorney-client privilege and protecting
                      sensitive business communications in the same way secure email does.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Data Isolation Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Complete <span className="text-primary">Data Isolation</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                Logical Isolation & Secure Architecture
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-4xl">
            <StaggerContainer className="grid gap-8 md:grid-cols-2">
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Database className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Data Silos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black">
                      Each Zibly customer workspace is logically isolated. It is architecturally impossible for data leakage between accounts.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Server className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Memory Handling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black">
                      Data is processed securely and purged promptly from active memory after processing your request.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* Infrastructure & Compliance Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Infrastructure & <span className="text-primary">Security</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                We leverage industry-leading cloud infrastructure to ensure your data is protected by enterprise-grade security measures.
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-5xl">
            <StaggerContainer className="grid gap-8 md:grid-cols-2">
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Cloud className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Cloud Infrastructure with AWS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black mb-4">
                      Zibly's platform is fully hosted on Amazon Web Services (AWS), inheriting their extensive security measures:
                    </p>
                    <ul className="space-y-2 text-sm inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Enterprise-Grade:</strong> AWS provides industry-leading physical security, network monitoring, and infrastructure reliability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Data Residency:</strong> All data is securely stored and processed within AWS data centers located in the United States, utilizing Virtual Private Clouds (VPCs)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Enterprise Security Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="inter-text text-black mb-4">
                      We employ rigorous security controls to protect your data:
                    </p>
                    <ul className="space-y-2 text-sm inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Encryption at Rest:</strong> AES-256 encryption for all stored data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Encryption in Transit:</strong> TLS 1.2+ for all data communications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Access Controls:</strong> Zibly personnel have strictly limited, need-based access to customer data, granted solely to resolve explicit customer-initiated support requests or to respond to security incidents</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" flip={true} />

      {/* Application Security Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Robust <span className="text-primary">Application Security</span>
              </h2>
              <p className="max-w-[900px] text-base md:text-lg inter-text mx-auto text-black">
                We implement advanced security measures to ensure your interactions with Zibly remain secure.
              </p>
            </div>
          </SlideUp>

          <div className="mx-auto max-w-5xl">
            <StaggerContainer className="grid gap-8 md:grid-cols-2">
              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Fingerprint className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Single Sign-On (SSO):</strong> We support secure, enterprise-grade SSO via Google Workspace and Microsoft 365, allowing you to seamlessly manage user access.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Multi-Factor Authentication (MFA):</strong> Enforced or optionally available for all accounts, adding an essential extra layer of security.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-2 border-black h-full">
                  <CardHeader>
                    <Scan className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="inter-heading-normal text-xl">Proactive Vulnerability Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 inter-text text-black">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Continuous Scanning:</strong> Automated daily scans of our entire codebase and dependencies for known vulnerabilities (CVEs).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Regular Penetration Testing:</strong> Periodic security audits and penetration tests to identify and resolve potential vulnerabilities before they become issues.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <WaveDivider fill="hsl(0 0% 100%)" />

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container max-w-4xl px-4 md:px-6">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="inter-section-heading mb-4 text-black text-3xl sm:text-4xl md:text-5xl" style={{ fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                Transparency & <span className="text-primary">FAQs</span>
              </h2>
            </div>
          </SlideUp>

          <FadeIn>
            <Card className="bg-white border-2 border-black">
              <CardHeader>
                <CardTitle className="inter-heading-normal flex items-center gap-2 text-black">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="inter-text-medium">Does Zibly sell my data?</AccordionTrigger>
                    <AccordionContent>
                      <p className="inter-text text-black">
                        <strong>Absolutely not.</strong> We operate purely on a subscription-based business model. Your data is never monetized, shared, or sold.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="inter-text-medium">Which AI models does Zibly use?</AccordionTrigger>
                    <AccordionContent>
                      <p className="inter-text text-black">
                        We utilize a "Model Agnostic" framework, selecting best-in-class models from providers such as OpenAI, Anthropic, Google, and X.AI.
                        All integrations occur through secure, enterprise-grade APIs with strict zero-retention and no-training policies.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="inter-text-medium">Can I permanently delete my data?</AccordionTrigger>
                    <AccordionContent>
                      <p className="inter-text text-black">
                        <strong>Yes.</strong> We fully comply with privacy laws including GDPR and CCPA, granting you the "Right to be Forgotten."
                        Deleting your workspace or account ensures your data is permanently and irreversibly removed from our active databases
                        following the timeframe detailed in our <Link href="/terms" className="text-primary underline">Terms of Service</Link>.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <Card className="max-w-2xl mx-auto border-2 border-black bg-white">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-black inter-heading-normal mb-4">Questions?</h2>
                <p className="inter-text text-black mb-6">
                  Your trust and confidence in Zibly are paramount. If you have any further questions or concerns
                  regarding security or privacy, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="mailto:security@zibly.ai">
                        Security Team <Mail className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <Button asChild variant="outline" className="border-black">
                    <Link href="mailto:support@zibly.ai">
                      Support Team <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="inter-text text-black mt-6 text-sm">
                  Your peace of mind is our highest priority.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
