// components/AnimatedHeading.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface HeadingProps {
  main_head: string;
  short_heading: string;
  description: string;
}

const AnimatedHeading = ({
  main_head,
  short_heading,
  description,
}: HeadingProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4 },
    },
  };

  return (
    <div className="relative max-w-4xl mx-auto text-center space-y-6 overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          {/* Main Head */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-text"
          >
            {main_head}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-transparent to-purple-600/30 blur-2xl opacity-50 animate-pulse" />
          </motion.h1>

          {/* Short Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-gray-200 bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 inline-block">
              {short_heading}
              <span className="ml-2 text-purple-400">▹</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto relative"
          >
            {description}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-shimmer" />
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeading;