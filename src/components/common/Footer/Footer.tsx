import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About University</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ibn Khaldoun University - Tiaret
              <br />
              Faculty of Mathematics and Computer Science
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Established in 1980, dedicated to excellence in education and research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white transition-colors duration-300">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/registration" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Registration
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="inline-block w-20 font-medium text-gray-300">Phone:</span>
                <span>+213 555 55 55 55</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-20 font-medium text-gray-300">Email:</span>
                <span>info@univ-tiaret.dz</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-20 font-medium text-gray-300">Address:</span>
                <span>Tiaret, Algeria</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
            
            <h4 className="text-white font-semibold mb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get updates about news and events
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-3 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Ibn Khaldoun University - Tiaret. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Use
              </a>
              <a href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;