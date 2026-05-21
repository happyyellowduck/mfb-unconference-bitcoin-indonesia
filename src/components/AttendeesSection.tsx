import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import attendeeBaskoro from '@/assets/attendee-baskoro.jpg';
import attendeeChresna from '@/assets/attendee-chresna.jpg';
import attendeeBitcoinSports from '@/assets/attendee-bitcoin-sports.jpg';
import attendeeAsadid from '@/assets/attendee-asadid.jpg';
import attendeeZed from '@/assets/attendee-bang-zed.jpg';
import attendeeKanda from '@/assets/attendee-igp-kanda.jpg';
import attendeeAadb from '@/assets/attendee-aadb.jpg';
import attendeeBull from '@/assets/attendee-bull.png';
import attendeeKhaf from '@/assets/attendee-khaf.jpg';
import attendeeEsther from '@/assets/attendee-esther.jpg';
import whoWillBeThere from '@/assets/who-will-be-there.png';

interface Attendee {
  id: string;
  name: string;
  bio: string;
  image: string;
}

const AttendeesSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Attendee | null>(null);

  const attendees: Attendee[] = [
    { id: 'baskoro', name: t('attendees.baskoro.name'), bio: t('attendees.baskoro.bio'), image: attendeeBaskoro },
    { id: 'chresna', name: t('attendees.chresna.name'), bio: t('attendees.chresna.bio'), image: attendeeChresna },
    { id: 'bitcoinSports', name: t('attendees.bitcoinSports.name'), bio: t('attendees.bitcoinSports.bio'), image: attendeeBitcoinSports },
    { id: 'asadid', name: t('attendees.asadid.name'), bio: t('attendees.asadid.bio'), image: attendeeAsadid },
    { id: 'zed', name: t('attendees.zed.name'), bio: t('attendees.zed.bio'), image: attendeeZed },
    { id: 'kanda', name: t('attendees.kanda.name'), bio: t('attendees.kanda.bio'), image: attendeeKanda },
    { id: 'aadb', name: t('attendees.aadb.name'), bio: t('attendees.aadb.bio'), image: attendeeAadb },
    { id: 'bull', name: t('attendees.bull.name'), bio: t('attendees.bull.bio'), image: attendeeBull },
    { id: 'khaf', name: t('attendees.khaf.name'), bio: t('attendees.khaf.bio'), image: attendeeKhaf },
    { id: 'esther', name: t('attendees.esther.name'), bio: t('attendees.esther.bio'), image: attendeeEsther },
  ];

  return (
    <section id="attendees" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate">
            {t('attendees.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('attendees.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {attendees.map((attendee, index) => (
            <motion.div
              key={attendee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="cursor-pointer group"
              onClick={() => setSelected(attendee)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-card">
                <img
                  src={attendee.image}
                  alt={attendee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm">{attendee.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogTitle className="sr-only">{selected?.name}</DialogTitle>
            {selected && (
              <div className="flex flex-col items-center text-center">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-4">{selected.name}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{selected.bio}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AttendeesSection;
