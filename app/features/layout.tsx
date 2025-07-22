import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | AI Email Assistant for Professional Services - zibly.ai",
  description: "Turn emails into Excel models, slide decks & reports with professional depth. See how professionals save 20+ hours weekly with AI-powered task automation.",
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}