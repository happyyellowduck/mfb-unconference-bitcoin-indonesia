 import { useTranslation } from 'react-i18next';
 import { motion } from 'framer-motion';
 import { Users, Mic, Sparkles } from 'lucide-react';
 
 const UnconferenceSpiritSection = () => {
   const { t } = useTranslation();
 
   const tiles = [
     {
       icon: Users,
       title: t('spirit.network.title'),
       description: t('spirit.network.description'),
      borderColor: 'border-amber-500',
      iconColor: 'text-amber-500',
     },
     {
       icon: Mic,
       title: t('spirit.speaker.title'),
       description: t('spirit.speaker.description'),
      borderColor: 'border-secondary',
      iconColor: 'text-secondary',
     },
     {
       icon: Sparkles,
       title: t('spirit.highSignal.title'),
       description: t('spirit.highSignal.description'),
      borderColor: 'border-emerald-500',
      iconColor: 'text-emerald-500',
     },
   ];
 
   return (
     <section id="about-unconference" className="section-padding bg-muted/30">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
             {t('spirit.title')}
           </h2>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-6">
           {tiles.map((tile, index) => (
             <motion.div
               key={tile.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card border-2 ${tile.borderColor} rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition-transform`}
             >
              <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6`}>
                <tile.icon className={`w-7 h-7 ${tile.iconColor}`} />
               </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{tile.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tile.description}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default UnconferenceSpiritSection;