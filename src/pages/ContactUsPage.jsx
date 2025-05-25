import React from "react";
import { ContactForm } from "../components/ContactForm";

export const ContactUsPage = () => {
	const mapEmbedUrl =
		"https://maps.google.com/maps?q=Sharjah%20Publishing%20House%20Business%20Centre,%20Al%20Zahia%20Sharjah%20UAE&t=&z=13&ie=UTF8&iwloc=&output=embed";

	return (
		<div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
			<div className="container mx-auto px-4 z-10 relative">
				<h1 className="text-5xl sm:text-6xl font-semibold text-white text-center mb-12">
					Get in <span className="text-[#FF6200]">Touch</span>
				</h1>

				<div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-12 lg:space-y-0">
					<div className="w-full lg:w-1/2">
						<ContactForm />
					</div>

					<div
						className="w-full lg:w-1/2 p-4 rounded-3xl overflow-hidden
                          bg-transparent 
                          shadow-lg"
					>
						<h3 className="text-xl font-semibold text-white text-center mb-6">
							Our Location
						</h3>
						<div
							className="relative"
							style={{ paddingBottom: "56.25%", height: 0 }}
						>
							<iframe
								src={mapEmbedUrl}
								width="100%"
								height="100%"
								style={{ border: 0, position: "absolute", top: 0, left: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Neeswarth Headquarters Location"
							></iframe>
						</div>
						<p className="text-white text-center mt-4 text-base opacity-80">
							Find us at Sharjah Publishing House Business Centre, Al Zahia,
							Sharjah UAE.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
