import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

// Cache for secrets to avoid repeated API calls
const secretsCache: Map<string, { value: string; expiry: number }> = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Initialize Secrets Manager client
const client = new SecretsManagerClient({
  region: process.env.AWS_REGION || "us-east-1",
  // Credentials are automatically loaded from:
  // - Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
  // - IAM role (if running on AWS Lambda/ECS)
  // - AWS credentials file
});

/**
 * Get a secret value from AWS Secrets Manager
 * Server-side only - do not call from client components
 */
export async function getSecret(secretName: string): Promise<string | null> {
  // Check cache first
  const cached = secretsCache.get(secretName);
  if (cached && cached.expiry > Date.now()) {
    return cached.value;
  }

  try {
    const command = new GetSecretValueCommand({
      SecretId: secretName,
    });

    const response = await client.send(command);
    const secretValue = response.SecretString || "";

    // Cache the result
    secretsCache.set(secretName, {
      value: secretValue,
      expiry: Date.now() + CACHE_TTL_MS,
    });

    return secretValue;
  } catch (error) {
    console.error(`Failed to get secret ${secretName}:`, error);
    return null;
  }
}

/**
 * Get a JSON secret and parse it
 */
export async function getJsonSecret<T = Record<string, string>>(
  secretName: string
): Promise<T | null> {
  const secret = await getSecret(secretName);
  if (!secret) return null;

  try {
    return JSON.parse(secret) as T;
  } catch {
    console.error(`Failed to parse secret ${secretName} as JSON`);
    return null;
  }
}

// ============================================
// STRIPE SECRETS
// ============================================

// Secret name in AWS Secrets Manager
const STRIPE_SECRET_NAME = "zibly-stripe-keys";

interface StripeSecrets {
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_PRICE_STARTER_MONTHLY?: string;
  STRIPE_PRICE_PROFESSIONAL_MONTHLY?: string;
  STRIPE_PRICE_STARTER_ANNUAL?: string;
  STRIPE_PRICE_PROFESSIONAL_ANNUAL?: string;
}

let stripeSecretsPromise: Promise<StripeSecrets | null> | null = null;

/**
 * Get Stripe secrets from AWS Secrets Manager
 * Caches the result for the lifetime of the server process
 */
export async function getStripeSecrets(): Promise<StripeSecrets | null> {
  // Return cached promise if exists
  if (stripeSecretsPromise) {
    return stripeSecretsPromise;
  }

  stripeSecretsPromise = getJsonSecret<StripeSecrets>(STRIPE_SECRET_NAME);
  return stripeSecretsPromise;
}

/**
 * Get Stripe secret key (server-side only)
 */
export async function getStripeSecretKey(): Promise<string> {
  // First try environment variable (for local dev)
  if (process.env.STRIPE_SECRET_KEY) {
    return process.env.STRIPE_SECRET_KEY;
  }

  // Then try Secrets Manager
  const secrets = await getStripeSecrets();
  if (secrets?.STRIPE_SECRET_KEY) {
    return secrets.STRIPE_SECRET_KEY;
  }

  throw new Error("STRIPE_SECRET_KEY not configured");
}

/**
 * Get Stripe webhook secret (server-side only)
 */
export async function getStripeWebhookSecret(): Promise<string> {
  // First try environment variable
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    return process.env.STRIPE_WEBHOOK_SECRET;
  }

  // Then try Secrets Manager
  const secrets = await getStripeSecrets();
  if (secrets?.STRIPE_WEBHOOK_SECRET) {
    return secrets.STRIPE_WEBHOOK_SECRET;
  }

  throw new Error("STRIPE_WEBHOOK_SECRET not configured");
}

/**
 * Get Stripe publishable key
 * This key is designed to be public, but we can still load it from secrets manager
 */
export async function getStripePublishableKey(): Promise<string> {
  // First try environment variable
  if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  }

  // Then try Secrets Manager
  const secrets = await getStripeSecrets();
  if (secrets?.STRIPE_PUBLISHABLE_KEY) {
    return secrets.STRIPE_PUBLISHABLE_KEY;
  }

  throw new Error("STRIPE_PUBLISHABLE_KEY not configured");
}

/**
 * Get Stripe Price ID for a plan
 */
export async function getStripePriceId(
  planId: "starter" | "professional",
  billingCycle: "monthly" | "annual"
): Promise<string | null> {
  const key = `STRIPE_PRICE_${planId.toUpperCase()}_${billingCycle.toUpperCase()}`;

  // First try environment variable
  const envKey = `NEXT_PUBLIC_${key}`;
  if (process.env[envKey]) {
    return process.env[envKey] as string;
  }

  // Then try Secrets Manager
  const secrets = await getStripeSecrets();
  if (secrets) {
    const priceId = secrets[key as keyof StripeSecrets];
    if (priceId) {
      return priceId;
    }
  }

  return null;
}
