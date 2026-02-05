import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
 import { Calendar, GraduationCap, Instagram } from 'lucide-react';

const CTASection = () => {
  const { t } = useTranslation();

  return (
     <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('cta.subtitle')}
            </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                 href="https://bitcoinindonesia.xyz/community/bitcoin-indonesia-events/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange inline-flex items-center justify-center gap-2"
              >
                 <Calendar className="w-5 h-5" />
                 {t('cta.meetup')}
              </a>
              <a
                 href="https://bitcoinindonesia.xyz/my-first-bitcoin/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-purple inline-flex items-center justify-center gap-2"
              >
                 <GraduationCap className="w-5 h-5" />
                 {t('cta.mfbClass')}
               </a>
               <a
                 href="https://www.instagram.com/bitcoinindo21"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg border-2 border-secondary text-secondary font-semibold hover:bg-secondary/10 transition-all duration-300"
               >
                 <Instagram className="w-5 h-5" />
                 {t('cta.followIg')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
