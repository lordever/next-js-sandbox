import React, {FC} from 'react';
import Image from "next/image";

interface ValueItemProps {
    imagePath: string;
    imageAlt: string;
    number: number;
    title: string;
    description: string;
}

const ValueItem: FC<ValueItemProps> = ({imagePath, imageAlt, title, number, description}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative'>
                <div className='relative w-[311px] h-[311px]'>
                    <Image fill src={imagePath} alt={imageAlt} className='rounded-full'/>

                    <div className='flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[60%] bg-yellow w-24 h-24 rounded-full'>
                        <h4 className='text-h4 text-dark-navy'>{`0${number}`}</h4>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[27px] text-center md:max-w-[350px] mt-[89px]'>
                <h4 className='text-h4 text-dark-navy'>
                    {title}
                </h4>

                <p className='text-body1 font-lexend text-dim-grey'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ValueItem;