import { Routes, Route } from "react-router-dom";

import Home from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RecruitersInfo from "./pages/RecruitersInfo";
import Recruit from "./pages/Recruits";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/recruiter-info" element={<RecruitersInfo />} />
      <Route path="/recruits" element={<Recruit />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/developers" element={<Developers />} */}


    </Routes>
  );
}

export default App;
