"use server"

import bcrypt from "bcryptjs"

const SUBSCRIBER_API_BASE = process.env.SUBSCRIBER_API_URL || "https://2yv09wps77.execute-api.us-east-1.amazonaws.com"
const BCRYPT_ROUNDS = 12

/**
 * Hash a password using bcrypt with 12 rounds
 */
async function hashPassword(plainPassword: string): Promise<string> {
  return bcrypt.hash(plainPassword, BCRYPT_ROUNDS)
}

// ============================================================================
// Authentication
// ============================================================================

export interface SubscriberUser {
  id: number
  email: string
  first_name: string
  last_name: string
  subscription_tier?: string
  professional_level?: number | null
  is_active?: boolean
  preferences?: Record<string, any>
}

interface AuthenticateResult {
  success: boolean
  error?: string
  user?: SubscriberUser
}

/**
 * Authenticate a subscriber with email and password
 * Calls the Subscriber API's authenticate route which verifies bcrypt password
 */
export async function authenticateSubscriber(
  email: string,
  password: string
): Promise<AuthenticateResult> {
  if (!email || !password) {
    return { success: false, error: "Email and password are required" }
  }

  try {
    const response = await fetch(`${SUBSCRIBER_API_BASE}/prod/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        route: "authenticate",
        email,
        pwd: password, // Send plain password - Lambda will bcrypt.compare()
      }),
    })

    const result = await response.json()

    if (!response.ok || !result.ok) {
      // Handle specific error cases
      const errorLower = result.error?.toLowerCase()
      if (response.status === 401 || errorLower?.includes("invalid")) {
        return { success: false, error: "Invalid email or password" }
      }
      if (response.status === 404 || errorLower?.includes("not found")) {
        return { success: false, error: "Invalid email or password" }
      }
      return {
        success: false,
        error: result.error || "Authentication failed",
      }
    }

    return {
      success: true,
      user: {
        id: result.id,
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        subscription_tier: result.subscription_tier,
        professional_level: result.professional_level,
        is_active: result.is_active ?? true,
        preferences: result.preferences,
      },
    }
  } catch (error) {
    console.error("Error authenticating subscriber:", error)
    return {
      success: false,
      error: "An unexpected error occurred during authentication",
    }
  }
}

interface SetPasswordParams {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

interface SetPasswordResult {
  success: boolean
  error?: string
  data?: {
    id: number
    email: string
    first_name: string
    last_name: string
  }
}

/**
 * Set or update a user's password (and optionally first/last name)
 * Password is hashed with bcrypt before being sent to the API
 */
export async function setUserPassword(params: SetPasswordParams): Promise<SetPasswordResult> {
  const { email, password, firstName, lastName } = params

  if (!email || !password) {
    return { success: false, error: "Email and password are required" }
  }

  if (password.length < 8) {
    return { success: false, error: "Password must be at least 8 characters" }
  }

  try {
    // Hash the password on the server before sending to Lambda
    const hashedPassword = await hashPassword(password)

    const payload: Record<string, string> = {
      route: "set-password",
      email,
      pwd: hashedPassword,
    }

    if (firstName) {
      payload.first_name = firstName
    }

    if (lastName) {
      payload.last_name = lastName
    }

    const response = await fetch(`${SUBSCRIBER_API_BASE}/prod/upsert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || !result.ok) {
      return {
        success: false,
        error: result.error || `Failed to set password (${response.status})`,
      }
    }

    return {
      success: true,
      data: {
        id: result.id,
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
      },
    }
  } catch (error) {
    console.error("Error setting password:", error)
    return {
      success: false,
      error: "An unexpected error occurred while setting password",
    }
  }
}

interface UpsertSubscriberParams {
  email: string
  firstName?: string
  lastName?: string
  password?: string
  tier?: string
  level?: number | null
}

interface UpsertSubscriberResult {
  success: boolean
  error?: string
  data?: {
    id: number
    email: string
    first_name: string
    last_name: string
    subscription_tier: string
    professional_level: number | null
    subscription_start_at: string
    subscription_renewal_at: string
  }
}

/**
 * Upsert a subscriber - create or update user record
 * If password is provided, it will be hashed before storing
 */
export async function upsertSubscriber(params: UpsertSubscriberParams): Promise<UpsertSubscriberResult> {
  const { email, firstName, lastName, password, tier, level } = params

  if (!email) {
    return { success: false, error: "Email is required" }
  }

  try {
    const payload: Record<string, any> = {
      route: "upsert",
      email,
    }

    if (firstName) {
      payload.first_name = firstName
    }

    if (lastName) {
      payload.last_name = lastName
    }

    if (tier) {
      payload.tier = tier
    }

    if (level !== undefined) {
      payload.level = level
    }

    // Hash password if provided
    if (password) {
      if (password.length < 8) {
        return { success: false, error: "Password must be at least 8 characters" }
      }
      payload.pwd = await hashPassword(password)
    }

    const response = await fetch(`${SUBSCRIBER_API_BASE}/prod/upsert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || !result.ok) {
      return {
        success: false,
        error: result.error || `Failed to upsert subscriber (${response.status})`,
      }
    }

    return {
      success: true,
      data: {
        id: result.id,
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        subscription_tier: result.subscription_tier,
        professional_level: result.professional_level,
        subscription_start_at: result.subscription_start_at,
        subscription_renewal_at: result.subscription_renewal_at,
      },
    }
  } catch (error) {
    console.error("Error upserting subscriber:", error)
    return {
      success: false,
      error: "An unexpected error occurred while saving subscriber",
    }
  }
}

