import { cookies } from "next/headers"
import type { NextResponse } from "next/server"

export interface User {
  id: string
  name: string
  email: string
  role: string
  company?: string
  subscription?: any
  notifications?: any
}

const SESSION_COOKIE_NAME = "zibly-session"

// --- START OF FIX: Resilient in-memory session store ---

// Use a global symbol to store the map, making it resilient to hot-reloads
const globalForSessions = globalThis as unknown as {
  sessions: Map<string, { user: User; expires: Date }> | undefined
}

const sessions =
  globalForSessions.sessions ??
  (() => {
    console.log("Initializing session store for the first time.")
    globalForSessions.sessions = new Map<string, { user: User; expires: Date }>()
    return globalForSessions.sessions
  })()

// --- END OF FIX ---

export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export async function createSession(user: User): Promise<string> {
  const sessionId = generateSessionId()
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

  console.log("Creating session for user:", user.email, "with ID:", sessionId)
  sessions.set(sessionId, { user, expires })
  console.log("Session created, total sessions:", sessions.size)

  return sessionId
}

export async function getSession(sessionId?: string): Promise<User | null> {
  if (!sessionId) {
    console.log("No session ID provided")
    return null
  }

  console.log("Getting session:", sessionId)
  const session = sessions.get(sessionId)
  if (!session) {
    console.log("Session not found:", sessionId, "Available sessions:", Array.from(sessions.keys()))
    return null
  }

  if (session.expires < new Date()) {
    console.log("Session expired:", sessionId)
    sessions.delete(sessionId)
    return null
  }

  console.log("Session found for user:", session.user.email)
  return session.user
}

export async function deleteSession(sessionId: string): Promise<void> {
  console.log("Deleting session:", sessionId)
  sessions.delete(sessionId)
}

export async function getSessionFromCookies(): Promise<User | null> {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value
    console.log("Session ID from cookies:", sessionId)
    return getSession(sessionId)
  } catch (error) {
    console.error("Error getting session from cookies:", error)
    return null
  }
}

export function setSessionCookie(response: NextResponse, sessionId: string): void {
  console.log("Setting session cookie:", sessionId)
  response.cookies.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  })
}

export function clearSessionCookie(response: NextResponse): void {
  console.log("Clearing session cookie")
  response.cookies.delete(SESSION_COOKIE_NAME)
}
