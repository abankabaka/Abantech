"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Layers, Zap, Palette, Headset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyChooseUs() {
  const features = [
    {
      title: "Security-First Development",
      description: "Every system we engineer is fortified from the ground up to protect your sensitive data from modern cyber threats.",
      icon: Shield,
    },
    {
      title: "AI-Powered Solutions",
      description: "We integrate cutting-edge artificial intelligence to automate processes, enhance decision-making, and scale your business.",
      icon: Cpu,
    },
    {
      title: "Unified Digital Ecosystem",
      description: "From mobile apps to branding and robust cloud infrastructure, we provide a complete, seamless technology ecosystem.",
      icon: Layers,
    },
    {
      title: "Fast & Scalable Systems",
      description: "Built on high-performance architectures that handle rapid growth without compromising speed or reliability.",
      icon: Zap,
    },
    {
      title: "Modern UI/UX",
      description: "We craft visually stunning, intuitive interfaces that captivate users and elevate your brand's digital presence.",
      icon: Palette,
    },
    {
      title: "Reliable Support",
      description: "Our dedicated engineering team provides continuous maintenance and monitoring to keep your systems running 24/7.",
      icon: Headset,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Aban Advantage</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Why Industry Leaders Trust Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't just write code; we engineer resilient technology frameworks that inspire trust, unlock growth, and dominate the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-morphism border-white/5 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 bg-secondary/80 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
