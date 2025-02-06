// components/Particles.tsx
'use client';

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticleComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        Particles: {
          number: { value: 80 },
          color: { value: ['#8B5CF6', '#EC4899', '#3B82F6'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: { min: 0.5, max: 3 } },
          move: {
            enable: true,
            speed: { min: 0.5, max: 2 },
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            trail: {
              enable: true,
              length: 4,
              fillColor: '#8B5CF6'
            }
          }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          }
        }
      }}
      className="absolute inset-0"
    />
  );
}