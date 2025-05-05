import React from 'react';
import Circle from "@/components/common/circle/circle.component";

const HeroCircles = () => {
    return (
        <div className='flex flex-row gap-8'>
            <Circle/>
            <Circle/>
            <Circle variant='filled'/>
        </div>
    );
};

export default HeroCircles;