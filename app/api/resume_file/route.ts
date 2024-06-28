// // [your_project_root]/pages/api/serve-temp-file.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import fetch from 'node-fetch';
// import fs from 'fs';
// import os from 'os';
// import path from 'path';

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         // Fetch the pre-signed URL
//         const urlResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/generate-presigned-url`);
//         const urlData = await urlResponse.json() as { url: string };
//         const fileUrl = urlData.url as string;

//         // Download the file using the pre-signed URL
//         const fileResponse = await fetch(fileUrl);
//         if (!fileResponse.ok) {
//             throw new Error('Failed to download file from S3');
//         }

//         // Create a temporary file
//         const tempDir = os.tmpdir();
//         const tempFilePath = path.join(tempDir, 'Or_Basker.pdf');
//         const fileStream = fs.createWriteStream(tempFilePath);

//         await new Promise((resolve, reject) => {
//             fileResponse.body.pipe(fileStream);
//             fileResponse.body.on('error', reject);
//             fileStream.on('finish', resolve);
//         });

//         // Serve the temporary file to the user
//         res.setHeader('Content-Type', 'application/pdf');
//         res.setHeader('Content-Disposition', 'attachment; filename="Or_Basker.pdf"');
//         fs.createReadStream(tempFilePath).pipe(res);
//     } catch (err) {
//         console.error('Error serving temporary file:', err);
//         res.status(500).json({ error: 'Error serving temporary file' });
//     }
// }
