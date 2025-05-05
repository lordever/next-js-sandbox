import React, {FC, memo, useMemo} from "react";

interface FmTextStackProps {
    title: { variant: 'h2' | 'h4', text: string };
    description: string;
    gap?: 24 | 27;
}

const FmTextStack: FC<FmTextStackProps> = ({title, description, gap = 27}) => {
    const renderTitle = useMemo(() => {
        if (title.variant === 'h4') {
            return <h4 className='text-h4 text-dark-navy'>{title.text}</h4>
        }

        return <h2 className='text-h2 text-dark-navy'>{title.text}</h2>
    }, [title]);

    return (
        <div className='flex flex-col text-center md:text-left' style={{gap}}>
            {renderTitle}
            <p className='text-body1 text-dim-grey font-lexend'>{description}</p>
        </div>
    );
}

export default memo(FmTextStack)