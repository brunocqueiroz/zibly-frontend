import { S3Client } from '@aws-sdk/client-s3'
import { fromIni } from '@aws-sdk/credential-providers'
import { loadSharedConfigFiles } from '@aws-sdk/shared-ini-file-loader'

interface AWSConfig {
  region: string
  bucketName: string
  s3Client: S3Client
}

let awsConfig: AWSConfig | null = null

export async function getAWSConfig(): Promise<AWSConfig> {
  if (awsConfig) {
    return awsConfig
  }

  try {
    // Load AWS configuration from ~/.aws/config and ~/.aws/credentials
    const sharedConfig = await loadSharedConfigFiles()
    
    // Get the default profile or specified profile
    const profile = process.env.AWS_PROFILE || 'default'
    
    // Get region from config file or fall back to us-east-1
    const region = sharedConfig.configFile?.[profile]?.region || 
                   sharedConfig.credentialsFile?.[profile]?.region || 
                   'us-east-1'

    // Get bucket name from config or use default
    const bucketName = sharedConfig.configFile?.[profile]?.s3_bucket || 
                       process.env.AWS_S3_BUCKET_NAME ||
                       'zibly-uploads'

    // Create S3 client with credentials from AWS CLI
    const s3Client = new S3Client({
      region,
      credentials: fromIni({ profile })
    })

    awsConfig = {
      region,
      bucketName,
      s3Client
    }

    console.log(`AWS configured with profile: ${profile}, region: ${region}, bucket: ${bucketName}`)
    
    return awsConfig
  } catch (error) {
    console.error('Failed to load AWS configuration:', error)
    throw new Error(`AWS configuration failed. Please run 'aws configure' to set up your credentials. ${error}`)
  }
}

export async function getS3Client(): Promise<S3Client> {
  const config = await getAWSConfig()
  return config.s3Client
}

export async function getBucketName(): Promise<string> {
  const config = await getAWSConfig()
  return config.bucketName
}

export async function getRegion(): Promise<string> {
  const config = await getAWSConfig()
  return config.region
}

// Test AWS configuration
export async function testAWSConnection(): Promise<boolean> {
  try {
    const s3Client = await getS3Client()
    const bucketName = await getBucketName()
    
    // Try to list objects in the bucket (this will fail if bucket doesn't exist or no permissions)
    const { ListObjectsV2Command } = await import('@aws-sdk/client-s3')
    await s3Client.send(new ListObjectsV2Command({
      Bucket: bucketName,
      MaxKeys: 1
    }))
    
    console.log('AWS S3 connection successful')
    return true
  } catch (error) {
    console.warn('AWS S3 connection test failed:', error)
    return false
  }
}

// Setup function to verify AWS configuration on app startup
export async function initializeAWS(): Promise<void> {
  try {
    await getAWSConfig()
    const isConnected = await testAWSConnection()
    
    if (!isConnected) {
      console.warn('AWS S3 connection test failed. File uploads may not work properly.')
    }
  } catch (error) {
    console.error('AWS initialization failed:', error)
    console.log('To fix this, run: aws configure')
  }
} 