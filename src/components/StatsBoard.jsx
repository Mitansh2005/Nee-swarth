import React, { useRef, useEffect, useState } from "react";

export const StatsBoard = ({ statsData }) => {
	const sectionRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const [currentNumbers, setCurrentNumbers] = useState(
		statsData.map((stat) => (stat.isStatic ? stat.value : 0)) 
	);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						// Start animation when component enters view and hasn't animated yet
						setHasAnimated(true);
					}
				});
			},
			{ threshold: 0.5 } // Trigger when 50% of the component is visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		// Cleanup observer on component unmount
		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [hasAnimated]); // Re-run if hasAnimated changes

	useEffect(() => {
		if (hasAnimated) {
			statsData.forEach((stat, index) => {
				if (!stat.isStatic) {
					const target = stat.target;
					const duration = 1000; // Animation duration in milliseconds
					const startTime = performance.now();

					const animate = (currentTime) => {
						const elapsedTime = currentTime - startTime;
						const progress = Math.min(elapsedTime / duration, 1);
						const animatedValue = Math.floor(progress * target);

						setCurrentNumbers((prevNumbers) => {
							const newNumbers = [...prevNumbers];
							newNumbers[index] = animatedValue;
							return newNumbers;
						});

						if (progress < 1) {
							requestAnimationFrame(animate);
						} else {
							setCurrentNumbers((prevNumbers) => {
								const newNumbers = [...prevNumbers];
								newNumbers[index] = target;
								return newNumbers;
							});
						}
					};
					requestAnimationFrame(animate);
				}
			});
		}
	}, [hasAnimated, statsData]); // Re-run animation when hasAnimated becomes true or statsData changes

	return (
		<div
			ref={sectionRef} // Attach ref for Intersection Observer
			className="relative py-16 sm:py-24 overflow-hidden"
		>
			<div className="container mx-auto px-4">
				{" "}
				<div
					className="relative bg-gradient-to-br from-purple-900 to-indigo-950 rounded-3xl p-4 sm:p-12
                     shadow-xl shadow-purple-950/20 flex flex-col md:flex-row justify-around items-center
                     space-y-8 md:space-y-0 md:space-x-8 transform transition-all duration-500 ease-in-out
                     hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-950/30"
				>
					{statsData.map((stat, index) => (
						<div
							key={stat.label}
							className="text-center text-white flex-1 min-w-[150px]"
						>
							{stat.isStatic ? (
								<>
									<div className="text-2xl sm:text-xl font-extrabold mb-2 leading-none">
										{stat.value}
									</div>
									<div className="text-sm sm:text-base uppercase tracking-wider opacity-80">
										{stat.label}
									</div>
								</>
							) : (
								<>
									<div
										className="text-2xl sm:text-2xl font-extrabold mb-2 leading-none
                                 relative inline-block text-white"
									>
										{currentNumbers[index]}
										<span className="text-purple-300">+</span>{" "}
									</div>
									<div className="text-sm sm:text-base font-medium uppercase tracking-wider opacity-80">
										{stat.label}
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
