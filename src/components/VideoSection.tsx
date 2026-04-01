 import { useTranslation } from 'react-i18next';
 import { motion } from 'framer-motion';
 import personCharacter from '@/assets/person-character.png';
 
 const VideoSection = () => {
   const { t } = useTranslation();
 
   return (
     <section className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-6"
         >
             <img
               src={personCharacter}
               alt="Unconference character"
               className="max-w-[6.5rem] sm:max-w-[6rem] md:max-w-[8rem] mx-auto mb-2"
               loading="lazy"
             />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              <span className="text-bitcoin-orange">{t('video.headline1')}</span>{t('video.headline2')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('video.description')}
            </p>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
         >
           <iframe
             src="https://www.youtube.com/embed/sSxzLONq_VU"
             title="Unconference Introduction by John Dennehy"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             className="absolute inset-0 w-full h-full"
           />
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default VideoSection;