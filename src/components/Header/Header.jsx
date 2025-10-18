import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col gap-3 items-center'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p> 
            {/* date-fns */}
            <p className='font-semibold'>{ format(new Date(), "EEEE, MMMM d, u  - K:m:s a") }</p> 
        </div>
    );
};

export default Header;