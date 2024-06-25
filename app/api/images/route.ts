
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export async function GET() {
    try {
        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME as string,
            Prefix: 'images/or/',
        };
        const response = await s3.listObjectsV2(params).promise();
        const images = response.Contents?.filter(item => item.Key && ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].some(ext => item.Key && item.Key.endsWith(ext))
        ).map(item => ({
            key: item.Key,
            url: s3.getSignedUrl('getObject', {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
                Key: item.Key,
                Expires: 60,
            }),
        })) || [];
        return Response.json({ images });

    } catch (err) {
        console.error('Error fetching images:', err);
        return Response.json({ error: 'Error fetching images' }, { status: 500 });
    }
}