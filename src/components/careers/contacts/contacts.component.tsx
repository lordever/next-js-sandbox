import React from 'react';
import ContactItem from "@/components/contact-item/contact-item.component";

const CareersContacts = () => {
    return (
        <section className='mt-[120px] flex flex-col gap-8'>
            <ContactItem position='General Manager' location='Jakarta, Indonesia' />
            <ContactItem position='UI/UX Designer' location='Yokohama, Japan' />
            <ContactItem position='Blog Content Copyrighter' location='New York, United States' />
            <ContactItem position='Graphic Designer' location='New York, United States' />
            <ContactItem position='Fleet Superviser' location='Jakarta, Indonesia' />
            <ContactItem position='UX Analyst' location='London, United Kingdom' />
        </section>
    );
};

export default CareersContacts;