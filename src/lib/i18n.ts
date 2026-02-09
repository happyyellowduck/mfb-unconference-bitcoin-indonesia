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
        beginners: {
          title: 'For beginners',
          description: "New to Bitcoin? This is the perfect place to start. We welcome everyone, from curious newcomers to experienced Bitcoiners. Learn at your own pace in a friendly, supportive environment.",
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
          role: 'Bitcoin Indonesia & Bitcoin House Bali',
          bio: "Dimas is the Co-Founder of Bitcoin Indonesia and the Bitcoin House Bali. He's a strong voice in the Indonesian Bitcoin community, podcaster, and a passionate Bitcoin educator.",
        },
        depoll: {
          role: 'Bitcoin House Bali Manager',
          bio: 'Depoll is a My First Bitcoin graduate from Bali and a valuable team member at Bitcoin Indonesia. He plays a key role in running the Bitcoin House in Bali, hosting meetups and workshops, and growing the local Bitcoin community. Additionally, Depoll creates educational content in Bahasa Indonesia to help expand Bitcoin knowledge across the country.',
        },
        hansen: {
          role: 'Apa Ada Dengan Bitcoin',
          bio: 'Hansen Malau is an entrepreneur, sats stacker, and Bitcoin community leader. He runs the Indonesian-focused X account Apa Ada Dengan Bitcoin, breaking down language barriers and making Bitcoin content accessible to the local audience.',
        },
        ricky: {
          role: 'Bitcoinstitutions',
          bio: 'Ricky helps institutions and professionals be more profitable and crisis-proof, just by accumulating the best money humanity ever invented.',
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
        standard: {
          title: 'Standard',
          price: '200.000 IDR',
          features: [
            'Full day Unconference pass',
            'BBQ buffet & beverages included',
            '2 stages, 8 workshop areas & 2 networking spots',
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
            '2 stages, 8 workshop areas & 2 networking spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & networking sessions',
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
        speakers: 'Pembicara',
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
        beginners: {
          title: 'Untuk pemula',
          description: 'Baru mengenal Bitcoin? Ini adalah tempat yang sempurna untuk memulai. Kami menyambut semua orang, dari pendatang baru yang penasaran hingga Bitcoiner berpengalaman. Belajar sesuai kecepatan Anda sendiri dalam lingkungan yang ramah dan mendukung.',
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
          role: 'Bitcoin Indonesia & Bitcoin House Bali',
          bio: 'Dimas adalah Co-Founder Bitcoin Indonesia dan Bitcoin House Bali. Dia adalah suara kuat dalam komunitas Bitcoin Indonesia, podcaster, dan pendidik Bitcoin yang penuh semangat.',
        },
        depoll: {
          role: 'Manajer Bitcoin House Bali',
          bio: 'Depoll adalah lulusan My First Bitcoin dari Bali dan anggota tim yang berharga di Bitcoin Indonesia. Dia memainkan peran kunci dalam menjalankan Bitcoin House di Bali, mengadakan pertemuan dan lokakarya, serta mengembangkan komunitas Bitcoin lokal. Selain itu, Depoll membuat konten edukatif dalam Bahasa Indonesia untuk membantu memperluas pengetahuan Bitcoin di seluruh negeri.',
        },
        hansen: {
          role: 'Apa Ada Dengan Bitcoin',
          bio: 'Hansen Malau adalah pengusaha, penumpuk sats, dan pemimpin komunitas Bitcoin. Dia menjalankan akun X berbahasa Indonesia Apa Ada Dengan Bitcoin, mendobrak hambatan bahasa dan membuat konten Bitcoin dapat diakses oleh audiens lokal.',
        },
        ricky: {
          role: 'Bitcoinstitutions',
          bio: 'Ricky membantu institusi dan profesional menjadi lebih menguntungkan dan tahan krisis, hanya dengan mengakumulasi uang terbaik yang pernah diciptakan manusia.',
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
        standard: {
          title: 'Standard',
          price: '200.000 IDR',
          features: [
            'Akses Unconference sehari penuh',
            'BBQ buffet & minuman termasuk',
            '2 panggung, 8 area workshop & 2 spot networking',
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
            '2 panggung, 8 area workshop & 2 spot networking',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Sesi belajar & networking',
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
