"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedHeading from '@/app/components/AnimatedHeading';
// import CircularPremiumCard from '@/app/components/CircularPremiumCard';
import MainButton from '@/app/components/MainButton';
import FeatureCard from '@/app/components/FeatureCard';
import Link from "next/link";

const innovations = [
  {
    title: 'Neural Orchestration',
    description: 'Dynamic task routing with self-optimizing neural networks',
    icon: '🧠',
    color1: '#7E3AF2',
    color2: '#00C2FF'
  },
  {
    title: 'Multi-Agent Collaboration',
    description: 'Specialized AI agents working in concert like human teams',
    icon: '🤝',
    color1: '#00C2FF',
    color2: '#2CDB93'
  },
  {
    title: 'Self-Healing Workflows',
    description: 'Automatic error detection and recovery systems',
    icon: '⚡',
    color1: '#FF6B6B',
    color2: '#FFA500'
  }
];

// Animation variants
const cardVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 10px 30px -5px rgba(126, 58, 242, 0.3)",
    transition: { type: "spring", stiffness: 300 }
  },
  pulse: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      yoyo: Infinity
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      <Head>
        <title>About Scelor - Next-Gen Agentic Automation by Infixio</title>
        <meta name="description" content="Discover Scelor's agentic workflow platform built by Infixio" />
      </Head>

      {/* Restored Animated Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#2A2A3C]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
            <Link href="/">Scelor</Link>
          </div>
          <ul className="flex space-x-8 items-center">
            {['Workflows', 'Documentation', 'About'].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="text-[#A0A0C0] hover:text-white transition-all font-medium cursor-pointer">
                  {item}
                </Link>
              </li>
            ))}
            <button className="bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </ul>
        </nav>
      </motion.header>

      <main className="relative z-20 container mx-auto px-6 pt-32">
        {/* Infixio Section with Enhanced Animations */}

        {/* Animated Cards Section */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Core Innovations</h2>
            <p className="text-[#A0A0C0] max-w-2xl mx-auto">
              Powered by Infixio's proprietary neural architecture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                animate="pulse"
                whileHover="hover"
                custom={index}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={<span className="text-3xl">{feature.icon}</span>}
                  color1={feature.color1}
                  color2={feature.color2}
                  // className="hover:bg-gradient-to-br hover:from-[#101018] hover:to-[#1A1A2C] transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Animated Technical Section */}
        <section className="mt-40 mb-30">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Infixio's Architecture</h2>
            <p className="text-[#A0A0C0] max-w-3xl mx-auto">
              Next-generation workflow engine capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ 
                y: -5,
                background: "linear-gradient(45deg, #101018, #1A1A2C)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl text-white mb-3">Neural Pipeline</h3>
              <p className="text-[#A0A0C0]">Real-time adaptive processing with self-optimizing neural networks</p>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ 
                y: -5,
                background: "linear-gradient(45deg, #101018, #1A1A2C)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl text-white mb-3">Agentic Framework</h3>
              <p className="text-[#A0A0C0]">Autonomous decision-making with contextual awareness</p>
            </motion.div>
          </div>
        </section>

        {/* Animated Gradient Section */}
        <motion.section 
          className="mb-28 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7E3AF2]/20 to-[#00C2FF]/20 rounded-3xl transform rotate-1 animate-gradient-rotate" />
          <div className="relative bg-[#101018] rounded-3xl p-12 border border-[#2A2A3C] mt-40">
            <div className="text-center">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Enterprise-Grade Agentic Platform
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[
                  {
                    title: "Distributed Intelligence",
                    color: "#00C2FF",
                    items: ["Auto-scaling agent clusters", "Cross-cloud orchestration", "Fault-tolerant execution"]
                  },
                  {
                    title: "Cognitive Security",
                    color: "#2CDB93",
                    items: ["Neural firewalls", "Behavioral biometrics", "GDPR-compliant workflows"]
                  }
                ].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className={`text-2xl mb-3`} style={{ color: section.color }}>
                      {section.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-[#A0A0C0]">
                      {section.items.map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ x: 5 }}
                          className="hover:text-white transition-colors"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Keep existing footer */}
    </div>
  );
}