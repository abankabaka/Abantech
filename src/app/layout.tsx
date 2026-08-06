import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/smooth-scroll';
import CustomCursor from '@/components/custom-cursor';
import { AIArchitect } from '@/components/ai-architect';
import { ScrollToTop } from '@/components/scroll-to-top';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AbanTechnologies | Enterprise Digital Engineering & Cybersecurity',
  description:
    'Aban Technologies is an elite digital agency engineering secure systems, intelligent applications, modern websites, and premium digital experiences for global enterprises.',
  keywords:
    'digital engineering, cybersecurity, system development, web development, mobile apps, AbanTechnologies, enterprise tech, UI/UX, software development, Kampala',
  authors: [{ name: 'Atwijukire Aban' }],
  creator: 'AbanTechnologies',
  openGraph: {
    siteName: 'AbanTechnologies',
    images: [
      {
        url: 'https://abantechnologies.vercel.app/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'AbanTechnologies - Engineering Secure Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body noise-overlay">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <AIArchitect />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
