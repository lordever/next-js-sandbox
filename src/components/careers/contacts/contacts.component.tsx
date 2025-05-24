import React from 'react';
import ContactItem from "@/components/contact-item/contact-item.component";
import {getContacts} from "@/utils/contact.util";

const CareersContacts = async () => {

    const contacts = await getContacts();

    return (
        <section className='flex flex-col gap-8'>
            {contacts?.map((contact) => (
                <ContactItem key={contact._id}
                             position={contact.position}
                             location={contact.location}/>
            ))}
        </section>
    );
};

export default CareersContacts;