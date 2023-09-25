// import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const AuthHeader = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className='w-11/12 mx-auto flex justify-between py-3'>
        <div>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>

        {pathname === '/login' ? (
          <div className='flex items-center lg:gap-4 gap-2'>
            <p className='lg:text-sm text-xs'>New to Got Talent?</p>
            <Link
              to='/signup'
              className='py-3 px-[15px] border-[#2776EA] border text-[#2776EA] rounded-[5px]'
            >
              Join Now
            </Link>
          </div>
        ) : (
          <div className='flex items-center lg:gap-4 gap-2'>
            <p className='lg:text-sm text-xs'>Already have an account?</p>
            <Link
              to='/login'
              className='py-3 px-[20px] border-[#2776EA] border text-[#2776EA] rounded-[5px]'
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
