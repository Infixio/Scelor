// components/Button.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  color1?: string;
  color2?: string;
  className?: string;
}

export default function MainButton({
  children,
  color1 = '#7E3AF2',
  color2 = '#00C2FF',
  className = ''
}: ButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
    radius.set(rect.width * 1.5);
  };

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    ${color1}40, transparent 80%)`;

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 40px ${color1}40`
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        background,
      }}
      className={`relative overflow-hidden px-8 py-3 rounded-full font-semibold text-white 
        transition-all duration-300 ${className}`}
    >
      {/* Base gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-[${color1}] to-[${color2}] 
          opacity-100 z-0`}
      />
      
      {/* Animated shine layer */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{
          x: ['-100%', '200%', '-100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Hover effect layer */}
      <div className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-r from-[${color1}] to-[${color2}]`} />
      </div>

      {/* Text content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </motion.button>
  );
}