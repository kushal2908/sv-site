import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
    return (
        <header className="w-full shadow-md bg-[#401444] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    <Image src={'/logo.png'} alt="logo" width={200} height={60} className="w-[80px] object-contain" />
                </Link>
            </div>
        </header>
    );
}
