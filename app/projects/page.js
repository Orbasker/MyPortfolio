import Head from 'next/head';
import ProjectList from '@/app/components/ProjectList';

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Head>
                <title>My Projects</title>
            </Head>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Projects</h1>
            </header>
            <main className="container mx-auto">
                <ProjectList />
            </main>
        </div>
    );
}
