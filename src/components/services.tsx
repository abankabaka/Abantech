'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextReveal, FadeUp } from './text-reveal';
import { Globe, Smartphone, Database, ShieldCheck, BrainCircuit, Paintbrush, Layout, Server, Code, LineChart } from 'lucide-react';

const services = [
  { id: '01', title: 'Enterprise Web', icon: Globe, desc: 'Resilient platforms. Zero downtime. Infinite scale.' },
  { id: '02', title: 'Native Mobile', icon: Smartphone, desc: 'Fluid iOS/Android architectures. Maximum retention.' },
  { id: '03', title: 'Custom Systems', icon: Database, desc: 'Bespoke CRM/ERP backend engineering.' },
  { id: '04', title: 'Cybersecurity', icon: ShieldCheck, desc: 'Zero-trust architecture. Military-grade protection.' },
  { id: '05', title: 'AI & ML', icon: BrainCircuit, desc: 'Intelligent automation via cutting-edge LLMs.' },
  { id: '06', title: 'Brand Identity', icon: Paintbrush, desc: 'Distinct visual identities that command trust.' },
  { id: '07', title: 'Modern UI/UX', icon: Layout, desc: 'User-centric interfaces blending aesthetics with utility.' },
  { id: '08', title: 'Cloud Ops', icon: Server, desc: 'High-speed global deployment and auto-scaling.' },
  { id: '09', title: 'IT Consulting', icon: Code, desc: 'High-level technical roadmap planning.' },
  { id: '10', title: 'Growth Marketing', icon: LineChart, desc: 'Data-driven analytics and targeted acquisition.' },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="section-padding py-32" id="services">
      <div className="mb-20">
        <FadeUp>
          <div className="text-primary font-code uppercase tracking-widest text-sm mb-4">[ Our Capabilities ]</div>
        </FadeUp>
        <h2 className="text-4xl md:text-7xl font-headline font-bold">
          <TextReveal>One ecosystem.</TextReveal><br />
          <TextReveal delay={0.2} className="text-white/50">Every capability.</TextReveal>
        </h2>
      </div>

      <div className="border-t border-white/10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={service.id}
              className="group border-b border-white/10 relative overflow-hidden"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Hover background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 z-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="font-code text-sm text-muted-foreground">{service.id}</span>
                  <h3 className={`text-3xl md:text-5xl font-headline font-medium transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/70'}`}>
                    {service.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-4 text-muted-foreground ml-[3.25rem] md:ml-0"
                    >
                      <p className="text-sm md:text-base max-w-xs">{service.desc}</p>
                      <Icon className="w-6 h-6 text-primary hidden md:block" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
