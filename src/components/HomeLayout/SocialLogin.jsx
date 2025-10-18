import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
        <div className=' mt-8 '>
            <h1 className='font-semibold'>Login With</h1>
            <div className='space-y-4 mt-4'> 
                {/* Google */}
            <button className="btn w-full bg-white text-black border-[#e5e5e5]">
                    <FcGoogle size={25} /> Login with Google
                </button>
                
            {/* GitHub */}
            <button className="btn w-full bg-white text-bla border-[#e5e5e5]">
                  <VscGithub size={25} /> Login with GitHub
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;