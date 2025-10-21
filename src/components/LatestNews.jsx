import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import NewsTitle from '../pages/BreakingNewsTitleMarquee/NewsTitle';


// const breakingNewsTitleData = fetch('/news.json').then(res => res.json());
// console.log(breakingNewsTitleData);

const LatestNews = () => {
    const [breakingNews, setBreakingNews] = useState([]);

    useEffect(() => { 
        fetch(`/news.json`)    
        .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBreakingNews(data);
            })
        .catch((error) => console.log("Failed to fetch news:", error));
    }, [])


    return (
        <div className='flex items-center gap-3 bg-base-300 mt-5'>
            <p className='text-white bg-secondary px-3 py-2 rounded text-center'>Breaking News</p>
            <Marquee className='flex gap-10' pauseOnHover={true} speed={100} > 
                {
                    breakingNews.map((news) => <NewsTitle key={news.id} news={news}></NewsTitle>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;