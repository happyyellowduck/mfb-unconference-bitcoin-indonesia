import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        tickets: 'Tickets',
        venue: 'Venue',
        food: 'Food & Drinks',
        about: 'About MFB',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'A day full of learning, community & fun',
        hostedBy: 'Surabaya, Indonesia | August 22, 2026',
        network: 'Hosted by Bitcoin Indonesia & My First Bitcoin',
        getTicket: 'Get your ticket now!',
        countdown: {
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
        },
      },
      tickets: {
        title: 'Secure Your Spot',
        subtitle: 'Exclusive Event — Strictly capped at 200 participants',
        standard: {
          title: 'Standard',
          price: '200.000 IDR',
          features: [
            'Full day Unconference pass',
            'BBQ buffet & beverages included',
            '3 stages, 5 workshop areas & 2 networking spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & networking sessions',
          ],
        },
        alumni: {
          title: 'MFB Alumni',
          price: '150.000 IDR',
          badge: 'Special Rate',
          features: [
            'Full day Unconference pass',
            'BBQ buffet & beverages included',
            '3 stages, 5 workshop areas & 2 networking spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & networking sessions',
          ],
        },
        ctaMegatix: 'Pay in Rupiah (via Megatix)',
        ctaBitcoin: 'Pay in Bitcoin (via Satlantis)',
        ctaLearnMore: 'Learn more',
      },
      venue: {
        title: 'The Venue',
        name: 'Rustic Market Forest Tree',
        description: 'A European-style forest escape in the heart of Surabaya. Wood, nature, and Bitcoin.',
        zones: {
          mainStage: {
            title: 'Main Stage',
            capacity: '200 pax',
            description: 'Learn Zone, Unconference Sessions, & Debate Corner',
          },
          nodeMining: {
            title: 'Node & Mining Zone',
            description: 'Tech deep-dives with Bas, Chresna, and Hansen',
          },
          artSocial: {
            title: 'Art & Social Media',
            description: 'Featuring NoSTR, Bitcoin Satoshi Cat, and Emily Blockhunters',
          },
          community: {
            title: 'Community Circle',
            description: 'Networking area for meetups, Telegram groups, and job posts',
          },
          introvert: {
            title: 'Introvert Bitcoiner Zone',
            description: "A quiet 'no-phones' area for deep conversations and books",
          },
        },
        address: 'Jl. Golf 1 No. 159A, Gunung Sari, Surabaya',
        viewMap: 'View on Maps',
      },
      hospitality: {
        title: 'Fueling the Revolution',
        subtitle: 'Tickets include a full Rustic Market BBQ & Buffet',
        menu: {
          steak: 'Tenderloin Steak',
          yakitori: 'Chicken Yakitori',
          seafood: 'Seafood Brochettes',
          pasta: 'Aglio Olio',
          drinks: 'Free Flow Drinks',
        },
      },
      cta: {
        title: 'Want to bring Bitcoin education to your community?',
        subtitle: 'Join the movement. Learn more about MFB Indonesia or become part of our next cohort.',
        button: 'Join a Cohort',
        learnMore: 'Learn More About MFB',
      },
      footer: {
        slogan: 'Decentralize Education',
        rights: '© 2026 Bitcoin Indonesia & My First Bitcoin. All rights reserved.',
        followUs: 'Follow Us',
      },
    },
  },
  id: {
    translation: {
      nav: {
        tickets: 'Tiket',
        venue: 'Tempat',
        food: 'Makanan & Minuman',
        about: 'Tentang MFB',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'Sehari penuh belajar, komunitas & kesenangan',
        hostedBy: 'Surabaya, Indonesia | 22 Agustus 2026',
        network: 'Diselenggarakan oleh Bitcoin Indonesia & My First Bitcoin',
        getTicket: 'Dapatkan tiketmu sekarang!',
        countdown: {
          days: 'Hari',
          hours: 'Jam',
          minutes: 'Menit',
          seconds: 'Detik',
        },
      },
      tickets: {
        title: 'Amankan Tempatmu',
        subtitle: 'Acara Eksklusif — Terbatas hanya 200 peserta',
        standard: {
          title: 'Standard',
          price: '200.000 IDR',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '3 panggung, 5 area workshop & 2 spot networking',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Sesi belajar & networking',
          ],
        },
        alumni: {
          title: 'Alumni MFB',
          price: '150.000 IDR',
          badge: 'Harga Spesial',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '3 panggung, 5 area workshop & 2 spot networking',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Sesi belajar & networking',
          ],
        },
        ctaMegatix: 'Bayar Rupiah (via Megatix)',
        ctaBitcoin: 'Bayar Bitcoin (via Satlantis)',
        ctaLearnMore: 'Pelajari lebih lanjut',
      },
      venue: {
        title: 'Lokasi Acara',
        name: 'Rustic Market Forest Tree',
        description: 'Suasana hutan bergaya Eropa di jantung Surabaya. Kayu, alam, dan Bitcoin.',
        zones: {
          mainStage: {
            title: 'Panggung Utama',
            capacity: '200 orang',
            description: 'Zona Belajar, Sesi Unconference, & Pojok Debat',
          },
          nodeMining: {
            title: 'Zona Node & Mining',
            description: 'Pembahasan teknis bersama Bas, Chresna, dan Hansen',
          },
          artSocial: {
            title: 'Seni & Media Sosial',
            description: 'Menampilkan NoSTR, Bitcoin Satoshi Cat, dan Emily Blockhunters',
          },
          community: {
            title: 'Lingkaran Komunitas',
            description: 'Area networking untuk meetup, grup Telegram, dan lowongan kerja',
          },
          introvert: {
            title: 'Zona Introvert Bitcoiner',
            description: "Area tenang 'tanpa ponsel' untuk percakapan mendalam dan buku",
          },
        },
        address: 'Jl. Golf 1 No. 159A, Gunung Sari, Surabaya',
        viewMap: 'Lihat di Maps',
      },
      hospitality: {
        title: 'Mengisi Energi Revolusi',
        subtitle: 'Tiket termasuk BBQ & Buffet Rustic Market lengkap',
        menu: {
          steak: 'Steak Tenderloin',
          yakitori: 'Yakitori Ayam',
          seafood: 'Brochettes Seafood',
          pasta: 'Aglio Olio',
          drinks: 'Minuman Sepuasnya',
        },
      },
      cta: {
        title: 'Ingin membawa edukasi Bitcoin ke komunitasmu?',
        subtitle: 'Bergabung dalam gerakan. Pelajari lebih lanjut tentang MFB Indonesia atau menjadi bagian dari kohort kami.',
        button: 'Gabung Kohort',
        learnMore: 'Pelajari Tentang MFB',
      },
      footer: {
        slogan: 'Desentralisasi Pendidikan',
        rights: '© 2026 Bitcoin Indonesia & My First Bitcoin. Hak cipta dilindungi.',
        followUs: 'Ikuti Kami',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
