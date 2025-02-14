'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkflowCard from '@/app/components/WorkflowCard';
import AutoScrollCarousel from '@/app/components/AutoScrollCarousel';



export default function Workflows() {
  // const features = [
  //   { workflowName: "Image Analysis", description: "Advanced visual recognition system", workflow_id:"ImageAnalysis" },
  //   { workflowName: "Video Summarizer", description: "AI-powered video comprehension", workflow_id:"VideoSummarizer" },
  //   { workflowName: "Market Researcher", description: "Real-time market intelligence", workflow_id:"MarketResearcher" },
  //   { workflowName: "Doc Analyzer", description: "Smart document processing", workflow_id:"DocAnalyzer" },
  //   { workflowName: "Code Generator", description: "AI-assisted development", workflow_id:"CodeGenerator" },

  //   { workflowName: "Image Analysis", description: "Advanced visual recognition system" },
  //   { workflowName: "Video Summarizer", description: "AI-powered video comprehension" },
  //   { workflowName: "Market Researcher", description: "Real-time market intelligence" },
  //   { workflowName: "Doc Analyzer", description: "Smart document processing" },
    
  //   { workflowName: "Code Generator", description: "AI-assisted development" },

    
  //   { workflowName: "Data Cruncher", description: "Automated data processing", workflow_id:"DataCruncher" },
  // ];

  // Workflow page
// In your Workflow page component
const socialMediaFlows = [
  { 
    workflowName: "Youtube Video to Blog", 
    description: "Convert video content into SEO-friendly blog posts",
    workflow_id: "youtubeVideoToBlog"
  },
  {
    workflowName: "YT Video Summarizer",
    description: "Create concise Youtube video summaries for social snippets",
    workflow_id: "youtubeSummarizer"
  },
  {
    workflowName: "Blog Repurposer",
    description: "Transform blogs into multiple social media formats",
    workflow_id: "blogRepurposer"
  },
  {
    workflowName: "TikTok from Youtube",
    description: "Automatically create TikTok clips from long videos",
    workflow_id: "tiktokFromYoutube"
  },
  {
    workflowName: "Copywriter/Content Writer",
    description: "AI-powered content creation for social media",
    workflow_id: "socialContentWriter"
  }
];

const aiFlows = [
  {
    workflowName: "Image Analyzer",
    description: "Advanced visual recognition and metadata extraction",
    workflow_id: "ImageAnalysis"
  },
  {
    workflowName: "Video Analyzer",
    description: "Frame-by-frame video content analysis",
    workflow_id: "videoAnalyzer"
  },
  {
    workflowName: "Web Scraper",
    description: "Automated data extraction from websites",
    workflow_id: "webScraper"
  },
  {
    workflowName: "Code Generator Agent",
    description: "AI-assisted code writing and debugging",
    workflow_id: "codeGenerator"
  },
  {
    workflowName: "SEO Optimization Agent",
    description: "Automated SEO analysis and recommendations",
    workflow_id: "seoOptimizer"
  }
];

const researchFlows = [
  {
    workflowName: "Market Researcher Agent",
    description: "Real-time market trend analysis",
    workflow_id: "marketResearcher"
  },
  {
    workflowName: "Keyword Researcher",
    description: "SEO keyword discovery and analysis",
    workflow_id: "keywordResearcher"
  },
  {
    workflowName: "Competitor Researcher",
    description: "Competitive intelligence analysis",
    workflow_id: "competitorAnalyst"
  },
  {
    workflowName: "Segmentation Analyzer",
    description: "AI-driven customer profiling",
    workflow_id: "customerSegmentation"
  },
  {
    workflowName: "Company Researcher",
    description: "Deep dive into company profiles",
    workflow_id: "companyResearcher"
  }
];

const generalFlows = [
  {
    workflowName: "SAAS Price Calculator Agent",
    description: "Optimal pricing strategy analysis",
    workflow_id: "saasPricing"
  },
  {
    workflowName: "Travel Planning Agent",
    description: "AI-powered itinerary generation",
    workflow_id: "travelPlanner"
  },
  {
    workflowName: "Hashtag Researcher",
    description: "Trending hashtag recommendations",
    workflow_id: "hashtagResearcher"
  }
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
          <Link href="/">Scelor</Link>
          </div>
          <ul className="flex space-x-8 items-center">
            {['Workflows', 'Pricing', 'About'].map((item) => (
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

            {/* Social Media Flows */}
            <AutoScrollCarousel 
              features={socialMediaFlows} 
              title="Social Media Flows"
              description="Automate your social media content pipeline"
              direction="left"
            />

            {/* AI Flows */}
            <AutoScrollCarousel 
              features={aiFlows} 
              title="AI Flows"
              description="Advanced artificial intelligence solutions"
              direction="right"
            />

            {/* Research Flows */}
            <AutoScrollCarousel 
              features={researchFlows} 
              title="Research Flows"
              description="Data-driven insights and analysis"
              direction="left"
            />

            {/* General Flows */}
            <AutoScrollCarousel 
              features={generalFlows} 
              title="General Flows"
              description="Essential business automation tools"
              direction="right"
            />
      </div>
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