import { S3Client, ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// GET - List files
export async function GET() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.S3_BUCKET_NAME || 'zibly-frontend-prod',
      Prefix: 'uploads/',
    });

    const response = await s3Client.send(command);
    
    const files = response.Contents?.map(obj => ({
      key: obj.Key,
      lastModified: obj.LastModified,
      size: obj.Size,
      url: `https://${process.env.S3_BUCKET_NAME || 'zibly-frontend-prod'}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${obj.Key}`
    })) || [];

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error listing files:', error);
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a file
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (!key) {
      return NextResponse.json(
        { error: 'File key is required' },
        { status: 400 }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME || 'zibly-frontend-prod',
      Key: key,
    });

    await s3Client.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
} 