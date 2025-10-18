
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const { id } = useParams(); // string
    const data = useLoaderData();
    const [cateGoryNews, setCategoryNews] = useState([]);

    useEffect(() => { 
        if (id == "0") {
           return setCategoryNews(data);
        }
        else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);  
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
   }, [data, id]);  

    return (
        <div className='grid grid-cols-1 gap-5'>
            <h2>Total <span className='font-bold text-secondary'>{cateGoryNews.length}</span> News Found</h2> 
            <div className=''> 
                {
                    cateGoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>) 
                }
            </div>
        </div>
    );
};

export default CategoryNews;