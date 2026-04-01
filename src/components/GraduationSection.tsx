import { motion } from 'framer-motion';
import coinRead from '@/assets/coin-read.png';
import certificate from '@/assets/certificate.png';
import graduationBottom from '@/assets/graduation-bottom.png';

const GraduationSection = () => {
  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-0 bg-[#eae0f5] relative overflow-hidden">
      {/* Yellow decorative elements */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32">
        <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="20" cy="30" rx="12" ry="20" fill="#F5C842" transform="rotate(-30 20 30)" />
          <ellipse cx="35" cy="20" rx="10" ry="18" fill="#F5C842" transform="rotate(-10 35 20)" />
          <ellipse cx="15" cy="55" rx="11" ry="19" fill="#F5C842" transform="rotate(-45 15 55)" />
          <ellipse cx="40" cy="45" rx="9" ry="16" fill="#F5C842" transform="rotate(5 40 45)" />
          <ellipse cx="28" cy="70" rx="10" ry="17" fill="#F5C842" transform="rotate(-25 28 70)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32">
        <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="30" rx="12" ry="20" fill="#F5C842" transform="rotate(30 60 30)" />
          <ellipse cx="45" cy="20" rx="10" ry="18" fill="#F5C842" transform="rotate(10 45 20)" />
          <ellipse cx="65" cy="55" rx="11" ry="19" fill="#F5C842" transform="rotate(45 65 55)" />
          <ellipse cx="40" cy="45" rx="9" ry="16" fill="#F5C842" transform="rotate(-5 40 45)" />
          <ellipse cx="52" cy="70" rx="10" ry="17" fill="#F5C842" transform="rotate(25 52 70)" />
        </svg>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={coinRead}
            alt="Coin reading"
            className="max-w-[7rem] sm:max-w-[8rem] md:max-w-[10rem] mx-auto mb-4"
            loading="lazy"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-marykate mb-3">
            Celebrate your <span style={{ color: '#b149d2' }}>MFB graduation</span> together
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8">
            Get a placard and a certificate if you hold alumni ticket!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-0"
        >
          <img
            src={certificate}
            alt="Bitcoin Diploma Graduation Certificate"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      <img
        src={graduationBottom}
        alt=""
        className="w-full block mt-0 pointer-events-none"
        loading="lazy"
      />
    </section>
  );
};

export default GraduationSection;
