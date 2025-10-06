"use client"

import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_auto] animate-gradient ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      {children}
    </span>
  )
}
