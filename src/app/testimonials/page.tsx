import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';

export const metadata = {
  title: 'Testimonials | AbanTechnologies',
  description: 'Read what global enterprise leaders have to say about AbanTechnologies.',
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-28">
      <Navbar />
      <div className="flex-1">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
