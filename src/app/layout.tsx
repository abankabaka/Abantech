import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AIArchitect } from '@/components/ai-architect';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'AbanTechnologies | Enterprise Digital Engineering & Cybersecurity',
  description: 'Aban Technologies is an elite digital agency engineering secure systems, intelligent applications, modern websites, and premium digital experiences for global enterprises.',
  keywords: 'digital engineering, cybersecurity, system development, web development, mobile apps, AbanTechnologies, enterprise tech, UI/UX, software development, Kampala',
  authors: [{ name: 'Atwijukire Aban' }],
  creator: 'AbanTechnologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abantechnologies.com',
    title: 'AbanTechnologies | Enterprise Digital Engineering',
    description: 'Engineering secure systems, intelligent applications, and premium digital experiences from nothing to something.',
    siteName: 'AbanTechnologies',
    images: [
      {
        url: 'https://abantechnologies.vercel.app/images/logo.png', // Replace with an actual OG image
        width: 1200,
        height: 630,
        alt: 'AbanTechnologies - Engineering Secure Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AbanTechnologies | Enterprise Digital Engineering',
    description: 'Engineering secure systems, intelligent applications, and premium digital experiences.',
    images: ['https://abantechnologies.vercel.app/images/logo.png'], // Replace with an actual Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-white bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
          <AIArchitect />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
