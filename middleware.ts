import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // For FastAPI backend, we use localStorage instead of cookies
  // Since middleware runs server-side, we can't access localStorage
  // So we'll skip auth checks for dashboard routes when using FastAPI
  // Note: config is currently hardcoded to useMockData: false
  const useMockData = false // Matching lib/config.ts
  
  if (!useMockData) {
    // Let the client-side auth provider handle authentication
    return NextResponse.next()
  }

  const sessionCookie = request.cookies.get("zibly-session")
  const isAuthenticated = !!sessionCookie

  // Protect dashboard routes (only for mock data mode)
  if (request.nextUrl.pathname.startsWith("/dashboard") && !isAuthenticated) {
    const url = new URL("/login", request.url)
    url.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth pages (only for mock data mode)
  if (
    (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup")) &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
}