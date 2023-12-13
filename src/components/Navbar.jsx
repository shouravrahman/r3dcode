import { LayoutGrid } from "lucide-react";
import { LayoutGridIcon } from "lucide-react";
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
				<div className='bg-[#1E293B]'>
					<div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex items-center justify-between h-16'>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<img
										alt='Logo'
										className='h-8 w-8'
										height='32'
										src='/logo-white.png'
										style={{
											aspectRatio: "32/32",
											objectFit: "cover",
										}}
										width='32'
									/>
								</div>
								<div className='hidden md:block'>
									<div className=' flex items-baseline space-x-4'>
										<a
											className='text-white px-3 py-2 rounded-md text-lg font-medium'
											href='#'
										>
											SonicScribe
										</a>
									</div>
								</div>
							</div>
							<div className='hidden md:block'>
								<div className='ml-4 flex items-center md:ml-6'>
									<a
										className='text-white px-3 py-2 rounded-md text-lg font-medium'
										href='#'
									>
										Service
									</a>
									<a
										className='text-white px-3 py-2 rounded-md text-lg font-medium'
										href='#'
									>
										Pricing
									</a>
									<a
										className='text-white px-3 py-2 rounded-md text-lg font-medium'
										href='#'
									>
										Contact
									</a>
									<button className='text-white bg-blue-600 hover:bg-blue-700 ml-4 px-3 py-2 rounded-md text-lg font-medium'>
										Login
									</button>
									{/* <div className='ml-3 relative'>
										<div className='relative inline-block text-left'>
											<div>
												<button className='bg-blue-800 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'>
													<LayoutGridIcon className='h-6 w-6' />
												</button>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<div className='border-t border-gray-700' />
				</div>
			</nav>

			{/* <nav id='secondNav' className='text-blue-900 lg:hidden'>
				<div className='fixed bottom-0 left-0 right-0 p-2 shadow bg-slate-50'>
					<ul className='flex items-center justify-between'>
						<li>
							<Link href='#'>
								<div className='w-6 h-6 mx-auto text-center text-text-dark bg-blue-700 rounded-full'>
									DB
								</div>
								<div className='text-lg'>DBook</div>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/book.svg'
									alt='book'
								/>
								<div className='text-lg'>Book</div>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/dpad.svg'
									alt='Navigate'
								/>
								<div className='text-lg'>Navigate</div>
							</Link>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/bar-chart.svg'
									alt='bar-chart'
								/>
								<div className='text-lg'>Stats</div>
							</Link>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/lightbulb.svg'
									alt='lightbulb'
								/>
								<div className='text-lg'>Idea</div>
							</Link>
						</li>
						<li>
							<a href='#'>
								<img
									className='w-5 h-5 mx-auto'
									src='/static_files/svgs5/briefcase.svg'
									alt='briefcase'
								/>
								<div className='text-lg'>Career</div>
							</Link>
						</li>
					</ul>
				</div>
			</nav> */}
		</header>
	);
};

export default Navbar;
