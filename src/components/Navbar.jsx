import { LayoutGrid } from "lucide-react";
import { LogIn } from "lucide-react";
import { Search } from "lucide-react";

const Navbar = () => {
	const links = [
		{ title: "Service", href: "/", img: "/service-white.svg" },
		{ title: "Pricing", href: "/", img: "/price-white.svg" },
		{ title: "Contact", href: "/", img: "/contact-white.svg" },
	];
	return (
		<header>
			<nav>
				<div className='flex items-center justify-between p-4 border-b border-transition'>
					<div className='flex items-center gap-4'>
						<div>
							<img
								src='/logo-white.png'
								alt=''
								className='w-32 object-contain'
							/>
						</div>

						<div className='hidden xl:block'>
							<div className='flex items-center p-2 border rounded-3xl bg-slate-100'>
								<Search className='w-4 h-4 mr-2' />
								<input
									type='text'
									placeholder='Search Rides'
									className=' text-blue-900 outline-none w-72 bg-slate-100 placeholder:text-blue-900 placeholder:bg-slate-100'
								/>
							</div>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='hidden lg:block'>
							<ul className='flex items-center justify-center text-sm text-blue-900'>
								{links?.map((link, idx) => (
									<li
										key={idx}
										className='text-center pt-2 mr-6 iconChange hover:after:bg-blue-600 hover:after:w-[100%] after:transition-all after:duration-300 after:m-auto after:h-[3px] after:w-0 after:block'
									>
										<a href={link.href}>
											<div className='flex overflow-hidden w-9 '>
												<img
													src={link.img}
													alt='logo'
													className='w-6 h-6 mx-2 transition-all duration-500'
												/>
												<img
													src={link.img}
													alt=''
													className='w-6 h-6 mx-2 transition-all duration-500'
												/>
											</div>
											<div className='text-text-dark'>{link.title}</div>
										</a>
									</li>
								))}
							</ul>
						</div>
						{/* <div className='xl:hidden'>
							<div className='flex items-center justify-center w-8 h-8 mr-4 rounded-full bg-slate-100'>
								<img
									className='w-4 h-4'
									src='/static_files/svgs5/magnify.black.svg'
									alt='search'
								/>
							</div>
						</div> */}
						<div className='flex items-center'>
							<button
								type='button'
								className='flex items-center gap-2 px-4 py-2 mr-2 text-text-dark transition-all duration-500 loginbtn hover:bg-left rounded-3xl'
							>
								Login
								<LogIn className='hidden sm:block' />
							</button>
							<div>
								<LayoutGrid className='w-10 h-10 text-text-dark lg:inline-block' />
							</div>
						</div>
					</div>
				</div>
			</nav>

			<nav id='secondNav' className='text-blue-900 lg:hidden'>
				<div className='fixed bottom-0 left-0 right-0 p-2 shadow bg-slate-50'>
					<ul className='flex items-center justify-between'>
						<li>
							<a href='#'>
								<div className='w-6 h-6 mx-auto text-center text-text-dark bg-blue-700 rounded-full'>
									DB
								</div>
								<div className='text-sm'>DBook</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/book.svg'
									alt='book'
								/>
								<div className='text-sm'>Book</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/dpad.svg'
									alt='Navigate'
								/>
								<div className='text-sm'>Navigate</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/bar-chart.svg'
									alt='bar-chart'
								/>
								<div className='text-sm'>Stats</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/lightbulb.svg'
									alt='lightbulb'
								/>
								<div className='text-sm'>Idea</div>
							</a>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/briefcase.svg'
									alt='briefcase'
								/>
								<div className='text-sm'>Career</div>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
