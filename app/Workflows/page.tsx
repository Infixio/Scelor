'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkflowCard from '@/app/components/WorkflowCard';
import AutoScrollCarousel from '@/app/components/AutoScrollCarousel';



export default function Workflows() {
  const features = [
    { workflowName: "Image Analysis", description: "Advanced visual recognition system" },
    { workflowName: "Video Summarizer", description: "AI-powered video comprehension" },
    { workflowName: "Market Researcher", description: "Real-time market intelligence" },
    { workflowName: "Doc Analyzer", description: "Smart document processing" },
    { workflowName: "Code Generator", description: "AI-assisted development" },
    { workflowName: "Data Cruncher", description: "Automated data processing" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#2A2A3C]"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
            Scelor
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

      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            AI Workflow Solutions
          </motion.h2>
          <p className="text-[#A0A0C0] max-w-2xl mx-auto">
            Transform your processes with our intelligent automation workflows
          </p>
        </div>

        {/* Category 1 */}
        <AutoScrollCarousel 
          features={features} 
          title="Social Media Flows"
          description='test description 1'
        />

        {/* Category 2 */}
        <AutoScrollCarousel 
          features={features} 
          title="AI Flows"
          description='test description 2'
        />

        {/* Category 3 */}
        <AutoScrollCarousel 
          features={features} 
          title="General Flows"
          description='test description 3'
        />
      </div>
    </div>
  );
}