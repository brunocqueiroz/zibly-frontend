import { NextResponse } from "next/server";

/**
 * Minimal status endpoint to verify AWS credential env vars are present.
 * Does not return any secret material.
 */
export async function GET() {
  const status = {
    awsVercelAccessKey: Boolean(process.env.AWS_VERCEL_ACCESS_KEY),
    awsVercelSecretKey: Boolean(process.env.AWS_VERCEL_SECRET_KEY),
    awsAccessKeyId: Boolean(process.env.AWS_ACCESS_KEY_ID),
    awsSecretAccessKey: Boolean(process.env.AWS_SECRET_ACCESS_KEY),
    awsRegion: process.env.AWS_REGION || null,
  };

  return NextResponse.json(status);
}
