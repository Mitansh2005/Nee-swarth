import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    let classes = "font-medium text-sm transition-colors duration-300";

    if (isActive) {
      classes += " text-[#ff6200] pointer-events-none cursor-default";
    } else {
      classes += scrolled ? " text-black" : " text-white";
      classes += " hover:text-[#ff6200]";
    }
    return classes;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center transition-colors duration-300">
        <div className="flex items-center">
          <Link
            to="/"
            className={`font-semibold text-xl tracking-wider transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            } ${location.pathname === "/" ? "text-[#ff6200] pointer-events-none cursor-default" : "hover:text-[#ff6200]"}`}
            onClick={handleLinkClick}
          >
            NEESWARTH
          </Link>
        </div>

        <div className="hidden md:flex space-x-9">
          <Link to="/" className={getLinkClasses("/")} onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/services" className={getLinkClasses("/services")} onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/about" className={getLinkClasses("/about")} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/contact" className={getLinkClasses("/contact")} onClick={handleLinkClick}>
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`text-2xl focus:outline-none ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full right-0 h-[calc(100vh)] w-[70vw] transition-all duration-300 ease-in-out transform
          ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
          ${scrolled ? "bg-white/90 shadow-lg" : "bg-black/90"}
          flex flex-col items-center py-4 space-y-4`}
      >
        <Link to="/" className={getLinkClasses("/")} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/services" className={getLinkClasses("/services")} onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/about" className={getLinkClasses("/about")} onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/contact" className={getLinkClasses("/contact")} onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
