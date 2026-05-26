
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
import { NewsletterForm } from './newsletter-form';

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span className="bg-white inline-flex items-center justify-center rounded-lg p-0 group-hover:scale-105 transition-transform shadow-sm">
                <img src="/images/logo.png" alt="Aban Technologies Logo" className="h-16 w-auto" />
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering robust digital frameworks and crafting iconic visual experiences that inspire trust and unlock growth.
            </p>
            <div className="space-y-3 pt-2">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary">Chat with us</h4>
              <div className="flex gap-4">
                <a href="https://wa.me/256701949311" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline" className="rounded-full border-white/5 hover:text-green-500 hover:border-green-500 transition-colors">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </Button>
                </a>
              </div>
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
                <div className="text-sm text-muted-foreground flex flex-col gap-1">
                  <a href="tel:+256701949311" className="hover:text-primary transition-colors">+256 701 949 311</a>
                  <a href="tel:+256763180375" className="hover:text-primary transition-colors">+256 763 180 375</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:abantechnologies1@gmail.com" className="text-sm text-muted-foreground break-all hover:text-primary transition-colors">abantechnologies1@gmail.com</a>
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
            <NewsletterForm />
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
