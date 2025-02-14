"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "0",
      features: [
        "Basic Workflows",
        "5 Executions/Month",
        "Community Support",
        "Standard Processing"
      ],
      gradient: "from-[#2A2A3C] to-[#1A1A2F]"
    },
    {
      name: "Pro",
      price: "5",
      features: [
        "All Starter Features",
        "Unlimited Executions",
        "Priority Support",
        "AI Workflows",
        "Advanced Analytics"
      ],
      gradient: "from-[#7E3AF2] to-[#00C2FF]"
    },
    {
      name: "Enterprise",
      price: "10",
      features: [
        "All Pro Features",
        "Custom Workflows",
        "24/7 Support",
        "Dedicated Server",
        "SLA Agreements"
      ],
      gradient: "from-[#FF6B6B] to-[#FFA500]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      {/* Navigation Bar */}
      <motion.header 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#2A2A3C]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#00C2FF] bg-clip-text text-transparent">
            <Link href="/">Scelor</Link>
          </div>
          <div className="flex items-center gap-8">
            {['Workflows', 'Pricing', 'About'].map((item) => (
              <Link 
                key={item}
                href={`/${item}`}
                className="text-[#A0A0C0] hover:text-white transition-all font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h1 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pricing
          </motion.h1>
        </div>

        <div className="flex justify-center gap-6 relative items-center px-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="relative flex-[0.25] max-w-[280px] min-w-[250px] h-[400px] rounded-xl cursor-pointer"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              animate={{
                scale: hoveredCard === null ? 1 : hoveredCard === index ? 1.05 : 0.95,
                filter: hoveredCard === null ? 'none' : hoveredCard === index ? 'none' : 'blur(4px)',
                x: hoveredCard === null ? 0 : 
                   index === 0 ? -40 : 
                   index === 2 ? 40 : 0,
                y: hoveredCard === index ? -10 : 0,
                zIndex: hoveredCard === index ? 50 : 30
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div 
                className="h-full w-full flex flex-col justify-between p-6 rounded-xl border border-[#ffffff10]"
                style={{
                  background: `linear-gradient(to bottom right, ${tier.gradient.split(' ').join(', ')})`,
                  boxShadow: hoveredCard === index ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
                }}
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    ${tier.price}
                    <span className="text-sm text-[#A0A0C0]">/month</span>
                  </div>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature) => (
                      <li 
                        key={feature}
                        className="text-sm text-[#A0A0C0] flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-[#00C2FF] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                    tier.name === 'Pro' 
                      ? "bg-white text-black hover:bg-opacity-90"
                      : "bg-[#ffffff10] text-white hover:bg-[#ffffff20]"
                  }`}
                >
                  Get started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A2A3C] mt-32">
        <div className="container mx-auto px-6 py-16 text-center">
          <p className="text-[#A0A0C0]">
            &copy; {new Date().getFullYear()} Scelor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}