import React from 'react';
import FmLine from "@/components/common/line/line.component";
import Image from "next/image";
import FmTextStack from "@/components/common/text-stack/text-stack.component";
import {getFeatures} from "@/utils/feature.util";

const HomeFeaturesSinceTablet = async () => {
    const features = await getFeatures();

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
                {features?.map((feature) => (
                    <Image key={feature._id}
                           src={feature.imagePath}
                           alt='feature'
                           width={96}
                           height={96}/>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px] sm:gap-[40px] absolute
                            lg:top-[198px] sm:top-[122px] lg:left-[165px] sm:left-[272px]">
                {features?.map((feature) => (
                    <div className='max-w-[398px] lg:max-w-[350px]' key={feature._id}>
                        <FmTextStack
                            title={{variant: 'h4', text: `${feature.title}`}}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeFeaturesSinceTablet;