import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Original images to keep (venue-7 at position 2, venue-8 at position 4)
import venueImage7 from '@/assets/venue-7.png';
import venueImage8 from '@/assets/venue-8.png';

// New venue images
import venueNew1 from '@/assets/venue-new-1.jpg';
import venueNew2 from '@/assets/venue-new-2.jpg';
import venueNew3 from '@/assets/venue-new-3.jpg';
import venueNew4 from '@/assets/venue-new-4.jpg';
import venueNew5 from '@/assets/venue-new-5.jpg';
import venueNew6 from '@/assets/venue-new-6.jpg';
import venueNew7 from '@/assets/venue-new-7.jpg';
import venueNew8 from '@/assets/venue-new-8.jpg';
import venueNew9 from '@/assets/venue-new-9.jpg';
import venueNew10 from '@/assets/venue-new-10.jpg';
import venueNew11 from '@/assets/venue-new-11.jpg';
import venueNew12 from '@/assets/venue-new-12.jpg';
import venueNew13 from '@/assets/venue-new-13.jpg';
import venueNew14 from '@/assets/venue-new-14.jpg';
import venueNew15 from '@/assets/venue-new-15.jpg';
import venueNew16 from '@/assets/venue-new-16.jpg';
import venueNew17 from '@/assets/venue-new-17.jpg';
import venueNew18 from '@/assets/venue-new-18.jpg';
import venueNew19 from '@/assets/venue-new-19.jpg';

// Row 1: 11 images with venue-7 at position 2
const row1Images = [
  venueImage7, // position 1 (venue-7)
  venueNew1,   // position 2
  venueNew2,   // position 3
  venueNew3,   // position 4
  venueNew4,   // position 5
  venueNew5,   // position 6
  venueNew6,   // position 7
  venueNew7,   // position 8
  venueNew8,   // position 9
  venueNew9,   // position 10
  venueNew10,  // position 11
];

// Row 2: 10 images with venue-8 at position 4
const row2Images = [
  venueNew11,  // position 1
  venueNew12,  // position 2
  venueImage8, // position 3 (venue-8)
  venueNew13,  // position 4
  venueNew14,  // position 5
  venueNew15,  // position 6
  venueNew16,  // position 7
  venueNew17,  // position 8
  venueNew18,  // position 9
  venueNew19,  // position 10
];

const VenueCarouselRow = ({ images, direction = 'forward' }: { images: string[]; direction?: 'forward' | 'backward' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: direction === 'forward' ? 3500 : 4500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%] xl:flex-[0_0_24%] min-w-0"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Venue ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-background hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-md border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-background hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

const VenueSection = () => {
  const { t } = useTranslation();

  return (
    <section id="venue" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {t('venue.title')}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold gradient-text-purple mb-4">
            {t('venue.name')}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('venue.description')}
          </p>
        </motion.div>

        {/* Dual Row Image Carousels - Modern Gallery Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          <VenueCarouselRow images={row1Images} direction="forward" />
          <VenueCarouselRow images={row2Images} direction="backward" />
        </motion.div>

        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">{t('venue.address')}</p>
              <p className="text-sm text-muted-foreground">Surabaya, Indonesia</p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Jl.+Golf+1+No.+159A,+Gunung+Sari,+Surabaya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-sm"
          >
            {t('venue.viewMap')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
