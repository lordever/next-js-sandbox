'use client';

import React, {useState} from 'react';
import BurgerMenu from "@/components/burger/burger-menu/burger-menu.component";
import {useBreakpoint} from "@/hooks/useBreakpoint";

const BurgerClient = () => {
    const breakpoint = useBreakpoint();
    const [menuOpen, setMenuOpen] = useState(false);

    if (breakpoint.isAbove('md')) {
        return null;
    }

    return (
        <BurgerMenu
            open={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
        />
    );
};

export default BurgerClient;