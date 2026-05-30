"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Code, Zap, ChevronRight } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden bg-background">
      {/* High-end Background Glows & Particles */}
      <div className={cn(
        "absolute inset-0 z-0 opacity-30 cyber-grid",
        theme === 'matrix' && "opacity-40"
      )} />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[0%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        
        {/* Animated Particles */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: Math.random() * 1000, x: Math.random() * 1000, opacity: 0 }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-primary/50 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Badge variant="outline" className="py-2 px-5 rounded-full border-primary/40 text-primary font-headline shadow-[0_0_15px_rgba(var(--primary),0.2)] bg-primary/5 backdrop-blur-md">
                  <Shield className="w-3.5 h-3.5 mr-2 animate-pulse" />
                  Enterprise Digital Engineering
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.1] tracking-tight"
              >
                Engineering <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-300% animate-gradient drop-shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                  Secure Digital Excellence
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-body font-light"
              >
                Aban Technologies builds intelligent systems, secure applications, modern websites, and powerful digital experiences that help businesses scale confidently in the modern era.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-headline rounded-xl shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all duration-300 group bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-headline rounded-xl glass-morphism group border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Link href="/#services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative hidden md:block perspective-1000"
          >
            <motion.div 
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0],
                y: [0, -15, 0] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square glass-morphism rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 transform-style-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-transparent p-12 flex flex-col justify-between">
                
                {/* Header elements */}
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-right glass-morphism px-4 py-2 rounded-lg border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Network Status</div>
                    <div className="text-green-400 font-bold flex items-center justify-end text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-[0_0_10px_#4ade80] animate-pulse" />
                      SECURE
                    </div>
                  </div>
                </div>
                
                {/* Center abstract visual */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute w-48 h-48 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-32 h-32 border border-blue-500/30 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                  <div className="absolute w-16 h-16 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                  <Zap className="w-8 h-8 text-primary relative z-10" />
                </div>

                {/* Bottom console */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-primary/70 mb-2">
                      <span>CYBER_DEFENSE_MATRIX</span>
                      <span>100% SECURE</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)] relative" style={{ width: '100%' }}>
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="glass-morphism p-5 rounded-xl border-border bg-background/40 backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="text-sm font-headline font-bold text-foreground">System Logs</div>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono space-y-1">
                      <div><span className="text-primary mr-2">&gt;</span>Initializing enterprise stack...</div>
                      <div><span className="text-primary mr-2">&gt;</span>Deploying zero-trust protocols...</div>
                      <div><span className="text-primary mr-2">&gt;</span>All systems operational.</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
