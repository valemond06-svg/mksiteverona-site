'use client';

import { useEffect, useRef, useState } from 'react';

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Solo applica parallax se elemento è visibile
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // Calcola quanto l'elemento è scrollato
        const scrolled = window.scrollY;
        const parallaxOffset = scrolled * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}
