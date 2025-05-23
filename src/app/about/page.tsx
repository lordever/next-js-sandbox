import React from 'react';
import AboutHighlights from "@/components/about/highlights/about-highlights.component";
import SmallHero from "@/components/small-hero/small-hero.component";
import AboutValueItems from "@/components/about/value-items/value-items.component";

const AboutPage = () => {
    return (
        <>
            <SmallHero title="About"/>

            <AboutHighlights/>

            <AboutValueItems />
        </>
    );
};

export default AboutPage;