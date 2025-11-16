/**
 * FastAPI Backend Client
 * Handles all communication with the FastAPI user management backend
 */

import config from './config'
import { getStoredToken } from './oauth'

interface ApiConfig {
  baseUrl: string
  apiKey: string
  adminApiKey?: string
}

interface UserCreateData {
  email: string
  first_name: string
  last_name: string
  password: string
  company?: string
  bio?: string
  website?: string
  auth_provider?: string
  preferences?: Record<string, any>
  metadata?: Record<string, any>
}

interface UserResponse {
  id: number
  email: string
  first_name: string
  last_name: string
  bio?: string
  company?: string
  website?: string
  avatar_url?: string
  auth_provider?: string
  auth_provider_id?: string
  preferences?: Record<string, any>
  metadata?: Record<string, any>
  is_active: boolean
  created_at?: string
  updated_at?: string
  last_login_at?: string
  email_verified_at?: string
}

interface UserUsage {
  usage: any[]
  count: number
}

interface UserStats {
  stats: {
    total_users: number
    active_users: number
    inactive_users: number
    verified_users: number
    auth_providers: number
  }
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export class FastAPIClient {
  private config: ApiConfig

  constructor(config: ApiConfig) {
    this.config = config
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    useAdminKey = false,
    requireAuth = true
  ): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`
    const apiKey = useAdminKey ? this.config.adminApiKey : this.config.apiKey
    
    // Check if Authorization header is already set (for JWT tokens)
    const hasAuthHeader = options.headers && 'Authorization' in (options.headers as Record<string, string>)
    
    // Check for JWT token in localStorage (for OAuth users)
    const jwtToken = typeof window !== 'undefined' ? getStoredToken() : null
    
    if (requireAuth && !apiKey && !hasAuthHeader && !jwtToken) {
      throw new ApiError('API key not configured', 401)
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    }

    // Priority: Use JWT token if available (OAuth), then explicit Authorization header, then API key
    if (requireAuth) {
      if (jwtToken && !hasAuthHeader) {
        // Use JWT token for OAuth users
        headers['Authorization'] = `Bearer ${jwtToken}`
      } else if (hasAuthHeader) {
        // Use explicit Authorization header if provided
        // Already set in headers above
      } else if (apiKey) {
        // Fall back to API key for password-based auth
        headers['X-API-Key'] = apiKey
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        
        // Extract error message from FastAPI error format
        // FastAPI can return: {detail: "message"} or {detail: [{msg: "message"}]}
        let errorMessage = `HTTP ${response.status}`
        if (errorData.detail) {
          if (typeof errorData.detail === 'string') {
            errorMessage = errorData.detail
          } else if (Array.isArray(errorData.detail) && errorData.detail.length > 0) {
            // Handle validation errors format
            errorMessage = errorData.detail[0].msg || JSON.stringify(errorData.detail[0])
          } else if (typeof errorData.detail === 'object') {
            errorMessage = JSON.stringify(errorData.detail)
          }
        } else if (errorData.message) {
          errorMessage = errorData.message
        } else if (errorData.error) {
          errorMessage = errorData.error
        }
        
        throw new ApiError(
          errorMessage,
          response.status,
          errorData
        )
      }

      // Handle 204 No Content responses
      if (response.status === 204) {
        return {} as T
      }

      return await response.json()
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      throw new ApiError(
        `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        0
      )
    }
  }

  // Health Check & Testing
  async healthCheck(): Promise<any> {
    return this.makeRequest<any>('/health', {
      method: 'GET',
    }, false, false) // No admin key, no auth required
  }

  // User Management Endpoints
  async createUser(userData: UserCreateData): Promise<UserResponse> {
    return this.makeRequest<UserResponse>('/users/', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  async getUserById(userId: number): Promise<UserResponse> {
    return this.makeRequest<UserResponse>(`/users/${userId}`)
  }

  async getUserByEmail(email: string): Promise<UserResponse> {
    return this.makeRequest<UserResponse>(`/users/by-email/${encodeURIComponent(email)}`)
  }

  async updateUser(userId: number, updateData: Partial<UserCreateData>): Promise<UserResponse> {
    return this.makeRequest<UserResponse>(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updateData),
    })
  }

  async changeUserPassword(userId: number, currentPassword: string, newPassword: string): Promise<{success: boolean, message: string}> {
    return this.makeRequest<{success: boolean, message: string}>(`/users/${userId}/password`, {
      method: 'PUT',
      body: JSON.stringify({
        current_password: currentPassword,
        new_password: newPassword,
      }),
    })
  }

  async deactivateUser(userId: number): Promise<void> {
    return this.makeRequest<void>(`/users/${userId}`, {
      method: 'DELETE',
    }, true) // Requires admin key
  }

  async reactivateUser(userId: number): Promise<UserResponse> {
    return this.makeRequest<UserResponse>(`/users/${userId}/reactivate`, {
      method: 'PATCH',
    }, true) // Requires admin key
  }

  // Search and Listing
  async listUsers(limit = 100, offset = 0): Promise<{ users: UserResponse[], count: number, limit: number, offset: number }> {
    return this.makeRequest<{ users: UserResponse[], count: number, limit: number, offset: number }>(
      `/users/?limit=${limit}&offset=${offset}`
    )
  }

  async searchUsers(query: string): Promise<{ users: UserResponse[], search_term: string, count: number }> {
    return this.makeRequest<{ users: UserResponse[], search_term: string, count: number }>(
      `/users/search?q=${encodeURIComponent(query)}`
    )
  }

  // Statistics and Analytics
  async getUserStats(): Promise<UserStats> {
    return this.makeRequest<UserStats>('/users/stats')
  }

  async getAllUsersUsage(): Promise<{ usage: any[], count: number }> {
    return this.makeRequest<{ usage: any[], count: number }>('/users/usage')
  }

  async getAllUsersMonthlyUsage(): Promise<{ monthly_usage: any[], count: number }> {
    return this.makeRequest<{ monthly_usage: any[], count: number }>('/users/usage/monthly')
  }

  async getUserUsage(userId: number): Promise<UserUsage> {
    return this.makeRequest<UserUsage>(`/users/${userId}/usage`)
  }

  async getUserMonthlyUsage(userId: number): Promise<{ current_month_usage: any[], count: number }> {
    return this.makeRequest<{ current_month_usage: any[], count: number }>(`/users/${userId}/usage/monthly`)
  }

  // Utility methods for authentication flows
  async authenticateUser(email: string, password: string): Promise<UserResponse | null> {
    try {
      // The authenticate endpoint returns {success, user, message} format
      const response = await this.makeRequest<{success: boolean, user: UserResponse | null, message: string}>('/users/authenticate', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }, false, false) // No admin key, no auth required
      
      // Return the user from the wrapped response
      if (response.success && response.user) {
        return response.user
      }
      
      return null
    } catch (error) {
      if (error instanceof ApiError && (error.status === 401 || error.status === 404)) {
        // Invalid credentials or user not found
        return null
      }
      throw error
    }
  }

  // OAuth Authentication Methods
  async verifyGoogleToken(idToken: string): Promise<{ access_token: string; token_type: string; user: UserResponse }> {
    return this.makeRequest<{ access_token: string; token_type: string; user: UserResponse }>('/auth/google/verify', {
      method: 'POST',
      body: JSON.stringify({ id_token: idToken }),
    }, false, false) // No admin key, no auth required
  }

  async getCurrentUser(token: string): Promise<UserResponse> {
    return this.makeRequest<UserResponse>('/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }, false, false) // Use Bearer token instead of API key
  }

  async refreshToken(token: string): Promise<{ access_token: string; token_type: string }> {
    return this.makeRequest<{ access_token: string; token_type: string }>('/auth/refresh', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }, false, false) // Use Bearer token instead of API key
  }
}

// Singleton instance with environment configuration
let apiClient: FastAPIClient | null = null

export function getApiClient(): FastAPIClient {
  if (!apiClient) {
    const apiConfig: ApiConfig = {
      baseUrl: config.api.baseUrl,
      apiKey: config.api.key,
      adminApiKey: config.api.adminKey,
    }
    
    apiClient = new FastAPIClient(apiConfig)
  }
  
  return apiClient
}

export { ApiError }
export type { UserCreateData, UserResponse, UserUsage, UserStats }
