import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-10 rounded-full p-1 glass-card cursor-pointer min-w-[100px]"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute h-8 w-12 rounded-full bg-primary"
        initial={false}
        animate={{ x: isEnglish ? 2 : 46 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <span
        className={`relative z-10 px-3 py-1 text-sm font-semibold transition-colors ${
          isEnglish ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 px-3 py-1 text-sm font-semibold transition-colors ${
          !isEnglish ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        ID
      </span>
    </button>
  );
};

export default LanguageToggle;
