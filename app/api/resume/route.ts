import AWS from 'aws-sdk';

const lambda = new AWS.Lambda({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export async function GET() {
    try {
        const response = await lambda.invoke({
            FunctionName: 'download_file',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({}),
        }).promise();

        const data = JSON.parse(response.Payload as string);
        if (data.statusCode !== 200) {
            throw new Error(data.body);
        }
        const { url } = JSON.parse(data.body);
        return new Response(JSON.stringify({ url }), {
            status: 200,
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
