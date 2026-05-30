"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Founder() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 glass-morphism group">
              <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  <span className="text-4xl font-headline font-bold text-primary">AA</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-foreground mb-2">ATWIJUKIRE ABAN</h3>
                <p className="text-primary tracking-widest uppercase text-sm font-bold">Founder & CEO</p>
                <div className="mt-8 text-sm text-muted-foreground italic">
                  *Professional portrait placeholder*
                </div>
              </div>
              
              {/* Actual image placeholder (hidden behind overlay initially for dramatic effect) */}
              <div className="absolute inset-0 bg-[url('/images/devs.png')] bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-lg font-bold">ATWIJUKIRE ABAN</p>
                 <p className="text-sm text-primary">Chief Systems Architect</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Visionary</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-6">From <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Nothing</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]">Something</span></h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-6 w-16 h-16 text-white/5 -z-10" />
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
                "Our vision has always been to build a unified ecosystem where complex technology meets iconic design. We don't just build systems; we engineer trust, security, and exponential growth for modern enterprises."
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As the Founder and Chief Systems Architect, Atwijukire Aban envisioned an ecosystem where cybersecurity, functional artistry, and robust backend engineering exist under one roof. 
              </p>
              <p>
                Eliminating the friction of disconnected vendors, AbanTechnologies provides a unified, highly secure digital infrastructure. From custom enterprise software to striking visual brand identities, every solution is meticulously crafted to scale.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-headline font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow">
                <Link href="/contact" className="flex items-center gap-2">
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
