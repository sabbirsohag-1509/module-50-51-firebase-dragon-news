import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    // console.log(news)

    return (
        <div>
            <img className='pt-5 rounded w-full h-[400px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl pt-3 font-semibold'>{news.title}</h2>
            <p className='pt-4 font-sm text-gray-600'>{news.details}</p>
            
            <Link className='btn btn-secondary mt-3 text-center' to={`/category/${news.category_id}`}>
               ← All news in this category  
            </Link>
        </div>
    );
};

export default NewsDetailsCard;