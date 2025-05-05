import React from 'react';
import Line from "@/components/common/line/line.component";
import Arrow from "@/components/arrow/arrow.component";

const ArrowLine = () => {
    return (
        <>
            {/*Line tale top: 201 left: 540*/}
            <div className='absolute top-0 left-0'>
                <Line width={268} border={{topRight: 20}}/>
            </div>

            <div className='block absolute top-0 left-[268px]'>
                <Line width={100} border={{topLeft: 20, bottomRight: 20}} rotate={90}/>
            </div>

            <div className='absolute top-[85px] left-[268px]'>
                <Arrow />
            </div>
        </>
    );
};

export default ArrowLine;