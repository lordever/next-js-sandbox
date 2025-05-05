import React, {FC} from 'react';
import clsx from 'classNames';

interface CircleProps {
    variant?: 'outlined' | 'filled'
}

const Circle: FC<CircleProps> = ({variant = 'outlined'}) => {
    const classes = clsx(
        'w-[62px] h-[62px] rounded-full',
        variant === 'outlined' ? 'border-[3px] border-white' : '',
        variant === 'filled' ? 'bg-white' : ''
    )

    return (
        <div className={classes}/>
    );
};

export default Circle;