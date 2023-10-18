// import React from "react";
import categoriesCardImage from "../../assets/images/business-calculation.png";

const Categories = () => {
  return (
    <div className="flex gap-10 py-4 overflow-x-auto">
      <figure className=" hover:bg-[#D4D4D4] bg-white transition-all rounded-[10px]">
        <div className="w-[216px] h-[192.593px] rounded-[10px] mb-4 md:mb-6">
          <img
            src={categoriesCardImage}
            alt="featured image"
            className="rounded-[10px] w-[216px] h-[192.593px] "
          />
        </div>

        <figcaption className=" font-bold leading-[19.2px] text-[#2b2b2b]">
          Business
        </figcaption>
      </figure>
      <figure className=" hover:bg-[#D4D4D4] bg-white transition-all rounded-[10px]">
        <div className="w-[216px] h-[192.593px] rounded-[10px] mb-4 md:mb-6">
          <img
            src={categoriesCardImage}
            alt="featured image"
            className="rounded-[10px] w-[216px] h-[192.593px] "
          />
        </div>

        <figcaption className=" font-bold leading-[19.2px] text-[#2b2b2b]">
          Business
        </figcaption>
      </figure>
      <figure className=" hover:bg-[#D4D4D4] bg-white transition-all rounded-[10px]">
        <div className="w-[216px] h-[192.593px] rounded-[10px] mb-4 md:mb-6">
          <img
            src={categoriesCardImage}
            alt="featured image"
            className="rounded-[10px] w-[216px] h-[192.593px] object-contain "
          />
        </div>

        <figcaption className=" font-bold leading-[19.2px] text-[#2b2b2b]">
          Business
        </figcaption>
      </figure>
      <figure className=" hover:bg-[#D4D4D4] bg-white transition-all rounded-[10px]">
        <div className="w-[216px] h-[192.593px] rounded-[10px] mb-4 md:mb-6">
          <img
            src={categoriesCardImage}
            alt="featured image"
            className="rounded-[10px] w-[216px] h-[192.593px] "
          />
        </div>

        <figcaption className=" font-bold leading-[19.2px] text-[#2b2b2b]">
          Business
        </figcaption>
      </figure>
      <figure className=" hover:bg-[#D4D4D4] bg-white transition-all rounded-[10px]">
        <div className="w-[216px] h-[192.593px] rounded-[10px] mb-4 md:mb-6">
          <img
            src={categoriesCardImage}
            alt="featured image"
            className="rounded-[10px] w-[216px] h-[192.593px] "
          />
        </div>

        <figcaption className=" font-bold leading-[19.2px] text-[#2b2b2b]">
          Business
        </figcaption>
      </figure>
    </div>
  );
};

export default Categories;
