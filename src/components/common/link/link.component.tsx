import React, {FC, PropsWithChildren} from 'react';
import Link, {LinkProps} from "next/link";
import cn from "classNames";

interface FmLinkProps extends PropsWithChildren<LinkProps> {
    className?: string;
    active?: boolean;
}

const FmLink: FC<FmLinkProps> = ({
                                     children,
                                     className,
                                     active = false,
                                     ...rest
                                 }) => {
    const classes = cn(
        active ? 'text-yellow' : 'text-dim-grey hover:text-yellow',
        'text-body1'
    )

    return (
        <Link className={classes} {...rest}>
            {children}
        </Link>
    );
};

export default FmLink;