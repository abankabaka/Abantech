import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { TextReveal, FadeUp, FadeInLeft, FadeInRight } from '@/components/text-reveal';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-48 pb-32 min-h-[80vh] flex flex-col justify-center relative">
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-code uppercase tracking-widest text-muted-foreground">The Mission</span>
        </div>
        
        <h1 className="text-[10vw] leading-[0.9] font-headline font-bold tracking-tighter max-w-6xl mb-12">
          <TextReveal>From Nothing</TextReveal><br />
          <TextReveal delay={0.2} className="text-white/50">To Something.</TextReveal>
        </h1>
        
        <FadeUp delay={0.6} className="max-w-2xl">
          <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed font-body font-light">
            We don't just build websites; we engineer secure, intelligent ecosystems that drive enterprise growth.
          </p>
        </FadeUp>
      </section>

      {/* Vision & Paradox Section */}
      <section className="section-padding py-32 bg-secondary/30 border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-7xl mx-auto overflow-hidden">
          <div>
            <FadeInLeft duration={0.8}>
              <h2 className="text-3xl md:text-5xl font-headline font-medium mb-8">The Fragmented Landscape</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Businesses often hire one agency for web design, another for software development, and a third for cybersecurity. This leads to broken systems, vulnerabilities, and diluted brand identities.
              </p>
              <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                AbanTechnologies solves this. We provide a unified command center. By combining military-grade architecture with stunning design, we deliver products that are impenetrable and beautiful.
              </p>
            </FadeInLeft>
          </div>
          <div className="flex flex-col gap-12">
            <FadeInRight duration={0.8} delay={0.2} className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h3 className="font-code text-sm uppercase tracking-widest text-primary mb-4">Our Mission</h3>
              <p className="text-xl font-headline">To equip modern enterprises with resilient, high-performance digital foundations that scale limitlessly.</p>
            </FadeInRight>
            <FadeInRight duration={0.8} delay={0.4} className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <h3 className="font-code text-sm uppercase tracking-widest text-primary mb-4">Our Vision</h3>
              <p className="text-xl font-headline">To become the global standard for secure, end-to-end digital engineering and enterprise architecture.</p>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="section-padding py-32">
        <div className="mb-24">
          <FadeUp>
            <div className="text-primary font-code uppercase tracking-widest text-sm mb-4">[ Leadership ]</div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold">The Architects.</h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Aban Atwijukire", role: "CEO & Head of Engineering", img: "/images/CEO.jpeg", desc: "Visionary lead in zero-trust architecture and elite systems engineering." },
            { name: "Paul W", role: "Director of UI/UX", img: "/images/Paul W Lead Designer.jpeg", desc: "Master of creating iconic, high-conversion visual identities." },
            { name: "Trevor N", role: "Lead Security Architect", img: "/images/Trevor N Security Lead.jpeg", desc: "Specialist in enterprise threat mitigation and data protection." }
          ].map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.2}>
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] mb-6 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-shadow duration-500">
                  <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold">{member.name}</h3>
                <p className="text-primary font-code text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 group-hover:translate-y-0 transform">
                  {member.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
