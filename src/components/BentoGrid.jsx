const BentoGrid = () => {
	return (
		<div className='grid mx-auto py-12 px-4 w-[70vw] auto-rows-[300px] grid-cols-3 gap-4'>
			<div
				className={`col-span-3 rounded-xl shadow-lg bg-neutral-100 p-4 dark:bg-[#1D273E]             
               `}
			></div>
			<div
				className={`col-span-3 md:col-span-1 rounded-xl shadow-lg bg-neutral-100 p-4 dark:bg-[#1D273E]             
               `}
			></div>
			<div
				className={`col-span-3 md:col-span-2 rounded-xl shadow-lg bg-neutral-100 p-4 dark:bg-[#1D273E]             
               `}
			></div>
		</div>
	);
};

export default BentoGrid;
