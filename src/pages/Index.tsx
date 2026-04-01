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
import SanSalvadorSection from '@/components/SanSalvadorSection';
import GraduationSection from '@/components/GraduationSection';
import Footer from '@/components/Footer';
import leftCorner from '@/assets/left-corner-design.png';
import rightCorner from '@/assets/right-corner-design.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SanSalvadorSection />
        <div className="relative">
          <TicketsSection />
          <img src={leftCorner} alt="" className="absolute top-0 left-0 w-28 sm:w-36 md:w-48 z-10 pointer-events-none" />
          <img src={rightCorner} alt="" className="absolute top-0 right-0 w-28 sm:w-36 md:w-48 z-10 pointer-events-none" />
        </div>
        <UnconferenceSpiritSection />
        <VideoSection />
        <ZonesSection />
        {/* <SpeakersSection /> */}
        <VenueSection />
        <FAQSection />
        <GraduationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
