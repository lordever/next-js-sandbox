import React from 'react';
import FmTextStack from "@/components/common/text-stack/text-stack.component";
import Circle from "@/components/common/circle/circle.component";
import Image from "next/image";
import TelemetryImg from "@/assets/images/telemetry.jpg"
import NearYouImg from "@/assets/images/near-you.jpg"
import PaymentsImg from "@/assets/images/payments.jpg"

const Highlights = () => {
    return (
        <section className='flex flex-col gap-[120px] lg:gap-[160px] sm:gap-[128px]  lg:px-[165px] md:px-[97px] lg:mt-[442px] sm:mt-[684px] mt-[83px]'>
            <div className="flex gap-14 md:flex-row lg:justify-between flex-col-reverse sm:justify-center sm:items-center">
                <div className='flex justify-center items-center lg:max-w-[445px] md:max-w-[573px]'>
                    <FmTextStack
                        title={{variant: 'h2', text: 'Easy to use riding telemetry'}}
                        description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                        button={{text: 'Learn More'}}
                    />
                </div>

                <div className='flex flex-row gap-16 lg:translate-x-[500px] justify-center items-center'>
                    <Image src={TelemetryImg}
                           alt='telemetry'
                           className='rounded-full'
                           width={445}
                           height={445}/>

                    <div className='hidden lg:block'>
                        <Circle size='hg' variant='filled' color='grey'/>
                    </div>
                </div>
            </div>

            <div className="flex gap-14 md:flex-row lg:justify-between flex-col sm:justify-center sm:items-center">
                <div className='flex flex-row gap-16 lg:-translate-x-[500px] justify-center items-center'>
                    <div className='hidden lg:block'>
                        <Circle size='hg' variant='filled' color='grey'/>
                    </div>
                    <Image src={NearYouImg}
                           alt='near-you'
                           className='rounded-full'
                           width={445}
                           height={445}
                    />
                </div>

                <div className='flex justify-center items-center lg:max-w-[445px] md:max-w-[573px]'>
                    <FmTextStack
                        title={{variant: 'h2', text: 'Coming to a city near you'}}
                        description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                        button={{text: 'Learn More'}}
                    />
                </div>
            </div>

            <div className="flex gap-14 md:flex-row lg:justify-between flex-col sm:justify-center sm:items-center">
                <div className='flex justify-center items-center lg:max-w-[445px] md:max-w-[573px]'>
                    <FmTextStack
                        title={{variant: 'h2', text: 'Zero hassle payments'}}
                        description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                        button={{text: 'Learn More'}}
                    />
                </div>

                <div className='flex flex-row gap-16 lg:translate-x-[500px] justify-center items-center'>
                    <Image src={PaymentsImg}
                           alt='payments'
                           className='rounded-full'
                           width={445}
                           height={445}/>

                    <div className='hidden lg:block'>
                        <Circle size='hg' variant='filled' color='grey'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;