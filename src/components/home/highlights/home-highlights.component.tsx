import React from 'react';
import HighlightItem from "@/components/highlight-item/highlight-item.component";
import {getHighlightsCached} from "@/utils/highlight.util";

const HomeHighlights = async () => {
    const highlights = await getHighlightsCached();

    return (
        <section className="flex flex-col gap-[120px] sm:gap-[128px] lg:gap-[160px] mt-[83px] sm:mt-[684px] md:px-[97px] lg:mt-[442px] lg:px-[165px]">
            {highlights?.home?.map((item, index) => (
                <HighlightItem
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    image={`/${item.imagePath}`}
                    imageAlt="highlight"
                    buttonText={item.buttonText}
                    reverse={index % 2 !== 0}
                />
            ))}
        </section>
    );
};

export default HomeHighlights;