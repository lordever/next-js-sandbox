import React from 'react';
import {getValues} from "@/utils/value.util";
import ValueItem from "@/components/value-item/value-item.component";

const JoinUs = async () => {
    const values = await getValues();

    return (
        <section className='flex flex-col items-center gap-24 justify-center mt-[120px]'>
            <h2 className='text-h2 text-dark-navy text-center'>
                Why join us?
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
        </section>
    );
};

export default JoinUs;