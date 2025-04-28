import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-row gap-2 p-4 bg-white shadow">
            <Link href="/" className="text-gray-700 hover:text-black no-underline">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black no-underline">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black no-underline">Contact</Link>
        </div>
    );
}