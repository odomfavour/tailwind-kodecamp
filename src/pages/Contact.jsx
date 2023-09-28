import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companySize, setCompanySize] = useState(0);
  const [salaryRange, setsalaryRange] = useState("");
  const [location, setLocation] = useState("");
  const [items, setitems] = useState([]);

  const id = crypto.randomUUID();
  const handleUpdate = (e) => {
    e.preventDefault();
    const newItems = {
      id,
      name,
      companyName,
      companyType,
      companySize,
      salaryRange,
      location,
    };
    console.log(newItems);
  };

  return (
    <div>
      <Header />
      <div className="mt-[40px] mb-[70px] container mx-auto px-[40px]">
        <div className="flex gap-10 items-center">
          <span className="border-l-[10px] w-2 h-[35px] border-[#2776EA] hidden lg:block"></span>
          <h2 className="font-bold md:text-[47px] lg:text-[48px]">
            Recruiter Account Information
          </h2>
        </div>
        <div className="border-b  h-[12px] border-[#000]"></div>
        <p className="my-4">
          Tell us about you. This information will not be shown to recuiters
        </p>

        <div className=" relative">
          <div className="overflow-hidden ">
            <div className="border rounded-xl bg-[#6FA4F1] h-[110px] md:h-[212px] relative ">
              <div className="bg-[#b4cdf3] rounded-full md:h-[265px] md:w-[267px] w-[130px] h-[200px] absolute bottom-[-140px] left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <div className="flex justify-center ">
            <img
              src="src/assets/images/youngman.png"
              alt=""
              className="max-w-[110px] md:max-w-[230px] absolute md:top-[106px] top-[60px]"
            />
          </div>
        </div>
        <form
          className="mt-[100px] md:mt-[195px]  flex flex-col items-center gap-[10px]"
          onSubmit={handleUpdate}
        >
          <div className="flex flex-col">
            <label className="my-3 font-bold">Name</label>
            <input
              type="text"
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] rounded outline-none px-[12px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">Company</label>
            <input
              type="text"
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] rounded outline-none px-[12px]"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">
              Type of company (e.g Fintech, E-commerce)
            </label>
            <input
              type="text"
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] rounded outline-none px-[12px]"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">Company Size</label>
            <input
              type="text"
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] rounded outline-none px-[12px]"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">Salary Range</label>
            <select
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] px-[12px] rounded outline-none"
              value={salaryRange}
              onChange={(e) => setsalaryRange(e.target.value)}
            >
              <option value="$20000 - $50000">$20000 - $50000</option>
              <option value="$50000 - $80000">$50000 - $80000</option>
              <option value="$80000 - $110000">$80000 - $110000</option>
              <option value="$110000 - $140000">$110000 - $140000</option>
              <option value="$140000 - $170000">$140000 - $170000</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">Location</label>
            <input
              type="text"
              className="w-[230px] md:w-[700px] bg-[#F5F5F5] h-[40px] rounded outline-none px-[12px]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-3 font-bold">About the company</label>
            <div className="w-[230px] md:w-[700px] bg-[#F5F5F5] p-[24px] rounded text-[13px] md:text-[20px]">
              <p className="my-5">
                At Trafford Technology, we are a diverse technology firm focused
                on how to solve society and humanity problems with the use of
                technology inclined solutions.
              </p>
              <p className="my-5">
                We are one of the leading tech firms in Ireland, ranked in
                forbes top 10 tech firms in Europe. An organisation aimed at
                fueling and enhancing all forms of which services should be
                rendered. The management team lead by Mr. Firo Luppi who has
                head many companies around the world, we recently built the
                fastest software appication for E-payment, also designed Robotic
                AI chips to help run machines without a driver due to advance in
                motion sensitivity.
              </p>
              <p className="my-5">
                Our staffs and Interns are people employed around the world,
                which soem of them work full time, partime or remotely, working
                40 hours per week. We continue on our trend in providing a
                sustainable world of AI eliminate human limitations.
              </p>
            </div>
          </div>
          <button className="border outline-none bg-[#2776EA] text-[#fff] px-[24px] py-[10px] rounded-lg my-[70px]">
            UPDATE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
