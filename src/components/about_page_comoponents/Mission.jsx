import mission from "../../assets/images/mission.png";
import circleSmall from '../../assets/images/circle-small.png';


const Mission = () => {
  return (
    <div className="w-full h-fit pb-16 lg:pb-0  lg:h-[30rem] flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className=" w-11/12 lg:w-1/2 flex flex-col">
        <div className="w-full py-8 flex gap-4 items-center ">
          <span className="w-2 h-[1.125rem] lg:h-[1.875rem] bg-primaryBlue text-transparent text-right">
            .
          </span>
          <h1 className="font-bold text-lg lg:text-3xl ">Our Mission</h1>
        </div>
        <p className=" w-full lg:w-3/4">
          Our mission is to admit, nuture and deploy next generation of tech
          workforce in Africa for the budding era of industry 4.0 Also, we aim
          to raise the standard of technology skill development and to align
          training and research to address emerging skill gaps and the industry
          needs.
        </p>
      </div>
      <div className=" p-5 w-11/12 lg:w-1/3 relative ">
         <div className="absolute -bottom-2 -left-8 -z-10 ">
        <img className="" src={circleSmall} alt="" />
      </div>
        <img className="w-full" src={mission} alt=""/>  
        
      </div>
    </div>
  );
};

export default Mission;
