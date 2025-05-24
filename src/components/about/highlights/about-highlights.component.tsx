import React from 'react';
import HighlightItem from "@/components/highlight-item/highlight-item.component";
import {getHighlights} from "@/utils/highlight.util";

const AboutHighlights = async () => {
    const highlights = await getHighlights();

    return (
        <section className="flex flex-col gap-[120px] sm:gap-[128px] lg:gap-[160px] md:px-[97px]
                            lg:px-[165px] mt-[72px] sm:mt-[140px] lg:mt-[120px]">
            {highlights?.about?.map((item, index) => (
                <HighlightItem
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    image={item.imagePath}
                    imageAlt={item.imageAlt}
                    reverse={index % 2 !== 0}
                />
            ))}
        </section>
    );
};

export default AboutHighlights;