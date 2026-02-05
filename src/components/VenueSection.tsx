 import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
 import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
 import useEmblaCarousel from 'embla-carousel-react';
 import Autoplay from 'embla-carousel-autoplay';
import venueImage1 from '@/assets/venue-1.jpg';
import venueImage2 from '@/assets/venue-2.jpg';
import venueImage3 from '@/assets/venue-3.jpg';
import venueImage4 from '@/assets/venue-4.jpg';
import venueImage5 from '@/assets/venue-5.jpg';
import venueImage6 from '@/assets/venue-6.jpg';
 import venueLayout from '@/assets/venue-layout.jpeg';

const venueImages = [venueImage1, venueImage2, venueImage3, venueImage4, venueImage5, venueImage6];

const VenueSection = () => {
  const { t } = useTranslation();
   const [selectedIndex, setSelectedIndex] = useState(0);

   const [emblaRef, emblaApi] = useEmblaCarousel(
     { loop: true, align: 'start' },
     [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
     return () => {
       emblaApi.off('select', onSelect);
     };
   }, [emblaApi, onSelect]);

  return (
    <section id="venue" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

         {/* Image Carousel - Portrait 5:4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
           className="relative mb-12"
        >
           <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
             <div className="flex">
               {venueImages.map((image, index) => (
                 <div
                   key={index}
                   className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-2"
                 >
                   <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                     <img
                       src={image}
                       alt={`Venue ${index + 1}`}
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Navigation Arrows */}
           <button
             onClick={scrollPrev}
             className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform z-10"
             aria-label="Previous slide"
           >
             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
           </button>
           <button
             onClick={scrollNext}
             className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform z-10"
             aria-label="Next slide"
           >
             <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
           </button>
 
           {/* Dots */}
           <div className="flex justify-center gap-2 mt-4">
             {venueImages.map((_, index) => (
               <button
                 key={index}
                 onClick={() => emblaApi?.scrollTo(index)}
                 className={`w-2 h-2 rounded-full transition-all ${
                   index === selectedIndex
                     ? 'w-8 bg-primary'
                     : 'bg-foreground/30 hover:bg-foreground/50'
                 }`}
                 aria-label={`Go to slide ${index + 1}`}
               />
             ))}
          </div>
        </motion.div>

         {/* Layout Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
           className="mb-12"
        >
           <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
           <span className="text-lg text-muted-foreground">
             {t('venue.exploreAreas')}
           </span>
           </h3>
           <div className="rounded-2xl overflow-hidden shadow-lg">
             <img
               src={venueLayout}
               alt="Venue Layout"
               className="w-full h-auto"
             />
           </div>
        </motion.div>

        {/* Map */}
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
