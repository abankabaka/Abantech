'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RainEffect() {
  const [drops, setDrops] = useState<{ id: number, left: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    // Generate drops for all devices
    const dropCount = window.innerWidth > 768 ? 60 : 35; // More drops on desktop
    
    const newDrops = Array.from({ length: dropCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 2,
    }));
    
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-[-50px] w-[1px] h-[60px] bg-gradient-to-b from-transparent via-primary/30 to-primary/60"
          style={{ left: `${drop.left}%` }}
          animate={{ 
            y: ['0vh', '110vh'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}
