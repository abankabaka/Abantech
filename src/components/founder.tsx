"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Founder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '10s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Enhanced Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative perspective-[1000px] z-20"
          >
            {/* Glowing rotating backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-500/30 blur-2xl rounded-[3rem] animate-spin-slow opacity-50"></div>
            
            <div 
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/20 glass-morphism group cursor-pointer outline-none shadow-2xl transition-all duration-700 hover:shadow-[0_0_50px_rgba(var(--primary),0.4)] hover:-translate-y-2"
              tabIndex={0}
            >
              {/* Initial State (Initials) */}
              <div className="absolute inset-0 bg-secondary/90 flex flex-col items-center justify-center p-8 text-center transition-all duration-700 group-hover:opacity-0 group-focus:opacity-0 group-hover:scale-110">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/50 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className="w-28 h-28 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm">
                    <span className="text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-primary">AA</span>
                  </div>
                </div>
                <h3 className="text-3xl font-headline font-bold text-foreground mb-2 tracking-tight">ATWIJUKIRE ABAN</h3>
                <p className="text-primary tracking-[0.2em] uppercase text-sm font-bold mb-8">Founder & CEO</p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                  <span>Interact to reveal</span>
                  <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                </div>
              </div>
              
              {/* Actual CEO Image with cinematic scale effect */}
              <div className="absolute inset-0 bg-[url('/images/CEO.jpeg')] bg-cover bg-center opacity-0 scale-110 group-hover:opacity-100 group-focus:opacity-100 group-hover:scale-100 group-focus:scale-100 transition-all duration-700 ease-out"></div>
              
              {/* Overlay Gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700"></div>
              
              {/* Bottom Label on reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-[120%] group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-700 ease-out delay-100 z-10">
                 <motion.div 
                   className="w-12 h-1 bg-primary mb-4 rounded-full"
                   layoutId="underline"
                 />
                 <p className="text-2xl font-headline font-bold text-white drop-shadow-md">ATWIJUKIRE ABAN</p>
                 <p className="text-sm font-medium tracking-widest uppercase text-primary/90 mt-1">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10">
                <Sparkles className="w-4 h-4" /> The Visionary
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-6 leading-[1.1]">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Nothing</span>{" "}
                <br className="hidden sm:block" />
                to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_15px_rgba(var(--primary),0.4)]">Something</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -left-6 -top-6 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-primary/40 -z-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-light italic pl-4 border-l-2 border-primary/50 relative z-10">
                "Our vision has always been to build a unified ecosystem where complex technology meets iconic design. We engineer trust, security, and exponential growth."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground/90 leading-relaxed text-base sm:text-lg">
              <p className="hover:text-foreground transition-colors duration-300">
                As the Founder and Chief Systems Architect, Atwijukire Aban envisioned an ecosystem where cybersecurity, functional artistry, and robust backend engineering exist under one roof. 
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                Eliminating the friction of disconnected vendors, AbanTechnologies provides a unified, highly secure digital infrastructure. From custom enterprise software to striking visual brand identities, every solution is meticulously crafted to scale.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <Button 
                size="lg" 
                className="group relative overflow-hidden font-headline font-bold text-base h-14 px-8 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.6)] hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Partner With Us</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-0"></div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
