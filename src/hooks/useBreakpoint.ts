import {useEffect, useState} from "react";

export type TailwindBreakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpointOrder: TailwindBreakpoint[] = ['base', 'sm', 'md', 'lg', 'xl', '2xl']

const breakpoints: Record<TailwindBreakpoint, number> = {
    base: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
}

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<TailwindBreakpoint>('base')

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth
            const bp = breakpointOrder
                .slice()
                .reverse()
                .find(key => width >= breakpoints[key])
            if (bp) setBreakpoint(bp)
        }

        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    const isBelow = (target: TailwindBreakpoint): boolean => {
        return (
            breakpointOrder.indexOf(breakpoint) < breakpointOrder.indexOf(target)
        )
    }

    const isAbove = (target: TailwindBreakpoint): boolean => {
        return (
            breakpointOrder.indexOf(breakpoint) >= breakpointOrder.indexOf(target)
        )
    }

    return {
        breakpoint,
        isBelow,
        isAbove,
    }
}