import LoadingScreen from '@/components/loading-screen';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Marquee from '@/components/marquee';
import Services from '@/components/services';
import AnimatedStats from '@/components/animated-stats';
import HorizontalScroll from '@/components/horizontal-scroll';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <AnimatedStats />
      <HorizontalScroll />
      <Testimonials />
      <Footer />
    </main>
  );
}
