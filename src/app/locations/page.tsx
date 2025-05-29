import React from 'react';
import SmallHero from "@/components/small-hero/small-hero.component";
import LocationsWorldMap from "@/components/locations/world-map/world-map.component";
import LocationsMapFooterSection from "@/components/locations/map-footer-section/map-footer-section.component";

const LocationsPage = () => {
    return (
        <>
            <SmallHero title="Locations"/>

            <div className='landing-container'>
                <LocationsWorldMap/>

                <LocationsMapFooterSection />
            </div>
        </>
    );
};

export default LocationsPage;