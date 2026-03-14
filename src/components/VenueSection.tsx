import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import venueImage7 from '@/assets/venue-7.png';
import venueImage8 from '@/assets/venue-8.png';
import venueLayoutEn from '@/assets/venue-layout-en.jpg';
import venueLayoutId from '@/assets/venue-layout-id.jpg';

// Row 1 and Row 2 images — venue-7 at position 2, venue-8 at position 4
// Placeholder slots will be filled when zip images are uploaded
const row1Images = [venueImage7];
const row2Images = [venueImage8];

const VenueCarouselRow = ({ images, direction = 'forward' }: { images: string[]; direction?: 'forward' | 'backward' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
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
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-1.5"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Venue ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-background"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-background"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const VenueSection = () => {
  const { t, i18n } = useTranslation();
  const venueLayout = i18n.language === 'id' ? venueLayoutId : venueLayoutEn;

  return (
    <section id="venue" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Venue Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('venue.exploreMap')}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg mb-16">
            <img
              src={venueLayout}
              alt="Venue Layout"
              className="w-full h-auto"
            />
          </div>

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

        {/* Dual Row Image Carousels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-12"
        >
          <VenueCarouselRow images={row1Images} direction="forward" />
          <VenueCarouselRow images={row2Images} direction="backward" />
        </motion.div>

        {/* Address */}
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
