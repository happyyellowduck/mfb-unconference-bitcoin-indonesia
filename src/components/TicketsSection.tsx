import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Star, Ticket } from 'lucide-react';

const TicketsSection = () => {
  const { t } = useTranslation();

  const alumniFeatures = t('tickets.alumni.features', { returnObjects: true }) as string[];
  const publicFeatures = t('tickets.public.features', { returnObjects: true }) as string[];

  const tiers = [
    {
      key: 'alumni',
      features: alumniFeatures,
      earlyBird: t('tickets.alumni.earlyBirdPrice'),
      regular: t('tickets.alumni.regularPrice'),
      title: t('tickets.alumni.title'),
      badge: t('tickets.alumni.badge'),
      badgeIcon: <Star className="w-3 h-3" />,
      gradientClass: 'gradient-text-orange',
      btnClass: 'btn-orange',
      borderColor: 'border-primary/30',
      badgeBg: 'bg-primary',
      accentColor: 'primary',
      bgGradient: 'from-primary/20',
      delay: 0.2,
    },
    {
      key: 'public',
      features: publicFeatures,
      earlyBird: t('tickets.public.earlyBirdPrice'),
      regular: t('tickets.public.regularPrice'),
      title: t('tickets.public.title'),
      gradientClass: 'gradient-text-purple',
      btnClass: 'btn-purple',
      borderColor: 'border-secondary/30',
      badgeBg: '',
      accentColor: 'secondary',
      bgGradient: 'from-secondary/20',
      delay: 0.3,
    },
  ];

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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: tier.delay }}
              className={`glass-card p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 ${tier.borderColor}`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${tier.bgGradient} to-transparent rounded-full -translate-y-1/2 translate-x-1/2`} />

              {tier.badge && (
                <div
                  className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold text-white ${tier.badgeBg}`}
                >
                  {tier.badgeIcon}
                  {tier.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-3 mb-1">
                <span className={`text-4xl font-bold ${tier.gradientClass}`}>{tier.earlyBird}</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground line-through">{tier.regular}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-${tier.accentColor} bg-${tier.accentColor}/10`}>
                  {t('tickets.saveLabel')}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-${tier.accentColor}/20`}>
                      <Check className={`w-3 h-3 text-${tier.accentColor}`} />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://megatix.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tier.btnClass} w-full text-center block flex items-center justify-center gap-2`}
              >
                <Ticket className="w-4 h-4" />
                {t('tickets.ctaMegatix')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
