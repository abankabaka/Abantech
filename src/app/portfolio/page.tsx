import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Portfolio } from '@/components/portfolio';

export const metadata = {
  title: 'Portfolio | AbanTechnologies',
  description: 'Explore our elite portfolio of enterprise systems, intelligent applications, and digital engineering projects.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />
      <div className="flex-1">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
