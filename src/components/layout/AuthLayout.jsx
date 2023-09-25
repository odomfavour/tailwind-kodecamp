// import React from 'react';
import propTypes from 'prop-types';
import AuthHeader from '../AuthHeader';
import lady from '../../assets/images/lady.png';
import man from '../../assets/images/man.png';
import topCircle from '../../assets/images/circle-big.png';
import smallCircle from '../../assets/images/circle-small.png';
import { useLocation } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <div className='relative'>
      <AuthHeader />
      <section>
        <div className='w-10/12 mx-auto flex gap-8 '>
          <div className='lg:w-2/5 md:w-3/4 mx-auto w-full relative'>
            <div className='bg-[#d4e4fb98] p-8 rounded-[20px] mt-5'>
              {children}
            </div>
            <div className='absolute -bottom-10 -left-10 -z-10'>
              <img src={smallCircle} alt='small img' />
            </div>
          </div>
          <div className='w-3/5 h-[80vh] hidden lg:block'>
            <div className='flex justify-end '>
              <div className='w-3/5 mt-6'>
                <img
                  src={pathname === '/login' ? lady : man}
                  alt='man smiling'
                  className=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='absolute top-0 right-0 -z-10'>
        <img src={topCircle} alt='top circle' className='h-[190px]' />
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: propTypes.any,
};

export default AuthLayout;
