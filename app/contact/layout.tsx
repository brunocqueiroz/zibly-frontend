import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Zibly – Talk to Our Team",
  description: "Have questions about Zibly? Get in touch with our team for support, partnerships, or enterprise inquiries.",
  alternates: { canonical: "https://zibly.ai/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

