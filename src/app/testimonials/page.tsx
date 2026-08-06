import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import { TextReveal, FadeUp } from '@/components/text-reveal';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding pt-48 pb-20">
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-code uppercase tracking-widest text-muted-foreground">Client Success</span>
        </div>
        
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-headline font-bold tracking-tighter max-w-6xl mb-12">
          <TextReveal>Industry</TextReveal><br />
          <TextReveal delay={0.2} className="text-white/50">Leaders.</TextReveal>
        </h1>
        
        <FadeUp delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light max-w-3xl">
            Read what global enterprise leaders have to say about AbanTechnologies.
          </p>
        </FadeUp>
      </section>

      {/* Reuse the massive single-quote component */}
      <Testimonials />
      
      <Footer />
    </main>
  );
}
