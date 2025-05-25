import { ContactForm } from "../components/ContactForm";
import BranImg from "../assets/brain-1.png";
import { ServicesGrid } from "../components/ServicesGrid";
import ComputerVisionImg from "../assets/images/Computer-Vision-1.png";
import CloudSolutionsImg from "../assets/images/Cloud-Solutions-1.png";
import ErpSystemImg from "../assets/images/ERP-4.png";
import DigitalTransformationImg from "../assets/images/digi.png";
import AITechnologyImg from "../assets/images/head-1.png";
import CRMSolutionImg from "../assets/images/CRM-Platforms-2.png";
import ConsultingServicesImg from "../assets/images/Consulting-Services.png";
import PaperlessTechnologyImg from "../assets/images/Paperless-2.png";
export const HomePage = () => {
	const cards = [
		{
			title: "Computer Vision",
			image: ComputerVisionImg,
			details: "Innovative solutions for visual data analysis and automation.", 
		},
		{
			title: "Cloud Solutions",
			image: CloudSolutionsImg,
			details:
				"Flexible and scalable cloud services to optimize your IT infrastructure.",
		},
		{
			title: "ERP Systems",
			image: ErpSystemImg,
			details:
				"Integrated systems that streamline operations and enhance business efficiency.",
		},
		{
			title: "Digital Transformation",
			image: DigitalTransformationImg,
			details: "Strategies to modernize and innovate your business processes.",
		},
		{
			title: "AI Technologies",
			image: AITechnologyImg,
			details:
				"Advanced AI and machine learning solutions for data-driven decision-making.",
		},
		{
			title: "CRM Solutions",
			image: CRMSolutionImg,
			details:
				"Tools to manage and improve customer interactions and satisfaction.",
		},
		{
			title: "Consulting Services",
			image: ConsultingServicesImg,
			details:
				"Expert advice and support to guide your technology and business strategy.",
		},
		{
			title: "Paperless Technology",
			image: PaperlessTechnologyImg,
			details:
				"Solutions to reduce paper use and increase operational efficiency.",
		},
	];
	return (
		<>
			<div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center text-white lg:px-0">
				<div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left p-6 lg:p-12">
					<h1 className="text-6xl sm:text-4xl lg:text-6xl font-semibold tracking-wide leading-tight">
						Your <span className="text-[#ff6200]">Partner</span> in{" "}
						<br className="hidden sm:block" />
						Enterprise Solutions
					</h1>
					<p className="mt-6 text-base sm:text-lg text-white/80 max-w-md leading-relaxed">
						At Neeswarth, we empower businesses with tailored solutions that
						drive success in today’s fast-paced digital landscape.
					</p>
				</div>

				<div className="hidden lg:block w-1/2">
					<img src={BranImg} alt="Brain" className="w-full h-auto mb-8" />
				</div>
			</div>
			<div className="py-12 px-4">
				<h1 className="text-[#FF6200] font-semibold text-6xl text-center mb-12">
					OUR EXPERTISE
				</h1>
				<ServicesGrid cards={cards} />
			</div>

			<ContactForm />
		</>
	);
};
