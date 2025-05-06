import React, {FC} from 'react';
import clsx from 'classNames';

interface CircleProps {
    variant?: 'outlined' | 'filled'
    size?: 'sm' | 'lg' | 'hg'
    color?: 'white' | 'grey' | 'grey-transparent'
}

const FmCircle: FC<CircleProps> = ({variant = 'outlined', size = 'sm', color = 'white'}) => {
    const classes = clsx(
        'rounded-full',
        size === 'sm' ? 'w-[62px] h-[62px]' : '',
        size === 'lg' ? 'w-[347px] h-[347px]' : '',
        size === 'hg' ? 'w-[445px] h-[445px]' : '',
        variant === 'outlined' && size === 'sm' ? 'border-[3px]' : '',
        variant === 'outlined' && size === 'lg' ? 'border-[15px]' : '',
        variant === 'outlined' && size === 'hg' ? 'border-[15px]' : '',
        variant === 'outlined' && color === 'white'? 'border-white' : '',
        variant === 'outlined' && color === 'grey'? 'border-light-grey' : '',
        variant === 'outlined' && color === 'grey-transparent'? 'border-light-grey-transparent' : '',
        variant === 'filled' && color === 'white' ? 'bg-white' : '',
        variant === 'filled' && color === 'grey' ? 'bg-light-grey' : '',
        variant === 'filled' && color === 'grey-transparent' ? 'bg-light-grey-transparent' : '',
    )

    return (
        <div className={classes}/>
    );
};

export default FmCircle;