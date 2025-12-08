"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { upsertSubscriber } from "@/app/actions/subscriber"
import { addUser } from "@/lib/auth"
import config from "@/lib/config"

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
  // Get selected plan from form data, default to starter
  const plan = formData.get("plan") as string || "starter"

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
      // Use subscriber API Gateway /upsert route
      // Password is hashed with bcrypt in upsertSubscriber before sending
      const result = await upsertSubscriber({
        email,
        firstName: first_name,
        lastName: last_name,
        password,
        tier: plan,
      })

      if (!result.success) {
        // Check for duplicate email error
        const errorLower = result.error?.toLowerCase()
        if (errorLower?.includes("already exists") || 
            errorLower?.includes("duplicate") ||
            errorLower?.includes("conflict")) {
          return {
            error: "An account with this email already exists.",
          }
        }
        return {
          error: result.error || "Failed to create account.",
        }
      }
    }
  } catch (error: any) {
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

  try {
    // Use subscriber API Gateway /upsert route
    const result = await upsertSubscriber({
      email: "demo@zibly.ai",
      firstName: "Demo",
      lastName: "User",
      password: "password123",
      tier: "free",
    })

    if (!result.success) {
      // User already exists is fine for demo purposes
      const errorLower = result.error?.toLowerCase()
      if (errorLower?.includes("already exists") ||
          errorLower?.includes("duplicate") ||
          errorLower?.includes("conflict")) {
        return { success: true, message: "Demo user already exists" }
      }
      console.error("Failed to create demo user:", result.error)
      return { error: "Failed to create demo user" }
    }
    
    return { success: true, message: "Demo user created successfully" }
  } catch (error: any) {
    console.error("Failed to create demo user:", error)
    return { error: "Failed to create demo user" }
  }
}
