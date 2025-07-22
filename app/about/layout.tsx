import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Team Building AI for Professionals - zibly.ai",
  description: "Meet the team automating knowledge work. Our mission is to give you back 20 hours per week through AI-powered task automation.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}