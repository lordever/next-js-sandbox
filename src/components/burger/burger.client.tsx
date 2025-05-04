'use client';

import React, {useCallback, useEffect, useState} from 'react';
import BurgerMenu from "@/components/burger/burger-menu/burger-menu.component";
import {useBreakpoint} from "@/hooks/useBreakpoint";
import {useDrawer} from "@/context/drawer.context";

const BurgerClient = () => {
    const breakpoint = useBreakpoint();
    const [menuOpen, setMenuOpen] = useState(false);
    const {openDrawer, closeDrawer, variant} = useDrawer();

    const toggleMenu = useCallback(() => {
        if (menuOpen) {
            setMenuOpen(false);
            closeDrawer()
        } else {
            setMenuOpen(true);
            openDrawer('navbar')
        }
    }, [menuOpen, closeDrawer, openDrawer])

    useEffect(() => {
        if (variant === null) {
            setMenuOpen(false);
        }
    }, [variant])

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