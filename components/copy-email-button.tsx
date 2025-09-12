"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CopyEmailButton({
  email = "work@zibly.ai",
  variant = "outline",
  size = "sm",
  className = "",
}: {
  email?: string
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | null | undefined
  size?: "default" | "sm" | "lg" | "icon" | null | undefined
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // no-op
    }
  }

  return (
    <Button type="button" onClick={onCopy} variant={variant as any} size={size as any} className={className}>
      {copied ? "Copied" : "Copy Email"}
    </Button>
  )
}

