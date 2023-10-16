// import AuthHeader from '../components/AuthHeader';
import MainLayout from '../components/layout/MainLayout';
import ShortHero from '../components/about_page_comoponents/ShortHero';
import AboutKodecamp from '../components/about_page_comoponents/About-kodecamp';
import Vision from '../components/about_page_comoponents/vision';
import Mission from '../components/about_page_comoponents/Mission';
import Team from '../components/about_page_comoponents/Team';
// import Header from '../components/Header';

// import {vision} from '../assets/images/vision.png';
// import {wawBg} from '../assets/images/waw-bg.png';

const About = () => {
  return (
    <section>
      {/* <AuthHeader />  */}
      <MainLayout isLoggedIn={true}>
        <div
        className='w-screen'>
          <ShortHero text='Who we are' />
          <AboutKodecamp/>
          <Vision/>
          <Mission/>
          <Team/>
        </div>
      </MainLayout>
    </section>
  );
};

export default About;
