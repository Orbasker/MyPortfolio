import validator from 'validator';
import { AWS, cloudwatch } from '@/awsConfig';

const lambda = new AWS.Lambda();


export async function POST(req: Request) {
    try {
        const { email, subject, message } = await req.json();

        if (!validator.isEmail(email)) {
            throw new Error('Invalid email address');
        }
        const sanitizedEmail = validator.normalizeEmail(email);
        const sanitizedSubject = validator.escape(subject);
        const sanitizedMessage = validator.escape(message);
        const payload = {
            email: sanitizedEmail,
            subject: sanitizedSubject,
            message: sanitizedMessage,
        };
        console.log('payload', payload);

        const response = await lambda.invoke({
            FunctionName: 'send_email',
            Payload: JSON.stringify(payload),
        }).promise();

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
