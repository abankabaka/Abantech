
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Transmission Received",
      description: "Our architects have received your message and will respond shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-widest font-bold">Contact Hub</Badge>
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Initialize Connection</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your project from Nothing to Something? Secure your technical consultation today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <Card className="glass-morphism border-white/5">
                <CardContent className="p-8 space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold">Email Securely</h3>
                      <p className="text-sm text-muted-foreground">abantechnologies1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold">Voice Uplink</h3>
                      <p className="text-sm text-muted-foreground">+256 701 949 311</p>
                      <p className="text-sm text-muted-foreground">+256 763 180 375</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold">Physical Node</h3>
                      <p className="text-sm text-muted-foreground">Kampala, Uganda</p>
                    </div>
                  </div>
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
                          <Input required placeholder="Enter name" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                          <Input required type="email" placeholder="email@example.com" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                        <Input required placeholder="How can we help?" className="bg-secondary/50 border-white/5 rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                        <Textarea required placeholder="Describe your business needs..." className="bg-secondary/50 border-white/5 rounded-xl min-h-[150px]" />
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
