"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { getApiClient, ApiError } from "@/lib/api-client"
import { addUser } from "@/lib/auth"
import config from "@/lib/config"

// Simple hash function for demo purposes (not for production)
async function simpleHash(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

const userSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function registerUser(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { first_name, last_name, email, password } = validatedFields.data
  // Default to starter plan, user can upgrade later
  const plan = "starter"

  try {
    if (config.features.useMockData) {
      // Fallback to in-memory storage for development
      const name = `${first_name} ${last_name}`
      const userId = Math.random().toString(36).substring(7)
      await addUser({
        id: userId,
        name,
        email,
        password, // Will be hashed in addUser function
        role: "user",
        subscription: {
          plan,
          status: "active",
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          cancelAtPeriodEnd: false,
        },
      })
    } else {
      // Use FastAPI backend
      const apiClient = getApiClient()
      const user = await apiClient.createUser({
        email,
        first_name,
        last_name,
        password,
        auth_provider: "nextauth",
        metadata: {
          registrationSource: "web",
          defaultPlan: plan,
        },
      })
    }
  } catch (error: any) {
    if (error instanceof ApiError) {
      if (error.status === 409) {
        return {
          error: "An account with this email already exists.",
        }
      }
      return {
        error: error.message || "Failed to create account.",
      }
    }
    
    if (error.message === "User already exists") {
      return {
        error: "An account with this email already exists.",
      }
    }
    
    return {
      error: "Something went wrong during registration.",
    }
  }

  redirect("/login?registered=true")
}

// Create demo user for testing (development only)
export async function createDemoUser() {
  if (process.env.NODE_ENV !== 'development') {
    return { error: "Demo user creation only available in development" }
  }

  const demoUserData = {
    first_name: "Demo",
    last_name: "User", 
    email: "demo@zibly.ai",
    password: "password123",
  }

  try {
    const apiClient = getApiClient()
    
    // Try to create the demo user
    await apiClient.createUser({
      ...demoUserData,
      auth_provider: "nextauth",
      metadata: {
        registrationSource: "demo",
        isDemoAccount: true,
      },
    })
    
    return { success: true, message: "Demo user created successfully" }
  } catch (error: any) {
    if (error instanceof ApiError && error.status === 409) {
      // User already exists, that's fine for demo purposes
      return { success: true, message: "Demo user already exists" }
    }
    
    console.error("Failed to create demo user:", error)
    return { error: "Failed to create demo user" }
  }
}
