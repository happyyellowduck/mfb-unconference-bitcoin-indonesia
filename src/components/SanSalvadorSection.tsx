import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import flowerDesign from '@/assets/flower-design.png';

const SanSalvadorSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding bg-[#eae0f5]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <img
            src={flowerDesign}
            alt="Flower decoration"
            className="max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem] mx-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate">
            <span style={{ color: '#b149d2' }}>{t('sanSalvador.title1')}</span>{t('sanSalvador.title2')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/U-J_qg2Xl_w?autoplay=1&mute=1"
              title="MFB Unconference in San Salvador"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SanSalvadorSection;
