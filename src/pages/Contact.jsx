import { useState } from "react";
// import Header from "../components/Header";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Location from "../assets/Icons/Location.svg";
import Call from "../assets/Icons/Call.svg";
import Email from "../assets/Icons/Email.svg";
import ContactHero from "../assets/images/ContactHero.png";
// import Rec from "../assets/images/Rec.png";

const Contact = () => {
  const [ContactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const FormInput = (e) => {
    setContactForm({ ...ContactForm, [e.target.id]: e.target.value });
  };

  const checkForm = () => {
    return ContactForm.name && ContactForm.email && ContactForm.message;
  };

  return (
    <>
      <LoggedInNavbar />

      <section className="w-11/12 mx-auto mt-36 md:mt-14 max-sm:mt-9 max-container">
        <div className="flex max-sm:flex-col  ">
          <div className="w-2/5 font-Inter max-sm:w-full">
            <p className="text-[56px] font-bold leading-normal max-sm:text-[28px]">
              Lets Talk
            </p>
            <p className="text-[16px] max-sm:text-[14px] leading-normal mt-3">
              If you have any questions, just fill in the contact form, and we
              will answer you shortly, or come visit KodeCamp at our comfortable
              offices.
            </p>
          </div>
          <div className="w-1/2 ms-auto font-Inter max-sm:w-9/12 max-sm:ms-3 max-sm:absolute max-sm:top-[184%]  max-sm:h-[50vh]">
            <div>
              <p className="uppercase text-[20px] max-md:text-[16px] font-bold ">
                Contact Us
              </p>
            </div>
            <ul className="max-sm:text-[14px] list-none block font-Inter">
              <li className="flex items-center max-sm:gap-5 md:gap-5 gap-10 my-4">
                <span>
                  <img src={Location} alt="" />
                </span>{" "}
                <span> 38, Afaha Uqua Road, Eket, Akwa-Ibom State</span>{" "}
              </li>

              <li className="flex gap-10 max-sm:gap-5 md:gap-5">
                {" "}
                <span>
                  <img src={Call} alt="" />
                </span>{" "}
                <span>+234|812-8555-785</span>
              </li>
              <li className="flex gap-10 md:gap-5 my-4 max-sm:gap-5">
                {" "}
                <span>
                  {" "}
                  <img src={Email} alt="emailIcon" />{" "}
                </span>{" "}
                <span>kodecamp@gottalent.com</span>{" "}
              </li>
            </ul>
            <div className="flex items-center xl:w-5/12 max-sm:w-9/12 md:w-9/12 mt-8 justify-between">
              <p className="text-[20px] max-sm:text-[16px] font-bold leading-6">
                Follow us
              </p>
              <FaFacebookSquare className="text-xl rounded-[90%]" />
              <AiFillTwitterCircle className="text-xl" />
              <AiFillInstagram className="text-xl" />
            </div>
          </div>
        </div>
      </section>

      <div className="Contact-section mt-[4.666667%] max-sm:mt-[10%] my-20">
        <div className="absolute w-full h-[726px]  bg-gray-400 opacity-50 max-lg:hidden z-10"></div>{" "}
        <img
          src={ContactHero}
          alt="Shoe Collection"
          width=""
          className=" absolute object-cover h-auto -z-10 max-md:hidden"
        />
        <div className="w-11/12 flex justify-end max-sm:justify-center  md:items-center lg:items-center mx-auto lg:h-[726px] md:h-[600px] max-sm:w-full">
          <form className="w-5/12 max-sm:w-11/12 bg-white absolute lg:rounded-[5px] max-sm:rounded-xl max-sm:opacity-80 max-sm:bg-gray-100 z-20 xl:px-8 md:px-6 md:py-8 xl:py-12 pb-5 max-sm:px-3 max-sm:pt-10 mx-auto ">
            <div className="mb-2 xl:mb-6">
              <label
                htmlFor="name"
                className="text-[14px] font-bold font-Inter leading-8 hidden max-sm:block"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="input-secondary"
                placeholder="Name"
                onChange={FormInput}
                value={ContactForm.name}
                required
              />
            </div>
            <div className="mb-2 xl:mb-6">
              <label
                htmlFor="name"
                className="hidden max-sm:block font-bold font-Inter leading-10 text-[14px]"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="input-secondary"
                placeholder="Email Address"
                onChange={FormInput}
                value={ContactForm.email}
                required
              />
            </div>

            <div className="mb-2 xl:mb-6">
              <label
                htmlFor="name"
                className="text-[14px] font-bold hidden font-Inter leading-10 max-sm:block"
              >
                Message:
              </label>
              <textarea
                placeholder="Message"
                name="Message"
                className="input-secondary"
                id="message"
                onChange={FormInput}
                value={ContactForm.message}
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-[#3b7cdd] max-sm:mt-20 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center disabled:opacity-30"
              disabled={!checkForm()}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
