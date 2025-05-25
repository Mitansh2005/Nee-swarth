import WebDevelopmentIcon from "../assets/icons/bullet-point-icon.png";
import ProductivityIcon from "../assets/icons/productivity-icon.png";
import DigitalWorldIcon from "../assets/icons/digital-service-icon.png";
import SolutionsIcon from "../assets/icons/solutions-icon.png";
import UxIcon from "../assets/icons/ux-icon.png";
import InnovationIcon from "../assets/icons/innovation-icon.png";
import { StatsBoard } from "../components/StatsBoard";
export const AboutPage = () => {
	const statsData = [
		{ label: "CLIENTS", target: 115 },
		{ label: "PROJECTS", target: 75 },
		{ label: "EMPLOYEES", target: 150 },
		{ label: "HEADQUARTERS", value: "SHARJAH, UAE", isStatic: true },
	];

	return (
		<>
			<div>
				<div class="container mx-auto px-16 py-16 mt-10">
					<h1 class="text-6xl font-semibold text-white text-center mb-8">
						About <span class="text-[#FF6200]">NEE-SWARTH</span>
					</h1>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-19">
						<div>
							<h2 class="text-4xl font-semibold text-[#ff6200] mb-6">
								Why Nee-Swarth?
							</h2>
							<p class="text-white text-lg mb-8 leading-relaxed">
								Providing best in class solutions leveraging technology and use
								our expertise and business intelligence to catalyse change and
								take the world forward.
							</p>

							<div class="mb-8">
								<div class="flex items-start mb-4 justify-center">
									<img
										src={WebDevelopmentIcon}
										alt="WebDevelopment icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										Neeswarth FZE is an end-to-end Application offering company,
										Our technical solutions in the areas of User Interfaces, Web
										design and development, Mobile App development, Custom
										applications and Internet marketing. Our solutions perfectly
										blend complete product engineering with project services.
									</p>
								</div>
								<div class="flex items-start mb-4">
									<img
										src={ProductivityIcon}
										alt="Productivity icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										Neeswarth combines the best people with the best technology
										to provide{" "}
										<span class="font-bold">optimal productivity gains</span>{" "}
										and <span class="font-bold">cost savings</span> for
										customers. Leveraging on our highly flexible business
										processes, seamless global delivery network and deep domain
										expertise, we deliver the following value proposition to our
										customers.
									</p>
								</div>
							</div>
						</div>

						<div>
							<h2 class="text-4xl font-semibold text-white mb-6">
								Our <span className="text-[#ff6200]">Philosophy</span>
							</h2>

							<div class="mb-8">
								<div class="flex items-start mb-4">
									<img
										src={InnovationIcon}
										alt="Innovation icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										At Neeswart we believe in challenging the status quo, we
										believe in thinking differently and out of the box and
										innovative solutions, by making our projects beautifully
										designed, user friendly and simple to use. We just happen to
										make great IT products for our customers.
									</p>
								</div>
								<div class="flex items-start mb-4">
									<img
										src={SolutionsIcon}
										alt="Solutions icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										At Neeswart we believe Technology is just a medium to solve
										problems, be it a small owner shop with an e-commerce
										solution or a big enterprise which require solving of
										complex problems including approvals journey and work flows.
									</p>
								</div>
								<div class="flex items-start mb-4">
									<img
										src={UxIcon}
										alt="Ux icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										We deliver great user experience and journeys to solve these
										riddles with our in-house technical experts.
									</p>
								</div>
								<div class="flex items-start">
									<img
										src={DigitalWorldIcon}
										alt="Digital World Icon"
										class="w-8 h-auto mr-4 mt-2"
									/>
									<p class="text-white text-base leading-relaxed">
										At Neeswart, we believe that every company is awesome, and
										we strive to help these companies uncover their awesomeness
										to an increasingly digital world, by invigorating them with
										the 'WOW' factor of Neeswarth.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<StatsBoard statsData={statsData} />
					</div>

					<div class="text-center mt-12">
						<a
							href="#"
							class="bg-[#FF6200] text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-700 transition duration-300"
						>
							Discover Our Solutions
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
