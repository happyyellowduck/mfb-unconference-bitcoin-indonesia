import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import womenImage from '@/assets/women-bitcoin.png';
import womenPhoto1 from '@/assets/women-bitcoin-1.png';
import womenPhoto2 from '@/assets/women-bitcoin-2.png';

const WomenSection = () => {
  const { t } = useTranslation();

  return (
    <section id="women" className="section-padding bg-muted/30">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <img
            src={womenImage}
            alt={t('women.title')}
            className="max-w-[6.5rem] sm:max-w-[6rem] md:max-w-[8rem] mx-auto mb-2"
            loading="lazy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate">
            {t('women.title')}
          </h2>
          <p className="text-xl text-muted-foreground mt-3 max-w-2xl mx-auto">
            {t('women.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <img src={womenPhoto1} alt={t('women.title')} className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md" loading="lazy" />
          <img src={womenPhoto2} alt={t('women.title')} className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md" loading="lazy" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {t('women.description')}
        </motion.p>
      </div>
    </section>
  );
};

export default WomenSection;
