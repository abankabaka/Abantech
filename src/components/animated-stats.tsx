'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 45, suffix: '+', label: 'Systems Built' },
  { value: 12, suffix: '', label: 'Services Offered' },
  { value: 30, suffix: '+', label: 'Technologies Used' }
];

// Simple counter hook
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return { count, ref: nodeRef };
}

export default function AnimatedStats() {
  return (
    <section className="section-padding py-32 bg-secondary/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 relative z-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => {
          const { count, ref } = useCounter(stat.value, 2.5);
          
          return (
            <div key={i} ref={ref} className="flex flex-col items-center md:items-start">
              <div className="text-[15vw] md:text-[8vw] leading-none font-headline font-bold text-gradient flex items-baseline">
                {count}
                <span className="text-primary text-[10vw] md:text-[5vw]">{stat.suffix}</span>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground font-body tracking-tight mt-4">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
