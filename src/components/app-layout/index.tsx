import React from 'react';
import Footer from './footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <Footer />
        </main>
    );
}
