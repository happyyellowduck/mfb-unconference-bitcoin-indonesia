import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        tickets: 'Tickets',
         experience: 'Experience',
         venue: 'Venue',
        faq: 'FAQs',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'A full day experience of learning, community & fun',
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
       spirit: {
         title: 'The spirit of an Unconference',
         network: {
           title: 'Network',
           description: 'Meet the people that you have always wanted to meet. We aim to attract all type of bitcoin educators from the space. We invite builders, those who create proof-of-work.',
         },
         speaker: {
           title: 'Everyone can be a speaker',
           description: "Our stage is permissionless. At the start of the event, we'll ask everyone to pitch their project, share proof-of-work or bring talking points. After that, we'll organize break-out rooms!",
         },
         highSignal: {
           title: 'High signal',
           description: "We're not here to sell you something. We're here to bring people together, to create synergy and have a space for real connections. Whether you want to speak, listen to others giving a keynote, or just talk and connect? Join us!",
         },
       },
       video: {
         description: 'Learn from John Dennehy, founder of My First Bitcoin, about the idea and concept behind Unconferences.',
       },
      zones: {
        title: 'The event areas',
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
        exploreMap: 'Explore the venue map',
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
      faq: {
        title: 'Frequently Asked Questions',
        q1: {
          question: 'What is an Unconference?',
          answer: 'An Unconference is a participant-driven event where the agenda is created by attendees at the start of the day. Unlike traditional conferences, there are no pre-scheduled speakers—everyone has the opportunity to share, learn, and connect.',
        },
        q2: {
          question: 'Do I need to prepare anything before the event?',
          answer: 'No preparation is required! However, if you have a project, idea, or topic you\'d like to share, feel free to bring it. At the start of the event, we\'ll invite everyone to pitch their ideas and form discussion groups.',
        },
        q3: {
          question: 'What is included in the ticket price?',
          answer: 'Your ticket includes full access to all stages and workshop areas, a BBQ buffet lunch with beverages, networking opportunities, and the chance to participate in all Unconference sessions throughout the day.',
        },
        q4: {
          question: 'Can I pay with Bitcoin?',
          answer: 'Yes! We accept Bitcoin payments through Satlantis. Simply click the "Pay in Bitcoin" button on your preferred ticket tier and follow the instructions to complete your payment.',
        },
        q5: {
          question: 'Is the event in English or Indonesian?',
          answer: 'The event is bilingual! Sessions and discussions will be held in both Bahasa Indonesia 🇮🇩 and English 🇬🇧. Feel free to participate in whichever language you\'re most comfortable with.',
        },
      },
      cta: {
         title: 'Want to start learning about Bitcoin now?',
         subtitle: 'Bitcoin Indonesia provides FREE education opportunities. Start your learning journey today!',
         meetup: 'Join a meetup',
         mfbClass: 'Join a MFB class',
         followIg: 'Follow us on IG',
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
        experience: 'Pengalaman',
        venue: 'Tempat',
        faq: 'FAQ',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'Pengalaman sehari penuh belajar, komunitas & kesenangan',
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
       spirit: {
         title: 'Semangat Unconference',
         network: {
           title: 'Jaringan',
           description: 'Temui orang-orang yang selalu ingin Anda temui. Kami bertujuan menarik semua jenis pendidik bitcoin dari ruang ini. Kami mengundang para pembangun, mereka yang menciptakan proof-of-work.',
         },
         speaker: {
           title: 'Semua orang bisa jadi pembicara',
           description: 'Panggung kami tanpa izin. Di awal acara, kami akan meminta semua orang untuk mempresentasikan proyek mereka, berbagi proof-of-work atau membawa topik diskusi. Setelah itu, kami akan mengatur ruang diskusi!',
         },
         highSignal: {
           title: 'Sinyal tinggi',
           description: 'Kami tidak di sini untuk menjual sesuatu. Kami di sini untuk menyatukan orang, menciptakan sinergi dan memiliki ruang untuk koneksi nyata. Apakah Anda ingin berbicara, mendengarkan keynote orang lain, atau hanya berbicara dan terhubung? Bergabunglah!',
         },
       },
       video: {
         description: 'Belajar dari John Dennehy, pendiri My First Bitcoin, tentang ide dan konsep di balik Unconference.',
       },
      zones: {
        title: 'Area acara',
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
        exploreMap: 'Jelajahi peta venue',
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
      faq: {
        title: 'Pertanyaan yang Sering Diajukan',
        q1: {
          question: 'Apa itu Unconference?',
          answer: 'Unconference adalah acara yang digerakkan oleh peserta di mana agenda dibuat oleh peserta di awal hari. Berbeda dengan konferensi tradisional, tidak ada pembicara yang dijadwalkan sebelumnya—semua orang memiliki kesempatan untuk berbagi, belajar, dan terhubung.',
        },
        q2: {
          question: 'Apakah saya perlu menyiapkan sesuatu sebelum acara?',
          answer: 'Tidak perlu persiapan! Namun, jika Anda memiliki proyek, ide, atau topik yang ingin dibagikan, silakan bawa. Di awal acara, kami akan mengundang semua orang untuk mempresentasikan ide mereka dan membentuk grup diskusi.',
        },
        q3: {
          question: 'Apa yang termasuk dalam harga tiket?',
          answer: 'Tiket Anda termasuk akses penuh ke semua panggung dan area workshop, makan siang BBQ buffet dengan minuman, kesempatan networking, dan kesempatan untuk berpartisipasi dalam semua sesi Unconference sepanjang hari.',
        },
        q4: {
          question: 'Bisakah saya membayar dengan Bitcoin?',
          answer: 'Ya! Kami menerima pembayaran Bitcoin melalui Satlantis. Cukup klik tombol "Bayar dengan Bitcoin" pada tier tiket pilihan Anda dan ikuti instruksi untuk menyelesaikan pembayaran.',
        },
        q5: {
          question: 'Apakah acaranya dalam bahasa Inggris atau Indonesia?',
          answer: 'Acara ini bilingual! Sesi dan diskusi akan diadakan dalam Bahasa Indonesia 🇮🇩 dan Inggris 🇬🇧. Silakan berpartisipasi dalam bahasa mana pun yang paling nyaman bagi Anda.',
        },
      },
      cta: {
         title: 'Ingin mulai belajar tentang Bitcoin sekarang?',
         subtitle: 'Bitcoin Indonesia menyediakan kesempatan edukasi GRATIS. Mulai perjalanan belajar Anda hari ini!',
         meetup: 'Gabung meetup',
         mfbClass: 'Gabung kelas MFB',
         followIg: 'Ikuti kami di IG',
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
