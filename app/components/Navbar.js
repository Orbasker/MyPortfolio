'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import QRCodeResume from './QRCodeResume'; // Make sure to import the QRCodeResume component

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Jobs', href: '/jobs' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <QRCodeResume size={50} /> {/* Pass the desired size as a prop */}
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex space-x-4">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={item.name} href={item.href}>
                                        <span
                                            className={classNames(
                                                isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
