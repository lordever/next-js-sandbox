import React, {FC, memo, useMemo} from "react";
import FmButton from "@/components/common/button/button.component";

interface FmTextStackProps {
    title: { variant: 'h2' | 'h4', text: string };
    description: string;
    gap?: 24 | 27;
    button?: { text: string, onClick?: () => void }
}

const FmTextStack: FC<FmTextStackProps> = ({title, description, button, gap = 27}) => {
    const renderTitle = useMemo(() => {
        if (title.variant === 'h4') {
            return <h4 className='text-h4 text-dark-navy'>{title.text}</h4>
        }

        return <h2 className='text-h2 text-dark-navy'>{title.text}</h2>
    }, [title]);

    return (
        <div className='flex flex-col justify-center items-center text-center md:justify-start
                        md:items-start md:text-left'
             style={{gap}}>
            {renderTitle}
            <p className='text-body1 text-dim-grey font-lexend'>{description}</p>
            {button && (
                <div>
                    <FmButton onClick={button.onClick}
                              classNames='self-baseline'>{button.text}</FmButton>
                </div>
            )}
        </div>
    );
}

export default memo(FmTextStack)