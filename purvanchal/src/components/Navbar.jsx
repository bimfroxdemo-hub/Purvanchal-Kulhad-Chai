import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo/purvanchallogo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  // Detect scroll position for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link based on current route
  useEffect(() => {
    const path = location.pathname.split('/')[1] || 'home';
    setActiveLink(path);
  }, [location]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/about', id: 'about' },
    { label: 'Services', href: '/Services', id: 'services' },
    { label: 'Gallery', href: '/gallery', id: 'gallery' },
    { label: 'Franchise', href: '/franchise', id: 'franchise-nav' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      style={{ height: '85px' }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo Section */}
        <Link
          to="/"
          className="flex-shrink-0 flex items-center"
          onClick={() => handleNavClick('home')}
        >
          <div className="h-16 w-auto flex items-center">
            <img
              src={logo}
              alt="Purvanchal Kulhad Chai"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={() => handleNavClick(link.id)}
              className={`font-poppins text-sm font-medium transition-colors duration-300 ${activeLink === link.id
                  ? "text-saffron"
                  : "text-charcoal hover:text-saffron"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Franchise Button */}
          <Link
            to="/franchise"
            className="hidden md:inline-block px-6 py-2.5 bg-maroon text-white font-poppins font-bold text-sm rounded-lg transition-all duration-300 hover:bg-red-900 hover:shadow-xl hover:scale-105 active:scale-95 shadow-lg"
          >
            Franchise
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-charcoal" />
            ) : (
              <Menu size={24} className="text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`block px-4 py-2.5 rounded-lg font-poppins font-medium text-sm transition-colors duration-300 ${activeLink === link.id
                  ? 'text-white bg-saffron'
                  : 'text-charcoal hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Franchise Button */}
            <Link
              to="/franchise"
              onClick={() => handleNavClick('franchise-nav')}
              className="block w-full text-center px-4 py-3 mt-2 bg-saffron text-white font-poppins font-bold text-sm rounded-lg transition-all duration-300 hover:bg-orange-500"
            >
              Franchise
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}