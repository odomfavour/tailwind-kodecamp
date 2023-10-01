
import LoggedInNavbar from "../components/LoggedInNavbar";
import { LuTimerReset } from "react-icons/Lu"
// import symbols from "/src/assets/Icons/symbols.png"
// import timer from "/src/assets/Icons/timer.png"
// import locator from "/src/assets/Icons/locator.png"
import rect from "/src/assets/Images/Rect.png"
import star from "/src/assets/Icons/star-light.png";
import star2 from "/src/assets/Icons/star-grey.png";

import { devTeam } from "../utils/data";


const Developers = () => {


    return (
        <section>
            <LoggedInNavbar />

            <div className=" w-[70%] container mx-auto">
                <button className="w-[178px] h-[48px] text-[#FFFFFF] text-[16px] font-bold  bg-[#2776EA] mt-[90px] rounded-t-md">Find a Candidate</button>
                <div className="md:w-[1083px] md:h-[88px] bg-[#F5F5F5] p-4">
                    <select className="p-3 mr-9 w-[210px]">
                        <option className="p-9">
                            <LuTimerReset />Product Developer</option>

                    </select>
                    <select className="p-3 mr-9 w-[210px]">
                        <option className="p-9">
                            <LuTimerReset />All</option>

                    </select>
                    <select className="p-3 mr-9 w-[210px]">
                        <option className="p-9">
                            <LuTimerReset />Nigeria</option>

                    </select>
                    <button className="bg-[#2776EA] w-[210px] h-[46px] ml-[60px]  text-[#FFFFFF]">Search</button>

                </div>

            </div>
            <div className="flex w-[80%] container mx-auto mt-7 gap-4">
                <img className="w-[10px] h-[48px] mt-3" src={rect} />
                <h2 className="text-[48px] font-bold">Software  Developers</h2>
            </div>

            <div className="flex flex-wrap gap-[170px] w-[70%] container mx-auto mt-9">
                {devTeam.map((developers) => {

                    const { id, Image, NAME } = developers


                    return (
                        <div key={id} className="w-[250px] mt-9">
                            <div>
                                <img src={Image} />
                            </div>
                            <div className="w-[217px] mt-5 ">
                                <h3 className="text-[16px] font-bold text-[#00000] ">NAME: <span className=" text-[#2776EA]">{NAME}</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">YEARS OF EXPERIENCE:  <span className=" text-[#2776EA]">1</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">STRENGTH:  <span className=" text-[#2776EA]">FRONT-END</span></h3>
                                <h3 className="text-[16px] font-bold text-[#00000] ">LOCATION:  <span className=" text-[#2776EA]">Lagos,Nigeria</span></h3>

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

        </section>
    )
}
export default Developers;