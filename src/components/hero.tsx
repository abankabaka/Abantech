
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Code, Zap } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className={cn(
        "absolute inset-0 z-0 opacity-20 cyber-grid",
        theme === 'matrix' && "opacity-30"
      )} />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="py-1.5 px-4 rounded-full border-primary/50 text-primary font-headline animate-float">
                <Shield className="w-3 h-3 mr-2" />
                Enterprise Tech Ecosystem
              </Badge>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Nothing</span> to <br />
                <span className="relative">
                  Something.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-body">
                Aban Technologies engineers robust systems, custom applications, and premium digital identities for the modern era. Secure. Resilient. Iconic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-headline rounded-xl shadow-xl shadow-primary/20 group">
                Deploy Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-headline rounded-xl glass-morphism group">
                Browse Vault
                <Zap className="ml-2 w-5 h-5 group-hover:text-primary transition-colors" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <div className="text-3xl font-bold font-headline">99.9%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Uptime Reliability</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-headline">24/7</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Security Ops</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-headline">50+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Global Deployments</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square glass-morphism rounded-3xl overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-primary/20 rounded-2xl">
                    <Code className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Status</div>
                    <div className="text-green-500 font-bold flex items-center justify-end">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      SYSTEMS ONLINE
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-[shimmer_2s_infinite]" style={{ width: '75%' }} />
                  </div>
                  <div className="flex justify-between text-xs font-mono opacity-50">
                    <span>ENGINEERING_CORE_v2.4</span>
                    <span>75% DEPLOYED</span>
                  </div>
                </div>

                <div className="glass-morphism p-6 rounded-2xl border-white/5 space-y-3">
                  <div className="text-sm font-headline font-bold">Latest Infrastructure Update</div>
                  <div className="text-xs text-muted-foreground font-mono">
                    &gt; DEVS implementation complete<br />
                    &gt; Cybersecurity mesh active<br />
                    &gt; AI Node architecture synced
                  </div>
                </div>
              </div>
              <div className="scanline absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
