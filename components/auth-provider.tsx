"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: string
  company?: string
  subscription?: any
  notifications?: any
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  refetch: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async (isInitialLoad = false) => {
    if (isInitialLoad) setLoading(true) // Only set loading on initial fetch
    try {
      const response = await fetch("/api/auth/me", { credentials: "include" })
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Fetch user error:", error)
      setUser(null)
    } finally {
      if (isInitialLoad) setLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true) // Set loading true when login starts
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user) // Set user directly from login response
        // setLoading(false) will be handled by the useEffect watching the user state change or if error
        return true
      } else {
        const errorData = await response.json()
        console.error("Login failed:", errorData.error || "Unknown login error")
        setUser(null) // Ensure user is null on failed login
        setLoading(false)
        return false
      }
    } catch (error) {
      console.error("Login request failed:", error)
      setUser(null)
      setLoading(false)
      return false
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" })
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setUser(null)
      setLoading(false) // Ensure loading is set to false after user is cleared
    }
  }

  useEffect(() => {
    fetchUser(true) // Pass true for initial load
  }, [])

  // Add an effect to set loading to false once user state is determined after login/logout
  useEffect(() => {
    if (user !== undefined) {
      // Check if user state is determined (either null or an object)
      setLoading(false)
    }
  }, [user])

  const refetch = async () => {
    await fetchUser()
  }

  return <AuthContext.Provider value={{ user, loading, login, logout, refetch }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
