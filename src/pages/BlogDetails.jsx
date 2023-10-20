import { useState, useEffect } from 'react';
import MainLayout from '../components/layout/MainLayout';
import blogHeader from '../assets/images/blog-header.png';
import blogHeaderMobile from "../assets/images/blog-header-mobile.png";
import blogImage from '../assets/images/blog-image.png';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const BlogDetails = () => {
    const [bgImage, setBgImage] = useState(blogHeader);

    useEffect(() => {
      const isMobile = window.innerWidth < 768; 
      setBgImage(isMobile ? blogHeaderMobile : blogHeader);
    }, []);

  return (
    <MainLayout isLoggedIn={true}>
        <>
        <div>
            <section
            className="hero-blog h-96 md:h-[296px] opacity-90 bg-[#e8e1e1] bg-cover bg-center md:bg-none md:mb-[40px] "
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
            >
                <div className="h-full opacity-90 bg-[#2B2B2B] text-white grid place-items-center">
                    <h1 className="text-[28px] md:text-[56px] font-bold leading-[33.6px] md:leading-[64px] mt-[-120px] md:mt-0">
                    Our Blog
                    </h1>
                </div>
            </section>

            <section className="w-11/12 mx-auto mb-[30px] ">
                <div className="h-[36px] md:h-[56px] flex justify-between mb-[30px] ">
                    <div className="hidden md:flex">
                        <p className="text-[14px] md:text-[18px] leading-[28.8px] md:leading-[48px] font-semibold text-primaryBlue"><Link to={'/'}>Back</Link>
                        </p>
                    </div>
                    <form
                    action=""
                    className=" absolute top-[300px] right-6 left-6  md:static  "
                    >
                        <div className="flex items-center gap-3 w-full">
                            <div className="w-full md:w-5/6 lg:w-[403px] ">
                            <input
                                type="text"
                                className="border py-[13px] px-[21px] h-[56px] outline-none w-full bg-[#D4E4FB] border-l-4 rounded-[5px] border-l-primaryBlue"
                                placeholder="Search experts, Country"
                            />
                            </div>
                            <div>
                            <button className="h-[56px] w-[56px] flex justify-center items-center rounded-[10px] bg-primaryBlue text-white">
                                <BiSearch />
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <div className='py-3 lg:py-6 w-11/12 mx-auto'>
                <p className='border-l-4 border-l-primaryBlue font-bold sm:text-2xl lg:text-3xl text-gray-500 pl-3'>Business</p>
                <img src={blogImage} className='w-full pt-6 sm:pt-12 lg:pt-12 h-[270px] md:h-[500px] lg:h-[600px]' alt="blog image" />
                <h2 className='py-6 sm:py-12 lg:py-12 font-bold text-2xl sm:text-4xl lg:text-4xl'>Retracing Our Steps in the Design Industry</h2>
                <p className=''>Tech transformation isn’t just a buzzword, it has become a way of being given the ever-increasing way of providing solution to companies, staying on top of the tech game is important for our company.<br></br><br></br><br></br> A lot is happening in all business areas, food, fashion, automotive or any service company but also in tech. And, perhaps, it is more difficult in this tech sector, If you want to maintain a pace in what's really going on in the tech world, at Kodecamp you'll find out. Our business and tech news columns are a great source for staying in the loop. A large part of a company blog is to educate customers on product and solutions, and ways to get tech support (product updates or features).<br></br><br></br><br></br> Company inspires readers to think beyond traditional boundaries to create the future of business. Design prnciples have always been a major factor in creating the outlook of many business models. Most companies in the third world country list depend solely on involving the design industry to speed up other business areas such as Digital Marketing, Market Research, Innovations which help to raise their standards in the Global econony.</p>
            </div>
        </div>
    </>
    </MainLayout>
  )
}

export default BlogDetails;