"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsletterForm } from './newsletter-form';

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-16 sm:pt-24 pb-12 overflow-hidden">
      {/* Animated Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-primary blur-sm opacity-30" />

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-spin-slow"></div>
              <img 
                src="/images/logo.png" 
                alt="Aban Technologies Logo" 
                className="h-[64px] md:h-[80px] lg:h-[96px] w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm group-hover:text-foreground transition-colors duration-500">
              Engineering resilient technology frameworks and crafting iconic visual experiences that inspire trust and unlock limitless growth.
            </p>
            <div className="flex gap-4 relative z-20">
              <a href="https://wa.me/256701949311" target="_blank" rel="noopener noreferrer" className="group relative" title="WhatsApp">
                <div className="absolute inset-0 bg-[#25D366] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-[#25D366] group-hover:-translate-y-1 transition-all duration-300 relative z-10 bg-background/50 hover:bg-background">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-muted-foreground group-hover:fill-[#25D366] transition-colors"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
              </a>
              <a href="https://t.me/abantechnologies" target="_blank" rel="noopener noreferrer" className="group relative" title="Telegram">
                <div className="absolute inset-0 bg-[#229ED9] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-[#229ED9] group-hover:-translate-y-1 transition-all duration-300 relative z-10 bg-background/50 hover:bg-background">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-muted-foreground group-hover:fill-[#229ED9] transition-colors"><title>Telegram</title><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .704-.224.977-.488l2.348-2.284 4.885 3.61c.901.496 1.55.24 1.774-.836l3.204-15.105c.328-1.315-.5-1.912-1.356-1.523z"/></svg>
                </div>
              </a>
              <a href="https://x.com/abantech1" target="_blank" rel="noopener noreferrer" className="group relative" title="X (Twitter)">
                <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-white group-hover:-translate-y-1 transition-all duration-300 relative z-10 bg-background/50 hover:bg-background">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-muted-foreground group-hover:fill-foreground transition-colors"><title>X (Twitter)</title><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
              </a>
              <a href="https://www.instagram.com/abantechnologies1?igsh=MXQ3bHV5cnVvZWoxMQ==" target="_blank" rel="noopener noreferrer" className="group relative" title="Instagram">
                <div className="absolute inset-0 bg-[#E1306C] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-[#E1306C] group-hover:-translate-y-1 transition-all duration-300 relative z-10 bg-background/50 hover:bg-background">
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-[#E1306C] transition-colors" />
                </div>
              </a>
              <a href="https://github.com/abankabaka/Abantech" target="_blank" rel="noopener noreferrer" className="group relative" title="GitHub">
                <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                <div className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/10 group-hover:border-white group-hover:-translate-y-1 transition-all duration-300 relative z-10 bg-background/50 hover:bg-background">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-headline font-bold text-foreground text-lg">Platform</h4>
            <ul className="space-y-3">
              {['Ecosystem', 'About', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block group relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-headline font-bold text-foreground text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+256701949311" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300">+256 701 949 311</a>
                  <a href="tel:+256763180375" className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300">+256 763 180 375</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <a 
                  href="mailto:abantechnologies1@gmail.com" 
                  className="flex items-start gap-3 w-full"
                >
                  <div className="mt-1 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground hover:text-primary break-all hover:translate-x-1 transition-all duration-300 pt-1">
                    abantechnologies1@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <a 
                  href="https://maps.google.com/?q=Kampala,+Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 w-full"
                >
                  <div className="mt-1 w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 pt-1">
                    Kampala, Uganda
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-headline font-bold text-foreground text-lg">Secure Updates</h4>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
              Join our network to receive the latest technical insights, cybersecurity alerts, and platform updates.
            </p>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} <span className="text-foreground">AbanTechnologies</span>. All Rights Reserved.
          </div>
          <div className="flex gap-4 sm:gap-8 text-sm font-medium">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
