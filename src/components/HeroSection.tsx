import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import heroImage from '@/assets/hero-unconference.jpg';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bitcoin Educators Unconference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="gradient-text-orange">{t('hero.title')}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6"
          >
            {t('hero.subtitle')}
          </motion.h2>

          {/* Host Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl text-foreground/80 font-medium">
              {t('hero.hostedBy')}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {t('hero.network')}
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-medium">
              {t('hero.getTicket')}
            </p>
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <a href="#tickets" className="btn-purple text-lg px-10">
              {t('tickets.ctaLearnMore')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
