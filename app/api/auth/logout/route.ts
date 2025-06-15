import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { deleteSession, clearSessionCookie } from "@/lib/session"

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get("zibly-session")?.value

    if (sessionId) {
      await deleteSession(sessionId)
    }

    const response = NextResponse.json({ success: true })
    clearSessionCookie(response)

    return response
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
