import React from 'react';
import FmAccordion from "@/components/common/accordion/accordion.component";

const Faq = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-16 mt-[120px] px-10'>

            <h2 className='text-h2 text-dark-navy'>FAQ</h2>

            <div className='flex justify-center items-center flex-col md:flex-row gap-12 '>
                <h3 className='text-h3 text-dark-navy md:self-baseline'>
                    How it works
                </h3>

                <div className='flex flex-col gap-4'>
                    <FmAccordion title='How do I download the app?'
                                 description='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'/>

                    <FmAccordion title='Can I find a nearby Scoots?'
                                 description='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'/>


                    <FmAccordion title='Do I need a license to ride?'
                                 description='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'/>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col md:flex-row gap-12 '>
                <h3 className='text-h3 text-dark-navy md:self-baseline'>
                    Safe driving
                </h3>

                <div className='flex flex-col gap-4'>
                    <FmAccordion title='Should I wear a helmet?'
                                 description='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'/>

                    <FmAccordion title='How about the rules & regulations?'
                                 description='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'/>

                    <FmAccordion title='What if I damage my Scoot?'
                                 description='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'/>

                </div>
            </div>
        </div>
    );
};

export default Faq;