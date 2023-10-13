import { Routes, Route } from "react-router-dom";

import Home from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:blogId" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
