import React from 'react';
import FmLine from "@/components/common/line/line.component";
import FmButton from "@/components/common/button/button.component";
import ArrowLine from "@/components/arrow-line/arrow-line.component";
import HeroCircles from "@/components/hero-circles/hero-circles.component";
import Arrow from "@/components/arrow/arrow.component";
import HeroImage from "@/components/hero-image/hero-image.component";
import HeroDesktopImg from '@/assets/images/home-hero-desktop.jpg';
import HeroTabletImg from '@/assets/images/home-hero-tablet.jpg';
import HeroMobileImg from '@/assets/images/home-hero-mobile.jpg';

const HomeHero = () => {
    return (
        <section className='relative w-full overflow-hidden'>
            <HeroImage
                desktopImg={HeroDesktopImg}
                tabletImg={HeroTabletImg}
                mobileImg={HeroMobileImg}
            />

            <div className="flex flex-col gap-8 lg:block items-center absolute inset-0 top-[153px] lg:left-[165px] mx-auto md:px-[90px] z-30">
                <h1 className='text-h1 text-white z-30 max-w-[500px] text-center lg:text-left'>
                    Scooter sharing made simple
                </h1>

                <div className='hidden lg:block lg:absolute lg:top-[201px] lg:-left-[165px]'>
                    <FmLine width={203}/>
                </div>

                <p className='lg:absolute lg:top-[152px] lg:left-[95px] lg:w-[405px] lg:text-left font-lexend
                text-body1 text-white max-w-[573px] min-w-[311px] text-center'>
                    Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                    locations in each of our cities. Use our app to locate the nearest bike, unlock
                    it with a tap, and you’re away!
                </p>

                <div className='hidden lg:block absolute top-[201px] left-[540px]'>
                    <ArrowLine/>
                </div>

                <div className="hidden lg:block lg:absolute lg:top-[260px] lg:left-[1140px]">
                    <HeroCircles/>
                </div>

                <div className="flex justify-center lg:block items-center lg:absolute inset-0 z-30 lg:left-[95px] lg:top-[292px]">
                    <FmButton>
                        Get Scootin
                    </FmButton>
                </div>

                <div className='hidden md:block lg:hidden md:absolute md:top-[320px] md:left-0'>
                    <ArrowLine/>
                </div>

                <div className='hidden md:block lg:hidden md:absolute md:top-[380px] md:-right-8'>
                    <HeroCircles/>
                </div>

                <div className='md:hidden absolute top-[440px] left-0'>
                    <Arrow/>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;