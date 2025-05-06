import React from 'react';
import FmLine from "@/components/common/line/line.component";

const Arrow = () => {
    return (
        <>
            {/* Arrow line top-[85px] left-[268px] */}
            <div className='absolute top-0 left-0'>
                <FmLine width={190} border={{topRight: 5, bottomRight: 5}}/>
            </div>

            {/*Arrow*/}
            <div className='absolute top-[11px] left-[177px]'>
                <FmLine width={41} rotate={230} border={{topLeft: 5}}/>
            </div>

            <div className='absolute top-[14px] left-[189px]'>
                <FmLine width={41} rotate={135} border={{bottomLeft: 5}}/>
            </div>
        </>
    );
};

export default Arrow;