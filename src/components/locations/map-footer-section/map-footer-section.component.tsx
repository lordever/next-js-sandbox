import React from 'react';
import FmButton from '@/components/common/button/button.component';

const LocationsMapFooterSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-[40px] items-center justify-center text-center md:text-left">
      <h2 className="text-h2 text-dark-navy lg:w-[351px]">
        Your City Not Listed?
      </h2>

      <p className="text-body1 font-lexend text-dim-grey lg:w-[445px]">
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </p>

      <FmButton>Message Us</FmButton>
    </section>
  );
};

export default LocationsMapFooterSection;
