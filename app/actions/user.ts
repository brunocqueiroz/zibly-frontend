"use server"

import { auth } from "@/auth"
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
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
})

export async function updateProfile(formData: FormData) {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
  }

  const validatedFields = profileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, company } = validatedFields.data

  try {
    // Call your Python backend to update user profile
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      },
      body: JSON.stringify({
        name,
        email,
        company
      })
    })

    if (!response.ok) {
      return { error: "Failed to update profile" }
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error) {
    console.error('Profile update error:', error)
    return { error: "Failed to update profile" }
  }
}

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
})

export async function updatePassword(formData: FormData) {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
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

  try {
    // Call your Python backend to update password
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/user/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      },
      body: JSON.stringify({
        currentPassword,
        newPassword
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { error: errorData.message || "Failed to update password" }
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error) {
    console.error('Password update error:', error)
    return { error: "Failed to update password" }
  }
}

export async function updateNotificationPreferences(formData: FormData) {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
  }

  const emailNotifications = formData.get("emailNotifications") === "on"
  const usageAlerts = formData.get("usageAlerts") === "on"
  const marketingEmails = formData.get("marketingEmails") === "on"

  try {
    // Call your Python backend to update notification preferences
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/user/notifications`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      },
      body: JSON.stringify({
        emailNotifications,
        usageAlerts,
        marketingEmails
      })
    })

    if (!response.ok) {
      return { error: "Failed to update notification preferences" }
    }

    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error) {
    console.error('Notification preferences update error:', error)
    return { error: "Failed to update notification preferences" }
  }
}
