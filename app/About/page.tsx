"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedHeading from '@/app/components/AnimatedHeading';
// import CircularPremiumCard from '@/app/components/CircularPremiumCard';
import MainButton from '@/app/components/MainButton';
import FeatureCard from '@/app/components/FeatureCard';
import Link from "next/link";
import BubbleCard from '@/app/components/BubbleCard';
import MainHeading from '@/app/components/MainHeading';

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

// Animation variants for the Feature Cards
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

      {/* Sticky Animated Header */}
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
                <Link 
                  href={`/${item}`} 
                  className="text-[#A0A0C0] hover:text-white transition-all font-medium cursor-pointer">
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

      <main className="relative z-20 container mx-auto px-6 pt-32 space-y-40">
        {/* Core Innovations Section */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Core Innovations</h2>
            <MainHeading/>
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
                custom={index}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={<span className="text-3xl">{feature.icon}</span>}
                  color1={feature.color1}
                  color2={feature.color2}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Infixio's Architecture Section */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12">
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
              }}>
              <h3 className="text-2xl text-white mb-3">Neural Pipeline</h3>
              <p className="text-[#A0A0C0]">Real-time adaptive processing with self-optimizing neural networks</p>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ 
                y: -5,
                background: "linear-gradient(45deg, #101018, #1A1A2C)",
                transition: { duration: 0.3 }
              }}>
              <h3 className="text-2xl text-white mb-3">Agentic Framework</h3>
              <p className="text-[#A0A0C0]">Autonomous decision-making with contextual awareness</p>
            </motion.div>
          </div>
        </section>

        {/* Experience Dynamic AI Section with Bubble Cards */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Experience Dynamic AI</h2>
            <p className="text-[#A0A0C0] max-w-2xl mx-auto">
              Watch our intelligent workflows come alive in interactive bubbles showcasing the future of automation.
            </p>
          </motion.div>

          <BubbleCard />
        </section>

        {/* Our Journey Section */}
        <section className="py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-[#A0A0C0] max-w-2xl mx-auto">
              At Scelor, we harness the power of next-gen agentic automation to revolutionize workflows. Founded by innovators driven by a passion for transformation, our mission is to blend neural orchestration with multi-agent collaboration to empower organizations across the globe.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <motion.div 
              className="flex-1 p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-2xl text-white mb-3">Innovation</h3>
              <p className="text-[#A0A0C0]">
                Our systems evolve with your needs, ensuring every process is executed with precision and intelligence.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-2xl text-white mb-3">Collaboration</h3>
              <p className="text-[#A0A0C0]">
                We build robust frameworks that allow specialized AI agents to work seamlessly together, driving productivity and success.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1 p-6 border border-[#2A2A3C] rounded-xl bg-[#101018]"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-2xl text-white mb-3">Scalability</h3>
              <p className="text-[#A0A0C0]">
                Our platform grows with your business, adapting to new challenges and opportunities with agility and resilience.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer can be added here */}
      <footer className="relative z-10 bg-gradient-to-b from-[#0A0A0F] to-[#00101A] border-t border-[#2A2A3C]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#A0A0C0]">
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-lg font-semibold mb-4">Scelor</h3>
              <p className="mb-4">Pioneering the future of intelligent automation</p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-[#A0A0C0] hover:text-[#7E3AF2] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                      {social === 'github' && <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />}
                      {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {['Workflows', 'About', 'Pricing', 'Documentation'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#7E3AF2] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Blog', 'Case Studies', 'Webinars', 'Help Center'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#7E3AF2] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#7E3AF2] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A2A3C] mt-12 pt-8 text-center">
            <p className="text-[#A0A0C0]">
              &copy; {new Date().getFullYear()} Scelor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
