
"use client";

import { 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  Palette, 
  Database,
  Search,
  Layout,
  Server,
  Code,
  LineChart,
  BrainCircuit
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    { name: "Website Development", icon: Globe, desc: "High-performance websites built for conversion and speed." },
    { name: "Mobile App Development", icon: Smartphone, desc: "Fluid, native-feeling experiences for iOS and Android." },
    { name: "System Development", icon: Database, desc: "Bespoke backend architectures for complex operations." },
    { name: "Cybersecurity", icon: ShieldCheck, desc: "Vulnerability assessment and hardening of digital assets." },
    { name: "AI Integrations", icon: BrainCircuit, desc: "Leveraging LLMs and machine learning for automation." },
    { name: "Branding", icon: Palette, desc: "Distinct visual identities that command enterprise trust." },
    { name: "UI/UX Design", icon: Layout, desc: "User-centric interfaces that blend beauty with utility." },
    { name: "Hosting", icon: Server, desc: "Reliable, high-speed deployment environments." },
    { name: "IT Consultation", icon: Code, desc: "Strategic technical roadmap planning for startups." },
    { name: "Digital Marketing", icon: LineChart, desc: "Data-driven growth strategies for the digital age." },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <div className="text-primary font-headline font-bold uppercase tracking-widest text-sm">Our Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Unifying Premium Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AbanTechnologies replaces the need for disconnected vendors by offering a complete, integrated digital service ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="glass-morphism border-white/5 hover:border-primary/40 group transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="text-primary group-hover:text-primary-foreground w-7 h-7 transition-colors" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-headline font-bold">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  LEARN MORE
                  <span className="ml-2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
