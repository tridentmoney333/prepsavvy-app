import { Star, ArrowDown, ArrowRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EarlyAccessBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    // Set local storage flag to remember user closed it
    localStorage.setItem('earlyAccessBannerClosed', 'true');
  };

  // Check if user has previously closed the banner
  useEffect(() => {
    const bannerClosed = localStorage.getItem('earlyAccessBannerClosed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <button
              onClick={closeBanner}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Be Among the First!</h2>
              <p className="text-gray-600 mb-4">
                Get early access to our exclusive mentorship platform. Sign up today to secure your spot and receive special benefits as an early adopter.
              </p>
            </div>
            
            <div className="relative flex justify-center items-center mb-2">
              {/* Animated arrows pointing to the button */}
              <motion.div 
                className="absolute left-4 text-blue-500"
                animate={{ x: [-5, 0, -5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
              
              <motion.div 
                className="absolute right-4 text-blue-500"
                animate={{ x: [5, 0, 5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-6 h-6 transform rotate-180" />
              </motion.div>
              
              <a
                href="https://tally.so/r/mYeERB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-lg font-medium rounded-md text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md w-full sm:w-auto"
              >
                Get Early Access
                <Star className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-4">
              <p>Limited spots available. Join now!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
