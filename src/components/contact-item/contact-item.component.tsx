import React, {FC} from 'react';
import FmButton from "@/components/common/button/button.component";

interface ContactItemProps {
    position: string;
    location: string;
}

const ContactItem: FC<ContactItemProps> = ({location, position}) => {
    return (
        <div className='bg-snow px-10 py-8 flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-h4 text-dark-navy'>{position}</h4>
                <p className='text-body1 text-dark-navy font-lexend'>
                    {location}
                </p>
            </div>

            <FmButton classNames='flex items-center'>Apply</FmButton>
        </div>
    );
};

export default ContactItem;