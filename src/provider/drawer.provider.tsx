'use client'

import {useState} from 'react'
import {DrawerContext, DrawerVariant} from '@/context/drawer.context'
import NavbarDrawer from '@/components/navbar/navbar-drawer/navbar-drawer.component'

export default function DrawerProvider({children}: { children: React.ReactNode }) {
    const [variant, setVariant] = useState<DrawerVariant | null>(null)

    const openDrawer = (v: DrawerVariant) => setVariant(v)
    const closeDrawer = () => setVariant(null)

    return (
        <DrawerContext.Provider value={{variant, openDrawer, closeDrawer}}>
            <NavbarDrawer open={variant === 'navbar'} onClose={closeDrawer}/>
            {children}
        </DrawerContext.Provider>
    )
}