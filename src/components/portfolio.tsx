
"use client";

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  ChevronRight, 
  Lock,
  Search,
  Filter
} from "lucide-react";
import { cn } from '@/lib/utils';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { 
      id: 1, 
      title: "DEVS", 
      subtitle: "Digital Evidence Verification System", 
      tag: "Security", 
      img: "https://picsum.photos/seed/devs/800/600",
      description: "A secure blockchain-based system for verifying digital forensic evidence integrity."
    },
    { 
      id: 2, 
      title: "Hospital Management", 
      subtitle: "Enterprise Health Ecosystem", 
      tag: "Systems", 
      img: "https://picsum.photos/seed/hospital/800/600",
      description: "Unified patient records and surgical scheduling for multi-branch clinics."
    },
    { 
      id: 3, 
      title: "School System", 
      subtitle: "Academic Operations Engine", 
      tag: "Education", 
      img: "https://picsum.photos/seed/school/800/600",
      description: "Automated billing, grading, and parent-teacher communication portal."
    },
    { 
      id: 4, 
      title: "POS System", 
      subtitle: "Retail Intelligence Hub", 
      tag: "Commerce", 
      img: "https://picsum.photos/seed/pos/800/600",
      description: "Inventory tracking and real-time sales analytics for multi-location retail."
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.tag.toLowerCase() === filter);

  return (
    <section id="vault" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="text-primary font-headline font-bold uppercase tracking-widest text-sm">Project Vault</div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Enterprise-Grade <br /> Solutions Deployed</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 bg-secondary/50 rounded-xl border border-white/5">
            {['all', 'security', 'systems', 'commerce'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all",
                  filter === f ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <div key={i} className="group relative glass-morphism rounded-3xl overflow-hidden border-white/5 hover:border-primary/30 transition-all">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={project.tag + " software"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary/90 backdrop-blur-md border-none text-[10px] font-bold py-1 px-3">
                    {project.tag.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
                    <p className="text-sm text-primary font-medium tracking-wide uppercase">{project.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                <div className="pt-4 flex items-center gap-4">
                  <Button variant="outline" size="sm" className="rounded-xl border-white/10 hover:bg-white/5">
                    View Case Study
                  </Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <Lock className="w-3 h-3" />
                    ENCRYPTED_DATA
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="ghost" className="font-headline group">
            Explore Full Vault
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
