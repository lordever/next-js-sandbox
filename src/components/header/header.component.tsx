import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import NavbarClient from "@/components/navbar/navbar.client";
import FmStack from "@/components/common/stack/stack.component";
import Link from 'next/link';

const Header = () => {
    return (
        <header className='w-full h-[96px] bg-white py-[22px] md:px-[165px] px-[39px] '>
            <FmStack direction='row' align='items-center' className='gap-[58px]'>
                <Link href='/'>
                    <Image src={logo} alt="logo" width={107} height={28} priority/>
                </Link>

                <NavbarClient/>
            </FmStack>
        </header>
    );
};

export default Header;