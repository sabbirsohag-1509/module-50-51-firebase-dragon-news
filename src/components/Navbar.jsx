import React from 'react';
import { NavLink } from 'react-router';
import user from './../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav flex gap-5 font-semibold text-accent'> 
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-3 mr-5'> 
                <img src={user} alt="" />
                <button className='btn btn-primary px-5'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;