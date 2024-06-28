import Head from 'next/head';
import JobHistory from '@/app/components/JobHistory';
import Typography from '@mui/material/Typography';

export default function Jobs() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>My Job History</title>
            </Head>
            <header className="text-center mb-8">
                <Typography variant="h2" className="mb-4">My Job History</Typography>

            </header>
            <main className="container mx-auto">
                <JobHistory />
            </main>
        </div>
    );
}
