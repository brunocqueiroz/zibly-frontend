"use server"

import { auth } from "@/auth"
import { revalidatePath } from "next/cache"

export async function changePlan(formData: FormData) {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
  }

  const plan = formData.get("plan") as string
  const billingCycle = formData.get("billingCycle") as string

  if (!plan || !["starter", "professional", "enterprise"].includes(plan)) {
    return { error: "Invalid plan" }
  }

  try {
    // Call your Python backend to update subscription
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/subscription/change`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      },
      body: JSON.stringify({
        plan,
        billingCycle
      })
    })

    if (!response.ok) {
      return { error: "Failed to update subscription" }
    }

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    console.error('Subscription change error:', error)
    return { error: "Failed to update subscription" }
  }
}

export async function cancelSubscription() {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/subscription/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      }
    })

    if (!response.ok) {
      return { error: "Failed to cancel subscription" }
    }

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    console.error('Subscription cancel error:', error)
    return { error: "Failed to cancel subscription" }
  }
}

export async function reactivateSubscription() {
  const session = await auth()
  if (!session?.user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:8000'}/api/subscription/reactivate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`
      }
    })

    if (!response.ok) {
      return { error: "Failed to reactivate subscription" }
    }

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    console.error('Subscription reactivate error:', error)
    return { error: "Failed to reactivate subscription" }
  }
}
