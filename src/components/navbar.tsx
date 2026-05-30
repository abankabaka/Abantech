
"use client";

import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Layers, 
  Terminal, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const themeIcons = {
    cyber: <Monitor className="w-4 h-4" />,
    arctic: <Layers className="w-4 h-4" />,
    matrix: <Terminal className="w-4 h-4" />,
  };

  const themeLabels = {
    cyber: 'Cyber Blue',
    arctic: 'Clean White',
    matrix: 'Matrix Green',
  };

  const navLinks = [
    { name: 'Ecosystem', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Aban Technologies Logo" 
                className="h-[64px] md:h-[80px] lg:h-[96px] w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "hover:text-primary text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex p-1 bg-secondary rounded-full border border-border">
              {(['cyber', 'arctic', 'matrix'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={cn(
                    "p-2 rounded-full transition-all",
                    theme === t ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                  )}
                  title={`Switch to ${themeLabels[t]}`}
                >
                  {themeIcons[t]}
                </button>
              ))}
            </div>
            <Button size="sm" className="font-headline group" asChild>
              <Link href="/contact">
                Start Project
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between py-3 px-4 rounded-xl text-base font-headline font-semibold transition-all duration-200",
                  pathname === link.href
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
            <div className="pt-3 border-t border-border/50 mt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-headline font-semibold text-base hover:bg-primary/90 transition-colors"
              >
                Start Project
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-between items-center py-3 px-4 border-t border-border/50 mt-2">
              <span className="text-sm font-medium text-muted-foreground">Theme</span>
              <div className="flex gap-2">
                {(['cyber', 'arctic', 'matrix'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={cn(
                      "p-2.5 rounded-xl border transition-all duration-200",
                      theme === t
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary border-border hover:border-primary/30"
                    )}
                    title={`Switch to ${themeLabels[t]}`}
                  >
                    {themeIcons[t]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
