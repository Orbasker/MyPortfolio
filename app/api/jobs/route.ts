import { AWS, cloudwatch } from '@/awsConfig';

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function GET() {
    try {
        const params = {
            TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE_NAME as string,
        };
        const response = await dynamoDB.scan(params).promise();
        const jobs = response.Items || [];
        return new Response(JSON.stringify({ jobs }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error('Error fetching jobs:', err);
        return new Response(JSON.stringify({ error: 'Error fetching jobs' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
