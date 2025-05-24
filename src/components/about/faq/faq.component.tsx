import React from 'react';
import FmAccordion from "@/components/common/accordion/accordion.component";
import {getFaq} from "@/utils/faq.util";

const AboutFaq = async () => {

    const faqItems = await getFaq();

    return (
        <div className='flex flex-col items-center justify-center gap-16 mt-[120px] px-10'>

            <h2 className='text-h2 text-dark-navy'>FAQ</h2>

            {faqItems?.map((faq) => (
                <div key={faq._id}
                     className='flex justify-center items-center flex-col md:flex-row gap-12 '>
                    <h3 className='text-h3 text-dark-navy md:self-baseline'>
                        {faq.category}
                    </h3>

                    <div className='flex flex-col gap-4'>
                        {faq.items.map((item) => (
                            <FmAccordion
                                key={item._id}
                                title={item.title}
                                description={item.description}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutFaq;