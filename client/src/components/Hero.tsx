import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 250; // Increased threshold to 250px
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 backdrop-blur-sm" />
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          alt="Professional workspace"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className={`max-w-2xl transition-all duration-1000 ${
          scrolled ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-white drop-shadow-lg">Your Dreams,</span>
            <span className="block text-blue-100 drop-shadow-lg mt-2">Our Expertise</span>
          </h1>
          <p className="mt-6 text-xl text-white/90 drop-shadow-lg max-w-lg">
            Connect with successful professionals from top law schools, business schools, and healthcare programs. Get personalized mentorship for your journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#mentors"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              Find Your Mentor
              <Sparkles className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://tally.so/r/mYeERB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-lg font-medium rounded-md text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Early Access
              <Star className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
