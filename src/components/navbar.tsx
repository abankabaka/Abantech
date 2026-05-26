
"use client";

import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Wind, 
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
    arctic: <Wind className="w-4 h-4" />,
    matrix: <Terminal className="w-4 h-4" />,
  };

  const navLinks = [
    { name: 'Ecosystem', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="bg-white inline-flex items-center justify-center rounded-lg p-0 group-hover:scale-105 transition-transform shadow-sm">
                <img src="/images/logo.png" alt="Aban Technologies Logo" className="h-12 w-auto" />
              </span>
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
                  title={`Switch to ${t} mode`}
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
        <div className="md:hidden glass-morphism border-b border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-lg font-headline font-semibold",
                  pathname === link.href ? "text-primary" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-headline font-semibold text-primary"
            >
              Start Project
            </Link>
            <div className="flex justify-between items-center py-4 border-t border-border mt-4">
              <span className="text-sm font-medium">Environment</span>
              <div className="flex gap-2">
                {(['cyber', 'arctic', 'matrix'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={cn(
                      "p-3 rounded-xl border border-border",
                      theme === t ? "bg-primary text-primary-foreground" : "bg-secondary"
                    )}
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
