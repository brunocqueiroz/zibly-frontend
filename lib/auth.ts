// Simple hash function for demo purposes
async function simpleHash(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await simpleHash(password)
  return passwordHash === hash
}

// --- START OF FIX: Resilient in-memory store ---

// Use a global symbol to store the map, making it resilient to hot-reloads
const globalForUsers = globalThis as unknown as {
  users: Map<string, any> | undefined
}

const users =
  globalForUsers.users ??
  (() => {
    console.log("Initializing user store for the first time.")
    globalForUsers.users = new Map()
    return globalForUsers.users
  })()

let initialized = false
const initializeUsers = async () => {
  if (initialized || users.size > 0) {
    initialized = true
    return
  }
  console.log("Running user initialization...")
  const demoPassword = await simpleHash("password123")
  users.set("demo@zibly.ai", {
    id: "demo-user",
    name: "Demo User",
    email: "demo@zibly.ai",
    password: demoPassword,
    role: "user",
    company: "Demo Company",
    subscription: {
      plan: "professional",
      status: "active",
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      cancelAtPeriodEnd: false,
    },
    notifications: {
      emailNotifications: true,
      usageAlerts: true,
      marketingEmails: false,
    },
  })

  const johnPassword = await simpleHash("password123")
  users.set("john@example.com", {
    id: "john-user",
    name: "John Doe",
    email: "john@example.com",
    password: johnPassword,
    role: "user",
    company: "Acme Inc",
    subscription: {
      plan: "starter",
      status: "active",
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      cancelAtPeriodEnd: false,
    },
    notifications: {
      emailNotifications: true,
      usageAlerts: false,
      marketingEmails: true,
    },
  })
  initialized = true
  console.log("User store initialized with:", Array.from(users.keys()))
}

// --- END OF FIX ---

export async function authenticateUser(email: string, password: string) {
  await initializeUsers() // Ensure users are initialized
  console.log("Authenticating user:", email)
  console.log("Available users:", Array.from(users.keys()))

  const user = users.get(email)
  if (!user) {
    console.log("User not found:", email)
    return null
  }

  console.log("User found, verifying password")
  const isPasswordValid = await verifyPassword(password, user.password)
  console.log("Password valid:", isPasswordValid)

  if (!isPasswordValid) {
    return null
  }

  const { password: _, ...userWithoutPassword } = user
  console.log("Authentication successful for:", email)
  return userWithoutPassword
}

export async function addUser(userData: {
  id: string
  name: string
  email: string
  password: string
  role?: string
  subscription?: any
}) {
  await initializeUsers() // Ensure users are initialized
  if (users.has(userData.email)) {
    throw new Error("User already exists")
  }
  const hashedPassword = await simpleHash(userData.password)
  users.set(userData.email, {
    ...userData,
    password: hashedPassword,
  })
  console.log(`User ${userData.email} added. Total users: ${users.size}`)
}

export async function getUser(email: string) {
  await initializeUsers() // Ensure users are initialized
  const user = users.get(email)
  if (!user) return null
  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function updateUser(email: string, updates: any) {
  await initializeUsers() // Ensure users are initialized
  const user = users.get(email)
  if (user) {
    users.set(email, { ...user, ...updates })
  }
}
