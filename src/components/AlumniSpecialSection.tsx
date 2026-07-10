import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import alumniGifts from '@/assets/alumni-gifts.png';

const AlumniSpecialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate mb-4">
            <span className="text-primary">{t('alumniSpecial.title')}</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            {t('alumniSpecial.description')}
          </p>

          <motion.img
            src={alumniGifts}
            alt="MFB alumni gifts: certificate, plaque, and merchandise"
            className="w-full max-w-2xl mx-auto rounded-2xl mb-6"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            {t('alumniSpecial.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniSpecialSection;
