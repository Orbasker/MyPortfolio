import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export async function GET() {
    try {
        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            Key: 'Or Basker.pdf', // Path to your resume file in the bucket
            Expires: 60 * 60, // URL expiration time in seconds (1 hour)
        };
        const url = s3.getSignedUrl('getObject', params);
        return new Response(JSON.stringify({ url }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error('Error generating pre-signed URL:', err);
        return new Response(JSON.stringify({ error: 'Error generating pre-signed URL' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
