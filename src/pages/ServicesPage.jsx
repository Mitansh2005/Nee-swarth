import { ServicesDetailGrid } from "../components/ServicesDetailedGrid";
import ComputerVisionImg from "../assets/images/Computer-Vision-1.png";
import CloudSolutionsImg from "../assets/images/Cloud-Solutions-1.png";
import ErpSystemImg from "../assets/images/ERP-4.png";
import DigitalTransformationImg from "../assets/images/digi.png";
import AITechnologyImg from "../assets/images/head-1.png";
import CRMSolutionImg from "../assets/images/CRM-Platforms-2.png";
import ConsultingServicesImg from "../assets/images/Consulting-Services.png";
import PaperlessTechnologyImg from "../assets/images/Paperless-2.png";
import { useEffect, useRef, useState } from "react";

export const ServicesPage = () => {
	const headingRef = useRef(null);
	const servicesRef = useRef(null);

	// To track if auto scroll happened
	const [autoScrolled, setAutoScrolled] = useState(false);

	useEffect(() => {
		if (!autoScrolled) {
			// Scroll after 1 second delay
			const timer = setTimeout(() => {
				if (servicesRef.current) {
					servicesRef.current.scrollIntoView({ behavior: "smooth" });
					setAutoScrolled(true);
				}
			}, 800);

			return () => clearTimeout(timer);
		}
	}, [autoScrolled]);

	const servicesData = [
		{
			title: "Cloud Solutions",
			image: CloudSolutionsImg,
			description:
				"Secure, scalable cloud services for migration, optimization, and compliance.",
			features: [
				"Cloud Migration & Deployment",
				"Cloud Optimization",
				"Backup & Disaster Recovery",
				"Security & Compliance",
			],
		},
		{
			title: "ERP Solutions",
			image: ErpSystemImg,
			description:
				"Streamline operations with integrated, real-time ERP systems.",
			features: [
				"Custom ERP Implementation",
				"System Integration",
				"Real-Time Analytics",
				"Modular & Scalable Design",
			],
		},
		{
			title: "AI & Automation",
			image: AITechnologyImg,
			description:
				"Boost efficiency with intelligent automation and predictive insights.",
			features: [
				"Machine Learning Models",
				"Natural Language Processing",
				"Predictive Analytics",
				"Intelligent Automation",
			],
		},
		{
			title: "CRM Systems",
			image: CRMSolutionImg,
			description: "Enhance customer engagement through data-driven CRM tools.",
			features: [
				"Sales & Marketing Automation",
				"Support Management",
				"Insightful Analytics",
				"Custom Dashboards",
			],
		},
		{
			title: "Computer Vision",
			image: ComputerVisionImg,
			description:
				"Leverage image and video analysis to drive smart automation.",
			features: [
				"Object Detection & Tracking",
				"Quality Inspection",
				"Visual Data Analytics",
				"Facial Recognition",
			],
		},
		{
			title: "Paperless Solutions",
			image: PaperlessTechnologyImg,
			description:
				"Digitize workflows for better efficiency and reduced paperwork.",
			features: [
				"Document Management",
				"E-signatures",
				"Workflow Automation",
				"Secure Storage",
			],
		},
		{
			title: "Digital Transformation",
			image: DigitalTransformationImg,
			description:
				"Modernize operations with smart technologies and automation.",
			features: [
				"Digital Strategy Planning",
				"Process Automation",
				"Tech Integration",
				"Change Management",
			],
		},
		{
			title: "Tech Consulting",
			image: ConsultingServicesImg,
			description: "Get expert guidance to navigate complex tech landscapes.",
			features: [
				"Strategic IT Planning",
				"System Implementation",
				"Performance Tuning",
				"Risk & Governance",
			],
		},
	];

	return (
		<>
			<div
				ref={headingRef}
				className="pt-16 min-h-screen w-full flex flex-col items-center justify-center  text-white px-4 lg:px-0"
			>
				<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight">
					<span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
						Scale your business with
					</span>
					<span className="block bg-gradient-to-r from-[#FF6200] via-orange-400 to-[#FF6200] bg-clip-text text-transparent">
						NEESWARTH
					</span>
				</h1>
			</div>

			<div ref={servicesRef} className="pt-30 w-full px-4 lg:px-0 text-white">
				<h2 className="mt-4 text-white font-semibold text-3xl text-center">
					Meet The <span className="text-[#FF6200]">Enterprise</span> Platform
					For Your Business
				</h2>
				<div className="mt-8">
					<ServicesDetailGrid services={servicesData} />
				</div>
			</div>
		</>
	);
};
