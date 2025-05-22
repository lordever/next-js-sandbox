import React, {FC, memo, PropsWithChildren} from 'react';
import cn from "classNames";

interface ButtonProps extends PropsWithChildren {
    onClick?: () => void;
    classNames?: string;
    disabled?: boolean;
    variant?: 'filled'
}

const FmButton: FC<ButtonProps> = ({children, onClick, disabled, classNames}) => {
    const classes = cn(
        !disabled && 'hover:bg-white hover:border-yellow hover:text-yellow',
        disabled && 'cursor-not-allowed',
        'bg-yellow text-white px-[39px] py-[14px] border border-transparent ' +
        classNames
    );

    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

export default memo(FmButton);