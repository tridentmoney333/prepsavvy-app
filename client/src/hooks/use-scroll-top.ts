import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * A custom hook that scrolls the window to the top whenever
 * the route location changes
 */
export function useScrollTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Force scroll to top with no smooth scrolling to ensure it happens immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [location]);
}
