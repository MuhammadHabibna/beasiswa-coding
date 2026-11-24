export interface ProgramData {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    quota: string;
    tags: string[];
    features: string[];
    ctaLink: string;
    detailsLink: string;
    faqLink: string;
    image: string;
    deadline: string;
    deadlineISO: string;
    tracks: {
        id: string;
        name: string;
        category: string;
        target: string;
        summary: string;
        badgeColor: string;
        courses: {
            category: string;
            items: string[];
        }[];
        bonus?: string[];
        nonTechnical?: string[];
        capstone?: string;
    }[];
    timeline: {
        step: number;
        title: string;
        date: string;
        description: string;
        badge?: string;
    }[];
    selectionSteps: {
        step: number;
        title: string;
        description: string;
        points?: string[];
    }[];
    requirements: {
        general: string[];
        tracks: {
            trackName: string;
            target: string;
            criteria: string[];
        }[];
        device: string[];
    };
    gamification: {
        referral: {
            title: string;
            role: string;
            description: string;
            prizes: string[];
            steps: string[];
            deadline: string;
        };
        twibbon: {
            title: string;
            link: string;
            prize: string;
            hashtag: string;
            steps: string[];
            deadline: string;
        };
    };
}

export const pijak2027: ProgramData = {
    title: "Pijak 2027",
    subtitle: "in collaboration with IBM SkillsBuild",
    badge: "Kuota 60.000 Peserta",
    quota: "60.000 Talenta Digital Indonesia",
    description: "Program beasiswa komprehensif dari IBM dan Dicoding untuk mencetak AI-Native Web Developer handal melalui penguasaan Artificial Intelligence, Prompting, Vibe Coding, hingga IBM Agentic Coding.",
    tags: ["100% Gratis", "Online", "AI-Native Web Dev", "Sertifikasi IBM & Dicoding"],
    features: [
        "Beasiswa 100% Gratis secara Online tanpa biaya apapun",
        "Kurikulum Berstandar Industri Global IBM SkillsBuild & Dicoding",
        "Akses Materi Seumur Hidup ke Course AI & Web Development",
        "Sertifikat Kompetensi Resmi setelah Lulus Beasiswa Intensif",
        "Bimbingan & Mentoring Teknis / Non-Teknis bersama Expert IT",
        "Portofolio Nyata Melalui Capstone Project Berkelompok"
    ],
    ctaLink: "https://www.dicoding.com/pijak/registration?ref=4086292",
    detailsLink: "#path",
    faqLink: "http://dicoding.id/pijak2027-faq",
    image: "/images/pijak_banner_2027.jpg",
    deadline: "31 Desember 2026",
    deadlineISO: "2026-12-31T23:59:59+07:00",
    tracks: [
        {
            id: "pemula",
            name: "Beasiswa Pemula",
            category: "Fondasi Esensial",
            target: "Seluruh Pendaftar yang Memenuhi Syarat Administrasi",
            summary: "Membekali Anda dengan pemahaman dasar esensial agar siap melangkah menuju karier di bidang Artificial Intelligence.",
            badgeColor: "blue",
            courses: [
                {
                    category: "IBM SkillsBuild – AI Course",
                    items: [
                        "Mastering the Art of Prompting",
                        "Turn Ideas Into Prototypes With Vibe Coding",
                        "AI Ethics",
                        "How IBM Bob and AI Tools Are Changing the Way Solutions Are Built",
                        "AI Literacy Plan",
                        "Introduction to Generative AI",
                        "AI Fundamentals: Language and Vision in AI Plan"
                    ]
                },
                {
                    category: "IBM SkillsBuild – Career Development Course",
                    items: [
                        "Lifelong Professional Skills Plan"
                    ]
                }
            ]
        },
        {
            id: "intensif",
            name: "Beasiswa Intensif",
            category: "Program Lanjutan Eksklusif",
            target: "Lulusan Terpilih Beasiswa Pemula (Khusus Jalur Siswa SMK / Mahasiswa Vokasi Aktif)",
            summary: "Kurikulum komprehensif teknis dan non-teknis berstandar global untuk membangun aplikasi web modern yang didukung IBM Agentic Coding.",
            badgeColor: "purple",
            courses: [
                {
                    category: "Kelas Teknis Web Development",
                    items: [
                        "Belajar Dasar Pemrograman Web",
                        "Belajar Dasar Pemrograman JavaScript",
                        "Belajar Membuat Front-End Web untuk Pemula",
                        "Belajar Membuat Aplikasi Web dengan React",
                        "Belajar Fundamental Aplikasi Web dengan React",
                        "Belajar Back-End Pemula dengan JavaScript",
                        "IBM SkillsBuild: Web Development Fundamentals"
                    ]
                }
            ],
            bonus: [
                "Belajar Fundamental Back-End dengan JavaScript",
                "Menjadi React Web Developer Expert"
            ],
            nonTechnical: [
                "Growth Mindset and Personal Development: Establish Your All Star Potentials",
                "Power Up Your Productivity: Strategies for Time and Energy Management",
                "Navigating Change: The Power of Adaptability and Resilience",
                "Essential Innovation & Collaboration: Skills for Entry-Level Success",
                "Public Speaking Mastery: A Guide to Effective Communication and Networking",
                "Personal Branding & Interview Preparation: Be The Best Version of Yourself"
            ],
            capstone: "Sebagai tahapan akhir penyelesaian program beasiswa intensif, peserta diwajibkan menyelesaikan Tugas Akhir Berkelompok (Capstone Project) berstandar industri."
        },
        {
            id: "progresif",
            name: "Beasiswa Progresif",
            category: "Jalur Pembelajaran Mandiri (Self-Paced)",
            target: "Peserta Terpilih Jalur Umum & Profesional",
            summary: "Dirancang bagi umum dan profesional untuk meningkatkan produktivitas serta kecakapan rekayasa perangkat lunak berbasis AI secara mandiri.",
            badgeColor: "amber",
            courses: [
                {
                    category: "Kelas Teknis AI & Modern Web",
                    items: [
                        "AI Praktis untuk Produktivitas",
                        "Belajar Penggunaan Generative AI",
                        "Prompt Engineering untuk Software Developer",
                        "Belajar Membuat Aplikasi Web dengan React"
                    ]
                }
            ]
        }
    ],
    timeline: [
        {
            step: 1,
            title: "Periode Pendaftaran & Seleksi Administrasi",
            date: "12 November – 31 Desember 2026",
            description: "Registrasi online, pengisian formulir, penandatanganan komitmen, serta penyelesaian kelas prasyarat di platform IBM SkillsBuild.",
            badge: "SEDANG DIBUKA"
        },
        {
            step: 2,
            title: "Pengumuman Peserta Terpilih",
            date: "Pertengahan Januari 2027",
            description: "Pengumuman peserta yang lolos seleksi Beasiswa Intensif (Jalur Vokasi) dan Beasiswa Progresif (Jalur Umum/Profesional)."
        },
        {
            step: 3,
            title: "Periode Belajar Beasiswa Intensif & Progresif",
            date: "Februari – Juni 2027",
            description: "Pembelajaran intensif kurikulum web dev & IBM Agentic Coding, kelas soft skills, mentoring rutin bersama instruktur, dan pengerjaan Capstone Project."
        },
        {
            step: 4,
            title: "Kelulusan & Penerbitan Transkrip Nilai",
            date: "Juli 2027",
            description: "Pemberian transkrip nilai akhir, sertifikat kompetensi resmi, dan showcase hasil karya proyek peserta."
        }
    ],
    selectionSteps: [
        {
            step: 1,
            title: "Daftar & Lengkapi Formulir",
            description: "Login atau buat akun Dicoding Anda, klik 'Daftar Sekarang', lengkapi formulir pendaftaran dengan data valid, dan unduh Surat Komitmen yang dibuat otomatis oleh sistem.",
            points: [
                "Login/Registrasi akun Dicoding dan verifikasi email",
                "Isi data diri dan latar belakang pendidikan secara jujur",
                "Unduh Surat Komitmen lalu bubuhkan tanda tangan basah atau digital"
            ]
        },
        {
            step: 2,
            title: "Selesaikan Kelas IBM SkillsBuild",
            description: "Masuk atau buat akun IBM SkillsBuild yang terdaftar pada organisasi Dicoding, kemudian selesaikan course mandiri wajib sebagai syarat kelulusan administrasi.",
            points: [
                "Akun IBM SkillsBuild terhubung ke organisasi Dicoding",
                "Menyelesaikan course AI & Professional Skills yang ditentukan"
            ]
        },
        {
            step: 3,
            title: "Tes Penilaian & Unggah Surat Komitmen",
            description: "Khusus pendaftar yang eligible mengikuti Beasiswa Intensif, Anda diwajibkan menyelesaikan tes penilaian dan mengunggah Surat Komitmen.",
            points: [
                "Tes Penilaian meliputi: General, Kemampuan Teknis, dan Kepribadian",
                "Unggah berkas Surat Komitmen bertanda tangan ke dashboard pendaftaran"
            ]
        },
        {
            step: 4,
            title: "Pengumuman & Konfirmasi Penawaran",
            description: "Peserta yang lolos seleksi akan menerima notifikasi penawaran resmi via email dan dashboard Dicoding.",
            points: [
                "Wajib melakukan konfirmasi penawaran dalam waktu 48 jam",
                "Lengkapi Form Data Cohort sebagai verifikasi akhir status kepesertaan",
                "Selamat memulai pembelajaran Beasiswa Pijak 2027!"
            ]
        }
    ],
    requirements: {
        general: [
            "Warga Negara Indonesia (WNI) yang dibuktikan dengan identitas valid.",
            "Tidak sedang aktif mengikuti program beasiswa lain yang diselenggarakan oleh Dicoding.",
            "Berkomitmen untuk mengikuti dan menyelesaikan seluruh rangkaian program belajar hingga tuntas.",
            "Memiliki motivasi tinggi untuk mengembangkan karier di bidang Artificial Intelligence dan Software Development."
        ],
        tracks: [
            {
                trackName: "Jalur Siswa / Mahasiswa Vokasi (Beasiswa Intensif)",
                target: "Murid SMK dan Mahasiswa Vokasi (D1 / D2 / D3 / D4) di seluruh Indonesia",
                criteria: [
                    "Berstatus murid atau mahasiswa vokasi aktif di institusi pendidikan terdaftar di Indonesia",
                    "Bersedia mengikuti bimbingan intensif dan menyelesaikan Capstone Project berkelompok",
                    "Eligible untuk menerima kurikulum intensif, mentoring expert, dan sertifikat kompetensi"
                ]
            },
            {
                trackName: "Jalur Umum & Profesional (Beasiswa Progresif)",
                target: "Masyarakat umum, fresh graduate, atau profesional yang ingin upskilling",
                criteria: [
                    "Terbuka untuk umum atau yang tidak sedang menempuh pendidikan formal vokasi",
                    "Fokus pada pembelajaran mandiri (self-paced) untuk peningkatan produktivitas AI & React Web Dev"
                ]
            }
        ],
        device: [
            "Perangkat komputer atau laptop pribadi dengan prosesor minimal setara Intel Core i3 / AMD Ryzen 3.",
            "RAM / Memory minimal 4 GB (Sangat direkomendasikan 8 GB atau lebih tinggi).",
            "Sistem Operasi: Windows 10/11 (64-bit), macOS, atau Linux.",
            "Koneksi internet yang stabil untuk mengakses materi interaktif, video, dan live session.",
            "Aplikasi web browser modern (Google Chrome, Firefox, Microsoft Edge, dsb)."
        ]
    },
    gamification: {
        referral: {
            title: "Pijak Pathfinder Challenge",
            role: "Partner Belajar bagi Talenta Baru di Dunia AI",
            description: "Ajak rekan, sahabat, atau komunitas Anda untuk mendaftar dan kawal mereka hingga menyelesaikan minimal 1 course di IBM SkillsBuild. Dapatkan hadiah bernilai puluhan juta rupiah bagi 25 peraih posisi teratas!",
            prizes: [
                "1x Apple MacBook Neo A18 Pro 13 Inch (Juara 1)",
                "1x Samsung Galaxy Tab A11",
                "2x Lenovo Monitor L24",
                "5x SONY WH-CH520 Wireless Headphone",
                "5x Logitech C270 HD Webcam",
                "11x Logitech H150 Stereo Headset"
            ],
            steps: [
                "Daftar pada program di dicoding.com/pijak",
                "Dapatkan link referral unik Anda di dashboard",
                "Bagikan ke rekan & pastikan mereka menyelesaikan minimal 1 course di IBM SkillsBuild (bukan hanya daftar)",
                "Bawa minimal 50 PathMate valid untuk masuk hitungan Leaderboard"
            ],
            deadline: "12 November – 31 Desember 2026 (Pengumuman Januari 2027)"
        },
        twibbon: {
            title: "Twibbon Challenge 2027",
            link: "https://twb.nz/pijak2027",
            prize: "Tokopedia Gift Card Total Rp1.000.000 untuk Top 10 Engagement Tertinggi",
            hashtag: "#Pijak2027 #Pijak2027TwibbonChallenge #TumbuhBersamaPijak",
            steps: [
                "Unduh template twibbon resmi di twb.nz/pijak2027 dan pasang foto terbaik Anda",
                "Unggah ke Instagram dengan 3 slide: Slide 1 Foto Twibbon, Slide 2–3 Info Program",
                "Tulis caption inspiratif alasan ingin menjadi talenta IT bersama Pijak 2027",
                "Gunakan hashtag resmi dan submit link postingan ke formulir pendaftaran"
            ],
            deadline: "12 November – 31 Desember 2026"
        }
    }
};

// Export backward compatibility object if needed
export const currentProgram = pijak2027;

export interface CatalogProgram {
    id: string;
    title: string;
    subtitle: string;
    partner: string;
    status: 'open' | 'upcoming';
    statusBadge: string;
    statusColor: 'emerald' | 'amber' | 'blue' | 'purple';
    quota: string;
    description: string;
    tags: string[];
    features: string[];
    mandatoryNotice?: string;
    guideImage?: string;
    guideCaption?: string;
    ctaLink: string;
    ctaText: string;
    detailsLink: string;
    image: string;
    deadline: string;
    isFeatured?: boolean;
}

export const catalogPrograms: CatalogProgram[] = [
    {
        id: "pijak2027",
        title: "Pijak 2027",
        subtitle: "in collaboration with IBM SkillsBuild",
        partner: "IBM SkillsBuild & Dicoding",
        status: "open",
        statusBadge: "Sedang Dibuka",
        statusColor: "emerald",
        quota: "60.000 Kuota Peserta",
        description: "Beasiswa komprehensif untuk mencetak AI-Native Web Developer handal melalui penguasaan Artificial Intelligence, Prompting, Vibe Coding, hingga IBM Agentic Coding.",
        tags: ["Sedang Buka", "AI-Native Web Dev", "100% Gratis", "Sertifikasi IBM"],
        mandatoryNotice: "WAJIB MENYELESAIKAN minimal 1 (satu) course di platform IBM SkillsBuild agar pendaftaran terhitung valid & eligible.",
        guideImage: "/images/pijak_misi_guide.jpg",
        guideCaption: "Contoh tampilan dashboard: Selesaikan minimal 1 course di IBM SkillsBuild (Prompting, Vibe Coding, AI Ethics, dsb)",
        features: [
            "WAJIB: Selesaikan min. 1 course di IBM SkillsBuild",
            "Beasiswa 100% Gratis secara Online",
            "Kurikulum Berstandar Global IBM & Dicoding",
            "Sertifikat Kompetensi Resmi Industri"
        ],
        ctaLink: "https://www.dicoding.com/pijak/registration?ref=4086292",
        ctaText: "Daftar Beasiswa Pijak",
        detailsLink: "#tentang",
        image: "/images/pijak_banner_2027.jpg",
        deadline: "31 Desember 2026",
        isFeatured: true
    },
    {
        id: "dbs-aicamp",
        title: "AI Camp 2026",
        subtitle: "powered by DBS Foundation",
        partner: "DBS Foundation & Dicoding",
        status: "open",
        statusBadge: "Sedang Dibuka",
        statusColor: "emerald",
        quota: "SMK, Mahasiswa & Umum",
        description: "Program beasiswa 100% gratis dari DBS Foundation & Dicoding untuk mencetak AI Engineer & Data Scientist melalui Microlearning Bitt, Capstone Project, dan Hackathon.",
        tags: ["Sedang Buka", "AI & Data Science", "Microlearning Bitt", "Konversi SKS"],
        mandatoryNotice: "WAJIB MENYELESAIKAN Misi 1 di platform Bitt by Dicoding (minimal 1 course Financial Literacy dan 1 course Inspirational).",
        guideImage: "/images/dbs_aicamp_misi_guide.png",
        guideCaption: "Contoh tampilan dashboard pemilihan kelas Misi 1 (Financial Literacy & Inspirational Series)",
        features: [
            "WAJIB: Selesaikan Misi 1 (1 Financial Literacy + 1 Inspirational)",
            "Beasiswa 100% Gratis Online & Bersertifikat",
            "Jalur AI Engineer (Mahasiswa) & Data Scientist (SMK)",
            "Mentoring Expert & DBS AI Hackathon"
        ],
        ctaLink: "https://www.dicoding.com/aicamp/registration?ref=4086292",
        ctaText: "Daftar AI Camp DBS",
        detailsLink: "https://go.dbs.com/dbsfaicamp",
        image: "/images/coding_camp_header.png",
        deadline: "31 Januari 2027 (SMK: 31 Des)",
        isFeatured: false
    },
    {
        id: "aws-ai",
        title: "AWS AI Academy 2026",
        subtitle: "Amazon Web Services",
        partner: "Amazon Web Services (AWS) & Dicoding",
        status: "upcoming",
        statusBadge: "Segera Hadir",
        statusColor: "amber",
        quota: "40.000 Kuota Peserta",
        description: "Program beasiswa untuk meningkatkan kompetensi dalam bidang Cloud Computing, Machine Learning, dan Generative AI bersama kurikulum global AWS.",
        tags: ["Segera Hadir", "Cloud & AI", "AWS Official", "Free Online"],
        features: [
            "Kurikulum Standar Industri Global AWS",
            "Materi Machine Learning & Generative AI",
            "Cloud Sandbox & Praktik Terbimbing",
            "Sertifikat Kelulusan Resmi Industri"
        ],
        ctaLink: "#tentang",
        ctaText: "Lihat Beasiswa Aktif",
        detailsLink: "#programs",
        image: "/images/aws-header.jpg",
        deadline: "Batch Berikutnya",
        isFeatured: false
    },
    {
        id: "metc",
        title: "Microsoft Elevate Training Center",
        subtitle: "Microsoft x Dicoding",
        partner: "Microsoft & Dicoding",
        status: "upcoming",
        statusBadge: "Segera Hadir",
        statusColor: "purple",
        quota: "Akses Terbuka",
        description: "Pelajari teknologi Enterprise Microsoft Cloud & AI Fabric, selesaikan modul belajar mandiri, raih kesempatan mengikuti Hackathon dan tantangan inovasi berhadiah.",
        tags: ["Segera Hadir", "Microsoft Azure", "AI Fabric", "Hackathon"],
        features: [
            "Akses Modul Microsoft & Dicoding",
            "Materi Cloud, Fabric & Artificial Intelligence",
            "Hackathon & Tantangan Inovasi",
            "Sertifikat Kelulusan Resmi"
        ],
        ctaLink: "#tentang",
        ctaText: "Lihat Beasiswa Aktif",
        detailsLink: "#programs",
        image: "/images/metc_header.png",
        deadline: "Batch Berikutnya",
        isFeatured: false
    }
];
