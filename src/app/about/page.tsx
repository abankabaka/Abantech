"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/founder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, Rocket, Cpu } from "lucide-react";

export default function AboutPage() {
  const leadership = [
    { name: "Aban Atwijukire", role: "Chief Executive Officer & Head of Engineering", bio: "Visionary lead in zero-trust architecture and elite systems engineering.", img: "/images/Aban%20A%20Chief%20Architect.jpeg" },
    { name: "Paul W", role: "Director of UI/UX", bio: "Master of creating iconic, high-conversion visual identities.", img: "/images/Paul%20W%20Lead%20Designer.jpeg" },
    { name: "Trevor N", role: "Lead Security Architect", bio: "Specialist in enterprise threat mitigation and data protection.", img: "/images/Trevor%20N%20Security%20Lead.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center space-y-5 mb-14 sm:mb-24">
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm">
              The AbanTechnologies Mission
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold tracking-tight">
              From Nothing to <span className="text-primary">Something.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are an elite digital engineering agency. We don't just build websites; we engineer secure, intelligent ecosystems that drive enterprise growth.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-32">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold">Why We Exist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The digital landscape is fragmented. Businesses often hire one agency for web design, another for software development, and a third for cybersecurity. This leads to broken systems, security vulnerabilities, and diluted brand identities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">AbanTechnologies solves this.</strong> We provide a unified command center for your digital presence. By combining military-grade zero-trust architecture with stunning, modern design, we deliver digital products that are as impenetrable as they are beautiful.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-3 p-4 bg-secondary/50 rounded-xl border border-border">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To equip modern enterprises with resilient, high-performance digital foundations that scale limitlessly.</p>
                </div>
                <div className="space-y-3 p-4 bg-secondary/50 rounded-xl border border-border">
                  <Rocket className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To become the global standard for secure, end-to-end digital engineering and enterprise architecture.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-morphism p-2 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Modern Enterprise Architecture" 
                  className="w-full h-full object-cover rounded-2xl opacity-90 grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
            </div>
          </div>

          {/* Core Tenets */}
          <div className="mb-20 sm:mb-32">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Engineering Tenets</h2>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
              <div className="flex gap-4 p-6 glass-morphism rounded-2xl">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security by Default</h3>
                  <p className="text-muted-foreground">We implement zero-trust protocols from day one. Security is never an afterthought; it is woven directly into the fabric of everything we build.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 glass-morphism rounded-2xl">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Intelligent Architecture</h3>
                  <p className="text-muted-foreground">We leverage cutting-edge AI and robust engineering principles to ensure your systems are fast, scalable, and future-proof.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mb-20 sm:mb-32">
            <Founder />
          </div>

          {/* Leadership Team */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-headline font-bold">The Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">The masterminds driving the AbanTechnologies standard of excellence.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {leadership.map((member, i) => (
                <Card key={i} className="glass-morphism border-border group hover:border-primary/50 transition-all overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                  </div>
                  <CardContent className="relative p-6 text-center space-y-2 -mt-20">
                    <h3 className="text-xl font-headline font-bold text-foreground drop-shadow-md">{member.name}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest bg-background/80 inline-block px-3 py-1 rounded-full">{member.role}</p>
                    <p className="text-sm text-muted-foreground pt-4">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
