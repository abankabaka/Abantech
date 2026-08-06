'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Aban Technologies transformed the way we manage student records, fees, and academic reports. Fast, reliable, and easy to use.",
    name: "Samuel Kato",
    title: "Head Teacher, Bright Future Secondary"
  },
  {
    quote: "We needed a secure and efficient healthcare platform. They delivered a complete hospital management system that streamlined everything.",
    name: "Dr. Grace Namutebi",
    title: "Medical Director, LifeCare Medical Centre"
  },
  {
    quote: "The POS solution improved our sales tracking and inventory management. The system is stable, modern, and exactly what we needed.",
    name: "Brian Mugisha",
    title: "Operations Manager, Prime Retail Stores"
  },
  {
    quote: "Our organization needed a professional online presence. Aban Technologies designed our website beautifully. Exceeded expectations.",
    name: "Patricia Nankya",
    title: "Executive Director, Inspire Uganda"
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding py-32 md:py-48 bg-background relative overflow-hidden">
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-10 left-6 md:top-20 md:left-20 text-[30vw] md:text-[20vw] font-headline font-bold text-white/5 leading-none pointer-events-none select-none">
        "
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <span className="text-primary font-code uppercase tracking-widest text-sm mb-12">[ Client Success ]</span>
        
        <div className="h-[40vh] md:h-[30vh] w-full relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl md:text-5xl lg:text-6xl font-headline font-medium tracking-tight mb-8">
                {testimonials[currentIdx].quote}
              </h3>
              
              <div className="mt-8 flex flex-col items-center">
                <div className="w-12 h-[1px] bg-primary mb-6" />
                <p className="font-bold text-lg md:text-xl tracking-tight">{testimonials[currentIdx].name}</p>
                <p className="text-muted-foreground font-code text-sm mt-1">{testimonials[currentIdx].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className="w-12 h-[2px] rounded-full overflow-hidden bg-white/10 relative"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {currentIdx === idx && (
                <motion.div 
                  className="absolute inset-0 bg-primary"
                  layoutId="activeDot"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
