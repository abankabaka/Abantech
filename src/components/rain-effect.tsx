'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function RainEffect() {
  const [drops, setDrops] = useState<{ id: number, left: number, delay: number, duration: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const newDrops = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1.5 + Math.random() * 1.5,
    }));
    
    setDrops(newDrops);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="absolute top-24 left-0 w-full h-[40vh] pointer-events-none z-0 overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-[-50px] w-[1px] h-[40px] bg-gradient-to-b from-transparent via-primary/40 to-primary/80"
          style={{ left: `${drop.left}%` }}
          animate={{ 
            y: [0, 300],
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
