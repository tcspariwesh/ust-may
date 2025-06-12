import { S3Client, GetObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import streamToString from 'stream-to-string'; 
// Install with: npm install stream-to-string

const REGION = "us-east-1"; // Change to your region
const BUCKET = "mybucket-pg3237";
const KEY = "myfile.txt"; // Path/key of your file in S3

const s3 = new S3Client({ region: REGION });

async function readS3FileAndMetadata() {
  // Get file contents
  const getObjectParams = { Bucket: BUCKET, Key: KEY };
  const getObjectCommand = new GetObjectCommand(getObjectParams);
  const data = await s3.send(getObjectCommand);
  const fileContents = await streamToString(data.Body);

  // Get metadata
  const headObjectCommand = new HeadObjectCommand(getObjectParams);
  const metadata = await s3.send(headObjectCommand);

  console.log("File contents:", fileContents);
  console.log("Metadata:", {
    ContentLength: metadata.ContentLength,
    ContentType: metadata.ContentType,
    LastModified: metadata.LastModified,
    Metadata: metadata.Metadata, // Custom metadata
  });
}

readS3FileAndMetadata().catch(console.error);