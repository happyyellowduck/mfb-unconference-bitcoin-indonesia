import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface AgendaItem {
  time: string;
  title: string;
  desc?: string;
}

const AgendaSection = () => {
  const { t } = useTranslation();
  const items = t('agenda.items', { returnObjects: true }) as AgendaItem[];

  return (
    <section id="agenda" className="section-padding bg-hero-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate mb-3">
            {t('agenda.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('agenda.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-[220px_1fr] gap-4 px-6 py-3 border-b border-border/50 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            <div>{t('agenda.timeHeader')}</div>
            <div>{t('agenda.agendaHeader')}</div>
          </div>

          <div className="divide-y divide-border/40">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                className="grid md:grid-cols-[220px_1fr] gap-1 md:gap-4 px-4 md:px-6 py-4 hover:bg-primary/5 transition-colors rounded-lg"
              >
                <div className="flex items-center gap-2 text-primary font-semibold whitespace-nowrap">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  {item.desc && (
                    <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
