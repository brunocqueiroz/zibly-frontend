"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getApiClient, ApiError, UserResponse } from "@/lib/api-client"
import config from "@/lib/config"
import { getStoredToken, storeToken, removeToken, getStoredUser, storeUser, removeUser, clearOAuthData } from "@/lib/oauth"

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
  loginWithGoogle: (idToken: string) => Promise<{ success: boolean; error?: string }>
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
        // Use FastAPI backend - check for JWT token first (OAuth), then fallback to stored user
        const jwtToken = getStoredToken()
        
        if (jwtToken) {
          // OAuth user - verify token and get current user
          try {
            const apiClient = getApiClient()
            const freshUserData = await apiClient.getCurrentUser(jwtToken)
            
            // Convert FastAPI UserResponse to our User interface
            const user: User = {
              ...freshUserData,
              name: `${freshUserData.first_name} ${freshUserData.last_name}`,
            }
            setUser(user)
            storeUser(freshUserData)
          } catch (error) {
          // Token might be expired, clear OAuth data
          if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
            clearOAuthData()
          }
          setUser(null)
          }
        } else {
          // Check for stored user session (password-based auth)
          const sessionUser = getStoredUser()
          if (sessionUser) {
            const parsedUser = sessionUser
            
            // If this is not the initial load, fetch fresh user data from API to get updated preferences
            if (!isInitialLoad && parsedUser.id) {
              try {
                const apiClient = getApiClient()
                const freshUserData = await apiClient.getUserById(parsedUser.id)
                
                // Convert fresh FastAPI UserResponse to our User interface
                const user: User = {
                  ...freshUserData,
                  name: `${freshUserData.first_name || ''} ${freshUserData.last_name || ''}`.trim(),
                }
                setUser(user)
                // Update localStorage with fresh data
                storeUser(freshUserData)
              } catch (error) {
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
      }
    } catch (error) {
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
          setUser(null)
          setLoading(false)
          return false
        }
      }
    } catch (error) {
      setUser(null)
      setLoading(false)
      return false
    }
  }

  const loginWithGoogle = async (idToken: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true)
    
    try {
      if (config.features.useMockData) {
        // OAuth not supported in mock mode
        setLoading(false)
        return { success: false, error: "OAuth not supported in mock mode" }
      }

      const apiClient = getApiClient()
      
      try {
        // Verify Google token and get JWT
        const { access_token, user: apiUser } = await apiClient.verifyGoogleToken(idToken)
        
        if (apiUser && apiUser.is_active) {
          // Store JWT token
          storeToken(access_token)
          
          // Convert FastAPI UserResponse to our User interface
          const user: User = {
            ...apiUser,
            name: `${apiUser.first_name} ${apiUser.last_name}`,
          }
          
          // Store user data
          storeUser(apiUser)
          setUser(user)
          return { success: true }
        } else {
          setUser(null)
          setLoading(false)
          return { success: false, error: "User account is not active" }
        }
      } catch (error) {
        // Provide more detailed error information
        let errorMessage = "Google sign-in failed"
        
        if (error instanceof ApiError) {
          // Check if this is a backend error (500) that might be temporary
          if (error.status === 500) {
            errorMessage = `Backend error: ${error.message}. Please try again or contact support if the issue persists.`
          } else {
            errorMessage = error.message || `Google sign-in failed (HTTP ${error.status})`
          }
        } else if (error instanceof Error) {
          errorMessage = error.message
        }
        
        setUser(null)
        setLoading(false)
        return { success: false, error: errorMessage }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      setUser(null)
      setLoading(false)
      return { success: false, error: errorMessage }
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      if (config.features.useMockData) {
        // Use existing mock API
        await fetch("/api/auth/logout", { method: "POST", credentials: "include" })
      } else {
        // Clear both OAuth (JWT) and password-based sessions
        clearOAuthData()
        removeUser()
      }
    } catch (error) {
      // Silently handle logout errors
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

  return <AuthContext.Provider value={{ user, loading, login, loginWithGoogle, logout, refetch }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
