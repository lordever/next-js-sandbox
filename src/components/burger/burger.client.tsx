'use client';

import React, {useCallback, useState} from 'react';
import BurgerMenu from "@/components/burger/burger-menu/burger-menu.component";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import {useDrawer} from "@/context/drawer.context";

const BurgerClient = () => {
    const breakpoint = useBreakpoint();
    const [menuOpen, setMenuOpen] = useState(false);
    const {openDrawer, closeDrawer} = useDrawer();

    const toggleMenu = useCallback(() => {
        if (menuOpen) {
            setMenuOpen(false);
            closeDrawer()
        } else {
            setMenuOpen(true);
            openDrawer('navbar')
        }
    }, [menuOpen, closeDrawer, openDrawer])

    if (breakpoint.isAbove('md')) {
        return null;
    }

    return (
        <BurgerMenu
            open={menuOpen}
            onClick={toggleMenu}
        />
    );
};

export default BurgerClient;