 import { useTranslation } from 'react-i18next';
 import { motion } from 'framer-motion';
 import { Users, Cpu, Palette, MessageCircle, BookOpen } from 'lucide-react';
 
 const ZonesSection = () => {
   const { t } = useTranslation();
 
   const zones = [
     {
       icon: Users,
       title: t('venue.zones.mainStage.title'),
       capacity: t('venue.zones.mainStage.capacity'),
       description: t('venue.zones.mainStage.description'),
       bgColor: 'bg-gradient-to-br from-rose-500 to-pink-600',
     },
     {
       icon: Cpu,
       title: t('venue.zones.nodeMining.title'),
       description: t('venue.zones.nodeMining.description'),
       bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
     },
     {
       icon: Palette,
       title: t('venue.zones.artSocial.title'),
       description: t('venue.zones.artSocial.description'),
       bgColor: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
     },
     {
       icon: MessageCircle,
       title: t('venue.zones.community.title'),
       description: t('venue.zones.community.description'),
       bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
     },
     {
       icon: BookOpen,
       title: t('venue.zones.introvert.title'),
       description: t('venue.zones.introvert.description'),
       bgColor: 'bg-gradient-to-br from-teal-500 to-emerald-600',
     },
   ];
 
   return (
     <section className="section-padding bg-muted/30">
       <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('zones.title')}
          </h2>
        </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {zones.map((zone, index) => (
             <motion.div
               key={zone.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.1 * index }}
               className={`${zone.bgColor} rounded-2xl p-6 text-white shadow-lg hover:scale-[1.02] transition-transform ${
                 index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
               }`}
             >
               <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                 <zone.icon className="w-6 h-6 text-white" />
               </div>
               <h4 className="text-lg font-bold mb-1">
                 {zone.title}
                 {zone.capacity && (
                   <span className="text-sm font-normal text-white/80 ml-2">
                     ({zone.capacity})
                   </span>
                 )}
               </h4>
               <p className="text-sm text-white/90">{zone.description}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ZonesSection;