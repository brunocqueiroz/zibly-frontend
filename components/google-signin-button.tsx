"use client"

import { useEffect, useRef } from "react"
import { GOOGLE_CLIENT_ID } from "@/lib/oauth"
import config from "@/lib/config"

declare global {
  interface Window {
    google: any
  }
}

interface GoogleSignInButtonProps {
  onSuccess: (idToken: string) => Promise<void>
  onError?: (error: Error) => void
  theme?: "outline" | "filled_blue" | "filled_black"
  size?: "large" | "medium" | "small"
  text?: "signin_with" | "signup_with" | "continue_with" | "signin"
  width?: number
  className?: string
}

export function GoogleSignInButton({
  onSuccess,
  onError,
  theme = "outline",
  size = "large",
  text = "signin_with",
  width = 250,
  className = "",
}: GoogleSignInButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Prevent double loading
    if (scriptLoadedRef.current) return

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]')
    if (existingScript) {
      scriptLoadedRef.current = true
      initializeGoogleSignIn()
      return
    }

    // Load Google Identity Services script
    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true

    script.onload = () => {
      scriptLoadedRef.current = true
      initializeGoogleSignIn()
    }

    script.onerror = () => {
      const error = new Error("Failed to load Google Identity Services")
      console.error(error)
      onError?.(error)
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup: only remove if we added it
      if (script.parentNode === document.head) {
        // Don't remove as other components might be using it
        // document.head.removeChild(script)
      }
    }
  }, [])

  const initializeGoogleSignIn = () => {
    if (!window.google || !buttonRef.current) return

    try {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      })

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme,
        size,
        text,
        width,
      })
    } catch (error) {
      console.error("Error initializing Google Sign-In:", error)
      onError?.(error as Error)
    }
  }

  const handleCredentialResponse = async (response: any) => {
    try {
      // response.credential is the Google ID token
      const idToken = response.credential
      await onSuccess(idToken)
    } catch (error) {
      console.error("Google sign-in error:", error)
      onError?.(error as Error)
    }
  }

  return <div ref={buttonRef} className={className} />
}

