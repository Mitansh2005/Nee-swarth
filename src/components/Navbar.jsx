import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation(); // Get current location

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0 && scrolled) {
				setScrolled(false);
			} else if (window.scrollY > 0 && !scrolled) {
				setScrolled(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolled]);

	  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    let classes = "font-medium text-sm transition";

    if (isActive) {
      // If the link is active, apply the highlight color and disable it
      classes += " text-[#ff6200] pointer-events-none cursor-default";
    } else {
      // If not active, apply scroll-based color and hover effect
      classes += scrolled ? " text-black" : " text-white";
      classes += " hover:text-[#ff6200]";
    }

    return classes;
  };

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
				scrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center transition-colors duration-300">
				<div className="flex items-center">
					<Link to="/" 
						className={`font-semibold text-xl tracking-wider transition-colors ${getLinkClasses("/")} ${
							scrolled ? "text-black" : "text-white"
						}`}
					>
						NEESWARTH
					</Link>
				</div>
				<div className={`space-x-9`}>
					<Link to="/" className={getLinkClasses("/")}>
						Home
					</Link>
					<Link to="/services" className={getLinkClasses("/services")}>
						Services
					</Link>
					<Link to="/about" className={getLinkClasses("/about")}>
						About
					</Link>
					<Link to="/contact" className={getLinkClasses("/contact")}>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};
