import React from 'react';
import AboutHighlights from "@/components/about/highlights/about-highlights.component";
import AboutHero from "@/components/about/hero/about-hero.component";
import AboutValueItems from "@/components/about/value-items/value-items.component";

const AboutPage = () => {
    return (
        <>
            <AboutHero/>

            <AboutHighlights/>

            <AboutValueItems />
        </>
    );
};

export default AboutPage;