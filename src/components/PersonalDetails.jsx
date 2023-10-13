const PersonalDetails = () => {
  return (
    <>
      <div className="lg:w-[736px] w-full lg:h-[112px] flex flex-col lg:flex-row justify-between text-lg">
        <div className="lg:w-[347.88px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-1 gap-[7px]">
          <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
            First Name
          </h1>
          <div className="lg:w-[352px] w-full h-[41px] lg:h-[64px] bg-recruitDetailsBg text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
            <p className="lg:text-base text-sm">Oluwafemi</p>
          </div>
        </div>

        <div className="lg:w-[347.88px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-1 gap-[7px] mt-5 lg:mt-0">
          <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
            Last Name
          </h1>
          <div className="lg:w-[352px] w-full h-[41px] lg:h-[64px] bg-recruitDetailsBg text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
            <p className="lg:text-base text-sm"> Odunlami</p>
          </div>
        </div>
      </div>

      <div className="lg:w-[736px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-[10px] gap-[7px] lg:mt-3 mt-6 text-lg">
        <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
          Track*
        </h1>
        <div className="lg:w-[736px] w-full h-[41px] lg:h-[71.68px] bg-recruitDetailsBg  text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
          <p className="lg:text-base text-sm"> Product Design </p>
        </div>
      </div>

      <div className="lg:w-[736px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-[10px] gap-[7px] lg:mt-3 mt-6 text-lg">
        <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
          Email*
        </h1>
        <div className="lg:w-[736px] w-full h-[41px] lg:h-[71.68px] bg-recruitDetailsBg  text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
          <p className="lg:text-base text-sm"> Odunlamioluwafemi@gmail.com </p>
        </div>
      </div>

      <div className="lg:w-[736px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-[10px] gap-[7px] lg:mt-3 mt-6 text-lg">
        <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
          Phone No*
        </h1>
        <div className="lg:w-[736px] w-full h-[41px] lg:h-[71.68px] bg-recruitDetailsBg  text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
          <p className="lg:text-base text-sm"> +234 806 123 4567 </p>
        </div>
      </div>

      <div className="lg:w-[736px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-[10px] gap-[7px] lg:mt-3 mt-6 text-lg">
        <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
          Address
        </h1>
        <div className="lg:w-[736px] w-full h-[41px] lg:h-[71.68px] bg-recruitDetailsBg  text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
          <p className="lg:text-base text-sm"> Yaba, Lagos </p>
        </div>
      </div>

      <div className="lg:w-[736px] w-full lg:h-[112px] flex flex-col lg:flex-row justify-between lg:mt-3 mt-6  text-lg">
        <div className="lg:w-[347.88px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-1 gap-[7px]">
          <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
            State
          </h1>
          <div className="lg:w-[352px] w-full h-[41px] lg:h-[64px] bg-recruitDetailsBg text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
            <p className="lg:text-base text-sm"> Lagos </p>
          </div>
        </div>

        <div className="lg:w-[347.88px] w-full h-[66px] lg:h-[112px] flex flex-col lg:gap-1 gap-[7px] mt-6 lg:mt-0">
          <h1 className="lg:text-[#555555] font-bold lg:font-normal text-sm lg:text-base">
            Country
          </h1>
          <div className="lg:w-[352px] w-full h-[41px] lg:h-[64px] bg-recruitDetailsBg text-[#555555] lg:text-black flex items-center lg:pl-[15px] pl-[7px] font-medium rounded-md">
            <p className="lg:text-base text-sm"> Nigeria </p>
          </div>
        </div>
      </div>

      <div className="lg:w-[744px] w-full lg:h-[64px] h-[40px] mt-[70px] flex justify-between">
        <button
          className="lg:w-[352px] w-[147.63px] h-[40px] lg:h-[64px] lg:rounded-[10px] rounded-[5px] font-Poppins lg:bg-black bg-primaryBlue text-white flex items-center justify-center font-bold cursor-pointer lg:text-lg 
        text-xs"
        >
          {" "}
          Send a message
        </button>
        <button
          className="lg:w-[352px] w-[147.63px] h-[40px] lg:h-[64px] lg:rounded-[10px] rounded-[5px] font-Poppins border border-black bg-white flex items-center justify-center font-bold cursor-pointer lg:text-lg 
        text-xs"
        >
          {" "}
          Cancel
        </button>
      </div>
    </>
  );
};

export default PersonalDetails;
