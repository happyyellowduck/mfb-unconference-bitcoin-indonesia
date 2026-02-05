 import { useState } from 'react';
 import { useTranslation } from 'react-i18next';
 import { motion } from 'framer-motion';
 import { X, UserPlus } from 'lucide-react';
 import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
 import speakerJohn from '@/assets/speaker-john-dennehy.jpg';
 import speakerDimas from '@/assets/speaker-dimas.jpg';
 import speakerDepoll from '@/assets/speaker-depoll.jpeg';
 import speakerHansen from '@/assets/speaker-hansen.jpg';
 import speakerRicky from '@/assets/speaker-ricky.jpeg';
 
 interface Speaker {
   id: string;
   name: string;
   role: string;
   bio: string;
   image: string | null;
   isPlaceholder?: boolean;
 }
 
 const SpeakersSection = () => {
   const { t } = useTranslation();
   const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
 
   const speakers: Speaker[] = [
     {
       id: 'john',
       name: 'John Dennehy',
       role: t('speakers.john.role'),
       bio: t('speakers.john.bio'),
       image: speakerJohn,
     },
     {
       id: 'dimas',
       name: 'Dimas',
       role: t('speakers.dimas.role'),
       bio: t('speakers.dimas.bio'),
       image: speakerDimas,
     },
     {
       id: 'depoll',
       name: 'Depoll',
       role: t('speakers.depoll.role'),
       bio: t('speakers.depoll.bio'),
       image: speakerDepoll,
     },
     {
       id: 'hansen',
       name: 'Hansen Malau',
       role: t('speakers.hansen.role'),
       bio: t('speakers.hansen.bio'),
       image: speakerHansen,
     },
     {
       id: 'ricky',
       name: 'Ricky Saif',
       role: t('speakers.ricky.role'),
       bio: t('speakers.ricky.bio'),
       image: speakerRicky,
     },
     {
       id: 'you',
       name: t('speakers.you.name'),
       role: t('speakers.you.role'),
       bio: t('speakers.you.bio'),
       image: null,
       isPlaceholder: true,
     },
   ];
 
   return (
     <section id="speakers" className="section-padding bg-muted/30">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
             {t('speakers.title')}
           </h2>
           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
             {t('speakers.subtitle')}
           </p>
         </motion.div>
 
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
           {speakers.map((speaker, index) => (
             <motion.div
               key={speaker.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="cursor-pointer group"
               onClick={() => setSelectedSpeaker(speaker)}
             >
               <div className="relative aspect-square rounded-2xl overflow-hidden glass-card">
                 {speaker.isPlaceholder ? (
                   <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                     <UserPlus className="w-12 h-12 text-primary" />
                   </div>
                 ) : (
                   <img
                     src={speaker.image!}
                     alt={speaker.name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                 <div className="absolute bottom-0 left-0 right-0 p-3">
                   <h3 className="text-white font-bold text-sm">{speaker.name}</h3>
                   <p className="text-white/80 text-xs line-clamp-2">{speaker.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Speaker Modal */}
         <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
           <DialogContent className="sm:max-w-lg">
             <DialogTitle className="sr-only">
               {selectedSpeaker?.name} - {selectedSpeaker?.role}
             </DialogTitle>
             {selectedSpeaker && (
               <div className="flex flex-col items-center text-center">
                 {selectedSpeaker.isPlaceholder ? (
                   <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                     <UserPlus className="w-12 h-12 text-primary" />
                   </div>
                 ) : (
                   <img
                     src={selectedSpeaker.image!}
                     alt={selectedSpeaker.name}
                     className="w-32 h-32 rounded-full object-cover mb-4"
                   />
                 )}
                 <h3 className="text-xl font-bold">{selectedSpeaker.name}</h3>
                 <p className="text-primary font-medium mb-4">{selectedSpeaker.role}</p>
                 <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
               </div>
             )}
           </DialogContent>
         </Dialog>
       </div>
     </section>
   );
 };
 
 export default SpeakersSection;