// components/FeatureCard.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color1?: string;
  color2?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  color1 = '#7E3AF2',
  color2 = '#00C2FF'
}: FeatureCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 400], [-8, 8]);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    ${color1}20, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
    radius.set(rect.width * 1.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      whileHover={{ 
        y: -15,
        scale: 1.02,
      }}
      style={{
        rotateX,
        rotateY,
        background,
      }}
      className="relative group h-full bg-gradient-to-br from-[#161622] to-[#0A0A0F] p-8 rounded-2xl border border-[#2A2A3C] overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] animate-floating-grid" />

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-[${color1}]/10 to-[${color2}]/10 pointer-events-none"
      />

      {/* Dynamic particle effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[url('/particle.svg')] animate-particle-flow" />
      </div>

      {/* Icon container with 3D effect */}
      <motion.div 
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
        }}
        className="w-14 h-14 bg-gradient-to-br from-[${color1}]/30 to-[${color2}]/30 rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm"
      >
        <motion.div
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="text-[${color1}]"
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-semibold text-white mb-3"
          whileHover={{ x: 5 }}
        >
          <span className="bg-gradient-to-r from-[${color1}] to-[${color2}] bg-clip-text text-transparent text-white">
            {title}
          </span>
        </motion.h3>
        
        <motion.p 
          className="text-[#A0A0C0] text-lg leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ 
            opacity: 1,
            textShadow: '0 0 10px rgba(160, 160, 192, 0.2)'
          }}
        >
          {description}
        </motion.p>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border pointer-events-none"
        animate={{
          borderColor: [
            `${color1}30`,
            `${color2}30`,
            `${color1}30`
          ],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      />
    </motion.div>
  );
}