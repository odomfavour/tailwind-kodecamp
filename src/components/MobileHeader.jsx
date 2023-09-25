/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/data';
import { LogoIcon } from '../utils/icons';
import { BsXLg } from 'react-icons/bs';
const MobileHeader = ({ setShowMobileNav }) => {
  return (
    <div className='h-screen bg-primaryBlue'>
      <div className='container w-11/12 mx-auto flex flex-col md:flex-row gap-4 items-start'>
        <div className='flex justify-between items-center w-full'>
          <h3 className='font-bold text-amber-950'>
            <LogoIcon />
          </h3>
          <BsXLg
            className='text-2xl font-bold text-white'
            role='button'
            onClick={() => setShowMobileNav(false)}
          />
        </div>
        <ul className='md:flex md:flex-row flex-col items-center gap-10'>
          {navLinks.map((navLink) => {
            const { id, url, name } = navLink;
            return (
              <li key={id} onClick={() => setShowMobileNav(false)}>
                <Link to={url} className='text-white'>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='flex md:flex-row flex-col gap-[10px] md:items-center items-start'>
          <Link
            to='/signup'
            className='border-2 py-3 px-6 border-white rounded-[10px] text-white font-bold'
          >
            Sign Up
          </Link>
          <Link
            to='/login'
            className='border-2 py-3 px-6 border-white bg-white rounded-[10px] text-primaryBlue font-bold'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
