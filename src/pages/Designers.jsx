import Header from "../components/Header"
import { DesignersInfo } from "../utils/data";
import { StarIcon } from "../utils/icons";
import { EmptyStarIcon } from "../utils/icons";

const Designers = () => {
  return (
    <>
      <section >
        <Header />

        <div className="sm:w-full lg:w-[80%] mx-auto p-4 bg-cover lg:bg-none h-full bg-designers w-full">

          <div className="bg-transparent lg:hidden">
            <h1 className="text-4xl font-bold">Your desired recruit is waiting</h1>
            <p className="text-lg">We have over 4000 best recruits for you, that you deserve!</p>
          </div>
          <div>
            <div>
              <button className="py-2 mt-4 px-4 bg-[#2772EA] text-white font-semibold rounded" disabled>Find a candidate</button>
            </div>
            <div className="p-3 bg-white lg:bg-[#F5F5F5] rounded lg:flex justify-between">
              <div className="lg:flex gap-3">
                <div>
                  <label htmlFor="career" className="font-semibold lg:hidden">Choose a career</label>
                  <select className="w-full font-bold py-2 mb-4 px-4 rounded border border-gray-500" name="career" id="" disabled>
                    <option value="" className="">Product Designers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="career" className="font-semibold lg:hidden">Job type</label>
                  <select className="w-full font-bold py-2 mb-4 px-4 rounded border border-gray-500" name="" id="" disabled>
                    <option value="" className="">Any</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="career" className="font-semibold lg:hidden">Location</label>
                  <select className="w-full font-bold py-2 mb-4 px-4 rounded border border-gray-500" name="" id="" disabled>
                    <option value="" className="">Nigeria</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="py-2 w-full lg:px-14 sm:px-4 bg-[#2772EA] text-white font-semibold sm:rounded">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="border-l-[10px] ms-10 my-10 border-[#2776EA]">
            <h2 className="ps-1 font-bold lg:text-4xl text-2xl text-[#08182F]">Product Designers</h2>
          </div>

          <div className="grid w-11/12 mx-auto lg:grid-cols-3 sm:grid-cols-2 gap-6 py-8 justify-center items-center">
            {DesignersInfo.map((designer) => {
              const { id, name, strength, years, location, src } = designer;
              return (
                <div key={id}>
                  <div className="p-4 flex flex-col justify-center items-center">
                    <div className="flex justify-center">
                      <img src={src} alt="" className="w-[70%] sm:w-[60%] md:w-[80%]" />
                    </div>

                    <div className="">
                      <div className="">
                        <span className="font-bold text-lg">
                          Name :<span className="text-[#2776EA] ms-1">{name}</span>
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-lg">
                          STRENGTH :<span className="text-[#2776EA] ms-1">{strength}</span>
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-lg">
                          YEARS OF EXPERIENCE :<span className="text-[#2776EA] ms-1">{years}</span>
                        </span>
                      </div>

                      <div>
                        <span className="font-bold text-lg">
                          LOCATION :<span className="text-[#2776EA] ms-1">{location}</span>
                        </span>
                      </div>

                      <div className="flex gap-1">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <EmptyStarIcon />
                      </div>

                      <button className="btn-designer">view</button>
                    </div>
                  </div>
                </div>

              )
            })}
          </div>

          <div className="flex justify-center py-10">
            <button className="bg-transparent border-2 border-primaryBlue font-semibold px-10 py-[7px] rounded  text-black"> See More</button>
          </div>
        </div>
      </section >
    </>
  );
};
export default Designers