import '@/lib/i18n';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TicketsSection from '@/components/TicketsSection';
import UnconferenceSpiritSection from '@/components/UnconferenceSpiritSection';
import ZonesSection from '@/components/ZonesSection';
import VideoSection from '@/components/VideoSection';
import SpeakersSection from '@/components/SpeakersSection';
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
        {/* Corner decorations below hero */}
        <div className="relative w-full h-0">
          <img src={leftCorner} alt="" className="absolute top-0 left-0 w-32 sm:w-40 md:w-52 -translate-y-full pointer-events-none" />
          <img src={rightCorner} alt="" className="absolute top-0 right-0 w-32 sm:w-40 md:w-52 -translate-y-full pointer-events-none" />
        </div>
        <TicketsSection />
        <UnconferenceSpiritSection />
        <VideoSection />
        <ZonesSection />
        {/* <SpeakersSection /> */}
        <VenueSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
