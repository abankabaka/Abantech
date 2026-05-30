"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Database,
  Layout,
  Server,
  Code,
  LineChart,
  BrainCircuit,
  Paintbrush
} from "lucide-react";

export function Services() {
  const services = [
    { 
      name: "Enterprise Web Engineering", 
      icon: Globe, 
      desc: "Fast, scalable, and conversion-focused websites engineered for modern businesses. We build resilient digital platforms that handle massive traffic with zero downtime." 
    },
    { 
      name: "Native Mobile Applications", 
      icon: Smartphone, 
      desc: "Fluid, high-performance experiences for iOS and Android. Our mobile architectures prioritize speed, security, and exceptional user retention." 
    },
    { 
      name: "Custom Systems Engineering", 
      icon: Database, 
      desc: "Bespoke backend architectures for complex operations. We build CRMs, ERPs, and management portals tailored exactly to your unique workflow." 
    },
    { 
      name: "Zero-Trust Cybersecurity", 
      icon: ShieldCheck, 
      desc: "Military-grade vulnerability assessment and infrastructure hardening. We protect your digital assets against the most sophisticated modern cyber threats." 
    },
    { 
      name: "AI & Machine Learning", 
      icon: BrainCircuit, 
      desc: "Intelligent automation powered by cutting-edge LLMs. We integrate artificial intelligence to optimize decision-making and eliminate manual processes." 
    },
    { 
      name: "Premium Brand Identity", 
      icon: Paintbrush, 
      desc: "Distinct, memorable visual identities that command enterprise trust. We design logos and branding that elevate you above the competition." 
    },
    { 
      name: "Modern UI/UX Design", 
      icon: Layout, 
      desc: "User-centric interfaces that blend breathtaking aesthetics with utility. We craft intuitive flows that maximize user engagement and conversion rates." 
    },
    { 
      name: "Cloud Hosting & Ops", 
      icon: Server, 
      desc: "Reliable, high-speed global deployment environments. We manage your infrastructure to ensure 99.99% uptime and auto-scaling capabilities." 
    },
    { 
      name: "Strategic IT Consulting", 
      icon: Code, 
      desc: "High-level technical roadmap planning for enterprises and scaling startups. Let our lead architects guide your technology investments." 
    },
    { 
      name: "Data-Driven Marketing", 
      icon: LineChart, 
      desc: "Targeted digital growth strategies. We leverage analytics and SEO to dramatically increase your organic reach and customer acquisition." 
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <div className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary/50"></span>
            Our Capabilities
            <span className="w-8 h-px bg-primary/50"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Unifying Premium Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AbanTechnologies eliminates the friction of disconnected vendors by providing a complete, elite digital engineering ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="h-full p-5 sm:p-8 rounded-3xl glass-morphism border border-white/5 hover:border-primary/40 active:border-primary/60 bg-background/50 hover:bg-secondary/40 active:bg-secondary/60 transition-all duration-500 relative overflow-hidden flex gap-4 sm:gap-6 cursor-pointer">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <service.icon className="text-muted-foreground group-hover:text-primary w-8 h-8 transition-colors duration-500" />
                  </div>
                </div>

                <div className="relative z-10 space-y-3 flex-1">
                  <h3 className="text-xl font-headline font-bold text-foreground group-hover:text-foreground transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
