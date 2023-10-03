import MainLayout from '../components/layout/MainLayout';
import ladyComp from '../assets/images/lady-comp.png';
import companiesLogo from '../assets/images/companies-frame.png';
import companiesLogoSm from '../assets/images/companies-frame-sm.png';
import imgOne from '../assets/images/lp-img-1.png';
import imgTwo from '../assets/images/lp-img-2.png';
import imgThree from '../assets/images/lp-img-3.png';
import blogOne from '../assets/images/blog-1.png';
import blogTwo from '../assets/images/blog-2.png';
import blogThree from '../assets/images/blog-3.png';
import { BiSearch } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';
const Home = () => {
  return (
    <MainLayout isLoggedIn={true}>
      <div className='main'>
        <div className=' mx-auto w-11/12'>
          <div className='flex flex-col-reverse my-10 md:flex-row'>
            <div className='w-full md:w-1/2 flex items-center'>
              <div className='w-full'>
                <p className='text-[12px] text-base font-bold text-primaryBlue'>
                  GET STARTED
                </p>
                <h2 className='text-[26px] md:text-[56px]'>
                  <p className='font-bold'>Hire an expert &</p>
                  <p>get your job done!</p>
                </h2>
                <div className='mt-6'>
                  <form action=''>
                    <div className='flex items-center gap-3 w-full'>
                      <div className='w-5/6'>
                        <input
                          type='text'
                          className='border py-[13px] px-[21px] h-[56px] outline-none w-full bg-[#D4E4FB] border-l-4 rounded-[5px] border-l-primaryBlue'
                          placeholder='Search experts, Country'
                        />
                      </div>
                      <div>
                        <button className='h-[56px] w-[56px] flex justify-center items-center rounded-[10px] bg-primaryBlue text-white'>
                          <BiSearch />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='w-full mb-10 md:w-1/2'>
              <div className='item-center flex justify-center  md:justify-end'>
                <div className='w-5/6'>
                  <img src={ladyComp} alt='lady staring at PC' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mx-auto bg-[#D4E4FB] my-[100px] pt-8 pb-[60px]'>
          <div className='flex flex-col justify-center items-center gap-8'>
            <p className='font-bold text-[14px] text-[#08182F] md:text-[20px]'>Trusted by 10,000+ companies</p>
            <div className='w-full flex justify-center'>  
            <img src={companiesLogo} alt="companies logo" className='hidden md:block' />
            <img src={companiesLogoSm} alt="companies logo" className='md:hidden' />
            </div>
          </div>
        </div>

                        {/*Hire An Expert Section */}
        <div className='w-11/12 mb-20 mx-auto flex flex-col gap-0 items-center md:flex-row md:mb-40'>
          <div className="w-full items-center md:w-1/2">
            <div className='w-full h-full'>
              <img src={imgOne} alt="image of people in a meeting" />
            </div>
          </div>
          <div className="w-full md:w-1/2 py-8 flex flex-col">
                <div className='flex items-center gap-4 mb-7'>
                  <div className='border-l-[12px] border-[#2776EA] py-4'> </div>
                  <h2 className='text-[26px] md:text-[40px] font-bold'>Hire An Expert</h2>
                </div>
                <p className='text-[14px] w-5/6 font-normal mb-[50px] md:text-[22px]'>Let's match your recruiting needs with over 1000+ tech professionals, including designers, android developers, program managers, etc. Also, with Kodecamp, you can find the best candidates worldwide for positions like Data Scientists, Designers, Android Developers, etc. that meet your company's needs.</p>
                <button className='text-[14px] flex justify-center items-center bg-primaryBlue font-normal text-white h-[50px] w-[200px] rounded-[5px] gap-3 md:text-[22px]'>Find an expert <FaChevronRight/> </button>
          </div>
        </div>

                        {/*Why Clients Love Us Section*/}
        <div className='w-full mx-auto bg-[#D4E4FB] mb-28 py-24 md:mb-48'>
          <div className='w-11/12 mx-auto flex flex-col-reverse items-center md:flex-row'>
            <div className="w-full md:w-1/2 py-8 flex flex-col">
                  <div className='flex items-center gap-4 mb-7'>
                    <div className='border-l-[12px] border-[#2776EA] py-4'> </div>
                    <h2 className='text-[26px] md:text-[40px] font-bold'>Why Clients Love Us.</h2>
                  </div>
                  <p className='text-[14px] w-5/6 font-normal mb-[50px] md:text-[22px]'>At Kodecamp, we're committed to developing our IT talent and matching it with prospective customers and hiring managers. Additionally, over the past few years, we have had a 90% success rate in connecting our trainees with prospective customers and hiring managers from around the globe.</p>
                  <button className='text-[14px] flex justify-center items-center bg-primaryBlue font-normal text-white h-[50px] w-[200px] rounded-[5px] gap-3 md:text-[22px]'>Find an expert <FaChevronRight/> </button>
            </div>
            <div className="w-full items-center md:w-1/2">
              <div className='w-full h-full'>
                <img src={imgTwo} alt="image of people in a meeting"/>
              </div>
            </div>
          </div>
        </div>
        </div>

                        {/*What We Do Section */}
        <div className='w-11/12 mx-auto flex  flex-col mb-20 md:flex-row md:mb-48'>
          <div className="w-full items-center">
            <div className='w-full'>
              <img src={imgThree} alt="image of people in a meeting" />
            </div>
          </div>
          <div className="w-full py-8 flex flex-col md:w-1/2">
                <div className='flex items-center gap-4 mb-7'>
                  <div className='border-l-[12px] border-[#2776EA] py-4'> </div>
                  <h2 className='md:text-[40px] text-[26px] font-bold'>What We Do.</h2>
                </div>
                <p className='w-5/6 text-[14px] font-normal mb-[50px] md:text-[22px]'>At Kodecamp, we create successful client partnerships. We look for chances to organize training sessions for your staff. Our knowledgeable mentors are constantly accessible to help your employees train and develop their skills.</p>
                <button className='flex justify-center items-center bg-primaryBlue text-[14px] font-normal text-white h-[50px] w-[200px] rounded-[5px] gap-3 md:text-[22px]'>See More <FaChevronRight/> </button>
          </div>
        </div>

                      {/*Blog Section*/}
        <div className='w-full mx-auto bg-[#F5F5F5] py-4'>
        <div className='w-11/12 mx-auto'>
          <div className='flex items-center gap-4 mb-7'>
            <div className='border-l-[12px] border-[#2776EA] py-4'> </div>
            <h2 className='text-[26px] font-bold'>Blog</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4' >
            <div className=" md:col-span-2">
              <img className='w-full md:h-[484px] object-cover' src={blogOne} alt="Product design image" />
            </div>
            <div className=''>
              <img className='w-full object-cover ' src={blogTwo} alt="image of codes" />
            </div>
            <div>
                <img className='w-full object-cover' src={blogThree} alt="Ux research image" />
            </div>
          </div>
          <button className='mt-11 flex mx-auto justify-center items-center bg-primaryBlue text-[14px] font-normal text-white h-[50px] w-[200px] rounded-[5px] gap-3 md:text-[22px]'>Read More <FaChevronRight/> </button>
        </div>
        </div>        
      
    </MainLayout>
  );
};

export default Home;
