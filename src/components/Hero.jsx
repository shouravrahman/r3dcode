import { MicIcon } from "lucide-react";

const Hero = () => {
	return (
		<div className='px-6 py-4 md:px-8 lg:px-12 w-full z-20 flex flex-col items-center justify-center text-text-dark gap-10 h-[90vh]'>
			<h1
				id='hero-text'
				className='w-full mx-auto mt-32 mb-10  md:text-[7rem] font-bold'
			>
				Convert audio to text
			</h1>
			<h3 className='text-xl'>
				Transcribe audio to text automatically right in your web browser
			</h3>
			<div className='flex justify-between mt-6'>
				<button
					type='button'
					className='flex items-center text-lg gap-2 px-8 py-4 mr-4 text-text-dark transition-all duration-500 loginbtn hover:bg-left rounded-lg cursor-pointer'
				>
					Transcribe
				</button>
				<button
					type='button'
					className='flex items-center text-lg gap-2 px-8 py-4 mr-2 text-text-dark transition-all duration-500 hover:bg-left rounded-lg postbtn cursor-pointer'
				>
					Pricing
				</button>
			</div>
			<div className='absolute bottom-0 right-0 z-[1]'>
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
							x1='13.65'
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

			<MicIcon className=' absolute bottom-6 right-7 h-96 w-96 text-gray-400' />
			<img src='/outline.svg' className='invert' alt='' />
		</div>
	);
};

export default Hero;
