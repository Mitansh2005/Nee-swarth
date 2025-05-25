import { useEffect, useState } from "react";

export const ServicesDetailGrid = ({ services }) => {
	const [flippedCards, setFlippedCards] = useState({});

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				// Reset all flips when scroll is at top
				setFlippedCards({});
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const flipCardOnce = (index) => {
		// Flip only if not already flipped
		setFlippedCards((prev) => {
			if (prev[index]) {
				// Already flipped, do nothing
				return prev;
			}
			return {
				...prev,
				[index]: true,
			};
		});
	};

	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{services.map((service, index) => {
					const isFlipped = flippedCards[index];

					return (
						<div
							key={index}
							onMouseEnter={() => flipCardOnce(index)}
							className="w-full rounded-lg relative overflow-visible cursor-pointer
                         bg-white/10"
							style={{ perspective: "1000px" }}
						>
							<div
								className={`relative w-full rounded-lg transition-transform duration-600 ease-in-out`}
								style={{
									transformStyle: "preserve-3d",
									transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
									minHeight: "18rem",
								}}
							>
								{/* Front side */}
								<div
									className="absolute w-full h-full top-0 left-0 rounded-lg overflow-hidden z-20 flex flex-col items-center justify-center"
									style={{
										backfaceVisibility: "hidden",
										WebkitBackfaceVisibility: "hidden",
										transform: "rotateY(0deg)",
										padding: "1rem",
									}}
								>
									<img
										src={service.image}
										alt={service.title}
										className="w-10/12 h-10/12 object-contain rounded-lg mb-4"
										loading="lazy"
									/>
									<h3 className="text-lg font-semibold text-blue-400 text-center">
										{service.title}
									</h3>
								</div>

								{/* Back side */}
								<div
									className="absolute w-full h-full top-0 left-0 rounded-lg bg-white/10 text-white flex items-center justify-center z-10"
									style={{
										backfaceVisibility: "hidden",
										WebkitBackfaceVisibility: "hidden",
										transform: "rotateY(180deg)",
									}}
								>
									<div className="relative z-20 flex flex-col items-center justify-center p-4 w-full h-full gap-4 text-center rounded-lg overflow-auto">
										<h3 className="text-3xl font-semibold text-blue-400">
											{service.title}
										</h3>
										<p className="text-sm text-white/90 px-4">
											{service.description}
										</p>

										{/* Features as tiles */}
										<div className="flex flex-wrap justify-center gap-3 px-4">
											{service.features.map((feature, i) => (
												<div
													key={i}
													className="bg-blue-400/90 text-white text-sm rounded-md px-3 py-1 shadow-md"
												>
													{feature}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
