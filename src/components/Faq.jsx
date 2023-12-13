import { ArrowDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
	return (
		<section className='relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-background-dark lg:pb-[90px] lg:pt-[120px]'>
			<div className='container mx-auto'>
				<div className='-mx-4 flex flex-wrap'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
							<span className='mb-2 block text-lg font-semibold text-primary dark:text-text-dark/50'>
								FAQ
							</span>
							<h2 className='mb-4 text-3xl font-bold text-dark dark:text-text-dark sm:text-[40px]/[48px]'>
								Any Questions? Look Here
							</h2>
							<p className='text-base text-body-color dark:text-text-dark/70'>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form.
							</p>
						</div>
					</div>
				</div>

				<div className='-mx-4 flex flex-wrap'>
					<div className='w-full px-4 lg:w-1/2'>
						<AccordionItem
							header='Q: How accurate is your audio-to-text converter?'
							text='A: Our converter boasts a high level of accuracy, thanks to advanced algorithms and continuous improvement. We strive for precision, ensuring reliable and error-free transcriptions.'
						/>
						<AccordionItem
							header='Q: What audio formats does your converter support?'
							text='A: Our converter supports a wide range of audio formats, including MP3, WAV, AIFF, and more. You can easily upload your files, and the converter will seamlessly process them.'
						/>
						<AccordionItem
							header='Q: Is there a limit to the length of audio files I can transcribe?'
							text='A: While some converters have limitations, ours is designed to handle both short clips and longer recordings. There’s no strict duration limit allowing you to transcribe various lengths of audio content.'
						/>
					</div>
					<div className='w-full px-4 lg:w-1/2'>
						<AccordionItem
							header='Q: How do I access the transcribed text after conversion?'
							text='A: Once your audio file is processed, you’ll receive a notification. You can then download the transcribed text directly from our platform. Additionally, we offer options for cloud storage and easy sharing.'
						/>
						<AccordionItem
							header='Q: Can I use your service for multiple languages?'
							text='A: Absolutely. Our audio-to-text converter supports multiple languages, making it versatile for users with diverse linguistic needs. Choose the language settings that match your audio content for accurate transcriptions.'
						/>
						<AccordionItem
							header='Q: What measures do you have in place to ensure data security and privacy?'
							text='A: We prioritize the security and privacy of your data. Our platform employs encryption protocols, and we adhere to strict data protection standards. Your files and transcriptions are handled with the utmost confidentiality.'
						/>
					</div>
				</div>
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
		</section>
	);
};

export default Faq;

const AccordionItem = ({ header, text }) => {
	const [active, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!active);
	};
	return (
		<div className='mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-background-dark dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8'>
			<button
				className={`faq-btn flex w-full text-left`}
				onClick={() => handleToggle()}
			>
				<div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-ic dark:bg-white/5'>
					<ArrowDown
						className={`w-6 h-6 text-text-dark duration-200 ease-in-out ${
							active ? "rotate-180" : ""
						}`}
					/>
				</div>

				<div className='w-full'>
					<h4 className='mt-1 text-lg font-semibold text-dark dark:text-text-dark'>
						{header}
					</h4>
				</div>
			</button>

			<div
				className={`pl-[62px] duration-200 ease-in-out ${
					active ? "block" : "hidden"
				}`}
			>
				<p className='py-3 text-base leading-relaxed text-body-color dark:text-text-dark/50'>
					{text}
				</p>
			</div>
		</div>
	);
};
