import vision from "../../assets/images/vision.png";

const Vision = () => {
  return (
    <div className="w-full h-fit pb-16 lg:pb-0  lg:h-[30rem] flex flex-col-reverse lg:flex-row items-center justify-center bg-[#D4E4FB]">
      <div className=" w-11/12 lg:w-1/2 flex flex-col">
        <div className="w-full py-8 flex gap-4 items-center ">
          <span className="w-2 h-[1.125rem] lg:h-[1.875rem] bg-primaryBlue text-transparent text-right">
            .
          </span>
          <h1 className="font-bold text-lg lg:text-3xl ">Our vision</h1>
        </div>
        <p className=" w-full lg:w-3/4">
          To be a top leading Infotech Company trusted by its clients for
          excellent service, and partnering with our clients to deliver
          innovative, educative, and value-driven ICT products and services.
        </p>
      </div>
      <div className=" p-5 w-11/12 lg:w-1/3 ">
        <img className="w-full aspect-vision " src={vision} alt="" />
      </div>
    </div>
  );
};

export default Vision;
