import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Users, Cpu, Palette, MessageCircle, BookOpen } from 'lucide-react';
import venueImage1 from '@/assets/venue-1.jpg';
import venueImage2 from '@/assets/venue-2.jpg';
import venueImage3 from '@/assets/venue-3.jpg';
import venueImage4 from '@/assets/venue-4.jpg';
import venueImage5 from '@/assets/venue-5.jpg';
import venueImage6 from '@/assets/venue-6.jpg';

const venueImages = [venueImage1, venueImage2, venueImage3, venueImage4, venueImage5, venueImage6];

const VenueSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % venueImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + venueImages.length) % venueImages.length);
  };

  const zones = [
    {
      icon: Users,
      title: t('venue.zones.mainStage.title'),
      capacity: t('venue.zones.mainStage.capacity'),
      description: t('venue.zones.mainStage.description'),
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Cpu,
      title: t('venue.zones.nodeMining.title'),
      description: t('venue.zones.nodeMining.description'),
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: Palette,
      title: t('venue.zones.artSocial.title'),
      description: t('venue.zones.artSocial.description'),
      gradient: 'from-primary/15 to-secondary/10',
    },
    {
      icon: MessageCircle,
      title: t('venue.zones.community.title'),
      description: t('venue.zones.community.description'),
      gradient: 'from-secondary/15 to-primary/10',
    },
    {
      icon: BookOpen,
      title: t('venue.zones.introvert.title'),
      description: t('venue.zones.introvert.description'),
      gradient: 'from-muted to-muted/50',
    },
  ];

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

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16 rounded-2xl overflow-hidden"
        >
          <div className="aspect-[21/9] relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={venueImages[currentSlide]}
                alt={`Venue ${currentSlide + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {venueImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-primary'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Zones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {zones.map((zone, index) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`glass-card p-6 hover:scale-[1.02] transition-transform ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${zone.gradient} flex items-center justify-center mb-4`}>
                <zone.icon className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-lg font-bold mb-1">
                {zone.title}
                {zone.capacity && (
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({zone.capacity})
                  </span>
                )}
              </h4>
              <p className="text-sm text-muted-foreground">{zone.description}</p>
            </motion.div>
          ))}
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
