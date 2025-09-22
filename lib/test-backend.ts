/**
 * Backend Connection Tests
 * Quick functions to test connectivity to the FastAPI backend
 */

import { getApiClient } from './api-client'
import config from './config'

export async function testBackendConnection() {
  console.log("🧪 Testing backend connection...")
  console.log("📍 Backend URL:", config.api.baseUrl)
  console.log("🔑 API Key:", config.api.key.substring(0, 8) + "...")
  
  const apiClient = getApiClient()
  
  try {
    // Test 1: Health endpoint
    console.log("\n1️⃣ Testing health endpoint...")
    try {
      const healthResponse = await apiClient.healthCheck()
      console.log("✅ Health check passed:", healthResponse)
    } catch (error) {
      console.log("❌ Health check failed:", error)
    }
    
    // Test 2: Users endpoint (with API key authentication)
    console.log("\n2️⃣ Testing users endpoint...")
    try {
      const usersResponse = await apiClient.listUsers(5, 0)
      console.log("✅ Users endpoint passed - Found", usersResponse.count, "users")
    } catch (error) {
      console.log("❌ Users endpoint failed:", error)
    }
    
    // Test 3: Authentication endpoint (test login)
    console.log("\n3️⃣ Testing authentication endpoint...")
    try {
      // This will likely fail since we don't have test credentials, but we can see if endpoint exists
      const authResponse = await apiClient.authenticateUser("test@example.com", "wrongpassword")
      if (authResponse) {
        console.log("✅ Auth endpoint works - got user:", authResponse.email)
      } else {
        console.log("✅ Auth endpoint works - credentials rejected (expected)")
      }
    } catch (error) {
      console.log("❌ Auth endpoint failed:", error)
    }
    
    console.log("\n🏁 Backend tests completed!")
    
  } catch (error) {
    console.error("💥 Unexpected error:", error)
  }
}

// Test user account creation
export async function testAccountCreation() {
  console.log("👤 Testing account creation...")
  
  const apiClient = getApiClient()
  
  // Generate unique test user data
  const timestamp = Date.now()
  const testUser = {
    email: `test-${timestamp}@example.com`,
    first_name: "Test",
    last_name: "User",
    password: "testpassword123",
    company: "Test Company",
    auth_provider: "nextauth",
    metadata: {
      registrationSource: "test",
      testAccount: true
    }
  }
  
  try {
    console.log("📝 Creating test user:", testUser.email)
    
    // Test user creation
    const createdUser = await apiClient.createUser(testUser)
    
    if (createdUser) {
      console.log("✅ Account creation successful!")
      console.log("📊 User details:", {
        id: createdUser.id,
        email: createdUser.email,
        name: `${createdUser.first_name} ${createdUser.last_name}`,
        company: createdUser.company,
        isActive: createdUser.is_active
      })
      
      // Test authentication with the new account
      console.log("\n🔐 Testing login with new account...")
      try {
        const authResult = await apiClient.authenticateUser(testUser.email, testUser.password)
        
        if (authResult) {
          console.log("✅ Authentication successful! Full signup+login flow works!")
          console.log("👤 Authenticated user:", authResult.email)
        } else {
          console.log("❌ Authentication failed - credentials not accepted")
        }
      } catch (authError) {
        console.log("❌ Authentication test failed:", authError)
      }
      
    } else {
      console.log("❌ Account creation failed - no user returned")
    }
    
  } catch (error) {
    console.log("❌ Account creation failed:", error)
    
    if (error instanceof Error) {
      if (error.message.includes('409')) {
        console.log("💡 User already exists (this is normal if test was run before)")
      } else if (error.message.includes('401')) {
        console.log("💡 API key authentication failed - check your API key")
      } else if (error.message.includes('422')) {
        console.log("💡 Validation error - check required fields")
      }
    }
  }
  
  console.log("\n🏁 Account creation test completed!")
}

// Test just the basic connectivity without API key requirements
export async function testBasicConnectivity() {
  const baseUrl = config.api.baseUrl
  console.log("🌐 Testing basic connectivity to:", baseUrl)
  
  try {
    // Try the users stats endpoint (this definitely exists)
    const testUrl = `${baseUrl}/users/stats`
    console.log("🎯 Testing users/stats URL:", testUrl)
    
    const response = await fetch(testUrl, { 
      method: 'GET',
      mode: 'cors'  // Test CORS
    })
    
    console.log("📡 Status:", response.status)
    
    if (response.ok) {
      const data = await response.json()
      console.log("✅ Connectivity success:", data)
    } else {
      console.log("⚠️ Response not OK")
    }
    
  } catch (error) {
    console.log("❌ Connection failed:", error)
    
    if (error instanceof Error) {
      if (error.message.includes('CORS')) {
        console.log("💡 Check FastAPI CORS configuration")
      } else if (error.message.includes('refused')) {
        console.log("💡 Is your backend running?")
      }
    }
  }
}

// Make test functions available globally in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).testBackend = testBackendConnection;
  (window as any).testBasicConnectivity = testBasicConnectivity;
  (window as any).testAccountCreation = testAccountCreation;
}
