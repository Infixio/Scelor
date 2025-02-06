"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import AITemplate from '@/app/components/AITemplate';
import PremiumCard from '@/app/components/PremiumCard';

export default function Workflows() {
  return (
<div className="w-full px-4 md:px-8 py-8 min-h-screen bg-slate-900">
<div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 scrollbar-hide">
        {[
          { workflowName: "xyz", description: "Hello World" },
          { workflowName: "xyz", description: "Hello World" },
          { workflowName: "xyz", description: "Hello World" },
          { workflowName: "xyz", description: "Hello World" },
        ].map((feature, i) => (
          <div key={i} className="flex-shrink-0 w-64 md:w-72">
            <PremiumCard
                title={feature.workflowName}
                subtitle={feature.description}
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
          </div>
        ))}
    
      </div>
    </div>

    
  );
}