'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SmokeEffect() {
  const [particles, setParticles] = useState<{ id: number, left: number, size: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    // We only need a few large particles for a subtle ambient smoke effect
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      size: 200 + Math.random() * 300, // 200px to 500px wide blur
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 15, // Slow rising
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-300px] rounded-full bg-white/5 blur-[100px]"
          style={{ left: `${p.left}%`, width: p.size, height: p.size }}
          animate={{
            y: ['0vh', '-120vh'], // Rise from bottom to top
            opacity: [0, 0.5, 0], // Fade in and out
            scale: [1, 1.5, 2] // Expand slowly
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
