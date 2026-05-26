
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, History } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Aban A", role: "Chief Architect", bio: "Visionary lead in systems engineering.", img: "/images/Aban%20A%20Chief%20Architect.jpeg" },
    { name: "Paul W", role: "Lead Designer", bio: "Expert in iconic visual identities.", img: "/images/Paul%20W%20Lead%20Designer.jpeg" },
    { name: "Trevor N", role: "Security Lead", bio: "Specialist in zero-trust architecture.", img: "/images/Trevor%20N%20Security%20Lead.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="outline" className="border-primary/50 text-primary">About AbanTechnologies</Badge>
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Engineering the Future</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between complex technology and brilliant creative design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <History className="w-6 h-6" />
                <h2 className="text-2xl font-headline font-bold uppercase tracking-wider">Our Story</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aban Technologies was founded to eliminate the need for businesses to hire separate vendors for systems, websites, applications, and branding. We believe in a unified digital ecosystem where every component works in perfect harmony.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Target className="w-5 h-5" />
                    <h3 className="font-bold">Mission</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">To provide the foundational systems businesses need to lead and excel.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Eye className="w-5 h-5" />
                    <h3 className="font-bold">Vision</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">To redefine the digital landscape with resilient frameworks and iconic experiences.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-morphism p-2">
                <img 
                  src="https://picsum.photos/seed/office/800/800" 
                  alt="AbanTechnologies Office" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                  data-ai-hint="modern office"
                />
              </div>
            </div>
          </div>

          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-headline font-bold">Meet the Command Center</h2>
              <p className="text-muted-foreground">The experts behind the "Nothing to Something" transformation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <Card key={i} className="glass-morphism border-white/5 group hover:border-primary/50 transition-all overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-ai-hint="professional headshot"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>
                  <CardContent className="p-6 text-center space-y-2">
                    <h3 className="text-xl font-headline font-bold">{member.name}</h3>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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
