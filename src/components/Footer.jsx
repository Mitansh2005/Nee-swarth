import React from "react";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-transparent text-white py-8 mb-8 backdrop-blur-xs sm:py-4 block">
			{" "}
			{/* Changed main text color to white */}
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
					<div className="text-center md:text-left flex-1 min-w-[200px]">
						<h3 className="text-xl font-semibold mb-4 text-white">
							Contact Us
						</h3>{" "}
						{/* Changed heading color to white */}
						<p className="text-base mb-2">
							<a
								href="tel:+971566812991"
								className="hover:text-blue-300 transition duration-300"
							>
								{" "}
								{/* Adjusted hover color for white text */}
								Phone: +971566812991
							</a>
						</p>
						<p className="text-base mb-2">
							<a
								href="mailto:info@neeswarth.com"
								className="hover:text-blue-300 transition duration-300"
							>
								{" "}
								{/* Adjusted hover color for white text */}
								Email: info@neeswarth.com
							</a>
						</p>
						<p className="text-base">Address: 123 Business Bay, Sharjah, UAE</p>
					</div>

					<div className="text-center md:text-right flex-1 min-w-[200px] md:self-end">
						<p className="text-sm opacity-70">
							&copy; {currentYear} Neeswarth. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
