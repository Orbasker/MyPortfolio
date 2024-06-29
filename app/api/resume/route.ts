import { AWS, cloudwatch } from '@/awsConfig';


const lambda = new AWS.Lambda();

export async function GET() {
    try {

        const response = await lambda.invoke({
            FunctionName: process.env.LAMBDA_RESUME as string,
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
