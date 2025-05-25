export const ServicesGrid = ({classname,cards}) => {
    return (
      <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ${classname}`}>
					{cards.map(({ title, image, details }, index) => (
						<div
							key={index}
							className="bg-white/0 hover:bg-white/10 hover:backdrop-blur-xs rounded-2xl px-6 py-10 w-full h-72 flex flex-col items-center justify-center shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.025] hover:-translate-y-1 text-white"
						>
							<img
								src={image}
								alt={title}
								className="mx-auto mb-5 w-28 h-28 object-contain"
								loading="lazy"
							/>
							<h2 className="text-xl font-semibold mb-2">{title}</h2>
							<p className="text-sm px-2">{details}</p>
						</div>
					))}
				</div>
        </>
    );

}