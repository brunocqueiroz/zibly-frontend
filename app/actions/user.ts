"use server"

import { getSessionFromCookies } from "@/lib/session"
import { getUser, updateUser } from "@/lib/auth"
import { getApiClient, ApiError } from "@/lib/api-client"
import config from "@/lib/config"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Simple hash function for demo purposes (not for production)
async function simpleHash(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await simpleHash(password)
  return passwordHash === hash
}

const profileSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  // email: z.string().email("Invalid email address"), // Email not updatable via API
  company: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
})

export async function updateProfile(formData: FormData) {
  // Get user from localStorage-based auth (FastAPI)
  const userSession = formData.get("userId") // We'll pass this from the client
  if (!userSession) {
    return { error: "Not authenticated" }
  }

  const userId = parseInt(userSession as string)
  if (isNaN(userId)) {
    return { error: "Invalid user ID" }
  }

  const validatedFields = profileSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    // email: formData.get("email"), // Email not updatable
    company: formData.get("company") || "",
    bio: formData.get("bio") || "",
    website: formData.get("website") || "",
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const updateData = validatedFields.data

  try {
    if (config.features.useMockData) {
      // Fallback to mock system
      const user = await getSessionFromCookies()
      if (!user?.email) return { error: "Not authenticated" }
      
      const userDetails = await getUser(user.email)
      if (!userDetails) return { error: "User not found" }

      await updateUser(user.email, {
        name: `${updateData.first_name} ${updateData.last_name}`,
        company: updateData.company,
      })
    } else {
      // Use FastAPI backend
      const apiClient = getApiClient()
      await apiClient.updateUser(userId, updateData)
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error: any) {
    if (error instanceof ApiError) {
      return { error: error.message || "Failed to update profile" }
    }
    return { error: "Failed to update profile" }
  }
}

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
})

export async function updatePassword(formData: FormData) {
  try {
    // Get user from localStorage-based auth (FastAPI)
    const userSession = formData.get("userId")
    if (!userSession) {
      return { error: "Not authenticated" }
    }

    const userId = parseInt(userSession as string)
    if (isNaN(userId)) {
      return { error: "Invalid user ID" }
    }

    const validatedFields = passwordSchema.safeParse({
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    })

    if (!validatedFields.success) {
      return {
        error: "Invalid fields",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { currentPassword, newPassword, confirmPassword } = validatedFields.data

    if (newPassword !== confirmPassword) {
      return { error: "Passwords do not match" }
    }

    if (config.features.useMockData) {
      // Fallback to mock system
      const user = await getSessionFromCookies()
      if (!user?.email) {
        return { error: "Not authenticated" }
      }

      const userDetails = await getUser(user.email)
      if (!userDetails?.password) {
        return { error: "No password set for this account" }
      }

      // Verify current password
      const passwordMatch = await verifyPassword(currentPassword, userDetails.password)
      if (!passwordMatch) {
        return { error: "Current password is incorrect" }
      }

      // Hash new password
      const hashedPassword = await simpleHash(newPassword)

      await updateUser(user.email, {
        password: hashedPassword,
      })
    } else {
      // Use FastAPI backend
      const apiClient = getApiClient()
      
      const result = await apiClient.changeUserPassword(userId, currentPassword, newPassword)
      
      if (!result.success) {
        return { error: result.message }
      }
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error: any) {
    // More specific error handling
    if (error instanceof ApiError) {
      if (error.status === 404) {
        return { error: "User not found" }
      }
      if (error.status === 401 || error.status === 403) {
        return { error: "Authentication failed" }
      }
      return { error: `API Error: ${error.message}` }
    }
    
    if (error?.message?.includes('fetch')) {
      return { error: "Connection error - check if backend is running" }
    }
    
    return { error: `Password update failed: ${error?.message || 'Unknown error'}` }
  }
}

export async function updateNotificationPreferences(formData: FormData) {
  try {
    // Get user from localStorage-based auth (FastAPI)
    const userSession = formData.get("userId")
    if (!userSession) {
      return { error: "Not authenticated" }
    }

    const userId = parseInt(userSession as string)
    if (isNaN(userId)) {
      return { error: "Invalid user ID" }
    }

    // Extract notification preferences from form
    const email = formData.get("email") === "on"
    const usage = formData.get("usage") === "on" 
    const marketing = formData.get("marketing") === "on"

    if (config.features.useMockData) {
      // Fallback to mock system
      const user = await getSessionFromCookies()
      if (!user?.email) return { error: "Not authenticated" }
      
      const userDetails = await getUser(user.email)
      if (!userDetails) return { error: "User not found" }

      await updateUser(user.email, {
        notifications: { email, usage, marketing },
      })
    } else {
      // Use FastAPI backend - update preferences
      const apiClient = getApiClient()
      
      // Get current user to preserve existing preferences
      const currentUser = await apiClient.getUserById(userId)
      const currentPreferences = currentUser.preferences || {}
      
      // Build updated preferences structure
      const updatedPreferences = {
        ...currentPreferences,
        notifications: {
          ...currentPreferences.notifications,
          email,
          usage, 
          marketing
        }
      }
      
      await apiClient.updateUser(userId, { 
        preferences: updatedPreferences 
      })
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error: any) {
    // More specific error handling
    if (error instanceof ApiError) {
      if (error.status === 404) {
        return { error: "User not found" }
      }
      if (error.status === 401 || error.status === 403) {
        return { error: "Authentication failed" }
      }
      return { error: `API Error: ${error.message}` }
    }
    
    if (error?.message?.includes('fetch')) {
      return { error: "Connection error - check if backend is running" }
    }
    
    return { error: `Update failed: ${error?.message || 'Unknown error'}` }
  }
}
