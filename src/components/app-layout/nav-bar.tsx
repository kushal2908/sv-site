'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'w-full sticky top-0 z-50 transition-colors duration-300',
                scrolled ? 'bg-[#401444]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    <Image src={'/logo.png'} alt="logo" width={200} height={60} className="w-[80px] object-contain" />
                </Link>
            </div>
        </header>
    );
}
