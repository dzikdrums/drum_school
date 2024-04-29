import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
    title: 'Maciej Dzik drum school',
    description: 'Learn drums with experienced and passionate drummer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="max-w-screen-xl mx-auto">
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
