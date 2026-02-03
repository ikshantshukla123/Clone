"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ScrollAnimationProviderProps {
  children: React.ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        delay: 0,
        easing: 'ease-out-cubic',
        mirror: false,
        anchorPlacement: 'top-bottom',
        disable: false,
      });
    }

    // Refresh AOS on route changes
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
