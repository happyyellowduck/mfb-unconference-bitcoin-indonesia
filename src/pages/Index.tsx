import '@/lib/i18n';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TicketsSection from '@/components/TicketsSection';
import VenueSection from '@/components/VenueSection';
import HospitalitySection from '@/components/HospitalitySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TicketsSection />
        <VenueSection />
        <HospitalitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
