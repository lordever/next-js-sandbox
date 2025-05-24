import React from 'react';
import SmallHero from "@/components/small-hero/small-hero.component";
import CareersHighlights from "@/components/careers/highlights/careers-highlights.component";
import CareersJoinUs from "@/components/careers/join-us/join-us.component";
import CareersContacts from "@/components/careers/contacts/contacts.component";

const CareersPage = () => {
    return (
        <>
            <SmallHero title="Careers"/>
            <div className='flex flex-col gap-[72px] sm:gap-[140px] lg:gap-[120px] md:px-[97px] lg:px-[165px]'>
                <CareersHighlights/>

                <CareersJoinUs/>

                <CareersContacts/>
            </div>
        </>
    );
};

export default CareersPage;