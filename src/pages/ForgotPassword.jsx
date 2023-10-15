import password from "../assets/images/password.png"
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';
import validator from "validator";
import { useState } from "react";


const ForgotPassword = () => {
   const [email, setEmail] = useState(" ")
  const [passwrd, setPasswrd] = useState(" ")
  const [emailmsg, setEmailmsg] = useState(" ")
  const [passwordmsg, setPasswordmsg] = useState(" ")
  const [confirmPWD, setConfirmPWD] = useState(" ")
  

  const forgetpwd = (e) => {
   e.preventDefault();
  let type = e.target.type
     try {
    if (type === "password" && (e.target.value)) {
       if (!/^(?=.*[A-Z])(?=.*[0-9@$!%*#?&()[\]{}\-_.,:;^=+])[a-zA-Z0-9@$!%*#?&()[\]{}\-_.,:;^=+]*$/.test(e.target.value)) throw new Error("Password issues")
       }
       if (type === "email") {if (!validator.isEmail(email)) {
      alert("Please, enter valid Email!");
      return;
    }
        
       }
   
  } catch (error) {
    console.error(error);
  }
  
  }
  
  return (
    <>
      <div><img className="w-[2rem] ml-10 mt-3 sm:m-3"  src={logo} alt="LOGO" /></div>
    <div className="min-h-screen flex flex-col items-center font-inter  justify-center ">
      <div className="  rounded-[8px] border-[#6FA4F1] border-solid border lg:w-[55%] md:w-[75%] sm:w-[90%]">
        <div className="bg-[#2776EA] p-3 rounded-t-[7px] text-white "><h2 className="font-white-400 text-2xl font-semibold bg-blue text-center">Forgot Password ? </h2></div>
        <div className="flex flex-col my-0 mx-auto w-[75%] text-[#555555]">
          <div className="flex flex-col justify-center items-center p-5" >
            <img src={password} alt="thinking" className=" w-[10rem]" />
            <p className="text-center "> Don't worry, simply enter your email address and your new password, we will assist you in resetting your password.</p>
          </div>
        <form onSubmit={forgetpwd}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold py-2">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="border rounded px-3 py-2 w-full outline-none"
              />
                          <label htmlFor="password" className="block  font-bold py-2">Enter New Password</label>
                <input
                  onChange={(e) => setPasswrd(e.target.value)}
              type="password"
              id="password"
                name="password"
                placeholder="Enter New Password"
              className="border rounded px-3 py-2 w-full outline-none"
              />
                          <label htmlFor="password" className="block  font-bold py-2">Confirm New Password</label>
                <input
                  onChange={(e) => setConfirmPWD(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Confirm New Password"
              className="border rounded px-3 py-2 w-full outline-none"
            />
          </div>
         <div className="md:w-[55%] lg:w-[40%] my-0 mx-auto mb-5"> <button
            type="submit"
            className="bg-blue-500 text-white px-20 py-2 rounded hover:bg-blue-600  "
          >
            Send
          </button> </div>
          </form>
        </div>
        </div>
       <div className="flex justify-between items-center w-[100%] lg:w-[55%] md:w-[75%] mt-2">
          < Link to="/login" ><div className="text-blue-600 font-inter md:font-[600] lg:text-[16px]  md:text-[12px] text-[10px] font-[400]"> Back to Sign in </div></Link>
          <div className="lg:text-[16px]  md:text-[12px]  text-[10px]"> Don't have an account? <Link to="/signup" className="text-blue-600 font-inter md:font-[600] lg:text-[16px]  md:text-[12px] text-[10px] font-[400]"> Sign up</Link></div>
        </div>
    </div>
    </>
  );
};

export default ForgotPassword;
