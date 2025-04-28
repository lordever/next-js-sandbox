import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import '@/assets/styles/global.css';
import {Space_Mono, Lexend_Deca} from 'next/font/google';
import {ReactNode} from "react";

import '../assets/styles/global.css'

const spaceMono = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--font-space-mono',
});

const lexendDeca = Lexend_Deca({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend-deca',
});

export const metadata = {
    title: 'Next.js Sandbox',
    description: 'A playground project for learning and experimenting with Next.js 14 App Router',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${spaceMono.variable} ${lexendDeca.variable}`}>
        <body>
            <main className="container mx-auto p-4">{children}</main>
        </body>
        </html>
    );
}
