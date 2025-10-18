import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-300 mt-5'>
            <p className='text-white bg-secondary px-3 py-2 rounded text-center'>Breaking News</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={100} > 
                <p className='font-semibold text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, possimus.</p>
                <p className='font-semibold text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, possimus.</p>
                <p className='font-semibold text-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, possimus.</p> 
            </Marquee>
        </div>
    );
};

export default LatestNews;