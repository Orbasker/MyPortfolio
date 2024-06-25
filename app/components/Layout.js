import React from 'react';
import Navbar from '@/app/components/Navbar'; // Adjust the path as necessary
import Footer from '@/app/components/Footer'; // Adjust the path as necessary

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
