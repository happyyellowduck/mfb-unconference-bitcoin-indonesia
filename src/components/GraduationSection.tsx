import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import coinRead from '@/assets/coin-read.png';
import certificate from '@/assets/certificate.png';
import graduationBottom from '@/assets/graduation-bottom.png';

const GraduationSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-0 bg-[#eae0f5] relative overflow-hidden">



      <div className="container-custom text-center relative z-10 px-6 sm:px-8 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={coinRead}
            alt="Coin reading"
            className="max-w-[7rem] sm:max-w-[8rem] md:max-w-[10rem] mx-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate mb-3">
            {t('graduation.title1')}<span style={{ color: '#b149d2' }}>{t('graduation.titleHighlight')}</span>{t('graduation.title2')}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8">
            {t('graduation.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[80%] sm:max-w-[80%] md:max-w-xl mx-auto mb-0"
        >
          <img
            src={certificate}
            alt="Bitcoin Diploma Graduation Certificate"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      <img
        src={graduationBottom}
        alt=""
        className="w-full block mt-0 pointer-events-none"
        loading="lazy"
      />
    </section>
  );
};

export default GraduationSection;
