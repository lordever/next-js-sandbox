import React from 'react';
import ValueItem from "@/components/value-item/value-item.component";

const AboutValueItems = () => {
    return (
        <div className='flex flex-col items-center gap-24 justify-center mt-[120px] px-[165px]'>
            <h2 className='text-h2 text-dark-navy text-center'>
                Our values
            </h2>


            <div className='flex flex-col lg:flex-row gap-[30px]'>
                <ValueItem
                    image='/images/our-tech.jpg'
                    imageAlt='our-tech'
                    title='Our tech'
                    description='We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!'
                    number={1}
                />
                <ValueItem
                    image='/images/our-integrity.jpg'
                    imageAlt='our-integrity'
                    title='Our integrity'
                    description='We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.'
                    number={2}
                />
                <ValueItem
                    image='/images/our-community.jpg'
                    imageAlt='our-community'
                    title='Our community'
                    description='We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.'
                    number={3}
                />
            </div>
        </div>
    );
};

export default AboutValueItems;