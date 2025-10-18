import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-gray-700'>Find Us On</h2>

            <div className='join join-vertical w-full mt-5'> 
                <button type="submit" className="btn bg-base-100 justify-start pl-3"><SiFacebook/> Facebook</button>
                <button type="submit" className="btn bg-base-100 justify-start pl-3"> <FaTwitter/> Twitter</button>
                <button type="submit" className="btn bg-base-100 justify-start pl-3"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;