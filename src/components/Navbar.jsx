const Navbar = () => {
	// const links = [
	// 	{ title: "Service", href: "/", img: "/service-white.svg" },
	// 	{ title: "Pricing", href: "/", img: "/price-white.svg" },
	// 	{ title: "Contact", href: "/", img: "/contact-white.svg" },
	// ];
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
								</div>
							</div>
						</div>
					</div>
					<div className='border-t border-gray-700' />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
