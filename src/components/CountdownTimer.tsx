import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import bgCountdown from '@/assets/bg_countdown.png';
import { useEventCountdown } from '@/hooks/useEventCountdown';

const CountdownTimer = () => {
  const { t } = useTranslation();
  const timeLeft = useEventCountdown();

  const timeUnits = [
    { value: timeLeft.days, label: t('hero.countdown.days') },
    { value: timeLeft.hours, label: t('hero.countdown.hours') },
    { value: timeLeft.minutes, label: t('hero.countdown.minutes') },
    { value: timeLeft.seconds, label: t('hero.countdown.seconds') },
  ];


  return (
    <div className="flex gap-3 sm:gap-6 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative p-3 sm:p-6 min-w-[70px] sm:min-w-[100px] text-center flex flex-col items-center justify-center"
        >
          <img
            src={bgCountdown}
            alt=""
            className="absolute inset-0 w-full h-full object-fill"
          />
          <motion.span
            key={unit.value}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="relative z-10 block text-2xl sm:text-5xl font-sans font-extrabold gradient-text-orange"
          >
            {String(unit.value).padStart(2, '0')}
          </motion.span>
          <span className="relative z-10 text-xs sm:text-sm font-sans font-extrabold text-black uppercase tracking-wider mt-2 block">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
