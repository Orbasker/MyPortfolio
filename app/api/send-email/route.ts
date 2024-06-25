import AWS from 'aws-sdk';

const lambda = new AWS.Lambda({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const lambdaUrl = process.env.LAMBDA_EMAIL || '';

export async function POST(req: Request, res: Response) {
    try {
        const { email, subject, message } = await req.json();

        // Construct the payload
        const payload = {
            email,
            subject,
            message,
        };
        console.log('payload', payload);
        // Invoke the Lambda function
        const response = await lambda.invoke({
            FunctionName: 'send_email',
            Payload: JSON.stringify(payload),
        }).promise();

        // Parse the Lambda function response
        const data = JSON.parse(response.Payload as string);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });


    } catch (err) {
        console.error('Error processing request:', err);
        return new Response(JSON.stringify({ error: 'Error processing request' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
