import React, {FC, memo, PropsWithChildren} from 'react';
import cn from 'classNames';

interface StackProps extends PropsWithChildren {
    direction?: 'row' | 'column';
    className?: string;
    justify?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly';
    align?: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
}

const FmStack: FC<StackProps> = ({
                                     children,
                                     direction = 'column',
                                     className,
                                     justify,
                                     align,
                                 }) => {
    const classes = cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        justify,
        align,
        className
    );

    return <div className={classes}>{children}</div>;
};

export default memo(FmStack);