const Hero = () => {
	return (
		<div className='px-6 py-4 md:px-8 lg:px-12 w-full h-[90vh] z-20 flex flex-col items-center text-text-dark gap-10'>
			<h1 id='hero-text' className=' mt-32 text-[8rem] font-bold'>
				Convert audio to text
			</h1>
			<h3 className='text-xl mt-20'>
				Transcribe audio to text automatically right in your web browser
			</h3>
			<div className='flex justify-between mt-10'>
				<button
					type='button'
					className='flex items-center gap-2 px-8 py-4 mr-2 text-text-dark transition-all duration-500 loginbtn hover:bg-left rounded-3xl'
				>
					Transcribe
				</button>
				<button
					type='button'
					className='flex items-center gap-2 px-8 py-4 mr-2 text-text-dark transition-all duration-500 hover:bg-left rounded-3xl postbtn'
				>
					Pricing
				</button>
			</div>
			<img
				src='/triunghiuri.png'
				className='absolute right-2 bottom-10 opacity-20'
				alt=''
			/>
			<img src='/outline.svg' className='invert' alt='' />
		</div>
	);
};

export default Hero;
