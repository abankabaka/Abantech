import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Services } from '@/components/services';
import { AnimatedStats } from '@/components/animated-stats';
import { Footer } from '@/components/footer';
import { LoadingScreen } from '@/components/loading-screen';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <LoadingScreen />
      
      {/* Decorative Global Background Element */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <WhyChooseUs />
        <Services />
        <AnimatedStats />
        <Footer />
      </div>
    </main>
  );
}
