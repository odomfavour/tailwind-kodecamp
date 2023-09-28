import { CandidateIcon, CareerIcon, JobIcon, LocationIcon, SearchRecruitIcon, TopRecruitIcon } from "../utils/icons"

const Hero = () => {
	return (
		<>
			<div className="bg-customBg lg:h-[100vh] py-10 bg-cover flex flex-col justify-center relative">
				<div className="absolute inset-0 bg-black opacity-60"></div>
				<div className="w-10/12 mx-auto relative">
					<div className="lg:block hidden">
						<p className="text-xl text-white font-semibold">We have 4,000 best recruits for you, so you deserve!</p>
						<p className="text-white font-bold lg:text-[64px] ">Your Desired</p>
						<p className="text-white font-semibold lg:text-5xl">Recruit Is Waiting</p>
					</div>
					<div className="block lg:hidden">
						<p className="text-white font-bold text-xl w-[65%] ">Your Desired Recruit Is Waiting</p>
						<p className="text-base text-white font-normal">We have 4,000 best recruits for you, so you deserve!</p>
					</div>

					<div className="lg:py-4 py-3 lg:mb-1 mt-8 lg:text-lg text-sm text-white lg:px-8 px-3 lg:rounded-lg rounded-tr-md rounded-tl-md bg-primaryBlue lg:w-1/5 w-1/2 flex justify-center">
						<p>Find a Candidate</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-5 px-5 rounded-br-lg rounded-tr-lg rounded-bl-lg bg-white ">

						<div className="lg:w-[20%] lg:my-7 mt-5 ">
							<label htmlFor="career" className="block lg:hidden font-semibold pb-3">Choose a career</label>
							<div className="relative ">
								<div className="absolute top-1/2 left-2 transform -translate-y-1/2">
									<CareerIcon />
								</div>
								<select

									className="block w-full px-8 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-primaryBlue "
								>
									<option value="" disabled selected>Career</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
						</div>

						<div className="lg:my-7 lg:w-[20%] ">
							<label htmlFor="jobTypes" className="block lg:hidden font-semibold pb-3">Job Types</label>
							<div className="relative">
								<div className="absolute top-1/2 left-2 transform -translate-y-1/2">
									<JobIcon />
								</div>
								<select
									className="block w-full px-8 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-primaryBlue"

								>
									<option value="" disabled selected>Tob Type</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
						</div>


						<div className="lg:my-7 lg:w-[20%] ">
							<label htmlFor="location" className="block lg:hidden font-semibold pb-3">Location</label>
							<div className="relative">
								<div className="absolute top-1/2 left-2 transform -translate-y-1/2">
									<LocationIcon />
								</div>
								<select
									className="block w-full px-8 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-primaryBlue"


								>
									<option value="" disabled selected>Location</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
						</div>

						<div className="lg:w-[35%] w-full my-5 lg:flex lg:justify-end">
							<div>
								<button className="bg-primaryBlue w-full text-white py-3  px-20 rounded-lg hover:bg-blue-400 transition-all">Search</button>
							</div>
						</div>
					</div>
				</div>

			</div >

			<div className="py-16" >
				<div className="grid lg:grid-cols-3 gap-5 w-10/12 mx-auto">
					<div >
						<SearchRecruitIcon />
						<p className="text-base font-semibold pt-3">Search Thousands of Recruits</p>
						<p className="text-base text-[rgba(0,0,0,0.80)]">Browse from thousands of recruits
							we have on the website from variety
							of Tech tracks to meet your demand.</p>
					</div>
					<div >
						<TopRecruitIcon />
						<p className="text-base font-semibold pt-3">Top Recruits</p>
						<p className="text-base text-[rgba(0,0,0,0.80)]">Employ the best recruits based
							on reviews and merits from mentors
							on KodeCamp after undergoing
							diffeernt tasks from different stages.</p>
					</div>
					<div >
						<CandidateIcon />
						<p className="text-base font-semibold pt-3">Search Expert Candidates </p>
						<p className="text-base text-[rgba(0,0,0,0.80)]">Search for recruits based on a
							specific practice, project that best
							suit the job.</p>
					</div>
				</div>

			</div>
		</>
	)
}

export default Hero