import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HorizontalScroll from '@/components/horizontal-scroll';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* 
        For the portfolio page, we reuse the stunning horizontal scroll 
        component since it's already built for displaying projects in an 
        immersive way. The component handles its own layout and pinning.
      */}
      <div className="pt-24">
        <HorizontalScroll />
      </div>
      
      <Footer />
    </main>
  );
}
