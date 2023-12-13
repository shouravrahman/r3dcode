const Testimonials = () => {
	return (
		<section className='dark:bg-testimonial-bg-dark dark:text-gray-100 rounded-lg relative z-20'>
			<div className='container px-6 py-12 mx-auto'>
				<div className='grid items-center gap-4 xl:grid-cols-5'>
					<div className='max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left'>
						<h2 className='text-4xl font-bold'>Insights from our clients</h2>
						<p className='dark:text-gray-400'>
							"Exceptional service and top-notch quality! Our experience with
							SonicScribe has been nothing short of amazing. They truly
							understand our needs and deliver outstanding results. Highly
							recommended!"
						</p>
					</div>
					<div className='absolute bottom-0 right-0 z-[-1]'>
						<svg
							width='1440'
							height='886'
							viewBox='0 0 1440 886'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								opacity='0.5'
								d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
								fill='url(#paint0_linear)'
							/>
							<defs>
								<linearGradient
									id='paint0_linear'
									x1='1308.65'
									y1='1142.58'
									x2='602.827'
									y2='-418.681'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#3056D3' stopOpacity='0.36' />
									<stop offset='1' stopColor='#F5F2FD' stopOpacity='0' />
									<stop offset='1' stopColor='#F5F2FD' stopOpacity='0.096144' />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className='p-6 xl:col-span-3'>
						<div className='grid gap-4 md:grid-cols-2'>
							<div className='grid content-center gap-4'>
								<div className='p-6 rounded-lg shadow-md dark:bg-gray-900'>
									<p>
										"As a content creator, time is of the essence. This
										audio-to-text converter has revolutionized my workflow. It's
										incredibly fast and remarkably accurate, allowing me to
										transcribe lengthy interviews in minutes. Say goodbye to
										tedious manual transcriptions!"
									</p>
									<div className='flex items-center mt-4 space-x-4'>
										<img
											src='https://source.unsplash.com/50x50/?portrait?1'
											alt=''
											className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
										/>
										<div>
											<p className='text-lg font-semibold'>Leroy Jenkins</p>
											<p className='text-sm dark:text-gray-400'>
												CTO of Company Co.
											</p>
										</div>
									</div>
								</div>
								<div className='p-6 rounded-lg shadow-md dark:bg-gray-900'>
									<p>
										"Reliability is everything in my line of work, and this
										converter has never let me down. Whether it's a one-minute
										clip or an hour-long interview, the accuracy remains
										consistent. Dependable, accurate, and an absolute
										game-changer."
									</p>
									<div className='flex items-center mt-4 space-x-4'>
										<img
											src='https://source.unsplash.com/50x50/?portrait?2'
											alt=''
											className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
										/>
										<div>
											<p className='text-lg font-semibold'>Leroy Jenkins</p>
											<p className='text-sm dark:text-gray-400'>
												CTO of Company Co.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='grid content-center gap-4'>
								<div className='p-6 rounded-lg shadow-md dark:bg-gray-900'>
									<p>
										"What sets this audio-to-text converter apart is its
										seamless integration with various platforms. It effortlessly
										converts audio files into text, making it a valuable tool
										for bloggers, journalists, and anyone looking to repurpose
										content. Versatile and efficient – a must-have tool for
										content creators."
									</p>
									<div className='flex items-center mt-4 space-x-4'>
										<img
											src='https://source.unsplash.com/50x50/?portrait?3'
											alt=''
											className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
										/>
										<div>
											<p className='text-lg font-semibold'>Leroy Jenkins</p>
											<p className='text-sm dark:text-gray-400'>
												CTO of Company Co.
											</p>
										</div>
									</div>
								</div>
								<div className='p-6 rounded-lg shadow-md dark:bg-gray-900'>
									<p>
										"I've tried various audio-to-text converters, but none match
										the simplicity and accuracy of this tool. The user-friendly
										interface makes transcription a breeze, and the precision is
										unparalleled. A must-have for anyone dealing with audio
										content."
									</p>
									<div className='flex items-center mt-4 space-x-4'>
										<img
											src='https://source.unsplash.com/50x50/?portrait?4'
											alt=''
											className='w-12 h-12 bg-center bg-cover rounded-full'
										/>
										<div>
											<p className='text-lg font-semibold'>Leroy Jenkins</p>
											<p className='text-sm dark:text-testimonial-citation'>
												CTO of Company Co.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
