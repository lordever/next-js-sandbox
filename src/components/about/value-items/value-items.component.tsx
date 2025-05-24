import React from 'react';
import ValueItem from "@/components/value-item/value-item.component";
import {getValues} from "@/utils/value.util";

const AboutValueItems = async () => {
    const values = await getValues();

    return (
        <div className='flex flex-col items-center gap-24 justify-center'>
            <h2 className='text-h2 text-dark-navy text-center'>
                Our values
            </h2>

            <div className='flex flex-col md:flex-row gap-[30px]'>
                {values?.map((value, index) => (
                    <ValueItem
                        key={value._id}
                        imagePath={value.imagePath}
                        imageAlt={value.imageAlt}
                        title={value.title}
                        description={value.description}
                        number={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutValueItems;