
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-headline font-bold text-xl">
                AT
              </div>
              <span className="font-headline font-bold text-xl leading-tight">AbanTechnologies</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering robust digital frameworks and crafting iconic visual experiences that inspire trust and unlock growth.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full border-white/5 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/5 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/5 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Capabilities</h4>
            <ul className="space-y-3">
              {['Web Engineering', 'Security Mesh', 'AI Integrations', 'Visual Systems', 'Cloud Ops'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  +256 701 949 311<br />
                  +256 763 180 375
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">abantechnologies1@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">Kampala, Uganda</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Get technical insights and security updates.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter email" className="bg-secondary/50 border-white/5 rounded-xl h-11" />
              <Button size="icon" className="shrink-0 h-11 w-11 rounded-xl">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} AbanTechnologies. All Rights Reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
