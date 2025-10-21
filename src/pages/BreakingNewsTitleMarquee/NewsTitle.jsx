import React from 'react';

const NewsTitle = ({ news }) => {
    
    return (
        <div>
            <p className='font-semibold text-[15px] mx-3'>{ news.title }</p>
        </div>
    );
};

export default NewsTitle;