import type { DefaultSession, DefaultUser } from "next-auth"
import type { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role?: string
      company?: string
    } & DefaultSession["user"]
    accessToken?: string
  }

  interface User extends DefaultUser {
    role?: string
    company?: string
    accessToken?: string
    refreshToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string
    refreshToken?: string
    role?: string
    company?: string
  }
} 