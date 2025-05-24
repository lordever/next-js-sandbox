import React from 'react';
import AboutHighlights from "@/components/about/highlights/about-highlights.component";
import SmallHero from "@/components/small-hero/small-hero.component";
import AboutValueItems from "@/components/about/value-items/value-items.component";
import AboutFaq from "@/components/about/faq/faq.component";

const AboutPage = () => {
    return (
        <>
            <SmallHero title="About"/>

            <div className="flex flex-col gap-[72px] sm:gap-[140px] lg:gap-[120px] md:px-[97px] lg:px-[165px]">
                <AboutHighlights/>

                <AboutValueItems/>

                <AboutFaq/>
            </div>
        </>
    );
};

export default AboutPage;