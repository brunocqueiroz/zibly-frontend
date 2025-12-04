import { NextRequest, NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'https://1ce20ayeb1.execute-api.us-east-1.amazonaws.com/zibly';

/**
 * GET /api/referral?email=user@example.com
 * Get or generate a referral code for a user
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter required' },
        { status: 400 }
      );
    }

    // Call backend API to get/generate referral code
    const response = await fetch(
      `${BACKEND_API_URL}/subscription/referral-code/${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.detail || 'Failed to get referral code' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Referral API error:', error);
    return NextResponse.json(
      { error: 'Failed to get referral code' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/referral
 * Apply a referral code for a new user
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { newUserEmail, referralCode } = body;

    if (!newUserEmail || !referralCode) {
      return NextResponse.json(
        { error: 'newUserEmail and referralCode are required' },
        { status: 400 }
      );
    }

    // Call backend API to apply referral
    const response = await fetch(
      `${BACKEND_API_URL}/subscription/referral`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.BACKEND_API_KEY || '',
        },
        body: JSON.stringify({ newUserEmail, referralCode }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.detail || 'Failed to apply referral' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Referral apply error:', error);
    return NextResponse.json(
      { error: 'Failed to apply referral' },
      { status: 500 }
    );
  }
}

/**
 * Validate a referral code without applying it
 */
export async function HEAD(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return new NextResponse(null, { status: 400 });
    }

    // Call backend to validate the code exists
    const response = await fetch(
      `${BACKEND_API_URL}/subscription/referral-code/${encodeURIComponent(code)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return new NextResponse(null, { status: response.ok ? 200 : 404 });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}
