'use client'

import {createContext, useContext} from 'react'

export type DrawerVariant = 'navbar'

interface DrawerContextType {
    variant: DrawerVariant | null
    openDrawer: (variant: DrawerVariant) => void
    closeDrawer: () => void
}

export const DrawerContext = createContext<DrawerContextType | null>(null)

export const useDrawer = () => {
    const ctx = useContext(DrawerContext)
    if (!ctx) throw new Error('useDrawer must be used inside DrawerContext.Provider')
    return ctx
}