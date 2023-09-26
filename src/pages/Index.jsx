import MainLayout from '../components/layout/MainLayout';
import ladyComp from '../assets/images/lady-comp.png';
import { BiSearch } from 'react-icons/bi';
const Home = () => {
  return (
    <MainLayout isLoggedIn={false}>
      <div className='main'>
        <div className='w-11/12 mx-auto'>
          <div className='flex my-10'>
            <div className='w-1/2 flex items-center'>
              <div className='w-full'>
                <p className='text-base font-bold text-primaryBlue'>
                  GET STARTED
                </p>
                <h2 className='text-[56px]'>
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
            <div className='w-1/2'>
              <div className='flex justify-end'>
                <div className='w-5/6'>
                  <img src={ladyComp} alt='lady staring at PC' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
