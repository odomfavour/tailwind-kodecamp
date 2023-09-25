import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MobileHeader from '../MobileHeader';

const MainLayout = ({ children }) => {
  return (
    <div className='relative'>
      <Header />
      {/* <div className='absolute top-0 z-30 w-full'>
        <MobileHeader />
      </div> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
