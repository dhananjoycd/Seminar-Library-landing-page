import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900 shadow-lg" : "bg-blue-800 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Seminar Library
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                text={link.text}
                icon={link.icon}
              />
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <MenuButton
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isMenuOpen={isMenuOpen} />
    </header>
  );
};

// NavLink component for desktop navigation links
const NavLink = ({ href, text, icon }) => (
  <a
    href={href}
    className="text-white hover:text-blue-200  py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center "
  >
    {icon && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {icon}
      </svg>
    )}
    {text}
  </a>
);

// MenuButton component for mobile menu toggle
const MenuButton = ({ isMenuOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out"
    aria-label="Main menu"
  >
    {isMenuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

// MobileNavigation component for mobile navigation links
const MobileNavigation = ({ isMenuOpen }) => (
  <div
    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
      isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          text={link.text}
          icon={link.icon}
        />
      ))}
    </div>
  </div>
);

// Define navigation links with text and optional icons
const navLinks = [
  {
    href: "seminar",
    text: "Seminar",
    icon: (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
  },
  {
    href: "search",
    text: "Search",
    icon: (
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    ),
  },
  {
    href: "contact",
    text: "Contact",
    icon: (
      <>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </>
    ),
  },
];

export default Header;
