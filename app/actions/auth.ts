"use server"

import { z } from "zod"
import { redirect } from "next/navigation"
import { addUser } from "@/lib/auth"

// Simple hash function for demo purposes (not for production)
async function simpleHash(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function registerUser(formData: FormData) {
  const validatedFields = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data
  const plan = (formData.get("plan") as string) || "starter"

  try {
    // Create user (in-memory for demo)
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
