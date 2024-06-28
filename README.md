### Improved README

# My Next.js Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

### Technical Document

#### Overview

I have created a serverless Next.js React web application hosted on AWS using Amplify, CloudFront, and S3. The application contains:
- My resume in QR code format
- Photos of myself
- My projects and job history
- A contact option via email

#### Architecture

The project is completely serverless:
- **Hosting**: Amplify, CloudFront, S3
- **Code Repository**: GitHub with continuous deployment via Amplify
- **Backend Services**: AWS Lambda functions, leveraging AWS IAM for secure access to resources
- **Database**: DynamoDB for storing job history and project data
- **Storage**: S3 for storing images and resume
- **Security**: AWS IAM for access control, ensuring no direct exposure of sensitive credentials or code to the end-user
- **APIs**: Utilized AWS SDK with IAM authentication to interact with AWS services securely

For every request, QR codes and signed URLs are dynamically generated to ensure secure access to resources.

#### Running the App

You can run this app locally by cloning the repository and following these steps:

1. Install dependencies:
    ```bash
    yarn install
    ```
2. Start the development server:
    ```bash
    yarn dev
    ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Alternatively, you can access the deployed version at [your deployment URL].

#### Environment Variables

Create a `.env` file in the root of your project with the following environment variables:

```bash
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=your_access_key_id
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=your_secret_access_key
NEXT_PUBLIC_AWS_REGION=your_aws_region
NEXT_PUBLIC_S3_BUCKET_NAME=your_s3_bucket_name
GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_DYNAMODB_TABLE_NAME=your_dynamodb_table_name
FACEBOOK_URL=your_facebook_url
GITHUB_URL=your_github_url
LINKEDIN_URL=your_linkedin_url
TWITTER_URL=your_twitter_url
YOUTUBE_URL=your_youtube_url
```

Ensure these variables are correctly set to allow the application to function as expected. 

---

Feel free to reach out if you have any questions or need further assistance. Enjoy exploring my portfolio!