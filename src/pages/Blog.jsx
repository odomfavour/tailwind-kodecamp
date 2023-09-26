// import React from 'react';
import { BiSearch } from "react-icons/bi";
import MainLayout from "../components/layout/MainLayout";

const Blog = () => {
  return (
    <MainLayout>
      <div className="main">
        <div className="w-11/12 mx-auto  border bg-blue-100">
          <div className="latestupdate-searchblog h-[36px] md:h-[56px] flex md:justify-between ">
            <div className="latest-update flex gap-[10px] md:gap-4 items-center">
              <div className="h-[17px] md:h-[32px] w-1 md:w-[10px] bg-primaryBlue"></div>
              <h2 className="text-2xl md:text-[40px] leading-[28.8px] md:leading-[48px] font-bold color-[#2B2B2B]">
                Latest Updates
              </h2>
            </div>
            <form action="" className=" absolute top-0 md:static  ">
              <div className="flex items-center gap-3 w-full">
                <div className="w-5/6 lg:w-[403px] ">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
