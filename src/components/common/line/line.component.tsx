import React, {FC} from 'react';

interface LineProps {
    width: number;
    rotate?: number;
    border?: {
        topRight?: number;
        topLeft?: number;
        bottomRight?: number;
        bottomLeft?: number;
    };
}

const Line: FC<LineProps> = ({ width, rotate = 0, border }) => {
    const borderRadiusStyle: React.CSSProperties = {
        borderTopRightRadius: border?.topRight,
        borderTopLeftRadius: border?.topLeft,
        borderBottomRightRadius: border?.bottomRight,
        borderBottomLeftRadius: border?.bottomLeft,
    };

    return (
        <div
            className="h-[15px] bg-yellow"
            style={{
                width: `${width}px`,
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'top left', // или 'center' — зависит от нужной точки поворота
                ...borderRadiusStyle,
            }}
        />
    );
};

export default Line;