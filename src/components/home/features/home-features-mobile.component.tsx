import React, {FC, PropsWithChildren} from 'react';
import Image from "next/image";
import LocateIcon from "@/assets/icons/locate.svg";
import RideIcon from "@/assets/icons/ride.svg";
import ScooterIcon from "@/assets/icons/scooter.svg";
import FmTextStack from "@/components/common/text-stack/text-stack.component";

const HomeFeatureContent: FC<PropsWithChildren> = ({children}) => (
    <div className='flex flex-col gap-8 justify-center items-center'>
        {children}
    </div>
);

const HomeFeaturesMobile = () => {
    return (
        <div className='pt-[120px] px-8'>
            <div className="flex flex-col gap-12 justify-center">
                <HomeFeatureContent>
                    <Image src={LocateIcon} alt='locate' className='w-14 h-14'/>

                    <FmTextStack
                        title={{variant: 'h4', text: 'Locate with app'}}
                        description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
                    />
                </HomeFeatureContent>

                <HomeFeatureContent>
                    <Image src={RideIcon} alt='ride' className='w-14 h-14'/>

                    <FmTextStack
                        title={{variant: 'h4', text: 'Pick your scooter'}}
                        description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
                    />
                </HomeFeatureContent>

                <HomeFeatureContent>
                    <Image src={ScooterIcon} alt='scooter' className='w-14 h-14'/>

                    <FmTextStack
                        title={{variant: 'h4', text: 'Enjoy the ride'}}
                        description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
                    />
                </HomeFeatureContent>
            </div>
        </div>
    );
};

export default HomeFeaturesMobile;