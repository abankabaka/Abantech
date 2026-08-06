'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './magnetic-button';

const navLinks = [
  { name: 'Ecosystem', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass border-b-0' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image src="/images/logo.png" alt="AbanTechnologies" fill className="object-contain" />
            </div>
            <span className="font-headline font-bold text-lg tracking-tight block">
              Aban<span className="text-primary">Technologies</span>
            </span>
          </Link>

          {/* Desktop minimal nav */}
          <div className="hidden md:flex items-center gap-8">
            <MagneticButton href="/contact" className="px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
              Initialize
            </MagneticButton>
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Open Menu"
            >
              <div className="w-6 h-[2px] bg-white rounded-full" />
              <div className="w-6 h-[2px] bg-white rounded-full w-4 ml-auto" />
            </button>
          </div>

          {/* Mobile minimal nav */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5 p-2 z-50 relative"
              aria-label="Open Menu"
            >
              <div className="w-6 h-[2px] bg-white rounded-full" />
              <div className="w-6 h-[2px] bg-white rounded-full w-4 ml-auto" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col justify-center"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(100% 0 0% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 md:top-8 md:right-12">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-sm font-code uppercase tracking-widest hover:text-primary transition-colors p-4"
              >
                [ Close ]
              </button>
            </div>

            <div className="container mx-auto px-6 md:px-12">
              <nav className="flex flex-col gap-4 md:gap-6">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-8xl font-headline font-bold text-white/50 hover:text-white transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              <motion.div 
                className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-muted-foreground font-code text-sm gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div>abantechnologies1@gmail.com</div>
                <div>Kampala, Uganda</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
