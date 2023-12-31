import { useState } from 'react';
import { CloseIcon, LogoIcon, MenuIcon } from "../utils/icons";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/data";



const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="bg-blue-500 py-5 lg:px-10 px-5 w-full relative z-30">
			<div className=" flex justify-between items-center">
				<div className="flex items-center">
					<h3 className='font-bold text-amber-950'>
						<Link to='/'>
							<LogoIcon />
						</Link>
					</h3>
				</div>
				{/* Desktop menu */}
				<ul className='lg:flex lg:flex-row flex-col items-center gap-10 hidden'>
					{navLinks.map((link, index) => {
						if (index > 0) {
							const { id, url, name } = link;
							return (
								<li key={id} className="text-white hover:text-base hover:font-bold transition-all">
									<Link
										to={url}
										onClick={closeMenu}
									>
										{name}
									</Link>
								</li>
							);
						}
						return null;
					})}
				</ul>
				<div className='md:flex gap-5 items-center hidden'>
					<Link
						to='/signup'
						className='border-2 py-2 px-6 border-white rounded-[10px] text-white font-bold transition-all hover:bg-white hover:text-black'
					>
						Sign Up
					</Link>
					<Link
						to='/login'
						className='border-2 py-2 px-6 border-white bg-white rounded-[10px] text-primaryBlue font-bold hover:bg-transparent hover:text-black transition-all '
					>
						Login
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-gray-300 focus:outline-none"
					>
						{isMenuOpen ? (
							" "
						) : (
							<MenuIcon />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
					} lg:hidden fixed top-0 left-0 h-[100vh] w-3/4 bg-blue-500 shadow-lg  transform transition-transform ease-in-out duration-300 z-50`}
			>
				<div className="p-4 z-20 relative">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-gray-300 focus:outline-none absolute top-4 right-4"
					>
						<div className='border rounded-full border-secondary'>
							<CloseIcon />
						</div>
					</button>

					<ul className="p-4 mt-12 space-y-5 ">
						{navLinks.map((link) => {
							const { id, url, name } = link
							return (
								<li key={id} className="text-white">
									<Link
										to={url}
										onClick={closeMenu}
									>
										{name}
									</Link>
								</li>
							)
						})}
					</ul>
					<div className='flex gap-5 px-4 items-start flex-col text-white'>
						<Link
							to='/signup'
						>
							Sign Up
						</Link>
						<Link
							to='/login'
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</nav >
	);
};

export default Header;
