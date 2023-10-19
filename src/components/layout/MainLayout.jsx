import Header from "../Header";
import Footer from "../Footer";
// import MobileHeader from '../MobileHeader';
import PropTypes from "prop-types";
import LoggedInNavbar from "../LoggedInNavbar";

const MainLayout = ({ children, isLoggedIn }) => {
  return (
    <div className="relative">
      {isLoggedIn ? <LoggedInNavbar /> : <Header />}
      {/* <div className='absolute top-0 z-30 w-full'>
        <MobileHeader />
      </div> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MainLayout;
