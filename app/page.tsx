import Head from 'next/head';
import PicturesSection from '@/app/components/PicturesSection';
import SocialLinks from '@/app/components/SocialLinks';
import ProjectList from '@/app/components/ProjectList';
import JobHIstory from '@/app/components/JobHistory';
import QRCodeResume from '@/app/components/QRCodeResume';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-black-200 p-4">
            <Head>
                <title>My Portfolio</title>
            </Head>
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            </header>
            <main className="container mx-auto">
                <QRCodeResume />
                {/* <JobHIstory /> */}
                {/* <ProjectList /> */}
                <PicturesSection />
                {/* <SocialLinks />  */}
                {/* {/* Add other components here */}
            </main>
        </div>
    );
}
