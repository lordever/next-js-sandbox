'use client';

import React, {useEffect, useState} from 'react';
import FmStack from "@/components/common/stack/stack.component";
import FmLink from "@/components/common/link/link.component";
import {usePathname} from "next/navigation";
import FmButton from "@/components/common/button/button.component";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";

const NavbarClient = () => {
    const {data: session, status} = useSession();
    const pathname = usePathname();
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        const setAuthProviders = async () => {
            const res = await getProviders();
            // @ts-ignore
            setProviders(res);
        };

        setAuthProviders();
    }, []);


    return (
        <FmStack direction='row' justify='justify-between' className='md:flex hidden w-full'>
            <FmStack direction='row' align='items-center' className='gap-8'>
                <FmLink href='/about' active={pathname === '/about'}>About</FmLink>
                <FmLink href='/locations' active={pathname === '/locations'}>Location</FmLink>
                <FmLink href='/careers' active={pathname === '/careers'}>Careers</FmLink>
            </FmStack>

            {status === 'unauthenticated'
                && providers
                && Object.values(providers).map((provider: any) => (
                    <FmButton
                        key={provider.id}
                        onClick={() => signIn(provider.id)}>
                        Sign In
                    </FmButton>
                ))
            }

            {status === 'authenticated' && (
                <FmButton
                    onClick={() => signOut()}>
                    Sign Out
                </FmButton>
            )}

        </FmStack>
    );
};

export default NavbarClient;