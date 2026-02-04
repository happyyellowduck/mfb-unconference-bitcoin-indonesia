import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Beef, Fish, CookingPot } from 'lucide-react';
import bbqImage from '@/assets/bbq-food.jpg';

const HospitalitySection = () => {
  const { t } = useTranslation();

  const menuItems = [
    { icon: Beef, label: t('hospitality.menu.steak') },
    { icon: UtensilsCrossed, label: t('hospitality.menu.yakitori') },
    { icon: Fish, label: t('hospitality.menu.seafood') },
    { icon: CookingPot, label: t('hospitality.menu.pasta') },
    { icon: Wine, label: t('hospitality.menu.drinks') },
  ];

  return (
    <section id="food" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bbqImage}
          alt="BBQ Food"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('hospitality.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('hospitality.subtitle')}
            </p>

            {/* Menu Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass-card overflow-hidden">
                <img
                  src={bbqImage}
                  alt="Rustic Market BBQ"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card p-4 animate-float">
                <p className="text-sm font-bold gradient-text-orange">Included with ticket!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection;
