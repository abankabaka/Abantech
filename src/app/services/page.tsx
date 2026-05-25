
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center space-y-4 mb-20">
            <Badge variant="outline" className="border-primary/50 text-primary">Our Ecosystem</Badge>
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Comprehensive Capabilities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From architecture to visual identity, we provide every layer of your digital presence.
            </p>
          </div>

          <Services />

          <section className="mt-32 p-12 glass-morphism rounded-3xl border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold">Why Choose Our Ecosystem?</h2>
                <div className="space-y-4">
                  {[
                    "Unified Support - One point of contact for everything.",
                    "Cyber-Hardened - Security built into the DNA of every project.",
                    "Scalable Infrastructure - Ready for global deployment.",
                    "Custom Engineering - No templates, only bespoke solutions."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="rounded-xl font-headline group" asChild>
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-secondary/50 rounded-2xl flex items-center justify-center border border-white/5">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-headline">99.9%</div>
                    <div className="text-[10px] uppercase text-muted-foreground">Uptime</div>
                  </div>
                </div>
                <div className="aspect-video bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                   <div className="text-center">
                    <div className="text-2xl font-bold font-headline">A+</div>
                    <div className="text-[10px] uppercase text-primary">Security</div>
                  </div>
                </div>
                <div className="aspect-video bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                   <div className="text-center">
                    <div className="text-2xl font-bold font-headline">24/7</div>
                    <div className="text-[10px] uppercase text-primary">Monitoring</div>
                  </div>
                </div>
                <div className="aspect-video bg-secondary/50 rounded-2xl flex items-center justify-center border border-white/5">
                   <div className="text-center">
                    <div className="text-2xl font-bold font-headline">100%</div>
                    <div className="text-[10px] uppercase text-muted-foreground">Custom</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
