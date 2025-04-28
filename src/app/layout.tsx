import Navbar from '@/components/navbar/navbar.component';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import '@/assets/styles/global.css';
import {Red_Hat_Display} from 'next/font/google';
import {ReactNode} from "react";

import '../assets/styles/global.css'

const redHatDisplay = Red_Hat_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-red-hat-display',
});

export const metadata = {
    title: 'Next.js Sandbox',
    description: 'A playground project for learning and experimenting with Next.js 14 App Router',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={redHatDisplay.className}>
        <body className="bg-gray-50 text-gray-900">
            <Navbar/>
            <main className="container mx-auto p-4">{children}</main>
        </body>
        </html>
    );
}
