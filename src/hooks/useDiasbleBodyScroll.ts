import {useEffect} from "react";

export const useDisableBodyScroll = (enabled: boolean) => {
    useEffect(() => {
        const body = document.body;

        if (enabled) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.classList.add('overflow-hidden');
            body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            body.classList.remove('overflow-hidden');
            body.style.paddingRight = '';
        }

        return () => {
            body.classList.remove('overflow-hidden');
            body.style.paddingRight = '';
        };
    }, [enabled]);
};