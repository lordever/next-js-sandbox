'use client';

import React from 'react';
import FmStack from "@/components/common/stack/stack.component";
import FmLink from "@/components/common/link/link.component";
import {usePathname} from "next/navigation";
import FmButton from "@/components/common/button/button.component";

const NavbarClient = () => {
    const pathname = usePathname();

    return (
        <FmStack direction='row' justify='justify-between' className='w-full'>
            <FmStack direction='row' align='items-center' className='gap-8'>
                <FmLink href='/about' active={pathname === '/about'}>About</FmLink>
                <FmLink href='/locations' active={pathname === '/locations'}>Location</FmLink>
                <FmLink href='/careers' active={pathname === '/careers'}>Careers</FmLink>
            </FmStack>

            <FmButton
                onClick={() => null}>
                Get Scootin
            </FmButton>
        </FmStack>
    );
};

export default NavbarClient;