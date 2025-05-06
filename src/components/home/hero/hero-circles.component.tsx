import React from 'react';
import FmCircle from "@/components/common/circle/circle.component";

const HeroCircles = () => {
    return (
        <div className='flex flex-row gap-8'>
            <FmCircle/>
            <FmCircle/>
            <FmCircle variant='filled'/>
        </div>
    );
};

export default HeroCircles;