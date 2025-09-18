import React from 'react';
import Footer from './footer';
import NavBar from './nav-bar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    );
}
