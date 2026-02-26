import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/images/ibnKhaldoun.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Fallback if image fails to load
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-100/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-200' 
          : 'bg-gray-50 py-4 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {!imageError ? (
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Ibn Khaldoun University" 
                  className="h-12 w-auto object-contain rounded-lg"
                  onError={handleImageError}
                />
                <div className="absolute -inset-1 bg-gray-300/30 rounded-lg blur-md group-hover:bg-gray-400/40 transition-all duration-300"></div>
              </div>
            ) : (
              // Fallback text if image fails
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">Ibn Khaldoun</span>
                <span className="text-xs text-gray-500">University</span>
              </div>
            )}
            
            {!imageError && (
              <div className="hidden sm:block flex-col">
                <span className="text-xl font-bold text-gray-700 leading-tight">
                  Ibn Khaldoun
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <Link
              to="/login"
              className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium border border-gray-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-gray-50 rounded-xl shadow-xl p-4 space-y-2 border border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300 text-center font-medium border border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;