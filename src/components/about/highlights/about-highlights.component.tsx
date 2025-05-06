import React from 'react';
import HighlightItem from "@/components/highlight-item/highlight-item.component";
import DigitalEraImg from "@/assets/images/digital-era.jpg";
import BetterLivingImg from "@/assets/images/better-living.jpg";

const AboutHighlights = () => {
    return (
        <section className="flex flex-col gap-[120px] sm:gap-[128px] lg:gap-[160px] md:px-[97px]
                            lg:px-[165px] mt-[72px] sm:mt-[140px] lg:mt-[120px]">
            <HighlightItem
                title="Mobility for the digital era"
                description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
                image={DigitalEraImg}
                imageAlt="digital-era"
            />
            <HighlightItem
                title="Better urban living"
                description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
                image={BetterLivingImg}
                imageAlt="better-living"
                reverse
            />
        </section>
    );
};

export default AboutHighlights;