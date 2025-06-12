import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-east-1" });

const bucketName = "your-unique-pg-bucket-name-12345";

const run = async () => {
  try {
    const data = await client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
        CreateBucketConfiguration: { LocationConstraint: "us-east-2" },
      })
    );
    console.log("Bucket created:", data.Location);
  } catch (err) {
    console.error("Error creating bucket:", err);
  }
};

run();