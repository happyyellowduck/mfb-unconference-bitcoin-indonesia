import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        tickets: 'Tickets',
        experience: 'Experience',
        speakers: 'Speakers',
        eventAreas: 'Event Areas',
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
      sanSalvador: {
        title1: 'MFB Unconference',
        title2: ' in San Salvador',
      },
      video: {
        headline1: 'Idea and Concept',
        headline2: ' behind Unconferences',
        description: 'Learn from John Dennehy, founder of My First Bitcoin',
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
      women: {
        title: 'Women & Bitcoin',
        subtitle: 'A safe and welcoming space for women to connect, learn, and grow in Bitcoin.',
        description: 'A warm space for women at My First Bitcoin Unconference 2026 to sit together, share stories, and explore Bitcoin in a more relaxed and approachable way. No need to be an expert — just come, meet new friends, and enjoy conversations about money, the future, and life from a women\u2019s perspective.',
      },
      attendees: {
        title: 'Who Will Be There?',
        subtitle: 'Meet some of the Bitcoiners joining us at the Unconference',
        dimas: {
          name: 'Dimas',
          bio: 'Dimas Surya Alfaruq is the co-founder of Bitcoin Indonesia and Bitcoin House Bali, two of the leading initiatives driving Bitcoin education and adoption across Indonesia. As a Bitcoin educator, podcaster, YouTuber, and community builder, he has helped grow a nationwide movement focused on financial literacy, economic freedom, and grassroots Bitcoin adoption. Through his content, events, and educational programs, Dimas is dedicated to making Bitcoin accessible to millions of Indonesians while fostering one of Southeast Asia\u2019s most active Bitcoin communities.',
        },
        bhBali: {
          name: 'Bitcoin House Bali',
          bio: 'Bitcoin House Bali has become one of Asia\u2019s most active Bitcoin community hubs, bringing together Bitcoiners, entrepreneurs, developers, educators, and curious newcomers from around the world. Located in the heart of Canggu, it serves as a center for education, collaboration, and innovation, hosting regular meetups, workshops, conferences, and international events. Through its strong grassroots community and commitment to Bitcoin-only education, Bitcoin House Bali has helped thousands of people discover new ways to understand, use, and integrate Bitcoin into their everyday lives.',
        },
        bhBogor: {
          name: 'Bitcoin House Bogor',
          bio: 'Bitcoin House Bogor extends the mission of Bitcoin education and community building beyond Bali, creating a welcoming space for learning, discussion, and collaboration. By connecting local communities with the broader Indonesian Bitcoin movement, it helps make Bitcoin education more accessible while fostering meaningful relationships between Bitcoiners, entrepreneurs, young athletes, students, and families.',
        },
        patrick: {
          name: 'Patrick Korting',
          bio: 'Patrick Korting is the Director of Communications & Events at My First Bitcoin, one of the world\u2019s leading Bitcoin education organizations. Through strategic communications, global partnerships, and educational events, Patrick helps expand the reach of open-source Bitcoin education to communities around the world. His work focuses on connecting people, building strong networks, and creating opportunities for individuals to learn about Bitcoin through accessible and community-driven initiatives.',
        },
        ahPrayo: {
          name: 'AH Prayo',
          bio: 'Bitcoin enthusiast who actively participates in driving the circular economy within Indonesia\u2019s Bitcoin ecosystem.',
        },
        baskoro: {
          name: 'Baskoro Nugroho',
          bio: 'Programmer and Bitcoiner who actively contributes to and teaches at Bitcoin Indonesia Surabaya.',
        },
        chresna: {
          name: 'Chresna Sanubari',
          bio: 'Bitcoiner who actively contributes to and teaches at Bitcoin Indonesia Surabaya, especially about mining.',
        },
        bitcoinSports: {
          name: 'Bitcoin Sports',
          bio: 'Part of the Bitcoin Indonesia community helping drive Bitcoin adoption in the Bogor region, West Java Province. Initially focused on sports communities (such as basketball) for Bitcoin adoption, and is now expanding outreach to other segments, both offline and online.\n\nX: bitcoinsportsid\nInstagram: bitcoinsports.id\nTikTok: bitcoinsports.id',
        },
        emilio: {
          name: 'Emilio Rivas',
          bio: 'Emilio Rivas is an Events Coordinator at My First Bitcoin, dedicated to empowering individuals through Bitcoin education.\n\nEmilio leads the organization of Bitcoin Unconferences, meetups, and community events, connecting educators, builders, and Bitcoiners around the world.',
        },
        asadid: {
          name: 'Asadid',
          bio: 'Cat-loving Bitcoiner who actively teaches the technical side of self-custody, nodes, and more.',
        },
        zed: {
          name: 'Bang Zed',
          bio: 'Bitcoiner from Aceh who is active in the Bitcoin Indonesia community and helped lead sats-based donation efforts for Aceh flood victims, showcasing how Bitcoin can be used for fast and direct humanitarian aid.',
        },
        kanda: {
          name: 'Igp Kanda',
          bio: 'National Community Manager of Bitcoin Indonesia. With a degree in Cybersecurity Engineering and various cybersecurity certifications, he currently works at a government institution focused on security and cryptography. Through his technical expertise, Kanda strengthens education within the Bitcoin Indonesia community.',
        },
        aadb: {
          name: 'aadb',
          bio: '@aadbitcoin contributes to Bitcoin education through content, discussions, and learning materials that help people understand Bitcoin in a simpler, more critical, and more responsible way.',
        },
        bull: {
          name: 'Bull',
          bio: 'An active Bitcoiner who actively contributes to and teaches at Bitcoin Indonesia, especially about running nodes, self-custody, the importance of decentralization, and the spirit of "Don\'t trust, verify!"',
        },
        khaf: {
          name: 'Khaf',
          bio: 'Bitcoin Indonesia content creator.',
        },
        esther: {
          name: 'Esther Jesshan',
          bio: 'Esther Jesshan is a Bitcoiner with a big dream of becoming a successful entrepreneur. For her, Bitcoin is not just a digital asset, but a symbol of freedom and a way to express her concerns about the economic system in her country.',
        },
        manyMore: {
          name: 'Many more',
          bio: 'Many more interesting Bitcoiners from all over the world will be joining us at the Unconference. Come meet them, share ideas, and build connections with the global Bitcoin community.',
        },
      },
      zones: {
        title: 'The event areas',
      },
      tickets: {
        title: 'Secure Your Spot',
        subtitle: 'Exclusive Event — Strictly capped at 200 participants',
        alumni: {
          title: 'MFB Alumni',
          earlyBirdPrice: '150.000 IDR',
          badge: 'Special Rate',
          features: [
            'Full day Unconference pass',
            'Graduation ceremony get placard & certificate',
            'Lunch buffet & beverages included',
            '2 stages, 4 workshop areas & 2 discussion spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & building',
          ],
        },
        public: {
          title: 'Public',
          earlyBirdPrice: '300.000 IDR',
          features: [
            'Full day Unconference pass',
            'Lunch buffet & beverages included',
            '2 stages, 4 workshop areas & 2 discussion spots',
            'In Bahasa 🇮🇩 & English 🇬🇧',
            'Learning & building',
          ],
        },
        ctaMegatix: 'Get Ticket Now',
        ctaLearnMore: 'Learn more',
      },
      venue: {
        title: 'The Venue',
        name: 'Rustic Market Forest Tree',
        description: 'A European-style forest escape in the heart of Surabaya. Wood, nature, and Bitcoin.',
        exploreMap: 'See where everything is',
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
          answer: 'Your ticket includes full access to all stages and workshop areas, a lunch buffet with beverages, networking opportunities, and the chance to participate in all Unconference sessions throughout the day.',
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
      graduation: {
        title1: 'Celebrate your ',
        titleHighlight: 'MFB graduation',
        title2: ' together',
        subtitle: 'Get a placard and a certificate if you hold alumni ticket!',
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
        designsBy: 'Designs by',
        allRights: 'All rights reserved.',
        followUs: 'Follow Us',
      },
      alumniSpecial: {
        title: 'Special for Alumni Ticket Holders',
        description: 'In honor that you graduated from a My First Bitcoin Cohort in 2026, you will receive your personal MFB alumni certificate, a MFB plaque, and exclusive MFB Unconference merchandise.',
        note: 'During registration on the event day, participants must present their alumni certificate, either digitally or in physical form to the registration staff. This is required to participate in the graduation ceremony and receive an alumni certificate, plaque, and exclusive alumni merchandise.',
      },
      agenda: {
        title: 'Agenda',
        subtitle: 'A full day of Bitcoin education, connection, and celebration',
        timeHeader: 'Time',
        agendaHeader: 'Agenda',
        items: [
          { time: '09:00 - 12:00 AM', title: 'Registration Opens' },
          { time: '09:00 - 10:30 AM', title: 'Hands-on Corners', desc: 'Everyone is welcome to explore the corners' },
          { time: '10:30 - 10:45 AM', title: 'All Participants Move to Mainstage' },
          { time: '10:45 - 10:55 AM', title: 'Opening Remarks', desc: 'Dimas S. Alfaruq & Patrick Korting' },
          { time: '10:55 - 11:00 AM', title: 'Rundown Overview' },
          { time: '11:00 AM - 12:00 PM', title: 'Unconference Pitching & Building Session', desc: 'Participants are welcome to propose any Bitcoin-related topic and start to form their own discussion groups' },
          { time: '12:00 PM', title: 'Registration Closes' },
          { time: '12:00 - 12:30 PM', title: 'Real-World Bitcoin: Supporting Communities During Disaster', desc: 'Bang Zed, Bitcoin Indonesia Aceh Community Leader' },
          { time: '12:30 - 02:00 PM', title: 'Lunch Break & Buffet' },
          { time: '02:00 - 04:00 PM', title: 'Unconference Session & Breakout Sessions', desc: 'Groups are starting their breakout discussions, and the PICs will join to provide guidance' },
          { time: '02:00 - 04:00 PM', title: 'Hands-on Corners Introductions', desc: '1. Self-custody, Node, Mining\n2. NoSTR, Art & Social Media\n3. Community & MFB\n4. Introvert Bitcoiner Zone' },
          { time: '04:00 - 05:30 PM', title: 'Women & Bitcoin + Hands-on Corners Reopen', desc: "Women-Only Discussion: Bitcoin Through a Woman's Perspective" },
          { time: '05:30 - 06:00 PM', title: 'Breaktime' },
          { time: '06:00 - 06:05 PM', title: 'Unconference Survey Session' },
          { time: '06:05 - 06:45 PM', title: 'Bitcoin Hardware Wallets Giveaway Quiz Session' },
          { time: '06:45 - 07:00 PM', title: 'Closing Remarks' },
          { time: '07:00 - 08:00 PM', title: 'Graduation Party', desc: 'For MFB Diploma Graduates Only' },
        ],
      },
    },
  },
  id: {
    translation: {
      nav: {
        tickets: 'Tiket',
        experience: 'Pengalaman',
        speakers: 'Pembicara',
        eventAreas: 'Area Acara',
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
      sanSalvador: {
        title1: 'MFB Unconference',
        title2: ' di San Salvador',
      },
      video: {
        headline1: 'Ide dan Konsep',
        headline2: ' di balik Unconference',
        description: 'Belajar dari John Dennehy, pendiri My First Bitcoin',
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
      women: {
        title: 'Wanita dan Bitcoin',
        subtitle: 'Ruang yang aman dan nyaman untuk perempuan terhubung, belajar, dan berkembang di Bitcoin.',
        description: 'Ruang hangat untuk perempuan di My First Bitcoin Unconference 2026 untuk duduk bareng, ngobrol, berbagi cerita, dan mengenal Bitcoin dengan cara yang lebih santai dan dekat. Tidak perlu jadi expert \u2014 cukup datang, bertemu teman baru, dan menikmati percakapan tentang uang, masa depan, dan kehidupan dari sudut pandang perempuan.',
      },
      attendees: {
        title: 'Siapa Yang Akan Ada Disana?',
        subtitle: 'Temui beberapa Bitcoiner yang akan hadir di Unconference',
        dimas: {
          name: 'Dimas',
          bio: 'Dimas Surya Alfaruq adalah Co-Founder Bitcoin Indonesia dan Bitcoin House Bali, dua inisiatif yang berperan penting dalam mendorong edukasi dan adopsi Bitcoin di Indonesia. Sebagai podcaster, YouTuber, pendidik, dan tokoh aktif di komunitas Bitcoin Indonesia, Dimas telah menginspirasi ribuan orang untuk memahami Bitcoin, kedaulatan finansial, dan masa depan uang. Melalui konten, acara komunitas, dan berbagai program edukasi, ia berkomitmen untuk membantu membangun generasi Indonesia yang lebih melek finansial dan siap menghadapi era ekonomi digital.',
        },
        bhBali: {
          name: 'Bitcoin House Bali',
          bio: 'Bitcoin House Bali telah berkembang menjadi salah satu pusat komunitas Bitcoin paling aktif di Asia. Berlokasi di Canggu, tempat ini menjadi rumah bagi para Bitcoiner, pengusaha, pengembang, pendidik, dan pemula yang ingin belajar lebih dalam tentang Bitcoin. Melalui berbagai meetup, workshop, konferensi, dan acara internasional, Bitcoin House Bali membangun komunitas yang kuat dan berperan penting dalam membantu ribuan orang memahami serta menggunakan Bitcoin dalam kehidupan sehari-hari.',
        },
        bhBogor: {
          name: 'Bitcoin House Bogor',
          bio: 'Bitcoin House Bogor memperluas misi edukasi dan pembangunan komunitas Bitcoin ke luar Bali, menciptakan ruang yang ramah untuk belajar, berdiskusi, dan berkolaborasi. Dengan menghubungkan komunitas lokal dengan gerakan Bitcoin Indonesia yang lebih luas, tempat ini membantu membuat edukasi Bitcoin lebih mudah diakses sekaligus mempererat hubungan antara Bitcoiner, pengusaha, atlet muda, pelajar, dan keluarga.',
        },
        patrick: {
          name: 'Patrick Korting',
          bio: 'Patrick Korting adalah Director of Communications & Events di My First Bitcoin, salah satu organisasi edukasi Bitcoin terkemuka di dunia. Melalui komunikasi strategis, kemitraan global, dan berbagai acara edukasi, Patrick membantu memperluas akses terhadap pendidikan Bitcoin yang terbuka dan mudah diakses oleh siapa saja. Fokus utamanya adalah membangun jaringan, memperkuat komunitas, dan membantu lebih banyak orang memahami Bitcoin melalui pendekatan yang inklusif dan berbasis komunitas.',
        },
        ahPrayo: {
          name: 'AH Prayo',
          bio: 'Bitcoin antusias yang ikut serta sebagai penggerak sirkular ekonomi pada ekosistem Bitcoin Indonesia.',
        },
        baskoro: {
          name: 'Baskoro Nugroho',
          bio: 'Programmer dan Bitcoiners yang aktif berkontribusi dan mengajar di Bitcoin Indonesia Surabaya.',
        },
        chresna: {
          name: 'Chresna Sanubari',
          bio: 'Bitcoiners yang aktif berkontribusi dan mengajar di Bitcoin Indonesia Surabaya terutama tentang mining.',
        },
        bitcoinSports: {
          name: 'Bitcoin Sports',
          bio: 'Bagian dari komunitas Bitcoin Indonesia yang turut mendorong adopsi Bitcoin di wilayah Bogor, Provinsi Jawa Barat. Awalnya, berfokus pada sektor olahraga saja (seperti bola basket) untuk adopsi Bitcoin, saat ini sedang memperluas jangkauan ke segmen lain, baik secara offline maupun online.\n\nX: bitcoinsportsid\nInstagram: bitcoinsports.id\nTikTok: bitcoinsports.id',
        },
        emilio: {
          name: 'Emilio Rivas',
          bio: 'Emilio Rivas adalah Events Coordinator di My First Bitcoin, yang berdedikasi untuk memberdayakan individu melalui edukasi Bitcoin.\n\nEmilio memimpin penyelenggaraan Bitcoin Unconferences, meetups, dan acara komunitas, menghubungkan para pendidik, builder, dan Bitcoiners di seluruh dunia.',
        },
        asadid: {
          name: 'Asadid',
          bio: 'Bitcoiners Pencinta Kucing yang aktif mengajarkan sisi teknis self-custody, node, dll.',
        },
        zed: {
          name: 'Bang Zed',
          bio: 'Bitcoiner asal Aceh yang aktif di komunitas Bitcoin Indonesia dan turut memimpin penggalangan donasi berbasis sats untuk korban banjir Aceh, sebagai contoh penggunaan Bitcoin untuk bantuan kemanusiaan yang cepat dan langsung.',
        },
        kanda: {
          name: 'Igp Kanda',
          bio: 'Community Manager Bitcoin Indonesia Nasional. Berbekal gelar di Cybersecurity Engineering dan berbagai sertifikasi keamanan siber, ia kini bekerja di lembaga pemerintah yang berfokus pada keamanan dan kriptografi. Dengan keahlian teknisnya, Kanda memperkuat edukasi di komunitas Bitcoin Indonesia.',
        },
        aadb: {
          name: 'aadb',
          bio: '@aadbitcoin berkontribusi dalam edukasi Bitcoin melalui konten, diskusi, dan materi pembelajaran yang membantu masyarakat memahami Bitcoin secara lebih sederhana, kritis, dan bertanggung jawab.',
        },
        bull: {
          name: 'Bull',
          bio: 'Bitcoiner yang aktif berkontribusi dan mengajar di Bitcoin Indonesia terutama tentang running node, self custody, pentingnya desentralisasi, serta semangat "don\'t trust, verify!"',
        },
        khaf: {
          name: 'Khaf',
          bio: 'Konten kreator Bitcoin Indonesia.',
        },
        esther: {
          name: 'Esther Jesshan',
          bio: 'Esther Jesshan, seorang Bitcoiner dengan mimpi besar menjadi entrepreneur sukses. Baginya, Bitcoin bukan sekadar aset digital, tetapi simbol kebebasan dan cara menyuarakan keresahan terhadap sistem ekonomi di negaranya.',
        },
        manyMore: {
          name: 'Dan banyak lagi',
          bio: 'Banyak Bitcoiner menarik dari seluruh dunia akan bergabung bersama kami di Unconference. Datang dan temui mereka, berbagi ide, serta bangun koneksi dengan komunitas Bitcoin global.',
        },
      },
      zones: {
        title: 'Area acara',
      },
      tickets: {
        title: 'Amankan Tempatmu',
        subtitle: 'Acara Eksklusif — Terbatas hanya 200 peserta',
        alumni: {
          title: 'Alumni MFB',
          earlyBirdPrice: '150.000 IDR',
          badge: 'Harga Spesial',
          features: [
            'Akses Unconference sehari penuh',
            'Perayaan wisuda dapat plakat & sertifikat',
            'Lunch buffet & minuman termasuk',
            '2 panggung, 4 area workshop & 2 spot diskusi',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Learning & building',
          ],
        },
        public: {
          title: 'Umum',
          earlyBirdPrice: '300.000 IDR',
          features: [
            'Akses Unconference sehari penuh',
            'Lunch buffet & minuman termasuk',
            '2 panggung, 4 area workshop & 2 spot diskusi',
            'Dalam Bahasa 🇮🇩 & Inggris 🇬🇧',
            'Learning & building',
          ],
        },
        ctaMegatix: 'Dapatkan Tiket Sekarang',
        ctaLearnMore: 'Pelajari lebih lanjut',
      },
      venue: {
        title: 'Lokasi Acara',
        name: 'Rustic Market Forest Tree',
        description: 'Suasana hutan bergaya Eropa di jantung Surabaya. Kayu, alam, dan Bitcoin.',
        exploreMap: 'Lihat di mana semuanya berada',
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
          answer: 'Tiket Anda termasuk akses penuh ke semua panggung dan area workshop, lunch buffet dengan minuman, kesempatan networking, dan kesempatan untuk berpartisipasi dalam semua sesi Unconference sepanjang hari.',
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
      graduation: {
        title1: 'Rayakan wisuda ',
        titleHighlight: 'MFBmu',
        title2: ' bersama!',
        subtitle: 'Dapatkan plakat dan sertifikat jika kamu memiliki tiket alumni!',
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
        designsBy: 'Desain oleh',
        allRights: 'Hak cipta dilindungi.',
        followUs: 'Ikuti Kami',
      },
      alumniSpecial: {
        title: 'Spesial untuk Pemegang Tiket Alumni',
        description: 'Sebagai penghormatan karena kamu telah lulus dari My First Bitcoin Cohort di tahun 2026, kamu akan menerima sertifikat alumni MFB pribadi, plakat MFB, dan merchandise eksklusif MFB Unconference.',
        note: 'Saat registrasi di hari acara, peserta wajib menunjukkan sertifikat alumni, baik dalam bentuk digital maupun fisik, kepada staf registrasi. Hal ini diperlukan untuk mengikuti perayaan wisuda dan menerima sertifikat alumni, plakat, serta merchandise alumni eksklusif.',
      },
      agenda: {
        title: 'Agenda',
        subtitle: 'Satu hari penuh edukasi Bitcoin, koneksi, dan perayaan',
        timeHeader: 'Waktu',
        agendaHeader: 'Agenda',
        items: [
          { time: '09:00 - 12:00', title: 'Registrasi Dibuka' },
          { time: '09:00 - 10:30', title: 'Hands-on Corners', desc: 'Semua orang dipersilakan menjelajahi corner' },
          { time: '10:30 - 10:45', title: 'Semua Peserta Menuju Mainstage' },
          { time: '10:45 - 10:55', title: 'Sambutan Pembukaan', desc: 'Dimas S. Alfaruq & Patrick Korting' },
          { time: '10:55 - 11:00', title: 'Rundown Overview' },
          { time: '11:00 - 12:00', title: 'Sesi Pitching & Building Unconference', desc: 'Peserta dipersilakan mengusulkan topik Bitcoin dan membentuk grup diskusi mereka sendiri' },
          { time: '12:00', title: 'Registrasi Ditutup' },
          { time: '12:00 - 12:30', title: 'Bitcoin Nyata: Mendukung Komunitas Saat Bencana', desc: 'Bang Zed, Community Leader Bitcoin Indonesia Aceh' },
          { time: '12:30 - 14:00', title: 'Istirahat Makan Siang & Buffet' },
          { time: '14:00 - 16:00', title: 'Sesi Unconference & Breakout', desc: 'Grup memulai diskusi breakout, dan PIC akan bergabung untuk memberikan panduan' },
          { time: '14:00 - 16:00', title: 'Pengenalan Hands-on Corners', desc: '1. Self-custody, Node, Mining\n2. NoSTR, Art & Social Media\n3. Community & MFB\n4. Introvert Bitcoiner Zone' },
          { time: '16:00 - 17:30', title: 'Women & Bitcoin + Hands-on Corners Dibuka Kembali', desc: 'Diskusi Khusus Perempuan: Bitcoin dari Perspektif Perempuan' },
          { time: '17:30 - 18:00', title: 'Waktu Istirahat' },
          { time: '18:00 - 18:05', title: 'Sesi Survei Unconference' },
          { time: '18:05 - 18:45', title: 'Sesi Kuis Giveaway Bitcoin Hardware Wallet' },
          { time: '18:45 - 19:00', title: 'Sambutan Penutup' },
          { time: '19:00 - 20:00', title: 'Perayaan Wisuda', desc: 'Khusus untuk MFB Diploma Graduates' },
        ],
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
