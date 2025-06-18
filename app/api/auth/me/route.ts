import { type NextRequest, NextResponse } from "next/server"
import { getSessionFromCookies } from "@/lib/session"

export async function GET(request: NextRequest) {
  try {
    console.log("Auth me API called")
    const user = await getSessionFromCookies()

    if (!user) {
      console.log("No user found in session")
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    console.log("User found in session:", user.email)
    return NextResponse.json({ user })
  } catch (error) {
    console.error("Auth me API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
