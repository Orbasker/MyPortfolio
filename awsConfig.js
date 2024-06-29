import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const cloudwatch = new AWS.CloudWatchLogs();
export { cloudwatch, AWS };
