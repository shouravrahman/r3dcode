const Testimonials = () => {
	return (
		<section className='dark:bg-testimonial-bg-dark dark:text-gray-100 rounded-lg relative z-20'>
			<div className='container px-6 py-12 mx-auto'>
				<div className='grid items-center gap-4 xl:grid-cols-5'>
					<div className='max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left'>
						<h2 className='text-4xl font-bold'>
							Duo assum utroque appetere an
						</h2>
						<p className='dark:text-gray-400'>
							Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
							ei diceret alienum, et sit cetero malorum. Et sea iudico
							consequat, est sanctus adipisci ex.
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
										An audire commodo habemus cum. Ne sed corrumpit repudiandae.
										Tota aliquip democritum pro in, nec democritum intellegam
										ne. Propriae volutpat dissentiet ea sit, nec at lorem inani
										tritani, an ius populo perfecto vituperatoribus. Eu cum case
										modus salutandi, ut eum vocent sensibus reprehendunt.
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
										Sit wisi sapientem ut, pri civibus temporibus voluptatibus
										et, ius cu hinc fabulas. Nam meliore minimum et, regione
										convenire cum id. Ex pro eros mucius consectetuer, pro magna
										nulla nonumy ne, eam putent iudicabit consulatu cu.
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
										Putant omnium elaboraret per ut. Id dicta tritani nominavi
										quo, mea id justo errem elaboraret. Agam mollis scripserit
										ea his, ut nec postea verear persecuti. Ea noster senserit
										eam, ferri omittantur ei nec. Id mel solet libris
										efficiantur, commune explicari et eos. Case movet ad est,
										sed tota vocent appetere ea.
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
										Te omnes virtute volutpat sed. Ei esse eros interesset vel,
										ei populo denique ocurreret vix, eu cum pertinax mandamus
										vituperatoribus. Solum nihil luptatum per ex, ei amet
										viderer eos. Ea illum labitur mnesarchum pro. Eius meis
										salutandi ei nam, alterum expetenda et nec. Expetenda
										intellegat at eum, per mazim sanctus honestatis ad. Ei
										noluisse invenire vix. Te ancillae patrioque qui, probo
										bonorum vivendum ex vim.
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
