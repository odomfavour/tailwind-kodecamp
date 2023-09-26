import { useState } from 'react';
import { CloseIcon, LogoIcon, LogoutIcon, MenuIcon, MessageIcon, NotificationIcon, ProfileIcon } from "../utils/icons";
import { Link } from "react-router-dom";
import { loggedIn, navLinks } from "../utils/data";

const iconMap = {
	Message: MessageIcon,
	Notification: NotificationIcon,
	Profile: ProfileIcon,
	Logout: LogoutIcon,
};

const LoggedInNavbar = () => {
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
				<ul className='lg:flex lg:flex-row flex-col items-center gap-10 hidden'>
					{loggedIn.map((navLink) => {
						const { id, url, name } = navLink;
						const IconComponent = iconMap[name];
						return (
							<li key={id} className="flex items-center gap-2">
								<Link to={url}
									onClick={closeMenu}
									className='text-white hover:text-base hover:font-bold transition-all'>
									{name}
								</Link>
								<div>
									{IconComponent && <IconComponent />}
								</div>
							</li>
						);
					})}
				</ul>

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
					<ul className='px-4 space-y-5 '>
						{loggedIn.map((navLink) => {
							const { id, url, name } = navLink;
							const IconComponent = iconMap[name];
							return (
								<li key={id} className="lg:flex items-center gap-2">
									<Link to={url}
										onClick={closeMenu}
										className='text-white'>
										{name}
									</Link>
									<div className='hidden lg:block'>
										{IconComponent && <IconComponent />}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav >
	);
};

export default LoggedInNavbar;
