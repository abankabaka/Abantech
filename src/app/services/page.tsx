import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Services from '@/components/services';
import { TextReveal, FadeUp } from '@/components/text-reveal';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="section-padding pt-48 pb-20 relative">
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-code uppercase tracking-widest text-muted-foreground">Our Ecosystem</span>
        </div>
        
        <h1 className="text-[10vw] leading-[0.9] font-headline font-bold tracking-tighter max-w-6xl mb-12">
          <TextReveal>Comprehensive</TextReveal><br />
          <TextReveal delay={0.2} className="text-white/50">Capabilities.</TextReveal>
        </h1>
        
        <FadeUp delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light max-w-3xl">
            From architecture to visual identity, we provide every layer of your digital presence.
          </p>
        </FadeUp>
      </section>

      {/* Reuse the interactive accordion component */}
      <Services />

      {/* Stats/Advantage Section */}
      <section className="section-padding py-32 bg-white/[0.02] border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl mx-auto items-center">
          <div>
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Why Choose Our Ecosystem?</h2>
              <ul className="flex flex-col gap-6">
                {[
                  "Unified Support - One point of contact.",
                  "Cyber-Hardened - Security built into the DNA.",
                  "Scalable Infrastructure - Ready for global deployment.",
                  "Custom Engineering - No templates, bespoke solutions."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { stat: "99.9%", label: "Uptime" },
              { stat: "A+", label: "Security" },
              { stat: "24/7", label: "Monitoring" },
              { stat: "100%", label: "Custom" }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1} className="p-8 border border-white/10 rounded-2xl bg-background/50 backdrop-blur text-center">
                <div className="text-4xl font-headline font-bold text-gradient mb-2">{item.stat}</div>
                <div className="text-sm font-code text-muted-foreground uppercase tracking-widest">{item.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
