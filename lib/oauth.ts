/**
 * Google OAuth Configuration and Utilities
 */

export const GOOGLE_CLIENT_ID = '35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com'

export const JWT_TOKEN_KEY = 'zibly_access_token'
export const USER_DATA_KEY = 'zibly_user'

/**
 * Get stored JWT token from localStorage
 */
export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(JWT_TOKEN_KEY)
}

/**
 * Store JWT token in localStorage
 */
export function storeToken(token: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(JWT_TOKEN_KEY, token)
}

/**
 * Remove JWT token from localStorage
 */
export function removeToken(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(JWT_TOKEN_KEY)
}

/**
 * Get stored user data from localStorage
 */
export function getStoredUser(): any | null {
  if (typeof window === 'undefined') return null
  const userData = localStorage.getItem(USER_DATA_KEY)
  return userData ? JSON.parse(userData) : null
}

/**
 * Store user data in localStorage
 */
export function storeUser(user: any): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
}

/**
 * Remove user data from localStorage
 */
export function removeUser(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(USER_DATA_KEY)
}

/**
 * Clear all OAuth-related data
 */
export function clearOAuthData(): void {
  removeToken()
  removeUser()
}

