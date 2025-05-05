import React from 'react';
import FmTextStack from "@/components/common/text-stack/text-stack.component";

const Highlights = () => {
    return (
        <section className='flex flex-col lg:gap-[160px] lg:px-[165px] lg:mt-[442px]'>
            <div className='lg:max-w-[445px]'>
                <FmTextStack
                    title={{variant: 'h2', text: 'Easy to use riding telemetry'}}
                    description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                    button={{text: 'Learn More'}}
                />
            </div>

            <div className='lg:max-w-[445px]'>
                <FmTextStack
                    title={{variant: 'h2', text: 'Coming to a city near you'}}
                    description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                    button={{text: 'Learn More'}}
                />
            </div>

            <div className='lg:max-w-[445px]'>
                <FmTextStack
                    title={{variant: 'h2', text: 'Zero hassle payments'}}
                    description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                    button={{text: 'Learn More'}}
                />
            </div>
        </section>
    );
};

export default Highlights;