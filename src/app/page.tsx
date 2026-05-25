
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { TrustBlocks } from '@/components/trust-blocks';
import { Footer } from '@/components/footer';
import { AIArchitect } from '@/components/ai-architect';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBlocks />
      <Services />
      <Portfolio />
      <Footer />
      <AIArchitect />
    </main>
  );
}
