'use client';

import React, {FC, memo, PropsWithChildren} from 'react';
import clsx from 'clsx';
import {useDisableBodyScroll} from "@/hooks/useDiasbleBodyScroll";

interface FmDrawerProps extends PropsWithChildren {
    open: boolean;
    onClose?: () => void;
}

const FmDrawer: FC<FmDrawerProps> = ({children, open, onClose}) => {
    useDisableBodyScroll(open);

    return (
        <>
            <div
                onClick={onClose}
                className={clsx(
                    'absolute inset-0 bg-black/50 z-30 transition-opacity duration-300',
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            />

            <div
                className={clsx(
                    'absolute top-0 left-0 z-40 h-full p-4 overflow-y-auto transition-transform duration-300 bg-white dark:bg-gray-800 w-80',
                    open ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                {children}
            </div>
        </>
    );
};

export default memo(FmDrawer);