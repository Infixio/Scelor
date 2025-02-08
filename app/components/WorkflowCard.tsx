// components/WorkflowCard.tsx
'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useState } from 'react';

interface WorkflowCardProps {
  workflowName: string;
  workflowDescription: string;
  buttonText: string;
}

export default function WorkflowCard({
  workflowName,
  workflowDescription,
  buttonText,
}: WorkflowCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update the mouse position for a dynamic background effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  // Radial gradient that follows the mouse
  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(200, 193, 213, 0.2), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background }}
      className="relative h-[300px] w-[350px] rounded-3xl border border-white/30 bg-[#161622]/80 backdrop-blur-xl shadow-2xl overflow-hidden mx-auto p-6 flex flex-col justify-center items-center"
    >
      {/* Workflow Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent mb-4"
      >
        {workflowName}
      </motion.h2>

      {/* Workflow Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[#A0A0C0] text-center mb-6"
      >
        {workflowDescription}
      </motion.p>

      {/* Try Out Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
