 import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import coinCharacter from '@/assets/coin-character.png';
import leftPurple from '@/assets/left-purple-design.png';
import rightPurple from '@/assets/right-purple-design.png';
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from '@/components/ui/accordion';
 
 const FAQSection = () => {
   const { t } = useTranslation();
 
   const faqs = [
     {
       question: t('faq.q1.question'),
       answer: t('faq.q1.answer'),
     },
     {
       question: t('faq.q2.question'),
       answer: t('faq.q2.answer'),
     },
     {
       question: t('faq.q3.question'),
       answer: t('faq.q3.answer'),
     },
     {
       question: t('faq.q4.question'),
       answer: t('faq.q4.answer'),
     },
     {
       question: t('faq.q5.question'),
       answer: t('faq.q5.answer'),
     },
   ];
 
   return (
     <section id="faq" className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
            <img
              src={coinCharacter}
              alt="Bitcoin coin character"
              className="max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] mx-auto mb-4"
              loading="lazy"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {t('faq.title')}
            </h2>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="max-w-3xl mx-auto"
         >
           <Accordion type="single" collapsible className="space-y-4">
             {faqs.map((faq, index) => (
               <AccordionItem
                 key={index}
                 value={`item-${index}`}
                 className="glass-card px-6 border-none"
               >
                 <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;