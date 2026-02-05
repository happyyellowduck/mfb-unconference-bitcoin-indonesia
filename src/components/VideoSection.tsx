 import { useTranslation } from 'react-i18next';
 import { motion } from 'framer-motion';
 
 const VideoSection = () => {
   const { t } = useTranslation();
 
   return (
     <section className="section-padding bg-muted/30">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-10"
         >
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