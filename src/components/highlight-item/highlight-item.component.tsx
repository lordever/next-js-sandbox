import React, {memo} from 'react';
import Image from "next/image";
import FmTextStack from "@/components/common/text-stack/text-stack.component";
import FmCircle from "@/components/common/circle/circle.component";

interface HighlightItemProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
    buttonText?: string;
}

const HighlightItem = ({ title, description, image, imageAlt, buttonText, reverse = false }: HighlightItemProps) => {
    return (
        <div
            className={`flex flex-col gap-14 sm:items-center sm:justify-center md:flex-row ${
                reverse ? 'md:flex-row-reverse' : ''
            } lg:justify-between`}
        >
            <div className="flex justify-center items-center max-w-full md:max-w-[573px] lg:max-w-[445px]">
                <FmTextStack
                    title={{ variant: 'h2', text: title }}
                    description={description}
                    button={{ text: buttonText }}
                />
            </div>

            <div
                className={`flex flex-row justify-center items-center gap-16 ${
                    reverse ? 'lg:-translate-x-[500px]' : 'lg:translate-x-[500px]'
                }`}
            >
                {reverse && (
                    <div className="hidden lg:block">
                        <FmCircle size="hg" variant="filled" color="grey" />
                    </div>
                )}

                <div className="relative w-[311px] h-[311px] lg:w-[435px] lg:h-[435px]">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="rounded-full"
                    />
                </div>


                {!reverse && (
                    <div className="hidden lg:block">
                        <FmCircle size="hg" variant="filled" color="grey" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(HighlightItem);
