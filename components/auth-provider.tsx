"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getApiClient, ApiError, UserResponse } from "@/lib/api-client"
import config from "@/lib/config"

interface User {
  id: number | string  // Support both FastAPI (number) and mock (string)
  name: string
  email: string
  first_name?: string
  last_name?: string
  role?: string
  company?: string
  bio?: string
  website?: string
  avatar_url?: string
  subscription?: any
  notifications?: any
  preferences?: any 
  is_active?: boolean
  created_at?: string
  updated_at?: string
  last_login_at?: string
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
      if (config.features.useMockData) {
        // Use existing mock API
        const response = await fetch("/api/auth/me", { credentials: "include" })
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        } else {
          setUser(null)
        }
      } else {
        // Use FastAPI backend - check if we have a stored user session
        const sessionUser = localStorage.getItem('zibly_user')
        if (sessionUser) {
          const parsedUser = JSON.parse(sessionUser)
          
          // If this is not the initial load, fetch fresh user data from API to get updated preferences
          if (!isInitialLoad && parsedUser.id) {
            try {
              const apiClient = getApiClient()
              const freshUserData = await apiClient.getUserById(parsedUser.id)
              
              // Convert fresh FastAPI UserResponse to our User interface
              const user: User = {
                ...freshUserData,
                name: freshUserData.name || `${freshUserData.first_name || ''} ${freshUserData.last_name || ''}`.trim(),
              }
              setUser(user)
              // Update localStorage with fresh data
              localStorage.setItem('zibly_user', JSON.stringify(freshUserData))
            } catch (error) {
              console.error("Error fetching fresh user data:", error)
              // Fallback to cached data
              const user: User = {
                ...parsedUser,
                name: parsedUser.name || `${parsedUser.first_name || ''} ${parsedUser.last_name || ''}`.trim(),
              }
              setUser(user)
            }
          } else {
            // Initial load - use cached data
            const user: User = {
              ...parsedUser,
              name: parsedUser.name || `${parsedUser.first_name || ''} ${parsedUser.last_name || ''}`.trim(),
            }
            setUser(user)
          }
        } else {
          setUser(null)
        }
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
      if (config.features.useMockData) {
        // Use existing mock API
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
          const data = await response.json()
          setUser(data.user) // Set user directly from login response
          return true
        } else {
          const errorData = await response.json()
          console.error("Login failed:", errorData.error || "Unknown login error")
          setUser(null) // Ensure user is null on failed login
          setLoading(false)
          return false
        }
      } else {
        // Use FastAPI backend authentication
        const apiClient = getApiClient()
        
        try {
          // Authenticate user with email and password
          const apiUser = await apiClient.authenticateUser(email, password)
          
          if (apiUser && apiUser.is_active) {
            // Convert FastAPI UserResponse to our User interface
            const user: User = {
              ...apiUser,
              name: `${apiUser.first_name} ${apiUser.last_name}`,
            }
            
            // Store in localStorage for session persistence
            localStorage.setItem('zibly_user', JSON.stringify(apiUser))
            setUser(user)
            return true
          } else {
            // Authentication failed - wrong credentials
            setUser(null)
            setLoading(false)
            return false
          }
        } catch (error) {
          console.error("Authentication failed:", error)
          setUser(null)
          setLoading(false)
          return false
        }
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
      if (config.features.useMockData) {
        // Use existing mock API
        await fetch("/api/auth/logout", { method: "POST", credentials: "include" })
      } else {
        // Clear FastAPI session
        localStorage.removeItem('zibly_user')
      }
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
