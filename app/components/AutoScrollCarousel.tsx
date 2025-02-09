// components/AutoScrollCarousel.tsx
'use client';
import { useRef, useState, useEffect } from 'react';
import WorkflowCard from '@/app/components/WorkflowCard';

interface AutoScrollCarouselProps {
  /**
   * Array of workflow objects to display in the carousel
   */
  features: Array<{
    workflowName: string;
    description: string;
    workflow_id:string;
  }>;
  
  /**
   * Title to display above the carousel
   */
  title: string;


  description: string;
  
  /**
   * Gap between cards in pixels (default: 40px)
   */
  gap?: number;
  
  /**
   * Text for the action button (default: "Try it out!")
   */
  buttonText?: string;

  
  /**
   * Scroll speed in pixels per frame (default: 1)
   */
  speed?: number;
}

export default function AutoScrollCarousel({
  features,
  title,
  description,
  gap = 40,
  buttonText = "Try it out!",
  speed = 1
}: AutoScrollCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedFeatures = [...features, ...features];

  useEffect(() => {
    let animationFrameId: number;
    const autoScroll = () => {
      const container = scrollContainerRef.current;
      if (container && !isPaused) {
        const cardWidth = firstCardRef.current?.offsetWidth || 0;
        const totalWidth = features.length * (cardWidth + gap);
        
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft -= totalWidth;
        }
        container.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, features.length, gap, speed]);

  return (
    <div className="mb-10">
      <h2 className='flex justify-center text-4xl font-bold text-white mb-4'>{title}</h2>
      <p className='flex justify-center text-2xl text-white mb-4'>{description}</p>
      <div className="relative group p-6 rounded-xl border border-[#2A2A3C] bg-gradient-to-br from-[#0F0F1A]/50 to-[#00101A]/30">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-nowrap gap-40 overflow-x-auto pb-4 scrollbar-hide pl-8"
        >
          {duplicatedFeatures.map((feature, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : null}
              className="flex-shrink-0 w-60 md:w-64"
            >
              <WorkflowCard
                workflowName={feature.workflowName}
                workflowDescription={feature.description}
                buttonText={buttonText}
                workflow_id={feature.workflow_id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}