import { Link } from 'react-router-dom';
import { navLinks } from '../utils/data';
import { LogoIcon } from '../utils/icons';
import { FaBars } from 'react-icons/fa';
import MobileHeader from './MobileHeader';
import { useState } from 'react';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <nav className='shadow-md py-4 bg-primaryBlue'>
        <div className='container w-11/12 mx-auto flex justify-between items-center'>
          <h3 className='font-bold text-amber-950'>
            <LogoIcon />
          </h3>
          <ul className='md:flex md:flex-row flex-col items-center gap-10 hidden'>
            {navLinks.map((navLink) => {
              const { id, url, name } = navLink;
              return (
                <li key={id}>
                  <Link to={url} className='text-white'>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='md:flex gap-[10px] items-center hidden'>
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
          <div className='md:hidden'>
            <FaBars
              className='text-3xl text-white'
              role='button'
              onClick={() => setShowMobileNav(true)}
            />
          </div>
        </div>
      </nav>
      {showMobileNav && (
        <div className='md:hidden absolute top-0 z-30 w-full left-0 translate-x-0 ease-in duration-300 '>
          <MobileHeader setShowMobileNav={setShowMobileNav} />
        </div>
      )}
    </>
  );
};

export default Header;
