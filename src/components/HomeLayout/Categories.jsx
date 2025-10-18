import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json')
    .then((res) => res.json());
// console.log(categoriesPromise);

const Categories = () => {

    const categories = use(categoriesPromise);
    // console.log(categories);

    return (
        <div>
            <h2 className='font-semibold'>All Categories-({categories.length})</h2>
            <div className='grid grid-cols-1 gap-2 mt-5'> 
                {
                    categories.map((category) => (
                        <NavLink to={`/category/${category.id}`} key={category.id} className='bg-base-100 border-0 hover:bg-base-300 text-accent hover:cursor-pointer btn'>{category.name}</NavLink> 
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;