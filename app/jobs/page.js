import Head from 'next/head';
import JobHistory from '@/app/components/JobHistory';

export default function Jobs() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>My Job History</title>
            </Head>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Job History</h1>
            </header>
            <main className="container mx-auto">
                <JobHistory />
            </main>
        </div>
    );
}
