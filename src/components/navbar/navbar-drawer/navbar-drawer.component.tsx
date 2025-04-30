'use client';

import React, {FC} from 'react';
import FmDrawer from "@/components/common/drawer/drawer.component";
import FmStack from "@/components/common/stack/stack.component";
import FmLink from "@/components/common/link/link.component";
import {usePathname} from "next/navigation";

interface NavbarDrawerProps {
    open: boolean;
    onClose?: () => void;
}

const NavbarDrawer: FC<NavbarDrawerProps> = (props) => {
    const pathname = usePathname();

    return (
        <FmDrawer {...props}>
            <FmStack className='gap-8 mt-16 ml-4'>
                <FmLink onClick={props.onClose}
                        href='/about'
                        active={pathname === '/about'}>
                    About
                </FmLink>
                <FmLink onClick={props.onClose}
                        href='/locations'
                        active={pathname === '/locations'}>
                    Location
                </FmLink>
                <FmLink onClick={props.onClose}
                        href='/careers'
                        active={pathname === '/careers'}>
                    Careers
                </FmLink>
            </FmStack>
        </FmDrawer>
    );
};

export default NavbarDrawer;