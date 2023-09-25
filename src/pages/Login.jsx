// import React from 'react'
// import AuthHeader from '../components/AuthHeader';

import { Link } from 'react-router-dom';
import { GoogleIcon } from '../utils/icons';
import AuthLayout from '../components/layout/AuthLayout';
const Login = () => {
  return (
    <AuthLayout>
      <div>
        <h4 className='text-center font-bold lg:text-[32px] text-2xl mb-5'>
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
    </AuthLayout>
  );
};

export default Login;
