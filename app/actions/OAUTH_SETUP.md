# Google OAuth Setup Guide

This document explains how to set up Google OAuth authentication for the backend API.

## Overview

The backend implements a **frontend-initiated OAuth flow**:
1. Frontend redirects user to Google OAuth
2. Google redirects back to frontend with authorization code
3. Frontend exchanges code for ID token (using Google's JS library)
4. Frontend sends ID token to backend: `POST /zibly/auth/google/verify`
5. Backend verifies token, creates/updates user, returns JWT
6. Frontend uses JWT for authenticated API requests

## Backend Endpoints

### `POST /zibly/auth/google/verify`
Verifies Google ID token and returns JWT access token.

**Request:**
```json
{
  "id_token": "google_id_token_here"
}
```

**Response:**
```json
{
  "access_token": "jwt_token_here",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    ...
  }
}
```

### `GET /zibly/auth/me`
Get current authenticated user (requires Bearer token).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

### `POST /zibly/auth/refresh`
Refresh an access token (requires Bearer token).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

## Required Secrets Manager Configuration

**IMPORTANT:** All configuration must be stored in AWS Secrets Manager. The backend does not read from environment variables.

### Secret Name: `zibly-users-google-oauth`

Create a secret in AWS Secrets Manager with the exact name: **`zibly-users-google-oauth`**

### Secret Structure (JSON)

The secret must contain the following JSON structure:

```json
{
  "google_client_id": "YOUR_CLIENT_ID.apps.googleusercontent.com",
  "jwt_secret_key": "your-random-32-byte-hex-secret-key"
}
```

### Required Fields

1. **`google_client_id`** (string, required)
   - Your Google OAuth 2.0 Client ID from Google Cloud Console
   - Format: `XXXXX.apps.googleusercontent.com`

2. **`jwt_secret_key`** (string, required)
   - A strong random secret key for signing JWT tokens
   - Recommended: 32+ bytes (64 hex characters)
   - Generate with: `openssl rand -hex 32`

### Creating the Secret

**Option 1: AWS CLI (Recommended)**

```bash
# Generate a secure JWT secret
JWT_SECRET=$(openssl rand -hex 32)

# Create the secret
aws secretsmanager create-secret \
  --name "zibly-users-google-oauth" \
  --secret-string "{
    \"google_client_id\": \"YOUR_CLIENT_ID.apps.googleusercontent.com\",
    \"jwt_secret_key\": \"$JWT_SECRET\"
  }" \
  --region us-east-1 \
  --description "OAuth configuration for Google authentication and JWT signing"
```

**Option 2: AWS Console**

1. Go to [AWS Secrets Manager](https://console.aws.amazon.com/secretsmanager/) in the AWS Console
2. Click **"Store a new secret"**
3. Select **"Other type of secret"**
4. Choose **"Plaintext"** tab
5. Paste the following JSON (replace with your actual values):
   ```json
   {
     "google_client_id": "YOUR_CLIENT_ID.apps.googleusercontent.com",
     "jwt_secret_key": "generate-64-character-hex-string-here"
   }
   ```
6. Click **"Next"**
7. Secret name: **`zibly-users-google-oauth`**
8. Description: "OAuth configuration for Google authentication and JWT signing"
9. Complete the wizard

**Option 3: Update Existing Secret**

```bash
aws secretsmanager update-secret \
  --secret-id "zibly-users-google-oauth" \
  --secret-string "{
    \"google_client_id\": \"YOUR_CLIENT_ID.apps.googleusercontent.com\",
    \"jwt_secret_key\": \"$(openssl rand -hex 32)\"
  }" \
  --region us-east-1
```

### IAM Permissions Required

Ensure your Lambda execution role (`zibly-core-role`) has permission to read the secret:

```json
{
  "Effect": "Allow",
  "Action": [
    "secretsmanager:GetSecretValue",
    "secretsmanager:DescribeSecret"
  ],
  "Resource": "arn:aws:secretsmanager:us-east-1:ACCOUNT_ID:secret:zibly-users-google-oauth-*"
}
```

### Verification

After creating the secret, verify it exists:

```bash
aws secretsmanager describe-secret --secret-id zibly-users-google-oauth --region us-east-1
```

**Note:** The backend will fail to start if the `zibly-users-google-oauth` secret is missing or doesn't contain the required fields.

## Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API** (or **Google Identity API**)
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen:
   - User Type: External (or Internal if using Google Workspace)
   - Scopes: `email`, `profile`, `openid`
6. Create OAuth 2.0 Client ID:
   - Application type: **Web application**
   - Authorized JavaScript origins: Your frontend domain(s)
     - `http://localhost:3000` (for local dev)
     - `https://yourdomain.com` (for production)
   - Authorized redirect URIs: Your frontend callback URL(s)
     - `http://localhost:3000/auth/callback` (for local dev)
     - `https://yourdomain.com/auth/callback` (for production)
7. Copy the **Client ID** and add it to the `zibly-users-google-oauth` secret in AWS Secrets Manager (see above)

## Frontend Integration - Step by Step Guide

### Prerequisites

1. **Google Client ID**: `35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com`
2. **Backend API URL**: Your deployed backend URL (e.g., `https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com`)
3. **Authorized domains**: Already configured in Google Console (`http://localhost:3000` and `https://www.zibly.ai`)

### Step 1: Install Google OAuth Library

**For React/Next.js:**
```bash
npm install @react-oauth/google
# or
yarn add @react-oauth/google
```

**For Vanilla JavaScript:**
No installation needed - use Google Identity Services script (see Step 2b)

### Step 2: Implement Google Sign-In

#### Option A: React/Next.js with Google Identity Services (Recommended)

**Best approach**: Use Google Identity Services directly to get ID token, then send to backend.

```jsx
// components/GoogleSignIn.jsx
import { useEffect } from 'react';

const GOOGLE_CLIENT_ID = '35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com';
const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com'; // Replace with your API URL

declare global {
  interface Window {
    google: any;
  }
}

export function GoogleSignInButton() {
  useEffect(() => {
    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          width: 250,
        }
      );
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = async (response: any) => {
    try {
      // response.credential is the Google ID token
      const idToken = response.credential;

      // Send ID token to backend
      const backendResponse = await fetch(`${BACKEND_API_URL}/zibly/auth/google/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      if (!backendResponse.ok) {
        const error = await backendResponse.json();
        throw new Error(error.detail || 'Authentication failed');
      }

      const data = await backendResponse.json();

      // Store JWT token and user data
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect or update UI
      window.location.href = '/dashboard'; // or your success route
    } catch (error: any) {
      console.error('Login error:', error);
      alert(`Failed to sign in: ${error.message}`);
    }
  };

  return <div id="google-signin-button"></div>;
}
```

#### Option A2: React with @react-oauth/google (Alternative)

If you prefer using the React library, you'll need to exchange the code for an ID token:

```jsx
// components/GoogleSignIn.jsx
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = '35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com';
const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com';

function GoogleSignInButton() {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        // Exchange authorization code for ID token
        // Note: This requires a backend endpoint to exchange code for ID token
        // OR use Google Identity Services (Option A) which gives ID token directly
        
        // For now, recommend using Option A (Google Identity Services)
        alert('Please use Google Identity Services (Option A) for direct ID token');
      } catch (error) {
        console.error('Login error:', error);
        alert('Failed to sign in. Please try again.');
      }
    },
    flow: 'auth-code',
  });

  return (
    <button onClick={login} className="google-sign-in-button">
      Sign in with Google
    </button>
  );
}
```

#### Option B: Vanilla JavaScript / HTML Implementation

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</head>
<body>
  <div id="buttonDiv"></div>

  <script>
    const GOOGLE_CLIENT_ID = '35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com';
    const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com'; // Replace with your API URL

    function handleCredentialResponse(response) {
      // response.credential is the Google ID token
      fetch(`${BACKEND_API_URL}/zibly/auth/google/verify`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: response.credential }),
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Authentication failed');
        }
        return res.json();
      })
      .then(data => {
        // Store JWT token and user data
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect or update UI
        window.location.href = '/dashboard'; // or your success route
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Failed to sign in. Please try again.');
      });
    }

    window.onload = function () {
      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { 
          theme: 'outline', 
          size: 'large',
          text: 'signin_with',
          width: 250
        }
      );
    };
  </script>
</body>
</html>
```

### Step 3: Create Authentication Hook/Utility

**For React:**
```jsx
// hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      // Optionally verify token is still valid by calling /me
      verifyToken(storedToken);
    }
    setLoading(false);
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch(`${BACKEND_API_URL}/zibly/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // Token invalid, clear storage
        logout();
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return { user, token, loading, logout };
}
```

### Step 4: Use JWT Token for Authenticated Requests

```javascript
// utils/api.js
const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com';

export async function authenticatedFetch(endpoint, options = {}) {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    // Token expired or invalid
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    window.location.href = '/login';
    throw new Error('Authentication required');
  }

  return response;
}

// Usage example:
async function getUserProfile() {
  const response = await authenticatedFetch('/zibly/auth/me');
  const user = await response.json();
  return user;
}
```

### Step 5: Implement Token Refresh

```javascript
// utils/auth.js
const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com';

export async function refreshToken() {
  const currentToken = localStorage.getItem('access_token');
  
  if (!currentToken) {
    throw new Error('No token to refresh');
  }

  try {
    const response = await fetch(`${BACKEND_API_URL}/zibly/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${currentToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    return data.access_token;
  } catch (error) {
    // Refresh failed, user needs to log in again
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    throw error;
  }
}

// Auto-refresh token before it expires (optional)
export function setupTokenRefresh() {
  // Refresh token every 6 days (tokens expire in 7 days)
  setInterval(async () => {
    try {
      await refreshToken();
      console.log('Token refreshed successfully');
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  }, 6 * 24 * 60 * 60 * 1000); // 6 days in milliseconds
}
```

### Step 6: Protected Route Example

**For React Router:**
```jsx
// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage:
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

### Step 7: Complete Login Flow Example

```jsx
// pages/Login.jsx
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    google: any;
  }
}

const GOOGLE_CLIENT_ID = '35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com';
const BACKEND_API_URL = 'https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com';

function LoginPage() {
  const navigate = useNavigate();

  const handleCredentialResponse = useCallback(async (response: any) => {
    try {
      // response.credential is the Google ID token
      const idToken = response.credential;
      
      // Send to backend
      const backendResponse = await fetch(`${BACKEND_API_URL}/zibly/auth/google/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken }),
      });

      if (!backendResponse.ok) {
        const error = await backendResponse.json();
        throw new Error(error.detail || 'Authentication failed');
      }

      const { access_token, user } = await backendResponse.json();
      
      // Store tokens
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      alert(`Login failed: ${error.message}`);
    }
  }, [navigate]);

  useEffect(() => {
    // Load Google Identity Services
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large', text: 'signin_with' }
      );
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [handleCredentialResponse]);

  return (
    <div className="login-page">
      <h1>Welcome to Zibly</h1>
      <div id="google-signin-button"></div>
    </div>
  );
}

export default LoginPage;
```

## Important Notes for Frontend Implementation

1. **Replace API URL**: Update `BACKEND_API_URL` with your actual deployed backend URL
2. **Token Storage**: Consider using httpOnly cookies for better security (requires backend changes)
3. **Error Handling**: Always handle authentication errors gracefully
4. **Token Expiration**: Tokens expire in 7 days - implement refresh logic
5. **CORS**: Backend already configured to allow all origins (`*`) - adjust for production if needed
6. **Google Client ID**: Use the exact Client ID: `35052775836-1i8tiiui0vb11vvbu4gj964apst130v1.apps.googleusercontent.com`

## Security Notes

1. **Never expose Client Secret** in frontend code
2. **Use HTTPS** in production
3. **Validate ID tokens** on backend (already implemented)
4. **Store JWT securely** (consider httpOnly cookies for better security)
5. **Set appropriate token expiration** (default: 7 days)
6. **Use strong JWT secret** (at least 32 random bytes)

## Testing Locally

**Note:** For local testing, you still need to create the `zibly-users-google-oauth` secret in Secrets Manager. The backend does not read from environment variables.

1. Ensure AWS credentials are configured for local development:
   ```bash
   aws configure
   ```

2. Create the secret in Secrets Manager (see above) or ensure it exists

3. Run backend:
   ```bash
   poetry run uvicorn handler:app --reload
   ```

4. Test endpoint:
   ```bash
   curl -X POST http://localhost:8000/zibly/auth/google/verify \
     -H "Content-Type: application/json" \
     -d '{"id_token": "test_token"}'
   ```

## Troubleshooting

- **"Failed to load Google Client ID from Secrets Manager"**: 
  - Ensure the `zibly-users-google-oauth` secret exists in Secrets Manager
  - Verify the secret contains `google_client_id` field
  - Check IAM permissions for Secrets Manager access
  
- **"Failed to load JWT secret from Secrets Manager"**:
  - Ensure the `zibly-users-google-oauth` secret exists in Secrets Manager
  - Verify the secret contains `jwt_secret_key` field
  - Check IAM permissions for Secrets Manager access
- **"Invalid Google token"**: Check that Client ID matches between Google Console and backend config
- **"Invalid token"**: JWT token expired or invalid - use refresh endpoint or re-authenticate
- **CORS errors**: Ensure backend CORS middleware allows your frontend origin

