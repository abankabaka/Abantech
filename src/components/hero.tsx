'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal, FadeUp } from './text-reveal';
import MagneticButton from './magnetic-button';
import RainEffect from './rain-effect';

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <RainEffect />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-[90vw]">
        
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-code uppercase tracking-widest text-muted-foreground">Enterprise Engineering</span>
        </div>

        <h1 className="text-[12vw] leading-[0.9] font-headline font-bold tracking-tighter mb-8 max-w-7xl">
          <TextReveal delay={2.5} stagger={0.03} splitBy="char" className="text-gradient">
            Engineering
          </TextReveal>
          <br />
          <TextReveal delay={2.8} stagger={0.03} splitBy="char" className="text-white">
            Secure Digital
          </TextReveal>
          <br />
          <TextReveal delay={3.1} stagger={0.03} splitBy="char" className="text-primary italic pr-4">
            Excellence.
          </TextReveal>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mt-12 md:mt-24">
          <FadeUp delay={3.5} className="max-w-md">
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
              Intelligent systems. Secure applications. Digital experiences that scale.
            </p>
          </FadeUp>

          <FadeUp delay={3.7}>
            <MagneticButton href="/contact" strength={0.4}>
              <div className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                Start Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M13 1H3.4M13 1V10.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </MagneticButton>
          </FadeUp>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        <span className="text-[10px] uppercase font-code tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
}
