import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export const uploadFile = async (file: Buffer, fileName: string) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: file,
  };

  try {
    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const getSignedUrl = async (fileName: string) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Expires: 60 * 5, // URL expires in 5 minutes
  };

  try {
    return await s3.getSignedUrlPromise("getObject", params);
  } catch (error) {
    console.error("Error generating signed URL:", error);
    throw error;
  }
};
