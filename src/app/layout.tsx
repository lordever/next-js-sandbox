import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import '@/assets/styles/global.css';
import {Lexend_Deca, Space_Mono} from 'next/font/google';
import {ReactNode} from "react";

import '../assets/styles/global.css'
import Header from "@/components/header/header.component";
import DrawerProvider from "@/provider/drawer.provider";

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
        <body className="bg-white">
            <DrawerProvider>
                <Header/>
                <main className='overflow-x-hidden'>{children}</main>
            </DrawerProvider>
        </body>
        </html>
    );
}
