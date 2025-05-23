import React from 'react';
import SmallHero from "@/components/small-hero/small-hero.component";
import CareersHighlights from "@/components/careers/highlights/careers-highlights.component";
import JoinUs from "@/components/careers/join-us/join-us.component";
import Faq from "@/components/careers/faq/faq.component";

const CareersPage = () => {
    return (
        <>
            <SmallHero title="Careers"/>

            <CareersHighlights/>

            <JoinUs/>

            <Faq />
        </>
    );
};

export default CareersPage;