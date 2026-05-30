"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  ShieldCheck, 
  Rocket, 
  CheckCircle,
  Database,
  Lock
} from "lucide-react";

export function TrustBlocks() {
  const stats = [
    { label: "Client Success Rate", value: "100%", icon: CheckCircle },
    { label: "Systems Engineered", value: "250+", icon: Database },
    { label: "Cyber Security Score", value: "A+", icon: ShieldCheck },
    { label: "Global Reach", value: "12+", icon: Globe },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.3 }}
              className="perspective-[1000px] group"
            >
              <div className="glass-morphism h-full p-5 sm:p-8 rounded-[2rem] border border-white/5 hover:border-primary/50 bg-secondary/20 hover:bg-secondary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-700 cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-500 relative z-10">
                  <stat.icon className="text-primary w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-headline font-bold mb-1 sm:mb-2 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300 relative z-10">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest leading-snug group-hover:text-primary/80 transition-colors relative z-10">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 sm:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-headline font-bold leading-tight">
              Engineering Trust <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient drop-shadow-sm">At Every Layer</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AbanTechnologies, security isn't an afterthought—it's the foundation. We combine high-performance engineering with absolute data integrity to build systems that don't just work, but lead.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { title: "Zero Trust Architecture", desc: "Every node verified, every packet authenticated.", icon: Lock },
                { title: "Rapid Scale Protocols", desc: "Engineered to grow from startup to enterprise instantly.", icon: Rocket },
                { title: "Unified Service Mesh", desc: "No disconnected vendors. One seamless ecosystem.", icon: Users },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-secondary/40 transition-colors duration-300 cursor-default border border-transparent hover:border-white/5"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, type: "spring" }}
            className="relative perspective-[1000px]"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden glass-morphism border-white/20 p-2 shadow-2xl relative z-10 transform hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(var(--primary),0.4)] transition-all duration-700 group">
              <div className="w-full h-full bg-black/80 rounded-2xl overflow-hidden relative border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  alt="Enterprise Network"
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 glass-morphism rounded-2xl border-white/10 bg-background/60 backdrop-blur-xl group-hover:border-primary/30 transition-colors duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]">Live Security Node</span>
                      </div>
                      <span className="text-xs font-mono text-green-400">100% Secure</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full animate-[shimmer_2s_infinite] relative">
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full animate-[shimmer_2.5s_infinite] relative delay-75">
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
