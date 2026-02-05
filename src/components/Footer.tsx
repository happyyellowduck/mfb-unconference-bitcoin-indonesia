import { useTranslation } from 'react-i18next';
import { Instagram, Send } from 'lucide-react';
import bitcoinIndoLogo from '@/assets/bitcoin-indonesia-logo.svg';
import mfbLogo from '@/assets/my-first-bitcoin-logo.webp';

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

// Custom Nostr icon
const NostrIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm0-8H9V7h6v2z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/bitcoinindo21', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@bitcoinindo21', label: 'TikTok' },
    { icon: XIcon, href: 'https://x.com/bitcoinindo21', label: 'X' },
    { icon: Send, href: 'https://t.me/+miAiJI6HJ7AxZjI8', label: 'Telegram' },
    { icon: NostrIcon, href: 'https://primal.net/p/npub1y4qd2zhtn05gnsaaq5xfejzfk4a32638tx6gpp9g8k6e42g9d66qaxhcr3', label: 'Nostr' },
  ];

  return (
    <footer className="section-padding bg-muted/30 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img
              src={bitcoinIndoLogo}
              alt="Bitcoin Indonesia"
              className="h-8 w-auto"
            />
            <div className="w-px h-8 bg-border" />
            <img
              src={mfbLogo}
              alt="My First Bitcoin"
              className="h-8 w-auto"
            />
          </div>

          {/* Slogan */}
          <div className="text-center">
            <p className="text-xl font-bold gradient-text-orange">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground mr-2">{t('footer.followUs')}</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
