import { ListObjectsV2Command, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { getS3Client, getBucketName, getRegion } from '@/lib/aws-config';

// GET - List files
export async function GET() {
  try {
    const s3Client = await getS3Client();
    const bucketName = await getBucketName();
    
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: 'uploads/',
    });

    const response = await s3Client.send(command);
    
    const region = await getRegion();
    const files = response.Contents?.map(obj => ({
      key: obj.Key,
      lastModified: obj.LastModified,
      size: obj.Size,
      url: `https://${bucketName}.s3.${region}.amazonaws.com/${obj.Key}`
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

    const s3Client = await getS3Client();
    const bucketName = await getBucketName();

    const command = new DeleteObjectCommand({
      Bucket: bucketName,
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