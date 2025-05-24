import React, {FC, PropsWithChildren} from 'react';
import Image from "next/image";
import FmTextStack from "@/components/common/text-stack/text-stack.component";
import {getFeatures} from "@/utils/feature.util";

const HomeFeatureContent: FC<PropsWithChildren> = ({children}) => (
    <div className='flex flex-col gap-8 justify-center items-center'>
        {children}
    </div>
);

const HomeFeaturesMobile = async () => {
    const features = await getFeatures();

    return (
        <section className='pt-[120px] px-8'>
            <div className="flex flex-col gap-12 justify-center">
                {features?.map((feature) => (
                    <HomeFeatureContent key={feature._id}>
                        <Image src={feature.imagePath}
                               alt='feature'
                               className='w-14 h-14'
                               width={56}
                               height={56}/>

                        <FmTextStack
                            title={{variant: 'h4', text: `${feature.title}`}}
                            description={feature.description}
                        />
                    </HomeFeatureContent>
                ))}
            </div>
        </section>
    );
};

export default HomeFeaturesMobile;