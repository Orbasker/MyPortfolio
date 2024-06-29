import { cloudwatch, AWS } from '@/awsConfig';

const s3 = new AWS.S3();




export async function GET() {
    try {
        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME as string,
            Prefix: 'images/or/',
        };
        const response = await s3.listObjectsV2(params).promise();

        const images = await Promise.all(response.Contents?.filter(item =>
            item.Key && ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].some(ext => item.Key && item.Key.endsWith(ext))
        ).map(async (item) => {
            const getObjectParams = {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME as string,
                Key: item.Key as string,
            };
            const objectData = await s3.getObject(getObjectParams).promise();
            return {
                key: item.Key,
                content: objectData?.Body?.toString('base64'), // Add null checks for objectData.Body
                contentType: objectData?.ContentType // Add null checks for objectData.ContentType
            };
        }) || []);

        return new Response(JSON.stringify({ images }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error('Error fetching images:', err);
        return new Response(JSON.stringify({ error: 'Error fetching images' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
