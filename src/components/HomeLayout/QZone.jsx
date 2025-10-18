import React from 'react';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';
import school from '../../assets/school.png';
import bgImage from '../../assets/bg.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-5 '>
            <h2 className='font-semibold'>Q-Zone</h2>
            <div className='space-y-5'> 
                <img src={swimming} alt="" />
                <img src={school} alt="" />
                <img src={playground} alt="" />
                <img src={bgImage} alt="" />

            </div>
        </div>
    );
};

export default QZone;