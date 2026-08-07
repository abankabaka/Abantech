import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import NewsletterForm from './newsletter-form';
import MagneticButton from './magnetic-button';
import { TextReveal, FadeInLeft, FadeInRight } from './text-reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-32 pb-12 section-padding relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 overflow-hidden">
        
        {/* Massive CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-12 text-center md:text-left">
          <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-headline font-bold tracking-tighter">
            <TextReveal>Let's Work</TextReveal><br />
            <TextReveal delay={0.1} className="text-white/50">Together.</TextReveal>
          </h2>
          
          <MagneticButton href="/contact" strength={0.2} className="mb-4">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary text-black flex items-center justify-center font-bold text-xl uppercase tracking-widest hover:scale-105 transition-transform duration-300">
              Start
            </div>
          </MagneticButton>
        </div>

        {/* Design Vault Feature Banner */}
        <a
          href="https://design-vault.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between mb-32 p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary text-lg">✦</span>
            </div>
            <div>
              <p className="font-code text-xs uppercase tracking-widest text-primary mb-1">Creative Portfolio</p>
              <h3 className="font-headline text-xl md:text-2xl font-bold">Visit the Design Vault</h3>
              <p className="text-muted-foreground text-sm mt-1">Explore our graphic designs, brand identities & visual work</p>
            </div>
          </div>
          <div className="text-primary text-3xl group-hover:translate-x-2 transition-transform duration-300">→</div>
        </a>

        {/* Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <FadeInLeft delay={0} duration={0.8} className="flex flex-col gap-6">
            <span className="font-code text-sm text-primary uppercase tracking-widest">Connect</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:abantechnologies1@gmail.com" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-white transition-colors hover:translate-x-2 duration-300 transform w-fit break-all">
                <Mail className="w-4 h-4 shrink-0" />
                abantechnologies1@gmail.com
              </a>
              <a href="tel:+256701949311" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-white transition-colors hover:translate-x-2 duration-300 transform w-fit">
                <Phone className="w-4 h-4 shrink-0" />
                +256 701 949 311
              </a>
              <a href="https://wa.me/256701949311" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-white transition-colors hover:translate-x-2 duration-300 transform w-fit">
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
            </div>
          </FadeInLeft>

          <FadeInLeft delay={0.2} duration={0.8} className="flex flex-col gap-6">
            <span className="font-code text-sm text-primary uppercase tracking-widest">Platform</span>
            <div className="flex flex-col gap-3">
              {['About', 'Services', 'Portfolio', 'Contact'].map(link => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="text-lg text-muted-foreground hover:text-white transition-colors hover:translate-x-2 duration-300 transform inline-block w-fit">
                  {link}
                </Link>
              ))}
              <a
                href="https://design-vault.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:text-white transition-colors hover:translate-x-2 duration-300 transform inline-flex items-center gap-2 w-fit group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Design Vault ↗
              </a>
            </div>
          </FadeInLeft>

          <FadeInRight delay={0.4} duration={0.8} className="flex flex-col gap-6">
            <span className="font-code text-sm text-primary uppercase tracking-widest">Socials</span>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/abantechnologies1?igsh=MXQ3bHV5cnVvZWoxMQ==' },
                { name: 'X (Twitter)', url: 'https://x.com/abantech1' },
                { name: 'Telegram', url: 'https://t.me/abantechnologies' },
                { name: 'GitHub', url: 'https://github.com/abankabaka/Abantech' }
              ].map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-lg text-muted-foreground hover:text-white transition-colors hover:translate-x-2 duration-300 transform inline-block w-fit">
                  {social.name}
                </a>
              ))}
            </div>
          </FadeInRight>

          <FadeInRight delay={0.6} duration={0.8} className="flex flex-col gap-6">
            <span className="font-code text-sm text-primary uppercase tracking-widest">Secure Updates</span>
            <p className="text-muted-foreground text-sm">Join our network to receive the latest technical insights and platform updates.</p>
            <NewsletterForm />
          </FadeInRight>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm font-code text-muted-foreground">
          <p>© {currentYear} AbanTechnologies. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
