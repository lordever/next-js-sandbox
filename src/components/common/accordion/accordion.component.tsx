'use client';

import React, {FC, useState} from 'react';
import Image from "next/image";
import cn from "classNames";

interface FmAccordionProps {
    title: string;
    description: string;
}

const FmAccordion: FC<FmAccordionProps> = ({title, description}) => {
    const [expand, setExpand] = useState<boolean>(false);
    const btnIconClass = cn(
        'transition duration-300',
        expand ? 'rotate-180' : 'rotate-0'
    );

    const descriptionClass = cn(
        'text-body1 font-lexend text-dark-navy transition-all duration-300 ease-in-out' +
        ' overflow-hidden',
        expand ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'
    );

    return (
        <div onClick={() => setExpand((prev) => !prev)}
             className='flex flex-col bg-snow py-8 px-10 w-full md:w-[730px] cursor-pointer hover:bg-light-yellow'>
            <div className='flex justify-between'>
                <h4 className='text-h4 text-dark-navy'>
                    {title}
                </h4>

                <button>
                    <Image src='/icons/chevron.svg'
                           alt='chevron'
                           width={16}
                           height={8}
                           className={btnIconClass}/>
                </button>
            </div>

            <p className={descriptionClass}>
                {description}
            </p>
        </div>
    );
};

export default FmAccordion;