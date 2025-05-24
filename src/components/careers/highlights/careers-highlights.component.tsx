import React from 'react';
import {getHighlights} from "@/utils/highlight.util";
import HighlightItem from "@/components/highlight-item/highlight-item.component";

const CareersHighlights = async () => {
    const highlights = await getHighlights();

    return (
        <section className="flex flex-col gap-[120px] sm:gap-[128px] lg:gap-[160px] mt-[72px] sm:mt-[140px] lg:mt-[120px]">
            {highlights?.careers?.map((item, index) => (
                <HighlightItem
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    image={item.imagePath}
                    imageAlt={item.imageAlt}
                    buttonText={item.buttonText}
                    reverse={index % 2 !== 0}
                />
            ))}
        </section>
    );
};

export default CareersHighlights;