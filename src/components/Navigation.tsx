import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import bitcoinIndoLogo from '@/assets/bitcoin-indonesia-logo.svg';
import mfbLogo from '@/assets/my-first-bitcoin-logo.webp';

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#tickets', label: t('nav.tickets') },
    { href: '#about-unconference', label: t('nav.experience') },
    { href: '#speakers', label: t('nav.speakers') },
    { href: '#venue', label: t('nav.venue') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card !rounded-none py-2 sm:py-3' : 'py-3 sm:py-6'
      }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src={bitcoinIndoLogo}
              alt="Bitcoin Indonesia"
              className="h-7 sm:h-10 w-auto"
            />
            <div className="w-px h-6 sm:h-8 bg-border" />
            <img
              src={mfbLogo}
              alt="My First Bitcoin"
              className="h-7 sm:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <button
              className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass-card p-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 px-4 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
