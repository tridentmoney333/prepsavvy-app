import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PrepSavvY</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <a href="#about" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Our Story</a>
                <a href="#mentors" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Our Experts</a>
                <a href="#roadmap" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Roadmap</a>
                <a href="#resources" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Resources</a>
                <a href="#contact" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Contact Us</a>
                <a href="#mentors" onClick={handleNavClick} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-md font-medium transition transform hover:scale-105 flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Find Your Mentor
                </a>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link href="/mentors" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="text-gray-700 hover:text-blue-600 transition">All Mentors</Link>
                <Link href="/" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-md font-medium transition transform hover:scale-105 flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {isHomePage ? (
              <>
                <a href="#about" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Our Story</a>
                <a href="#mentors" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Our Experts</a>
                <a href="#roadmap" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Roadmap</a>
                <a href="#resources" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Resources</a>
                <a href="#contact" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Contact Us</a>
                <a href="#mentors" onClick={handleNavClick} className="block px-3 py-2 text-blue-600 font-medium flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Find Your Mentor
                </a>
              </>
            ) : (
              <>
                <Link href="/" onClick={(e) => { handleNavClick(e); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link href="/mentors" onClick={(e) => { handleNavClick(e); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">All Mentors</Link>
                <Link href="/" onClick={(e) => { handleNavClick(e); window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }} className="block px-3 py-2 text-blue-600 font-medium flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
