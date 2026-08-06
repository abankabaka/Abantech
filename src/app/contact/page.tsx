'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { TextReveal, FadeUp } from '@/components/text-reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "32745b4f-38fe-428f-91ac-82f34dd3be2b",
          subject: `New Contact from ${formData.name}: ${formData.subject}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <Navbar />

      <section className="section-padding pt-48 pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Column: Text & Info */}
        <div>
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-code uppercase tracking-widest text-muted-foreground">Contact Hub</span>
          </div>
          
          <h1 className="text-[10vw] lg:text-[7vw] leading-[0.9] font-headline font-bold tracking-tighter mb-8">
            <TextReveal>Initialize</TextReveal><br />
            <TextReveal delay={0.2} className="text-white/50">Connection.</TextReveal>
          </h1>
          
          <FadeUp delay={0.6}>
            <p className="text-xl text-muted-foreground leading-relaxed font-body font-light mb-16">
              Ready to take your project from Nothing to Something? Secure your technical consultation today.
            </p>
          </FadeUp>

          <FadeUp delay={0.8} className="space-y-12">
            <div>
              <span className="font-code text-sm uppercase tracking-widest text-primary block mb-3">Email Securely</span>
              <a href="mailto:abantechnologies1@gmail.com" className="text-2xl font-headline hover:text-primary transition-colors">abantechnologies1@gmail.com</a>
            </div>
            
            <div>
              <span className="font-code text-sm uppercase tracking-widest text-primary block mb-3">Voice Uplink</span>
              <div className="flex flex-col gap-2">
                <a href="tel:+256701949311" className="text-2xl font-headline hover:text-primary transition-colors">+256 701 949 311</a>
                <a href="tel:+256763180375" className="text-2xl font-headline hover:text-primary transition-colors">+256 763 180 375</a>
              </div>
            </div>

            <div>
              <span className="font-code text-sm uppercase tracking-widest text-primary block mb-3">Physical Node</span>
              <p className="text-2xl font-headline">Kampala, Uganda</p>
            </div>
          </FadeUp>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          <FadeUp delay={1} className="sticky top-32 p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl">
            
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
              <h3 className="text-2xl font-headline font-medium">Transmission Protocol</h3>
              <div className="flex items-center gap-2 text-xs font-code text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                SYSTEM ONLINE
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                  disabled={status === 'loading'}
                />
                <label className="absolute left-0 top-4 text-muted-foreground transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs font-code tracking-widest uppercase">
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                  disabled={status === 'loading'}
                />
                <label className="absolute left-0 top-4 text-muted-foreground transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs font-code tracking-widest uppercase">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  required 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors peer"
                  placeholder=" "
                  disabled={status === 'loading'}
                />
                <label className="absolute left-0 top-4 text-muted-foreground transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs font-code tracking-widest uppercase">
                  Subject
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors peer resize-none"
                  placeholder=" "
                  disabled={status === 'loading'}
                />
                <label className="absolute left-0 top-4 text-muted-foreground transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs font-code tracking-widest uppercase">
                  Message Details
                </label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="mt-8 bg-primary text-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Transmitting...' : status === 'success' ? 'Transmission Sent' : 'Secure Transmission'}
              </button>
              
              {status === 'success' && (
                <p className="text-primary font-code text-sm text-center">Your message has been securely transmitted.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 font-code text-sm text-center">Transmission failed. Please try again.</p>
              )}
            </form>
          </FadeUp>
        </div>

      </section>

      <Footer />
    </main>
  );
}
