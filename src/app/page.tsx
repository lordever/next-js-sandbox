import React from 'react';
import HomeHero from "@/components/home/hero/home-hero.component";
import HomeFeaturesSinceTablet
    from "@/components/home/features/home-features-since-tablet.component";
import HomeFeaturesMobile from "@/components/home/features/home-features-mobile.component";
import Highlights from "@/components/home/highlights/highlights.component";

export default function HomePage() {
    return (
        <>
            <HomeHero/>

            <div className='hidden sm:block'>
                <HomeFeaturesSinceTablet/>
            </div>

            <div className='block sm:hidden'>
                <HomeFeaturesMobile/>
            </div>

            <Highlights/>
        </>
    );
}
