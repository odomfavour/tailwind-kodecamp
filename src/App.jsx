import { Routes, Route } from "react-router-dom";

import Home from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import ForgotPassword from './pages/ForgotPassword';
import Blog from "./pages/Blog";
import Recruit from "./pages/Recruits";
import Contact from "./pages/Contact";
import RecruitDetails from "./pages/RecruitDetails";
import RecruitersInfo from "./pages/RecruitersInfo";
import Developers from "./pages/Developers";
import Messaging from "./pages/Messaging";

import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import Designers from "./pages/Designers";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
      <Route path="/recruits" element={<Recruit />} />
      <Route path="/recruits/:recruitId" element={<RecruitDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/recruiter-info" element={<RecruitersInfo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:blogId" element={<BlogDetails />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/designers" element={<Designers />} />
    </Routes>
  );
}
export default App;
