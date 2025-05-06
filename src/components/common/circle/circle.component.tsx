import React, {FC} from 'react';
import clsx from 'classNames';

interface CircleProps {
    variant?: 'outlined' | 'filled'
    size?: 'sm' | 'hg'
    color?: 'white' | 'grey'
}

const Circle: FC<CircleProps> = ({variant = 'outlined', size = 'sm', color = 'white'}) => {
    const classes = clsx(
        'rounded-full',
        size === 'sm' ? 'w-[62px] h-[62px]' : '',
        size === 'hg' ? 'w-[445px] h-[445px]' : '',
        variant === 'outlined' ? 'border-[3px]' : '',
        variant === 'outlined' && color === 'white'? 'border-white' : '',
        variant === 'outlined' && color === 'grey'? 'border-light-grey' : '',
        variant === 'filled' && color === 'white' ? 'bg-white' : '',
        variant === 'filled' && color === 'grey' ? 'bg-light-grey' : '',
    )

    return (
        <div className={classes}/>
    );
};

export default Circle;