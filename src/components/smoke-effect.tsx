'use client';

import { useEffect, useState } from 'react';

export default function SmokeEffect() {
  const [particles, setParticles] = useState<{ id: number, left: number, size: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    // Generate fewer particles with pre-calculated values
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      size: 200 + Math.random() * 200, // 200px to 400px wide
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-300px] rounded-full animate-smoke"
          style={{ 
            left: `${p.left}%`, 
            width: p.size, 
            height: p.size,
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}
