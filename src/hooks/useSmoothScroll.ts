import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const isScrolling = useRef(false);

  useEffect(() => {
    // Simple CSS-based smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    
    try {
      if (typeof target === 'string') {
        const element = document.querySelector(target);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition + (options?.offset || 0);
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.warn('Scroll error:', error);
    }
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return { scrollTo };
};