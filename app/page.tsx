import Head from 'next/head';
import PicturesSection from '@/app/components/PicturesSection';
import ProjectList from '@/app/components/ProjectList';
import JobHIstory from '@/app/components/JobHistory';
import QRCodeResume from '@/app/components/QRCodeResume';
import ContactLink from '@/app/components/ContactLink';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black-200 p-4">
            <Head>
                <title>My Portfolio</title>
            </Head>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            </header>
            <main className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p>
                            I&apos;m a software engineer with experience in web development, cloud computing, and DevOps. I&apos;m passionate about learning new technologies and sharing my knowledge with others.
                        </p>
                        <QRCodeResume size={200} />
                    </div>
                    <div className="flex-1">
                        <ContactLink />
                    </div>
                 
                </div>
                <PicturesSection />
            </main>
        </div>
    );
}
