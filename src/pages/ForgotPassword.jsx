import password from "../assets/images/password.png"
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
      <div><img className="w-[2rem] ml-10 mt-3"  src={logo} alt="LOGO" /></div>
    <div className="min-h-screen flex flex-col items-center font-inter  justify-center ">
      <div className="  rounded-[8px] border-[#6FA4F1] border-solid border w-[55%]">
        <div className="bg-[#2776EA] p-3 rounded-t-[7px] text-white "><h2 className="font-white-400 text-2xl font-semibold bg-blue text-center">Forgot Password ? </h2></div>
        <div className="flex flex-col my-0 mx-auto w-[75%] text-[#555555]">
          <div className="flex flex-col justify-center items-center p-5" >
            <img src={password} alt="thinking" className=" w-[10rem]" />
            <p className="text-center "> Don/'t worry, simply enter your email address and your new password, we will assist you in resetting your password.</p>
          </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold py-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="border rounded px-3 py-2 w-full outline-none"
              />
                          <label htmlFor="password" className="block  font-bold py-2">Enter New Password</label>
            <input
              type="password"
              id="password"
                name="password"
                placeholder="Enter New Password"
              className="border rounded px-3 py-2 w-full outline-none"
              />
                          <label htmlFor="password" className="block  font-bold py-2">Confirm New Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Confirm New Password"
              className="border rounded px-3 py-2 w-full outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-20 py-2 rounded hover:bg-blue-600 mx-[30%] mb-5"
          >
            Send
          </button>
          </form>
        </div>
        </div>
       <div className=" flex w-[55%] justify-between pt-5 font-inter font-[400]">
          <div>< Link to="/login" className="text-blue-600 font-inter font-[600] flex"> Back to Sign in</Link></div>
          <div> Don't have an account? <Link to="/signup" className="text-blue-600 font-inter font-[600]"> Sign up</Link></div>
        </div>
    </div>
    </>
  );
};

export default ForgotPassword;
