import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  console.log("Middleware called for:", request.nextUrl.pathname)

  const sessionCookie = request.cookies.get("zibly-session")
  const isAuthenticated = !!sessionCookie

  console.log("Session cookie exists:", isAuthenticated)
  console.log("Session cookie value:", sessionCookie?.value)

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    console.log("Redirecting to login - no session")
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth pages
  if (
    (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup")) &&
    isAuthenticated
  ) {
    console.log("Redirecting to dashboard - already authenticated")
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  console.log("Middleware allowing request to proceed")
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
}