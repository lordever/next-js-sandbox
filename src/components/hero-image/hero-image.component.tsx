import React from 'react';
import Image, {StaticImageData} from "next/image";
import {breakpoints} from "@/utils/breakpoint";

interface HeroImageProps {
    desktopImg: StaticImageData;
    tabletImg: StaticImageData;
    mobileImg: StaticImageData;
    alt?: string;
    className?: string;
}

const HeroImage = ({
                       desktopImg,
                       tabletImg,
                       mobileImg,
                       alt = 'hero',
                       className = 'w-full z-10 max-h-[650px]',
                   }: HeroImageProps) => {
    return (
        <picture>
            {/* Desktop */}
            <source media={`(min-width: ${breakpoints.lg})`} srcSet={desktopImg.src}/>

            {/* Tablet */}
            <source media={`(min-width: ${breakpoints.md})`} srcSet={tabletImg.src}/>

            {/* Mobile Fallback */}
            <Image
                src={mobileImg}
                alt={alt}
                className={className}
                priority
                fill={false}
            />
        </picture>
    );
};

export default HeroImage;