"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import PremiumCard from '@/app/components/PremiumCard'
import AnimatedHeading from '@/app/components/AnimatedHeading';
import MainButton from '@/app/components/MainButton';
import FeatureCard from '@/app/components/FeatureCard';
const features = [
  {
    title: 'Neural Architecture',
    description: 'Advanced neural network configurations with real-time monitoring',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7E3AF2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>,
    color1: '#7E3AF2',
    color2: '#00C2FF'
  },
  {
    title: 'Distributed Agents',
    description: 'Decentralized autonomous systems with self-learning capabilities',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7E3AF2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>,
    color1: '#00C2FF',
    color2: '#2CDB93'
  },
  {
    title: 'Real-time Analytics',
    description: 'Instant insights with predictive modeling and visualization',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7E3AF2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>,
    color1: '#FF6B6B',
    color2: '#FFA500'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      
      <Head>
        <title>Scelor - Next-Gen AI Automation</title>
        <meta name="description" content="Agentic AI workflow platform with neural architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A0D45]/30 via-[#0A0A0F] to-[#003C5A]/30 animate-gradient-rotate" />
      </div>

      {/* Sticky header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#2A2A3C]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
            Scelor
          </div>
          <ul className="flex space-x-8 items-center">
            {['Product', 'Solutions', 'Resources', 'Company'].map((item) => (
              <li key={item}>
                <a className="text-[#A0A0C0] hover:text-white transition-all font-medium cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
            <button className="bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </ul>
        </nav>
      </motion.header>

      {/* Main content */}
      <main className="relative z-20 container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="text-center mb-28">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
              Cognitive Automation
            </span><br />
            for the AI Era
          </motion.h1>
          
          <p className="text-xl text-[#A0A0C0] max-w-2xl mx-auto mb-12">
            Architect intelligent workflows with neural networks and distributed agent systems
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-[#7E3AF2] hover:bg-[#6B2ACF] text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2">
              <span>Start Building</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="border border-[#2A2A3C] hover:border-[#7E3AF2] text-white px-8 py-4 rounded-xl transition-all">
              Watch Demo
            </button>
          </div>
        </section>

{/* Feature Grid */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
  {features.map((feature, i) => (
    <FeatureCard
      key={feature.title}
      title={feature.title}
      description={feature.description}
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="..." />
        </svg>
      }
      color1={feature.color1}
      color2={feature.color2}
    />
  ))}
</section>

        {/* Node Visualization */}
        <div className='mb-20 flex text-6xl font-bold text-white mb-6 leading-tight justify-center'><h2>Our Workflows</h2></div>
        
        <div className='mb-20 flex'>  <PremiumCard
    title="Analyze Image"
    subtitle="Upload any image to analyze"
    features={[
      'Upload Image',
      'Our AI analyzes the image',
      'Checks every aspect of the image',
      'Generates a detailed analysis!'
    ]}
    buttonText="Try it out!"
  />

  <PremiumCard
    title="Video Summarizer"
    subtitle="Summarize Youtube Videos"
    features={[
      'Enter Youtube URL',
      'Our AI analyzes the video',
      'Workflow Generates Summary',
      'Fast and Easy!'
    ]}
    buttonText="Try it out!"
    color1="#00C2FF"
    color2="#2CDB93"
  />

  <PremiumCard
    title="Market Researcher"
    subtitle="Expert AI agent for market research"
    features={[
      'Enter Company name to research',
      'Complete market analysis',
      'Competative marketing strategies',
      '24/7 Support'
    ]}
    buttonText="Try it out!"
    color1="#FF6B6B"
    color2="#FFA500"
  /></div>
    <div className='mb-20 flex justify-center'><MainButton color1="#00C2FF" color2="#2CDB93">Explore Workflows</MainButton></div>
        {/* Key Features Section */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 mt-30">Why Choose Scelor?</h2>
            <p className="text-[#A0A0C0] max-w-2xl mx-auto">
              Transform your workflow automation with our cutting-edge AI solutions
            </p>
          </motion.div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          { [
              { 
                title: 'Smart Automation', 
                description: 'AI-powered decision making with real-time adjustments',
                icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
                color1: '#7E3AF2',
                color2: '#00C2FF'
              },
              {
                title: 'Enterprise Security',
                description: 'Military-grade encryption and compliance protocols',
                icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
                color1: '#00C2FF',
                color2: '#2CDB93'
              },
            ].map((feature, i) => (
        <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="..." />
              </svg>
            }
            color1={feature.color1}
            color2={feature.color2}
          />
        ))}
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
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
                {['Features', 'Integrations', 'Pricing', 'Documentation'].map((link) => (
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

      <style jsx global>{`
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 20s linear infinite;
        }

        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
      `}</style>
    </div>
  );
}