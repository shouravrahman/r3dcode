const BentoGrid = () => {
	return (
		<div className='grid mx-auto py-12 px-4 w-[70vw] auto-rows-[192px] grid-cols-3 gap-4'>
			{[...Array(4)].map((_, i) => (
				<div
					key={i}
					className={`row-span-2 rounded-xl shadow-lg bg-neutral-100 p-4 dark:bg-[#1D273E] ${
						i === 0 && "col-span-3"
					}              
               `}
				></div>
			))}
		</div>
	);
};

export default BentoGrid;
