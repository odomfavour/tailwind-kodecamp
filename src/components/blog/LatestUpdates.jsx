import React from "react";
import { Link } from "react-router-dom";
import feauredImage from "../../assets/images/image-blog-card.png";
const LatestUpdates = () => {
  return (
    <div className="latest-wrapper flex flex-cols-4 gap-8 overflow-x-auto py-4">
      <figure className=" w-[300px] bg-[#D4D4D4] hover:bg-white transition-all rounded-[10px]">
        <div className="w-[300px] rounded-t-[10px] rounded-tr-[10px] mb-4 overflow-y-hidden">
          <img
            src={feauredImage}
            alt="featured image"
            className=" w-full rounded-t-[10px] rounded-tr-[10px]"
          />
        </div>
        <div className="px-4 ">
          <figcaption className="text-[#AAAAAA] font-bold text-[14px] leading-[16.8px]">
            <p className="flex gap-4 mb-2">
              <time dateTime="2022-06-22"> 22-06-2022 </time> <span> | </span>
              <span>Anthony John</span>
            </p>
          </figcaption>
          <article>
            <p className="text-primaryBlue font-bold mb-4 ">Business</p>
            <h4 className="font-bold leading-[19.2px] mb-1">
              Retracing Our Steps in the Desisgn Industry
            </h4>
            <p className="text-[14px] leading-6 mb-4 ">
              {" "}
              Our mission is to admit nuture and deploy next generation ...{" "}
            </p>
            <div className="flex justify-end mb-[39px] ">
              <Link to="#" className="font-bold text-primaryBlue">
                Read
              </Link>
            </div>
          </article>
        </div>
      </figure>

      <figure className="w-[300px] bg-[#D4D4D4] hover:bg-white transition-all rounded-[10px]">
        <div className="w-[300px] rounded-t-[10px] rounded-tr-[10px] mb-4 overflow-y-hidden">
          <img
            src={feauredImage}
            alt="featured image"
            className=" w-full rounded-t-[10px] rounded-tr-[10px]"
          />
        </div>
        <div className="px-4 ">
          <figcaption className="text-[#AAAAAA] font-bold text-[14px] leading-[16.8px]">
            <p className="flex gap-4 mb-2">
              <time dateTime="2022-06-22"> 22-06-2022 </time> <span> | </span>
              <span>Anthony John</span>
            </p>
          </figcaption>
          <article>
            <p className="text-primaryBlue font-bold mb-4 ">Business</p>
            <h4 className="font-bold leading-[19.2px] mb-1">
              Retracing Our Steps in the Desisgn Industry
            </h4>
            <p className="text-[14px] leading-6 mb-4 ">
              {" "}
              Our mission is to admit nuture and deploy next generation ...{" "}
            </p>
            <div className="flex justify-end mb-[39px] ">
              <Link to="#" className="font-bold text-primaryBlue">
                Read
              </Link>
            </div>
          </article>
        </div>
      </figure>

      <figure className="w-[300px] bg-[#D4D4D4] hover:bg-white transition-all rounded-[10px]">
        <div className="w-[300px] rounded-t-[10px] rounded-tr-[10px] mb-4 overflow-y-hidden">
          <img
            src={feauredImage}
            alt="featured image"
            className=" w-full rounded-t-[10px] rounded-tr-[10px]"
          />
        </div>
        <div className="px-4 ">
          <figcaption className="text-[#AAAAAA] font-bold text-[14px] leading-[16.8px]">
            <p className="flex gap-4 mb-2">
              <time dateTime="2022-06-22"> 22-06-2022 </time> <span> | </span>
              <span>Anthony John</span>
            </p>
          </figcaption>
          <article>
            <p className="text-primaryBlue font-bold mb-4 ">Business</p>
            <h4 className="font-bold leading-[19.2px] mb-1">
              Retracing Our Steps in the Desisgn Industry
            </h4>
            <p className="text-[14px] leading-6 mb-4 ">
              {" "}
              Our mission is to admit nuture and deploy next generation ...{" "}
            </p>
            <div className="flex justify-end mb-[39px] ">
              <Link to="#" className="font-bold text-primaryBlue">
                Read
              </Link>
            </div>
          </article>
        </div>
      </figure>

      <figure className="w-[300px] bg-[#D4D4D4] hover:bg-white transition-all rounded-[10px]">
        <div className="w-[300px] rounded-t-[10px] rounded-tr-[10px] mb-4 overflow-y-hidden">
          <img
            src={feauredImage}
            alt="featured image"
            className=" w-full rounded-t-[10px] rounded-tr-[10px]"
          />
        </div>
        <div className="px-4 ">
          <figcaption className="text-[#AAAAAA] font-bold text-[14px] leading-[16.8px]">
            <p className="flex gap-4 mb-2">
              <time dateTime="2022-06-22"> 22-06-2022 </time> <span> | </span>
              <span>Anthony John</span>
            </p>
          </figcaption>
          <article>
            <p className="text-primaryBlue font-bold mb-4 ">Business</p>
            <h4 className="font-bold leading-[19.2px] mb-1">
              Retracing Our Steps in the Desisgn Industry
            </h4>
            <p className="text-[14px] leading-6 mb-4 ">
              {" "}
              Our mission is to admit nuture and deploy next generation ...{" "}
            </p>
            <div className="flex justify-end mb-[39px] ">
              <Link to="#" className="font-bold text-primaryBlue">
                Read
              </Link>
            </div>
          </article>
        </div>
      </figure>
    </div>
  );
};

export default LatestUpdates;
