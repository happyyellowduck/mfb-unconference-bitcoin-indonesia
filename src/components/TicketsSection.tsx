import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const TicketsSection = () => {
  const { t } = useTranslation();

  const standardFeatures = t('tickets.standard.features', { returnObjects: true }) as string[];
  const alumniFeatures = t('tickets.alumni.features', { returnObjects: true }) as string[];

  return (
    <section id="tickets" className="section-padding bg-hero-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t('tickets.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('tickets.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Ticket */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-2">{t('tickets.standard.title')}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold gradient-text-orange">{t('tickets.standard.price')}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {standardFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://megatix.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange w-full text-center block"
            >
              {t('tickets.ctaMegatix')}
            </a>
          </motion.div>

          {/* Alumni Ticket */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border-primary/30"
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              <Star className="w-3 h-3" />
              {t('tickets.alumni.badge')}
            </div>
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-2">{t('tickets.alumni.title')}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold gradient-text-purple">{t('tickets.alumni.price')}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {alumniFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://satlantis.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple w-full text-center block"
            >
              {t('tickets.ctaBitcoin')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
