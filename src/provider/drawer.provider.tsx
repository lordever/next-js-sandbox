'use client'

import {memo, useState} from 'react'
import {DrawerContext, DrawerVariant} from '@/context/drawer.context'
import NavbarDrawer from '@/components/navbar/navbar-drawer/navbar-drawer.component'

const DrawerProvider = ({children}: { children: React.ReactNode }) => {
    const [variant, setVariant] = useState<DrawerVariant | null>(null)

    const openDrawer = (v: DrawerVariant) => setVariant(v)
    const closeDrawer = () => setVariant(null)

    return (
        <DrawerContext.Provider value={{variant, openDrawer, closeDrawer}}>
            {children}
            <NavbarDrawer open={variant === 'navbar'} onClose={closeDrawer}/>
        </DrawerContext.Provider>
    )
}

export default memo(DrawerProvider);