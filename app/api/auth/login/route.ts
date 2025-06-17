import { type NextRequest, NextResponse } from "next/server"
import { authenticateUser } from "@/lib/auth"
import { createSession, setSessionCookie } from "@/lib/session"

export async function POST(request: NextRequest) {
  try {
    console.log("Login API route called")

    const body = await request.json()
    console.log("Request body:", { email: body.email, hasPassword: !!body.password })

    const { email, password } = body

    if (!email || !password) {
      console.log("Missing email or password")
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    console.log("Attempting to authenticate user:", email)
    const user = await authenticateUser(email, password)

    if (!user) {
      console.log("Authentication failed for:", email)
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    console.log("User authenticated successfully:", user.email)

    const sessionId = await createSession(user)
    console.log("Session created:", sessionId)

    const response = NextResponse.json({ success: true, user })
    setSessionCookie(response, sessionId)

    console.log("Login successful, returning response with cookie")
    return response
  } catch (error) {
    console.error("Login API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
