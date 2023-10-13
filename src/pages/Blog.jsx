// import React from 'react';
import { BiSearch } from "react-icons/bi";
import MainLayout from "../components/layout/MainLayout";
// import heroBlogDesktop from "../assets/images/hero-blog-desktop.png";
import heroBlogMobile from "../assets/images/hero-blog-mobile.png";
import LatestUpdates from "../components/blog/LatestUpdates";
import Recommended from "../components/blog/Recommended";
import Categories from "../components/blog/Categories";

const Blog = () => {
  return (
    <MainLayout>
      <div className="main">
        {/* Hero section */}
        <section
          className="hero-blog h-96 md:h-[296px] opacity-90 bg-[#2B2B2B] bg-cover bg-center md:bg-none lg:bg-[url(`../assets/images/hero-blog-desktop.png`)] mb-[52px] md:mb-[112px] "
          style={{
            backgroundImage: `url(${heroBlogMobile})`,
          }}
        >
          <div className="h-full opacity-90 bg-[#2B2B2B] text-white grid place-items-center">
            <h1 className="text-[28px] md:text-[56px] font-bold leading-[33.6px] md:leading-[64px] mt-[-120px] md:mt-0">
              Our Blog
            </h1>
          </div>
        </section>

        {/* Latest posts section */}
        <section className="w-11/12 mx-auto mb-[60px] ">
          <div className="latestupdate-searchblog h-[36px] md:h-[56px] flex justify-between mb-[60px] ">
            <div className="latest-update flex gap-[10px] md:gap-4 items-center">
              <div className="h-[17px] md:h-[32px] w-1 md:w-[10px] bg-primaryBlue"></div>
              <h2 className="text-2xl md:text-[40px] leading-[28.8px] md:leading-[48px] font-bold color-[#2B2B2B]">
                Latest Updates
              </h2>
            </div>
            <form
              action=""
              className=" absolute top-[300px] right-6 left-6  md:static  "
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-full md:w-5/6 lg:w-[403px] ">
                  <input
                    type="text"
                    className="border py-[13px] px-[21px] h-[56px] outline-none w-full bg-[#D4E4FB] border-l-4 rounded-[5px] border-l-primaryBlue"
                    placeholder="Steps in the design Industry"
                  />
                </div>
                <div>
                  <button className="h-[56px] w-[56px] flex justify-center items-center rounded-[10px] bg-primaryBlue text-white">
                    <BiSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <LatestUpdates />
        </section>

        {/* Recomended posts section */}
        <section className="bg-[#D4E4FB] pt-8 pb-7 mb-[60px]">
          <div className="w-11/12 mx-auto  ">
            <div className="latestupdate-searchblog h-[36px] md:h-[56px] flex justify-left mb-[60px] ">
              <div className="latest-update flex gap-[10px] md:gap-4 items-center">
                <div className="h-[17px] md:h-[32px] w-1 md:w-[10px] bg-primaryBlue"></div>
                <h2 className="text-2xl md:text-[40px] leading-[28.8px] md:leading-[48px] font-bold color-[#2B2B2B]">
                  Recommended posts
                </h2>
              </div>
            </div>
            <Recommended />
          </div>
        </section>

        {/* categories  */}
        <section>
          <div className="w-11/12 mx-auto pb-8">
            <div className="h-[36px] md:h-[56px] flex justify-left mb-[60px] ">
              <div className="latest-update flex gap-[10px] md:gap-4 items-center">
                <div className="h-[17px] md:h-[32px] w-1 md:w-[10px] bg-primaryBlue"></div>
                <h2 className="text-2xl md:text-[40px] leading-[28.8px] md:leading-[48px] font-bold color-[#2B2B2B]">
                  Categories
                </h2>
              </div>
            </div>
            <Categories />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Blog;
