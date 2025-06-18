import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Ex-McKinsey Team Building AI for Professionals - zibly.ai",
  description: "Meet the team automating knowledge work. Former consultants & engineers on a mission to give you back 20 hours per week. Backed by top VCs.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}