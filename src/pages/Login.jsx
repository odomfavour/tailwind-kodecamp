// import React from 'react'
import AuthHeader from '../components/AuthHeader';
import lady from '../assets/images/lady.png';
import topCircle from '../assets/images/circle-big.png';
import smallCircle from '../assets/images/circle-small.png';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '../utils/icons';
const Login = () => {
  return (
    <div className='relative'>
      <AuthHeader />
      <section>
        <div className='w-11/12 mx-auto flex gap-8 '>
          <div className='lg:w-1/2 md:w-3/4 mx-auto w-full relative'>
            <div className='bg-[#d4e4fb98] p-8 rounded-[20px] mt-5'>
              <h4 className='text-center font-bold lg:text-[32px] text-2xl mb-3'>
                Welcome Back...
              </h4>

              <form>
                <div className='mb-6'>
                  <input
                    type='email'
                    id='email'
                    className='input-primary'
                    placeholder='Email Address'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <input
                    type='password'
                    id='password'
                    className='input-primary'
                    placeholder='password'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='text-white bg-[#6FA4F1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center '
                >
                  Sign In
                </button>
              </form>
              <section>
                <p className='text-center mt-3'>
                  <Link>Forgot Password</Link>
                </p>
                <div className='flex justify-between items-center lg:gap-10 gap-5 w-3/4 mx-auto lg:my-14 my-10'>
                  <div className='lg:w-1/2 w-3/4 border-t-[0.5px] border-[#808080] ' />
                  <p>or</p>
                  <div className='lg:w-1/2 w-3/4 border-t-[0.5px] border-[#808080]' />
                </div>
                <button
                  type='submit'
                  className='border border-[#555555] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center flex justify-center items-center'
                >
                  <div className='flex gap-3 items-center'>
                    <GoogleIcon />
                    <p>Sign in with Google</p>
                  </div>
                </button>
              </section>
            </div>
            <div className='absolute -bottom-10 -left-10 -z-10'>
              <img src={smallCircle} alt='small img' />
            </div>
          </div>
          <div className='w-1/2 h-[80vh] hidden lg:block'>
            <div className='flex justify-end '>
              <div className='w-3/5 mt-6'>
                <img src={lady} alt='' className='' />
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

export default Login;
