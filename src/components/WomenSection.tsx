import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import womenImage from '@/assets/women-bitcoin.png';

const WomenSection = () => {
  const { t } = useTranslation();

  return (
    <section id="women" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={womenImage}
              alt={t('women.title')}
              className="max-w-xs md:max-w-sm w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate mb-6">
              {t('women.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('women.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WomenSection;
