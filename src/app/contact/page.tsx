
"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: "Transmission Received",
          description: "Our architects have received your message and will respond shortly.",
        });
      } else {
        toast({
          title: "Transmission Failed",
          description: result.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Transmission Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 sm:mb-16">
            <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-widest font-bold">Contact Hub</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold">Initialize Connection</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your project from Nothing to Something? Secure your technical consultation today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-8">
              <Card className="glass-morphism border-white/5">
                <CardContent className="p-8 space-y-8">
                  <a 
                    href="mailto:abantechnologies1@gmail.com" 
                    className="flex gap-4 group/contact hover:bg-primary/5 p-2 rounded-xl transition-all duration-300 -m-2"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover/contact:bg-primary group-hover/contact:text-white transition-colors duration-300">
                      <Mail className="text-primary group-hover/contact:text-primary-foreground w-6 h-6 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold group-hover/contact:text-primary transition-colors">Email Securely</h3>
                      <p className="text-sm text-muted-foreground break-all">abantechnologies1@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex gap-4 p-2 -m-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold">Voice Uplink</h3>
                      <a href="tel:+256701949311" className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1">+256 701 949 311</a>
                      <a href="tel:+256763180375" className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-0.5">+256 763 180 375</a>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Kampala,+Uganda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex gap-4 group/contact hover:bg-primary/5 p-2 rounded-xl transition-all duration-300 -m-2"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover/contact:bg-primary group-hover/contact:text-white transition-colors duration-300">
                      <MapPin className="text-primary group-hover/contact:text-primary-foreground w-6 h-6 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold group-hover/contact:text-primary transition-colors">Physical Node</h3>
                      <p className="text-sm text-muted-foreground">Kampala, Uganda</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                <h4 className="font-headline font-bold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Technical Availability
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our systems engineering team is available Monday - Friday, 09:00 - 18:00 EAT for project scoping and deployment planning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="glass-morphism border-white/5">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h2 className="text-3xl font-headline font-bold">Message Encrypted & Sent</h2>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Thank you for reaching out. A solution architect will review your requirements and respond within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-xl">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                          <Input name="name" required placeholder="Enter name" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                          <Input name="email" required type="email" placeholder="email@example.com" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                        <Input name="subject" required placeholder="How can we help?" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                        <Textarea name="message" required placeholder="Describe your business needs..." className="bg-secondary/50 border-white/5 rounded-xl min-h-[150px]" />
                      </div>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-xl font-headline h-14 text-lg group">
                        {isSubmitting ? "Encrypting..." : "Secure Transmission"}
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
