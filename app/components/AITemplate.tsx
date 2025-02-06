import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Particles from './Particles';

interface AITemplateProps {
  workflowName: string;
  description: string;
//   onButtonClick: () => void;
}

const AITemplate = ({ workflowName, description, onButtonClick }: AITemplateProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  
  // 3D rotation effects
  const rotateX = useTransform(mouseY, [0, 600], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 800], [-8, 8]);
  
  // Gradient spotlight effect
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, 
    rgba(126, 58, 242, 0.4), transparent 80%)`;

  // Flicker animation
  const [flicker, setFlicker] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(Math.random() * 0.4 + 0.6);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
    radius.set(rect.width * 1.5);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-900">
      <motion.div
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         style={{
           rotateX,
           rotateY,
           background,
         }}
         className="relative rounded-3xl border border-[#2A2A3C] bg-[#161622]/80 backdrop-blur-xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing w-full h-full min-w-[300px] max-w-[400px] aspect-[3/4]"
         >
        {/* Animated particles background */}
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>

        {/* Flickering border effect */}
        <motion.div
          style={{ opacity: flicker }}
          className="absolute inset-0 rounded-3xl border-2 border-[#7E3AF2]/30 pointer-events-none"
        />

        {/* Dynamic inner glow */}
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

        {/* Content Container */}
        <div className="h-full flex flex-col justify-between p-6 relative z-20">
          {/* Floating header section */}
          <motion.div 
            className="flex flex-col items-center"
            animate={isHovered ? { y: -10 } : { y: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
                scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="w-24 h-24 bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] rounded-full mb-6 
                shadow-xl shadow-[#7E3AF2]/30 blur-[1px]"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent mb-4"
            >
              {workflowName}
            </motion.h2>
          </motion.div>

          {/* Interactive description area */}
          <motion.div
            className="text-slate-300 max-w-2xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className={`mb-4 transition-all duration-300 ${expanded ? '' : 'line-clamp-3'}`}>
              {description}
            </p>
            <motion.span
              className="text-cyan-400 cursor-pointer inline-flex items-center gap-2"
              onClick={() => setExpanded(!expanded)}
              whileHover={{ gap: '12px' }}
            >
              <span>Read {expanded ? 'Less' : 'More'}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                className="text-lg"
              >
                ↓
              </motion.div>
            </motion.span>
          </motion.div>

          {/* Animated action section */}
          <motion.div 
            className="self-end"
            animate={isHovered ? { y: -10 } : { y: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.button
              onClick={onButtonClick}
              className="px-8 py-3 rounded-full relative overflow-hidden 
                font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                filter: 'brightness(1.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Execute Workflow</span>
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
                className="absolute inset-0 bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF]"
              />
            </motion.button>
          </motion.div>

          {/* Hover character with enhanced interaction */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotate: [0, -5, 5, 0],
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.3,
                  rotate: { duration: 2, repeat: Infinity }
                }}
              >
                <div className="relative w-24 h-24">
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl"
                    animate={{
                      y: [-5, 5, -5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🤖
                  </motion.div> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtletrace elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-radial from-[#7E3AF2]/20 to-transparent transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AITemplate;