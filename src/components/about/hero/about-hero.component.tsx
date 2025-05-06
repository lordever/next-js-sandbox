import React from 'react';
import HeroDesktopImg from "@/assets/images/about-hero-desktop.jpg";
import HeroTabletImg from "@/assets/images/about-hero-tablet.jpg";
import HeroMobileImg from "@/assets/images/about-hero-mobile.jpg";
import HeroImage from "@/components/hero-image/hero-image.component";
import HeroCircles from "@/components/hero-circles/hero-circles.component";

const AboutHero = () => {
    return (
        <div className='relative overflow-x-hidden'>
            <HeroImage
                desktopImg={HeroDesktopImg}
                tabletImg={HeroTabletImg}
                mobileImg={HeroMobileImg}
            />

            <div className="flex items-center justify-center md:justify-between absolute inset-0 px-[165px] py-[72px]">
                <h1 className='text-h1 text-white'>About</h1>

                <div className="hidden md:block absolute -right-8">
                    <HeroCircles />
                </div>
            </div>
        </div>
    );
};

export default AboutHero;