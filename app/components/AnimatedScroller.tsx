// components/AnimatedScrollbar.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Declare scrollTimeout on Window interface
declare global {
  interface Window {
    scrollTimeout: ReturnType<typeof setTimeout> | null;
  }
}

export default function AnimatedScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const backgroundColor = useTransform(scrollYProgress, [0, 1], 
    ['#7E3AF2', '#00C2FF']
  );

  const scaleY = useTransform(scrollYProgress, (value) => value * 0.9 + 0.1);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [12, 4]);

  useEffect(() => {
    let lastScroll = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDirection(currentScroll > lastScroll ? 'down' : 'up');
      lastScroll = currentScroll;
      setIsScrolling(true);
      
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 h-3/4 w-2.5 z-50"
      style={{ backgroundColor: '#2A2A3C' }}
    >
      <motion.div
        className="w-full relative"
        style={{
          scaleY,
          borderRadius,
          backgroundColor,
          transformOrigin: 'top',
          opacity: isScrolling ? 1 : 0.6,
        }}
        animate={{
          background: scrollDirection === 'down' 
            ? ['#7E3AF2', '#00C2FF'] 
            : ['#00C2FF', '#7E3AF2'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </motion.div>
    </motion.div>
  );
}