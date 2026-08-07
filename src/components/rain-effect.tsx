'use client';

import { useEffect, useState } from 'react';

export default function RainEffect() {
  const [drops, setDrops] = useState<{ id: number, left: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    const dropCount = window.innerWidth > 768 ? 40 : 20; // Reduced count for better performance
    
    const newDrops = Array.from({ length: dropCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 1 + Math.random() * 1.5,
    }));
    
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-[-100px] w-[1px] h-[60px] bg-gradient-to-b from-transparent via-primary/30 to-primary/60 animate-rain"
          style={{ 
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`
          }}
        />
      ))}
    </div>
  );
}
