// components/PremiumCard.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Particles from './Particles';
import Link from "next/link";

interface PremiumCardProps {
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  color1?: string;
  color2?: string;
  workflowid:string;
}

export default function PremiumCard({
  title,
  subtitle,
  features,
  buttonText,
  color1 = '#7E3AF2',
  color2 = '#00C2FF',
  workflowid
}: PremiumCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 600], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 800], [-15, 15]);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(200, 193, 213, 0.4), transparent 80%)`; // Changed to #7E3AF2

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
    radius.set(rect.width * 1.5);
  };

  // Flicker animation
  const [flicker, setFlicker] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(Math.random() * 0.4 + 0.6);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateX,
        rotateY,
        background,
      }}
      className="relative h-[600px] w-[400px] rounded-3xl border border-[#2A2A3C] bg-[#161622]/80 backdrop-blur-xl shadow-2xl overflow-hidden mx-auto"
    >
      {/* Flickering border effect */}
      <motion.div
        style={{ opacity: flicker }}
        className="absolute inset-0 rounded-3xl border-2 border-[#7E3AF2]/30 pointer-events-none"
      />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-10" />
      
      {/* Particle system */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Inner glow */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #7E3AF2 0%, #00C2FF 50%, #7E3AF2 100%)',
            'linear-gradient(45deg, #00C2FF 0%, #7E3AF2 50%, #00C2FF 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="absolute -inset-[2px] rounded-3xl opacity-20 blur-xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 h-full p-8 flex flex-col items-center justify-center">
        {/* Floating orb */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="w-32 h-32 bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] rounded-full mb-8 
            shadow-xl shadow-[#7E3AF2]/30 blur-[1px]"
        />

        {/* Animated title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent mb-4"
        >
          {title}
        </motion.h2>

        {/* Flickering subtitle */}
        <motion.p
          animate={{ opacity: flicker }}
          className="text-[#A0A0C0] text-center mb-8"
        >
          {subtitle}
        </motion.p>

        {/* Animated feature list */}
        <motion.ul className="space-y-4 w-full">
          {features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center p-3 bg-[#0A0A0F]/50 rounded-lg border border-[#2A2A3C] hover:border-[#7E3AF2] transition-colors"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mr-2 text-[#7E3AF2]"
              >
                ✦
              </motion.span>
              <span className="text-[#A0A0C0]">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Interactive button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] rounded-full 
            font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-[#7E3AF2]/30 
            transition-all duration-300 relative overflow-hidden"
        >
          <Link href={`/${workflowid}`}><span className="relative z-10 bottom-1">{buttonText}</span></Link>
          <motion.div
            animate={{
              background: [
                'linear-gradient(45deg, #7E3AF2 0%, #00C2FF 50%, #7E3AF2 100%)',
                'linear-gradient(45deg, #00C2FF 0%, #7E3AF2 50%, #00C2FF 100%)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute inset-0 opacity-30"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}