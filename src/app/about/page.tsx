import React from 'react';
import AboutHighlights from "@/components/about/highlights/about-highlights.component";
import SmallHero from "@/components/small-hero/small-hero.component";
import AboutValueItems from "@/components/about/value-items/value-items.component";
import AboutFaq from "@/components/about/faq/faq.component";

const AboutPage = () => {
    return (
        <>
            <SmallHero title="About"/>

            <AboutHighlights/>

            <AboutValueItems />

            <AboutFaq />
        </>
    );
};

export default AboutPage;