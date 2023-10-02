
import LoggedInNavbar from "../components/LoggedInNavbar";
import rect from "/src/assets/Images/Rect.png"
import star from "/src/assets/Icons/star-light.png";
import star2 from "/src/assets/Icons/star-grey.png";
import timer from "/src/assets/Icons/timer.png";
import symbols from "/src/assets/Icons/symbols.png";
import locator from "/src/assets/Icons/locator.png";

import { devTeam } from "../utils/data";


const Developers = () => {


    return (
        <section>
            <LoggedInNavbar />

            <div className=" w-[70%] container mx-auto">
                <button className="w-[178px] h-[48px] text-[#FFFFFF] text-[16px] font-bold  bg-[#2776EA] mt-[90px] rounded-t-md">Find a Candidate</button>
                <div className="bg-[#F5F5F5] p-4  flex flex-col md:flex-row  flex-wrap  items-center   gap-5 md:gap-11 ">

                    <div className="relative">
                        <div className="absolute top-3">
                            <img src={timer} />
                        </div>
                        <select className="px-6 py-4 w-[210px]">
                            <option className="m-auto">
                                Product Developer</option>

                        </select>
                    </div>

                    <div className="relative">
                        <div className="absolute top-3 left-2">
                            <img src={symbols} />
                        </div>
                        <select className="px-11 py-4  w-[210px]">
                            <option className="p-9">
                                All</option>

                        </select>
                    </div>

                    <div className="relative">
                        <div className="absolute top-3 left-2" >
                            <img src={locator} />
                        </div>
                        <select className="px-7  py-4  w-[210px]">
                            <option className="p-9">
                                Nigeria</option>

                        </select>
                    </div>


                    <button className="bg-[#2776EA] w-[210px] h-[46px]   md:ml-[60px]  text-[#FFFFFF]">Search</button>

                </div>

            </div>
            <div className="flex w-[80%] container mx-auto mt-7 gap-4">
                <img className="w-[10px] h-[48px] mt-3" src={rect} />
                <h2 className=" text-[24px] md:text-[48px] mt-4 md:mt-0 font-bold">Software  Developers</h2>
            </div>

            <div className="flex flex-wrap  justify-between gap-y-11 lg:gap-[170px] lg:w-[70%] w-[80%] container mx-auto mt-9">
                {devTeam.map((developers) => {

                    const { id, Image, NAME, experience, LOCATION } = developers


                    return (
                        <div key={id} className="w-[250px]">
                            <div>
                                <img src={Image} />
                            </div>
                            <div className="w-[250px] mt-5 ">
                                <h3 className="text-[16px] font-bold text-[#00000] ">NAME: <span className=" text-[#2776EA]">{NAME}</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">YEARS OF EXPERIENCE:  <span className=" text-[#2776EA]">{experience}</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">STRENGTH:  <span className=" text-[#2776EA]">FRONT-END</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">LOCATION:  <span className=" text-[#2776EA]">{LOCATION}</span></h3>

                            </div>
                            <div className="flex m-auto gap-3 mt-3" >
                                <div className="flex">
                                    <img className="w-[20px] h-[20px]" src={star} />
                                    <img className="w-[20px] h-[20px]" src={star} />
                                    <img className="w-[20px] h-[20px]" src={star} />
                                    <img className="w-[20px] h-[20px]" src={star} />
                                    <img className="w-[20px] h-[20px]" src={star2} />
                                </div>
                                <div>
                                    <p>[11]</p>
                                </div>

                            </div>

                            <button className="w-[144px] bg-[#2776EA] h-[45px] mt-3 text-[#FFFF] font-bold text-[24px]">View</button>

                        </div>
                    )
                })}
            </div>

            <button className="w-[227px] h-[64px]  py-5 justify-center border-[#2776EA] border-2 flex m-auto mt-[90px] mb-7">See More</button>


        </section>
    )
}
export default Developers;