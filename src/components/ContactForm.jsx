import React, { useState } from "react";
import Arrow from "../assets/icons/right-arrow.png";

export const ContactForm = ({className}) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We will get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div
			className={`relative z-10 p-3 sm:p-5 md:p-6 rounded-3xl overflow-hidden
                    bg-gradient-to-br from-purple-800/20 to-blue-800/10 backdrop-filter backdrop-blur-lg
                    shadow-2xl shadow-purple-700/40
                    w-full max-w-lg mx-auto my-6
                    transform transition-all duration-500 ease-in-out
                    hover:shadow-3xl hover:shadow-purple-700/60 ${className}`}
		>
			<h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
				Ready to have a quick discussion?
			</h2>
			<form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block text-white text-xs font-medium mb-1"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="w-full p-2 rounded-md bg-white bg-opacity-20
                       text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition duration-300 ease-in-out"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-white text-xs font-medium mb-1"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="w-full p-2 rounded-md bg-white bg-opacity-20
                       text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition duration-300 ease-in-out"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-white text-xs font-medium mb-1"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows="3"
						placeholder="Your Message"
						className="w-full p-2 rounded-md bg-white bg-opacity-20
 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition duration-300 ease-in-out resize-y"
						required
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 rounded-md bg-[#FF6200] text-black font-semibold text-sm
                     focus:outline-none focus:ring-2 focus:ring-orange-500
                     transition duration-300 ease-in-out shadow-md hover:shadow-lg
                     group flex items-center justify-center space-x-3"
				>
					<span>Submit</span>
					<img
						src={Arrow}
						alt="Submit Arrow"
						className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2"
					/>
				</button>
			</form>
		</div>
	);
};
