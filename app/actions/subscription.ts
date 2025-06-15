"use server"

import { getSessionFromCookies } from "@/lib/session"
import { getUser, updateUser } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function changePlan(formData: FormData) {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  const plan = formData.get("plan") as string
  const billingCycle = formData.get("billingCycle") as string

  if (!plan || !["starter", "professional", "enterprise"].includes(plan)) {
    return { error: "Invalid plan" }
  }

  try {
    const userDetails = getUser(user.email)
    if (!userDetails) {
      return { error: "User not found" }
    }

    // Update subscription in memory
    updateUser(user.email, {
      subscription: {
        ...userDetails.subscription,
        plan,
        currentPeriodEnd: new Date(Date.now() + (billingCycle === "annual" ? 365 : 30) * 24 * 60 * 60 * 1000),
      },
    })

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update subscription" }
  }
}

export async function cancelSubscription() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const userDetails = getUser(user.email)
    if (!userDetails) {
      return { error: "User not found" }
    }

    updateUser(user.email, {
      subscription: {
        ...userDetails.subscription,
        cancelAtPeriodEnd: true,
      },
    })

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    return { error: "Failed to cancel subscription" }
  }
}

export async function reactivateSubscription() {
  const user = await getSessionFromCookies()
  if (!user?.email) {
    return { error: "Not authenticated" }
  }

  try {
    const userDetails = getUser(user.email)
    if (!userDetails) {
      return { error: "User not found" }
    }

    updateUser(user.email, {
      subscription: {
        ...userDetails.subscription,
        cancelAtPeriodEnd: false,
      },
    })

    revalidatePath("/dashboard/subscription")
    return { success: true }
  } catch (error) {
    return { error: "Failed to reactivate subscription" }
  }
}
