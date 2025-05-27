import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PrepSavvY</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mentors" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Find Mentors</a>
            <a href="#mentor" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Become a Mentor</a>
            <a href="#reviews" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition">Success Stories</a>
            <a href="#contact" onClick={handleNavClick} className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-md transition transform hover:scale-105">
              Get Started
            </a>
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
            <a href="#mentors" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Find Mentors</a>
            <a href="#mentor" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Become a Mentor</a>
            <a href="#reviews" onClick={handleNavClick} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Success Stories</a>
            <a href="#contact" onClick={handleNavClick} className="block px-3 py-2 text-blue-600 font-medium">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}