
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="glass-morphism p-8 rounded-3xl border-white/5 group hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="text-primary w-6 h-6" />
              </div>
              <div className="text-4xl font-headline font-bold mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline font-bold">
              Engineering Trust <br /> 
              <span className="text-primary">At Every Layer</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AbanTechnologies, security isn't an afterthought—it's the foundation. We combine high-performance engineering with absolute data integrity to build systems that don't just work, but lead.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Zero Trust Architecture", desc: "Every node verified, every packet authenticated.", icon: Lock },
                { title: "Rapid Scale Protocols", desc: "Engineered to grow from startup to enterprise instantly.", icon: Rocket },
                { title: "Unified Service Mesh", desc: "No disconnected vendors. One seamless ecosystem.", icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-morphism border-white/10 p-2">
              <div className="w-full h-full bg-secondary/50 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/cyber-trust/800/600" 
                  alt="Enterprise Network"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                  data-ai-hint="cyber network"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 glass-morphism rounded-2xl border-primary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Security Node</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-1 bg-primary/30 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 animate-[shimmer_2s_infinite]" />
                      </div>
                      <div className="h-1 bg-primary/30 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/2 animate-[shimmer_2.5s_infinite]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
