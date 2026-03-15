import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        tickets: 'Tickets',
        experience: 'Experience',
        speakers: 'Speakers',
        venue: 'Venue',
        faq: 'FAQs',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'A Bitcoin-Only Event for Beginners, Educators, Alumni, and the Next Generation of Indonesian Bitcoin Builders',
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
          description: 'Connect with Bitcoin educators, builders, and community leaders from across Indonesia. This is a Bitcoin-only space designed to strengthen grassroots education and foster meaningful collaboration.',
        },
        speaker: {
          title: 'Everyone Can Be a Speaker',
          description: 'Our stage is permissionless. Anyone can pitch a topic, share proof-of-work, or propose a discussion at the start of the event. Sessions are organized together and focused strictly on Bitcoin. There is no space for altcoin promotion, trading schemes, self-promotion, or hidden agendas.',
        },
        beginners: {
          title: 'For Beginners',
          description: "New to Bitcoin? You're welcome here. This is a safe and supportive environment where newcomers and experienced Bitcoiners can learn, ask questions, and share knowledge together.",
        },
      },
      video: {
        description: 'Learn from John Dennehy, founder of My First Bitcoin, about the idea and concept behind Unconferences.',
      },
      speakers: {
        title: 'Speakers',
        subtitle: 'Meet the educators and builders shaping the Bitcoin community',
        john: {
          role: 'Founder of My First Bitcoin',
          bio: 'John Dennehy is the founder of My First Bitcoin, a non-profit organization dedicated to Bitcoin education. He has been instrumental in bringing Bitcoin education to schools and communities around the world, starting in El Salvador and now expanding globally.',
        },
        dimas: {
          role: 'Founder of Bitcoin Indonesia & Bitcoin House Bali',
          bio: "Dimas is the Co-Founder of Bitcoin Indonesia and the Bitcoin House Bali. He's a strong voice in the Indonesian Bitcoin community, podcaster, and a passionate Bitcoin educator.",
        },
        depoll: {
          role: 'Bitcoin House Bali Manager',
          bio: 'Depoll is a My First Bitcoin graduate from Bali and a valuable team member at Bitcoin Indonesia. He plays a key role in running the Bitcoin House in Bali, hosting meetups and workshops, and growing the local Bitcoin community. Additionally, Depoll creates educational content in Bahasa Indonesia to help expand Bitcoin knowledge across the country.',
        },
        hansen: {
          role: 'Founder of Apa Ada Dengan Bitcoin',
          bio: 'Hansen Malau is an entrepreneur, sats stacker, and Bitcoin community leader. He runs the Indonesian-focused X account Apa Ada Dengan Bitcoin, breaking down language barriers and making Bitcoin content accessible to the local audience.',
        },
        zed: {
          role: 'Founder of Bitcoin for Aceh Flood Victims',
          bio: 'As a Bitcoiner since January 2022, born in Aceh—one of the regions most severely affected by the floods and landslides—I am stepping forward to raise donations from the Bitcoin community.',
        },
        you: {
          name: 'You?',
          role: 'The next speaker',
          bio: 'At an Unconference, everyone has the chance to share their thoughts and knowledge. Whether you have a project to present, insights to share, or just want to participate in the conversation – the stage is yours!',
        },
      },
      zones: {
        title: 'The event areas',
      },
      tickets: {
        title: 'Secure Your Spot',
        subtitle: 'Exclusive Event — Strictly capped at 200 participants',
        saveLabel: '50% off',
        alumni: {
          title: 'MFB Alumni',
          earlyBirdPrice: '75.000 IDR',
          regularPrice: '150.000 IDR',
          badge: 'Special Rate',
          features: [
            'Full day Unconference pass',
            'BBQ buffet & beverages included',
            '2 stages, 4 workshop areas & 2 discussion spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & building',
          ],
        },
        public: {
          title: 'Public',
          earlyBirdPrice: '150.000 IDR',
          regularPrice: '300.000 IDR',
          features: [
            'Full day Unconference pass',
            'BBQ buffet & beverages included',
            '2 stages, 4 workshop areas & 2 discussion spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & building',
          ],
        },
        ctaMegatix: 'Get Early Bird Ticket Now',
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
            description: 'Unconference Sessions, Talks, and Debates — All About Bitcoin',
          },
          nodeMining: {
            title: 'Self-Custody, Node & Mining Zone',
            description: 'Bitcoin Tech Deep Dives With Experienced Bitcoiners',
          },
          artSocial: {
            title: 'Art, Social Media & Nostr',
            description: 'Explore Bitcoin culture through art, storytelling, and decentralized Bitcoin social media',
          },
          community: {
            title: 'MFB & Community',
            description: 'Learn about My First Bitcoin, enroll in a class, become an educator, start your own MFB class, or connect with the community',
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
          answer: 'No! Currently we cannot accept Bitcoin payments due to Indonesian regulations. However, one of the goals of this event is education — helping Indonesians understand Bitcoin, self-custody, and financial freedom so that in the future Bitcoin can hopefully become legal and accessible for everyone in Indonesia. Bitcoin is freedom money.',
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
        speakers: 'Pembicara',
        venue: 'Tempat',
        faq: 'FAQ',
      },
      hero: {
        title: 'Bitcoin Unconference',
        subtitle: 'Acara Bitcoin-Only untuk Pemula, Pendidik, Alumni, dan Generasi Baru Builder Bitcoin Indonesia',
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
          title: 'Network',
          description: 'Terhubung dengan para pendidik, builder, dan pemimpin komunitas Bitcoin dari seluruh Indonesia. Ini adalah ruang Bitcoin-only yang dirancang untuk memperkuat edukasi grassroots dan mendorong kolaborasi yang bermakna.',
        },
        speaker: {
          title: 'Semua Orang Bisa Menjadi Pembicara',
          description: 'Panggung kami bersifat permissionless. Siapa pun dapat mengajukan topik, membagikan proof-of-work, atau mengusulkan diskusi di awal acara. Sesi akan disusun bersama dan hanya berfokus pada Bitcoin. Tidak ada ruang untuk promosi altcoin, skema trading, self-promotion, agenda tersembunyi.',
        },
        beginners: {
          title: 'Untuk Pemula',
          description: 'Baru mengenal Bitcoin? Kamu tetap sangat diterima. Ini adalah lingkungan yang aman dan suportif di mana pemula dan Bitcoiner berpengalaman bisa belajar, bertanya, dan berbagi pengetahuan bersama.',
        },
      },
      video: {
        description: 'Belajar dari John Dennehy, pendiri My First Bitcoin, tentang ide dan konsep di balik Unconference.',
      },
      speakers: {
        title: 'Pembicara',
        subtitle: 'Temui para pendidik dan pembangun yang membentuk komunitas Bitcoin',
        john: {
          role: 'Pendiri My First Bitcoin',
          bio: 'John Dennehy adalah pendiri My First Bitcoin, organisasi nirlaba yang didedikasikan untuk pendidikan Bitcoin. Dia berperan penting dalam membawa pendidikan Bitcoin ke sekolah dan komunitas di seluruh dunia, dimulai dari El Salvador dan sekarang berkembang secara global.',
        },
        dimas: {
          role: 'Founder of Bitcoin Indonesia & Bitcoin House Bali',
          bio: 'Dimas adalah Co-Founder Bitcoin Indonesia dan Bitcoin House Bali. Dia adalah suara kuat dalam komunitas Bitcoin Indonesia, podcaster, dan pendidik Bitcoin yang penuh semangat.',
        },
        depoll: {
          role: 'Manajer Bitcoin House Bali',
          bio: 'Depoll adalah lulusan My First Bitcoin dari Bali dan anggota tim yang berharga di Bitcoin Indonesia. Dia memainkan peran kunci dalam menjalankan Bitcoin House di Bali, mengadakan pertemuan dan lokakarya, serta mengembangkan komunitas Bitcoin lokal. Selain itu, Depoll membuat konten edukatif dalam Bahasa Indonesia untuk membantu memperluas pengetahuan Bitcoin di seluruh negeri.',
        },
        hansen: {
          role: 'Founder of Apa Ada Dengan Bitcoin',
          bio: 'Hansen Malau adalah pengusaha, penumpuk sats, dan pemimpin komunitas Bitcoin. Dia menjalankan akun X berbahasa Indonesia Apa Ada Dengan Bitcoin, mendobrak hambatan bahasa dan membuat konten Bitcoin dapat diakses oleh audiens lokal.',
        },
        zed: {
          role: 'Founder of Bitcoin untuk Korban Banjir Aceh',
          bio: 'Sebagai Bitcoiner sejak Januari 2022, lahir di Aceh—salah satu daerah yang paling terdampak banjir dan longsor—saya melangkah maju untuk menggalang donasi dari komunitas Bitcoin.',
        },
        you: {
          name: 'Anda?',
          role: 'Pembicara berikutnya',
          bio: 'Di Unconference, semua orang memiliki kesempatan untuk berbagi pemikiran dan pengetahuan mereka. Apakah Anda memiliki proyek untuk dipresentasikan, wawasan untuk dibagikan, atau hanya ingin berpartisipasi dalam percakapan – panggungnya adalah milik Anda!',
        },
      },
      zones: {
        title: 'Area acara',
      },
      tickets: {
        title: 'Amankan Tempatmu',
        subtitle: 'Acara Eksklusif — Terbatas hanya 200 peserta',
        saveLabel: 'Hemat 50%',
        graduate: {
          title: 'Graduate 2026',
          earlyBirdPrice: '100.000 IDR',
          regularPrice: '200.000 IDR',
          badge: 'Terbaik',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '2 panggung, 4 area workshop & 2 spot diskusi',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Learning & building',
          ],
        },
        alumni: {
          title: 'Alumni MFB',
          earlyBirdPrice: '150.000 IDR',
          regularPrice: '300.000 IDR',
          badge: 'Harga Spesial',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '2 panggung, 4 area workshop & 2 spot diskusi',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Learning & building',
          ],
        },
        standard: {
          title: 'Standard',
          earlyBirdPrice: '200.000 IDR',
          regularPrice: '400.000 IDR',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '2 panggung, 4 area workshop & 2 spot diskusi',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Learning & building',
          ],
        },
        ctaMegatix: 'Dapatkan Tiket Early Bird Sekarang',
        ctaLearnMore: 'Pelajari lebih lanjut',
      },
      venue: {
        title: 'Lokasi Acara',
        name: 'Rustic Market Forest Tree',
        description: 'Suasana hutan bergaya Eropa di jantung Surabaya. Kayu, alam, dan Bitcoin.',
        exploreMap: 'Jelajahi peta venue',
        zones: {
          mainStage: {
            title: 'Main Stage',
            capacity: '200 orang',
            description: 'Sesi unconference, talk, dan debat — semuanya tentang Bitcoin',
          },
          nodeMining: {
            title: 'Self-Custody, Node & Mining Zone',
            description: 'Pendalaman teknis Bitcoin bersama Bitcoiner berpengalaman',
          },
          artSocial: {
            title: 'Art, Social Media & Nostr Zone',
            description: 'Eksplorasi budaya Bitcoin melalui seni, storytelling, dan media sosial terdesentralisasi',
          },
          community: {
            title: 'MFB & Community Zone',
            description: 'Pelajari tentang My First Bitcoin, daftar kelas, menjadi educator, memulai kelas MFB sendiri, atau terhubung dengan komunitas',
          },
          introvert: {
            title: 'Introvert Bitcoiner Zone',
            description: 'Area tenang tanpa ponsel untuk percakapan mendalam dan membaca buku',
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
          answer: 'Tidak! Saat ini kami belum bisa menerima pembayaran Bitcoin karena regulasi Indonesia. Namun, salah satu tujuan acara ini adalah edukasi — membantu masyarakat Indonesia memahami Bitcoin, self-custody, dan kebebasan finansial agar di masa depan Bitcoin bisa menjadi legal dan dapat diakses oleh semua orang di Indonesia. Bitcoin is freedom money.',
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
