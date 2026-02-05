import '@/lib/i18n';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TicketsSection from '@/components/TicketsSection';
 import UnconferenceSpiritSection from '@/components/UnconferenceSpiritSection';
 import ZonesSection from '@/components/ZonesSection';
 import VideoSection from '@/components/VideoSection';
import VenueSection from '@/components/VenueSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TicketsSection />
         <UnconferenceSpiritSection />
         <ZonesSection />
         <VideoSection />
        <VenueSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
