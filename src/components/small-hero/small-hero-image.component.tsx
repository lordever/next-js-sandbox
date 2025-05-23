import React from 'react';
import {breakpoints} from "@/utils/breakpoint.util";
import HeroDesktopImg from "@/assets/images/home-hero-desktop.jpg";
import HeroTabletImg from "@/assets/images/home-hero-tablet.jpg";
import Image from "next/image";
import HeroMobileImg from "@/assets/images/home-hero-mobile.jpg";

const smallHeroImage = () => {
    return (
        <picture>
            {/*Desktop*/}
            <source
                media={`(min-width: ${breakpoints.lg})`}
                srcSet={HeroDesktopImg.src}
            />
            {/*Tablet*/}
            <source
                media={`(min-width: ${breakpoints.md})`}
                srcSet={HeroTabletImg.src}
            />
            {/*Mobile*/}
            <Image
                src={HeroMobileImg}
                alt="hero"
                className="w-full z-10 max-h-[650px]"
                priority
                fill={false}
            />
        </picture>
    );
};

export default smallHeroImage;