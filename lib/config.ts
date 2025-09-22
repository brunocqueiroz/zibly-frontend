/**
 * Application Configuration
 * Centralized config for API endpoints and feature flags
 */

export const config = {
  // FastAPI Backend Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/zibly',
    key: process.env.NEXT_PUBLIC_API_KEY || 'zibly-dev-key-2024',
    adminKey: process.env.NEXT_PUBLIC_ADMIN_API_KEY || 'zibly-admin-key-2024',
  },
  
  // Feature Flags
  features: {
    // Temporarily force FastAPI backend for debugging
    useMockData: false, // process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false' && process.env.NODE_ENV === 'development',
    enableFileUploads: process.env.NEXT_PUBLIC_ENABLE_FILE_UPLOADS === 'true',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  
  // App Settings
  app: {
    name: 'Zibly',
    version: '1.0.0',
    supportEmail: 'work@zibly.ai',
  },
} as const

export default config
