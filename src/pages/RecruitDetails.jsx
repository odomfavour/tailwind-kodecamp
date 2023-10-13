import { useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import recruit from "../assets/images/recruit.png";
import { FileIcon } from "../utils/icons";
import { LinkedIn } from "../utils/icons";
import { InstagramIcon } from "../utils/icons";
import { TwitterICon } from "../utils/icons";
import { BehanceLogo } from "../utils/icons";
import { tabTitles } from "../utils/data";
import PersonalDetails from "../components/PersonalDetails";

const RecruitDetails = () => {
  const [tabId, setTabId] = useState(1);
  return (
    <>
      <LoggedInNavbar />
      <div className="w-[95%] mx-auto lg:mt-[100px] mt-[50px] font-Inter">
        <h1 className="font-Poppins pl-3 text-sm lg:text-base ">
          Recruits {""}
          <span className="font-bold border-l-2 border-black pl-1">
            Recruit Information
          </span>
        </h1>
        <div className="w-full  h-[239px] lg:h-[386.85px] mt-[30px]  mx-auto">
          <div className="w-full h-[96px] lg:h-[212px] bg-[#6FA4F1] rounded-lg"></div>
          <div
            className="half-circle mx-auto lg:mt-[-150px] mt-[-73px] lg:rounded-t-[150px] lg:w-[300px] lg:h-[150px] w-[147px] h-[73.5px] rounded-t-[73.5px]
          lg:border-[20px] border-[10px] border-solid border-[#BDD5F9]"
          >
            <img src={recruit} className="rounded-full" />
          </div>
          <div className="h-[52px] w-[80%] mx-auto  mt-[90px] flex flex-col items-center justify-center lg:hidden">
            <h1 className="font-bold text-xl">Oluwafemi Odunlami</h1>
            <p className="text-[14px]">Product Designer</p>
          </div>
        </div>
        <div className="lg:h-[64px] h-fit lg:w-[736px]  mx-auto mt-[50px] lg:mt-0 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[360px] w-[80%] h-[24px] flex flex-col lg:flex-row items-center lg:gap-[40px] ">
            <p className="font-bold lg:text-[16px] text-[14px] font-Inter">
              Links to porfolio:
            </p>
            <div className="h-[24px] w-[192px] lg:w-fit flex items-center lg:gap-7 justify-between lg:justify-normal mt-[20px] lg:mt-[0] ">
              <BehanceLogo className="h-[24px]" />
              <LinkedIn className=" h-[24px]" />
              <InstagramIcon className=" h-[24px]" />
              <TwitterICon className=" h-[24px]" />
            </div>
          </div>
          <button className=" bg-primaryBlue lg:w-[216px] w-full md:w-[70%] h-[40px] lg:h-[64px] rounded-lg flex items-center justify-center lg:gap-[10px] gap-[16px] cursor-pointer mt-[100px] lg:mt-0">
            <FileIcon className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] font-white" />
            <h1 className="text-white font-Inter font-bold lg:text-base text-xs">
              VIEW RESUME
            </h1>
          </button>
        </div>
      </div>
      <div className="lg:w-[739px] w-[95%]  h-[32px] lg:h-[40px] mx-auto border-b border-black lg:mt-[40px] mt-[60px] ">
        <div className="lg:w-[672px] w-[91%] h-[32px] lg:h-[40px] flex justify-between font-bold text-[#AAAAAA] lg:text-xl text-xs ">
          {tabTitles.map((tabTitle) => (
            <div
              key={tabTitle.id}
              className={
                tabId === tabTitle.id
                  ? "text-black cursor-pointer active-tab "
                  : "text-[#AAAAAA] cursor-pointer"
              }
              style={{ display: "inline-block" }}
              onClick={() => {
                setTabId(tabTitle.id);
                console.log(tabId);
              }}
            >
              {tabTitle.title}
            </div>
          ))}
        </div>
      </div>
      <section className="lg:w-[736px] w-[95%] h-fit mx-auto mt-[40px]">
        {tabId === 1 && <PersonalDetails />}
        {tabId === 2 && <h1>Component for tab 2 here</h1>}
        {tabId === 3 && <h1>Component for tab 3 here</h1>}
      </section>
    </>
  );
};

export default RecruitDetails;
