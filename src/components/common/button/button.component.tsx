import React, {FC, memo, PropsWithChildren} from 'react';
import cn from "classNames";

interface ButtonProps extends PropsWithChildren {
    onClick: () => void;
    classNames?: string;
    variant?: 'filled'
}

const FmButton: FC<ButtonProps> = ({children, onClick, classNames}) => {
    const classes = cn(
        'bg-yellow text-white px-[39px] py-[14px] border border-transparent ' +
        'hover:bg-white hover:border-yellow hover:text-yellow',
        classNames
    );

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
};

export default memo(FmButton);