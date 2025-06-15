import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextRequest, NextResponse } from 'next/server';
import { getS3Client, getBucketName } from '@/lib/aws-config';

export async function POST(request: NextRequest) {
  try {
    const { fileName, fileType } = await request.json();
    
    // Get AWS configuration from CLI setup
    const s3Client = await getS3Client();
    const bucketName = await getBucketName();
    
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: `uploads/${Date.now()}-${fileName}`,
      ContentType: fileType,
    });

    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    return NextResponse.json({ 
      uploadUrl: signedUrl,
      key: `uploads/${Date.now()}-${fileName}`
    });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    
    // Provide helpful error message for AWS configuration issues
    if (error instanceof Error && error.message.includes('AWS configuration failed')) {
      return NextResponse.json(
        { error: 'AWS not configured. Please run "aws configure" to set up your credentials.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    );
  }
} 