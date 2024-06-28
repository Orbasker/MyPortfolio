import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export async function GET() {
    try {
        const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
        if (!bucketName) {
            throw new Error('Bucket name is not defined');
        }

        const params = {
            Bucket: bucketName,
            Key: 'Or Basker.pdf',
            Expires: 60,
        };
        const url = await s3.getSignedUrlPromise('getObject', params); // Changed to getSignedUrlPromise

        return new Response(JSON.stringify({ url }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (err) {
        console.error('Error generating signed URL:', err);
        return new Response(JSON.stringify({ error: 'Error generating signed URL' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
