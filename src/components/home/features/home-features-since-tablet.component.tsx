import React from 'react';
import FmLine from "@/components/common/line/line.component";
import Image from "next/image";
import LocateIcon from '@/assets/icons/locate.svg'
import RideIcon from '@/assets/icons/ride.svg'
import ScooterIcon from '@/assets/icons/scooter.svg'
import FmTextStack from "@/components/common/text-stack/text-stack.component";

const HomeFeaturesSinceTablet = () => {
    return (
        <section className='relative lg:pt-[98px]'>
            <div className='hidden lg:block'>
                <FmLine width={974} color='lightGrey'/>
            </div>

            <div className='hidden absolute left-[145px] sm:block lg:hidden'>
                <FmLine width={513} rotate={90} color='lightGrey'/>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[284px] sm:gap-[74px] sm:absolute
                            lg:top-[58px] sm:top-[122px] lg:left-[165px] sm:left-[90px] xs:justify-center">
                <Image src={LocateIcon} alt='locate'/>
                <Image src={RideIcon} alt='ride' />
                <Image src={ScooterIcon} alt='scooter' />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px] sm:gap-[40px] absolute
                            lg:top-[198px] sm:top-[122px] lg:left-[165px] sm:left-[272px]">

                <div className='max-w-[398px] lg:max-w-[350px]'>
                    <FmTextStack
                        title={{variant: 'h4', text: 'Locate with app'}}
                        description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
                    />
                </div>

                <div className='max-w-[398px] lg:max-w-[350px]'>
                    <FmTextStack
                        title={{variant: 'h4', text: 'Pick your scooter'}}
                        description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
                    />
                </div>

                <div className='max-w-[398px] lg:max-w-[350px]'>
                    <FmTextStack
                        title={{variant: 'h4', text: 'Enjoy the ride'}}
                        description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeFeaturesSinceTablet;