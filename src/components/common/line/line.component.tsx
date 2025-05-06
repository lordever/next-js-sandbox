import React, {FC} from 'react';
import clsx from 'classNames';

interface LineProps {
    width: number;
    rotate?: number;
    color?: 'yellow' | 'lightGrey'
    border?: {
        topRight?: number;
        topLeft?: number;
        bottomRight?: number;
        bottomLeft?: number;
    };
}

const FmLine: FC<LineProps> = ({color = 'yellow', width, rotate = 0, border}) => {
    const classes = clsx(
        'h-[15px]',
        color === 'yellow' ? 'bg-yellow' : '',
        color === 'lightGrey' ? 'bg-light-grey' : ''
    )

    const borderRadiusStyle: React.CSSProperties = {
        borderTopRightRadius: border?.topRight,
        borderTopLeftRadius: border?.topLeft,
        borderBottomRightRadius: border?.bottomRight,
        borderBottomLeftRadius: border?.bottomLeft,
    };

    return (
        <div
            className={classes}
            style={{
                width: `${width}px`,
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'top left', // или 'center' — зависит от нужной точки поворота
                ...borderRadiusStyle,
            }}
        />
    );
};

export default FmLine;