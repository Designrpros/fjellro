import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  );
}