import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div><span className="loading loading-bars loading-sm"></span></div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;