'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'DEVS',
    category: 'Cybersecurity & Blockchain',
    image: '/images/devs.png',
    tags: ['Next.js', 'Blockchain', 'AES-256', 'TypeScript'],
    description: 'A military-grade decentralized voting and decision-making system. Engineered with zero-trust architecture, advanced cryptographic hashing, and a scalable Next.js frontend to ensure immutable, transparent operations across distributed networks.'
  },
  {
    title: 'Enterprise Hospital',
    category: 'HealthTech Ecosystem',
    image: '/images/hospital.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'HL7'],
    description: 'A comprehensive Health Information System (HIS) connecting multiple hospital wings. Features include real-time patient tracking, secure medical record encryption, automated billing pipelines, and HL7-compliant data exchange.'
  },
  {
    title: 'Modern POS',
    category: 'Retail & FinTech',
    image: '/images/pos.png',
    tags: ['Electron', 'React', 'Firebase', 'Stripe'],
    description: 'An ultra-fast, offline-first Point of Sale system built for high-volume retail chains. Integrates seamlessly with Stripe for payment processing, and uses Firebase for real-time inventory synchronization across global stores.'
  },
  {
    title: 'School Mgmt',
    category: 'EdTech Platform',
    image: '/images/school.png',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'AWS'],
    description: 'A modern, cloud-native school management architecture handling thousands of concurrent users. Streamlines administrative workflows, digital classrooms, grading systems, and real-time parent-teacher communication portals.'
  }
];

export default function HorizontalScroll() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section className="h-[80vh] md:h-screen bg-background overflow-hidden relative flex flex-col justify-center section-padding pb-0 md:pb-0">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-12 lg:left-32 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-8xl font-headline font-bold text-gradient">The Vault.</h2>
          <p className="text-sm md:text-xl text-muted-foreground mt-2 md:mt-4 font-body tracking-tight">Featured Enterprise Deployments</p>
        </div>

        <div className="flex gap-4 md:gap-16 px-0 md:px-12 lg:px-32 items-center h-full pt-24 md:pt-32 w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          <div className="w-2 md:w-0 shrink-0" />
          
          {projects.map((project, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedProject(project)}
              className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[55vh] md:h-[60vh] rounded-2xl overflow-hidden shrink-0 cursor-pointer border border-white/10 snap-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 md:opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                <div className="translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary font-code uppercase text-[10px] md:text-xs tracking-widest">{project.category}</span>
                  <h3 className="text-2xl md:text-5xl font-headline font-bold mt-1 md:mt-2 mb-3 md:mb-4">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-code bg-white/10 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary text-black rounded-full items-center justify-center font-bold uppercase tracking-widest opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20 pointer-events-none">
                Explore
              </div>
            </div>
          ))}
          
          <div className="w-[10vw] shrink-0" />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden flex items-center gap-2 text-[10px] uppercase font-code tracking-widest text-muted-foreground/50 animate-pulse pointer-events-none">
          <span>←</span>
          <span>Swipe</span>
          <span>→</span>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col justify-end md:justify-center items-center bg-background/90 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Image Header */}
              <div className="relative w-full h-64 md:h-96 shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-12 overflow-y-auto">
                <span className="text-primary font-code uppercase text-xs tracking-widest">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-5xl font-headline font-bold mt-2 mb-6">{selectedProject.title}</h3>
                
                <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="font-code text-sm uppercase text-white/50 mb-4 tracking-widest">Tech Stack Architecture</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full text-sm font-code border border-white/10 bg-white/5 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                  <button onClick={() => setSelectedProject(null)} className="font-code uppercase tracking-widest text-sm hover:text-primary transition-colors">
                    [ Close Transmission ]
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
