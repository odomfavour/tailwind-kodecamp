// import React from 'react';
import logo from '../assets/images/logo.png';
const AuthHeader = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto flex justify-between py-3'>
        <div>
          <img src={logo} alt='' />
        </div>
        <div className='flex items-center lg:gap-4 gap-2'>
          <p className='lg:text-sm text-xs'>New to Got Talent?</p>
          <button className='py-3 px-[15px] border-[#2776EA] border text-[#2776EA] rounded-[5px]'>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
