"use client"

import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-primary ${className}`}>
      {children}
    </span>
  )
}
