import React from 'react';
import recImg from '../assets/images/RecImg.svg'
import topRecruit from '../assets/images/top-recruits.svg'
import { topRecruits } from '../utils/data';
import star from '../assets/images/star.svg'
import { CaretDown } from 'phosphor-react';


const TopRecruits = () => {
  return (
    <div >
      <div className="header flex gap-1 items-center px-5 sm:px-10 lg:px-20">
        <div>
            <img src={recImg} alt="rectangle" className='w-5 h-6 sm:w-6 sm:h-7'/>
        </div>
        <div>
            <img src={topRecruit} alt="rectangle" className='w-[200px] sm:w-[240px]' />
        </div>
      </div>
  <div className='flex flex-wrap'>
      {topRecruits.map((recruit, id) => {
        return <>
         <div key={id} className={`mt-8 w-1/2 ${id < 6 ? 'lg:w-1/4' : 'lg:w-1/3'}`}>
            <div className='flex justify-center items-center'>
                <img src={recruit.img} alt="" className='w-[100px] sm:w-[150px] lg:w-[170px] rounded-full'/>
            </div>
             <div className='text-center text-[.9rem]'>
                 <p className='text-blue-500'>Name</p>
                 <p>{recruit.name}</p>
             </div>
             <div className='text-center text-[.8rem]'>
                 <p className='text-blue-500'>Track</p>
                 <p>{recruit.track}</p>
             </div>
                <img src={star} alt="" className='mx-auto'/>
                <button className="flex mt-2 mx-auto bg-blue-500 text-white font-semibold py-[2px] px-3 rounded-md mb-2">View</button>
            </div>
        </>
      })}
    </div>
    <div className='capitalize border border-black p-2 mt-4 w-[320px] sm:w-[470px] mx-auto rounded text-center mb-6'>
       <div className="mx-auto flex items-center justify-center gap-[10px]">
       <p className=''>view more</p>
        <div className=''><CaretDown /></div>
       </div>
    </div>
    </div>
  );
}

export default TopRecruits;
