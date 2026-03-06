import type { Project } from "@/types";

export const PROJECTS_PER_PAGE = 6;

export const PROJECT_TEXT_LIMIT = 180;

export const projects: Project[] = [
    {
        title: "Internal Finance Tool (IFIOL)",
        slug: "internal-finance-tool",
        description: "An internal financial management system used to handle reimbursement, cash advance, purchase orders, subscriptions, and vendor management with structured approval workflows and centralized tracking.",
        role: "Frontend Developer",
        tech: ["NextJS", "Typescript", "Redux", "Redux Thunk", "Material UI", "Jest", "React Testing Library"],
        features: [
            "Reimbursement, cash advance, and purchase order handling",
            "Subscription and vendor management with structured workflows",
            "Centralized financial tracking and approval system"
        ],
        contributions: [
            "Contributed to system stability and scalability by fixing bugs",
            "Optimizing existing code for better performance",
            "Implementing new features to enhance internal operations",
            "Adding unit tests with Jest & RTL to improve overall reliability"
        ],
        demoUrl: "https://bit.ly/portfolio-ifiol",
        sourceUrl: null,
        createdAt: "2025-03-01",
        id_content: {
            title: "Alat Keuangan Internal (IFIOL)",
            description: "Sistem manajemen keuangan internal yang digunakan untuk menangani reimbursement, uang muka (cash advance), pesanan pembelian (purchase order), langganan, dan manajemen vendor dengan alur kerja persetujuan yang terstruktur dan pelacakan terpusat.",
            role: "Frontend Developer",
            features: [
                "Penanganan reimbursement, uang muka, dan pesanan pembelian",
                "Manajemen langganan dan vendor dengan alur kerja terstruktur",
                "Sistem pelacakan dan persetujuan keuangan terpusat"
            ],
            contributions: [
                "Berkontribusi pada stabilitas dan skalabilitas sistem dengan memperbaiki bug",
                "Mengoptimalkan kode yang ada untuk performa yang lebih baik",
                "Mengimplementasikan fitur baru untuk meningkatkan operasional internal",
                "Menambahkan unit test dengan Jest & RTL untuk meningkatkan reliabilitas sistem"
            ]
        }
    },
    {
        title: "Belajar Korea - Learning Management System",
        slug: "belajar-korea-lms",
        description:
            "A hybrid web and mobile-based Learning Management System dedicated to helping students learn Korean for free, with additional premium features. The platform offers video and PDF-based lessons from professional mentors, gamified exercises, learning history tracking, and certification upon module completion. Admin dashboard enables content management, system monitoring, and payment tracking.",
        role: "Fullstack Developer",
        tech: [
            "Laravel",
            "MySQL",
            "TailwindCSS",
            "Android (Kotlin)",
            "iOS (Swift)",
        ],
        features: [
            "Multi-platform support: web dashboard for admin, mobile apps for learners",
            "Video and PDF-based lesson modules",
            "Gamification feature with drag-and-drop language puzzles",
            "Learning history tracking per student",
            "Certificate generation after module completion",
            "Admin dashboard with content, user, and payment management",
        ],
        demoUrl: null,
        sourceUrl: null,
        createdAt: "2023-03-10",
        id_content: {
            title: "Belajar Korea - LMS",
            description:
                "Sistem Manajemen Pembelajaran (LMS) berbasis web dan mobile hibrida yang didedikasikan untuk membantu siswa belajar bahasa Korea secara gratis, dengan fitur premium tambahan. Platform ini menawarkan pelajaran berbasis video dan PDF dari mentor profesional, latihan yang digamifikasi, pelacakan riwayat belajar, dan sertifikasi setelah penyelesaian modul. Dashboard admin memungkinkan manajemen konten, pemantauan sistem, dan pelacakan pembayaran.",
            role: "Fullstack Developer",
            features: [
                "Dukungan multi-platform: dashboard web untuk admin, aplikasi mobile untuk pelajar",
                "Modul pelajaran berbasis video dan PDF",
                "Fitur gamifikasi dengan teka-teki bahasa drag-and-drop",
                "Pelacakan riwayat belajar per siswa",
                "Pembuatan sertifikat setelah penyelesaian modul",
                "Dashboard admin dengan manajemen konten, pengguna, dan pembayaran",
            ],
        },
    },
    {
        title: "K-Food - Korean Recipe Platform",
        slug: "k-food-platform",
        description:
            "A web and mobile platform for exploring a wide range of Korean recipes, where users can directly purchase the listed ingredients. The system connects to local outlets for ingredient delivery based on location, initially focused on Jakarta and Yogyakarta regions.",
        role: "Fullstack Developer",
        tech: ["Laravel", "MySQL", "React Native", "TailwindCSS"],
        features: [
            "Recipe listing with detailed steps and photos",
            "Ingredient-to-cart integration for each recipe",
            "Location-based delivery system from nearest partner outlets",
            "Responsive web interface and dedicated mobile apps",
            "Order tracking and delivery notification system",
        ],
        demoUrl: null,
        sourceUrl: null,
        createdAt: "2023-09-05",
        id_content: {
            title: "K-Food - Platform Resep Korea",
            description:
                "Platform web dan mobile untuk menjelajahi berbagai macam resep Korea, di mana pengguna dapat langsung membeli bahan-bahan yang terdaftar. Sistem terhubung ke outlet lokal untuk pengiriman bahan berdasarkan lokasi, awalnya berfokus pada wilayah Jakarta dan Yogyakarta.",
            role: "Fullstack Developer",
            features: [
                "Daftar resep dengan langkah-langkah detail dan foto",
                "Integrasi bahan-ke-keranjang untuk setiap resep",
                "Sistem pengiriman berbasis lokasi dari outlet mitra terdekat",
                "Antarmuka web responsif dan aplikasi mobile khusus",
                "Sistem pelacakan pesanan dan notifikasi pengiriman",
            ],
        },
    },
    {
        title: "SIPBOS - Letter Management System",
        slug: "sipbos-letter-management-system",
        description:
            "A comprehensive web and mobile-based letter management system designed for one of the government's departments to efficiently track and manage official correspondence. The system handles the complete letter lifecycle including creation, editing, disposition, digital signing, and workflow management for internal office operations.",
        role: "Mobile Developer",
        tech: ["Laravel", "MySQL", "React Native", "TailwindCSS"],
        features: [
            "End-to-end letter lifecycle management: creation, editing, disposition, and digital signing",
            "Workflow management for internal department correspondence",
            "Secure digital signature integration",
            "Mobile app for on-the-go access and disposition",
            "Department-based access control and user roles",
        ],
        demoUrl: null,
        sourceUrl: null,
        createdAt: "2024-02-15",
        id_content: {
            title: "SIPBOS - Sistem Tata Kelola Surat",
            description:
                "Sistem tata kelola surat berbasis web dan mobile yang komprehensif yang dirancang untuk salah satu departemen pemerintahan untuk melacak dan mengelola korespondensi resmi secara efisien. Sistem ini menangani siklus hidup surat lengkap termasuk pembuatan, penyuntingan, disposisi, tanda tangan digital, dan manajemen alur kerja untuk operasi kantor internal.",
            role: "Mobile Developer",
            features: [
                "Manajemen siklus hidup surat end-to-end: pembuatan, penyuntingan, disposisi, dan tanda tangan digital",
                "Manajemen alur kerja untuk korespondensi departemen internal",
                "Integrasi tanda tangan digital yang aman",
                "Aplikasi mobile untuk akses dan disposisi di mana saja",
                "Kontrol akses berbasis departemen dan peran pengguna",
            ],
        },
    },
    {
        title: "Rumah Pekerja Indonesia - Job & Hiring Platform",
        slug: "rumah-pekerja-indonesia-job-hiring-platform",
        description:
            "A comprehensive job and hiring platform designed for Indonesian workers seeking employment opportunities abroad in countries like Malaysia, Korea, Japan, and Saudi Arabia. The system connects Indonesian companies with overseas employers while providing workers with tools to apply for jobs and manage their profiles through both web and mobile applications.",
        role: "Fullstack Developer",
        tech: ["Laravel", "MySQL", "React Native", "TailwindCSS"],
        features: [
            "Cross-border job matching between Indonesian and international companies",
            "Worker profile management with CV updates and job applications",
            "Company dashboard for monitoring and tracking worker data",
            "Multi-country support (Malaysia, Korea, Japan, Saudi Arabia, etc.)",
            "Cross-platform access: web interface and mobile applications",
            "Comprehensive worker data tracking and management system",
        ],
        demoUrl: {
            playStore: "https://play.google.com/store/apps/details?id=com.rumahpekerja&hl=id",
            appStore: "https://apps.apple.com/id/app/rumah-pekerja-indonesia/id6453885060"
        },
        sourceUrl: null,
        createdAt: "2024-03-15",
        id_content: {
            title: "Rumah Pekerja Indonesia - Platform Lowongan Kerja",
            description: "Platform lowongan kerja dan perekrutan komprehensif yang dirancang untuk pekerja Indonesia yang mencari peluang kerja di luar negeri seperti Malaysia, Korea, Jepang, dan Arab Saudi. Sistem ini menghubungkan perusahaan Indonesia dengan pemberi kerja di luar negeri sambil menyediakan alat bagi pekerja untuk melamar pekerjaan dan mengelola profil mereka melalui aplikasi web dan mobile.",
            role: "Fullstack Developer",
            features: [
                "Pencocokan pekerjaan lintas batas antara perusahaan Indonesia dan internasional",
                "Manajemen profil pekerja dengan pembaruan CV dan lamaran kerja",
                "Dashboard perusahaan untuk memantau dan melacak data pekerja",
                "Dukungan multi-negara (Malaysia, Korea, Jepang, Arab Saudi, dll.)",
                "Akses lintas platform: antarmuka web dan aplikasi mobile",
                "Sistem pelacakan dan manajemen data pekerja yang komprehensif"
            ]
        }
    },
    {
        title: "EntrepreneurHub - Webinar Platform",
        slug: "entrepreneurhub",
        description: "A comprehensive web-based platform for managing webinar and seminar events organized by the Ministry of Cooperatives and SMEs of Indonesia. The system facilitates event management, participant registration, data collection, email notifications, and provides dedicated dashboards for superadmins and department admins to effectively handle event participants and deliver information and socialization to UMKM (Micro, Small, and Medium Enterprises).",
        role: "Project Manager & Fullstack Developer",
        tech: ["Laravel", "MySQL", "TailwindCSS"],
        features: [
            "Event Management System for webinars and seminars",
            "Participant registration and data collection",
            "Automated email notification system",
            "Multi-level dashboard (Superadmin and Department Admin)",
            "UMKM information and socialization platform",
            "Real-time participant management",
            "Event analytics and reporting"
        ],
        demoUrl: "https://ehub.kemenkopukm.go.id/",
        sourceUrl: null,
        createdAt: "2024-02-10",
        id_content: {
            title: "EntrepreneurHub - Platform Webinar",
            description: "Platform berbasis web komprehensif untuk mengelola acara webinar dan seminar yang diselenggarakan oleh Kementerian Koperasi dan UKM Indonesia. Sistem ini memfasilitasi manajemen acara, pendaftaran peserta, pengumpulan data, notifikasi email, dan menyediakan dashboard khusus untuk superadmin dan admin departemen untuk menangani peserta acara secara efektif serta menyampaikan informasi dan sosialisasi kepada UMKM.",
            role: "Project Manager & Fullstack Developer",
            features: [
                "Sistem Manajemen Acara untuk webinar dan seminar",
                "Pendaftaran peserta dan pengumpulan data",
                "Sistem notifikasi email otomatis",
                "Dashboard multi-level (Superadmin dan Admin Departemen)",
                "Platform informasi dan sosialisasi UMKM",
                "Manajemen peserta secara real-time",
                "Analitik dan pelaporan acara"
            ]
        }
    },
    {
        title: "TJL - Company Profile & Job Platform",
        slug: "tjl",
        description: "A comprehensive company profile and job platform web application designed to connect overseas companies with skilled workers. The platform features company profile management, job posting capabilities, and applicant management system, facilitating seamless recruitment processes for international job opportunities.",
        role: "Lead Developer",
        tech: ["Laravel", "Bootstrap", "MySQL"],
        features: [
            "Company profile management system",
            "Job posting and management platform",
            "Applicant tracking and management",
            "International job opportunity listings",
            "User-friendly recruitment interface",
            "Multi-company dashboard",
            "Application and CV management"
        ],
        demoUrl: "https://tjl.co.id/",
        sourceUrl: null,
        createdAt: "2024-01-20",
        id_content: {
            title: "TJL - Profil Perusahaan & Platform Kerja",
            description: "Aplikasi web profil perusahaan dan platform pekerjaan komprehensif yang dirancang untuk menghubungkan perusahaan luar negeri dengan pekerja terampil. Platform ini memiliki fitur manajemen profil perusahaan, kemampuan posting pekerjaan, dan sistem manajemen pelamar, memfasilitasi proses rekrutmen yang mulus untuk peluang kerja internasional.",
            role: "Lead Developer",
            features: [
                "Sistem manajemen profil perusahaan",
                "Platform posting dan manajemen pekerjaan",
                "Pelacakan dan manajemen pelamar",
                "Daftar peluang kerja internasional",
                "Antarmuka rekrutmen yang ramah pengguna",
                "Dashboard multi-perusahaan",
                "Manajemen lamaran dan CV"
            ]
        }
    },
    {
        title: "SmartSeller App - Management Seller Online System",
        slug: "smartseller-app",
        description: "An integrator platform to help online sellers manage finance, products, orders, storefronts, and integrate with popular marketplaces like TikTok, Tokopedia, Bukalapak, and Lazada.",
        role: "Fullstack Developer",
        tech: ["CodeIgniter", "VueJS", "Ajax", "Braze", "MySQL"],
        features: [
            "Finance management for online sellers",
            "Product and inventory management",
            "Order tracking and reporting",
            "Marketplace integrations (TikTok, Tokopedia, Bukalapak, Lazada)",
            "Mobile app and web-based platform",
            "CRM integration with Braze",
            "Storefront management system"
        ],
        demoUrl: "https://smartseller.co.id/",
        sourceUrl: null,
        createdAt: "2024-06-29",
        id_content: {
            title: "SmartSeller App - Sistem Manajemen Penjual Online",
            description: "Platform integrator untuk membantu penjual online mengelola keuangan, produk, pesanan, etalase, dan terintegrasi dengan marketplace populer seperti TikTok, Tokopedia, Bukalapak, dan Lazada.",
            role: "Fullstack Developer",
            features: [
                "Manajemen keuangan untuk penjual online",
                "Manajemen produk dan inventaris",
                "Pelacakan dan pelaporan pesanan",
                "Integrasi marketplace (TikTok, Tokopedia, Bukalapak, Lazada)",
                "Platform berbasis aplikasi mobile dan web",
                "Integrasi CRM dengan Braze",
                "Sistem manajemen etalase"
            ]
        }
    },
    {
        title: "RichBuyer - Marketplace Consumer Insight Tool",
        slug: "richbuyer",
        description: "A Chrome extension tool to help sellers analyze potential buyer data from Shopee and TikTok Shop, providing market insights and understanding consumer purchasing power.",
        role: "Frontend Developer",
        tech: ["Chrome Extension", "JavaScript", "HTML", "CSS"],
        features: [
            "Shopee buyer data analysis",
            "TikTok Shop buyer data analysis",
            "Consumer purchasing power insights",
            "Free marketplace analytics tool",
            "Support for business development and branding",
            "Understanding market trends and consumer behavior",
            "Lightweight and easy-to-use Chrome extension"
        ],
        demoUrl: "https://chrome-stats.com/d/lgoogkkhfmaojijmfdikbgbpdmckmbdo/download",
        sourceUrl: null,
        createdAt: "2024-05-15",
        id_content: {
            title: "RichBuyer - Alat Wawasan Konsumen Marketplace",
            description: "Alat ekstensi Chrome untuk membantu penjual menganalisis data calon pembeli dari Shopee dan TikTok Shop, memberikan wawasan pasar dan memahami daya beli konsumen.",
            role: "Frontend Developer",
            features: [
                "Analisis data pembeli Shopee",
                "Analisis data pembeli TikTok Shop",
                "Wawasan daya beli konsumen",
                "Alat analitik marketplace gratis",
                "Dukungan untuk pengembangan bisnis dan branding",
                "Memahami tren pasar dan perilaku konsumen",
                "Ekstensi Chrome yang ringan dan mudah digunakan"
            ]
        }
    },
    {
        title: "Nanobyte Wallet - Secure Crypto Wallet Mobile App",
        slug: "nanobyte-wallet",
        description: "A mobile app for secure management of cryptocurrency assets, enabling safe storage, real-time portfolio updates, and seamless transactions on the go.",
        role: "Frontend Developer",
        tech: ["React Native", "Web3", "Ethers.js"],
        features: [
            "Multi-cryptocurrency storage and management",
            "Real-time portfolio tracking",
            "Secure private key management",
            "Send and receive cryptocurrency with ease",
            "Transaction history tracking",
            "User-friendly and intuitive mobile interface",
            "Available on iOS and Android platforms"
        ],
        demoUrl: {
            live: "https://wallet.nanobyte.finance/",
            playStore: "https://play.google.com/store/apps/details?id=finance.nanobyte.wallet&hl=en",
            appStore: "https://apps.apple.com/app/nanobyte-wallet/id6502337341"
        },
        sourceUrl: null,
        createdAt: "2024-04-01",
        id_content: {
            title: "Nanobyte Wallet - Aplikasi Mobile Dompet Kripto Aman",
            description: "Aplikasi mobile untuk manajemen aset cryptocurrency yang aman, memungkinkan penyimpanan yang aman, pembaruan portofolio real-time, dan transaksi yang mulus saat bepergian.",
            role: "Frontend Developer",
            features: [
                "Penyimpanan dan manajemen multi-cryptocurrency",
                "Pelacakan portofolio secara real-time",
                "Manajemen kunci pribadi yang aman",
                "Kirim dan terima cryptocurrency dengan mudah",
                "Pelacakan riwayat transaksi",
                "Antarmuka mobile yang ramah pengguna dan intuitif",
                "Tersedia di platform iOS dan Android"
            ]
        }
    },
    {
        title: "IDDB - Indonesia Digital Bond Tokenization Platform",
        slug: "iddb",
        description: "The first and leading Real‑World Asset tokenization platform in Indonesia, focused on digitizing government bonds through blockchain, developed in collaboration with licensed financial institutions.",
        role: "Frontend Developer",
        tech: ["NextJS", "NestJS", "Lightweight Charts"],
        features: [
            "Real‑World Asset tokenization of Indonesian government bonds",
            "Collaborative fintech ecosystem involving Nanovest, STAR Asset Management, Bank Sinarmas, and PT Sejahtera Bersama Nano",
            "Regulatory compliance through OJK sandbox approval (October 8, 2024)",
            "Low minimum investment (~USD 100) via smart contracts",
            "Multi‑language support (EN/ID)",
            "Real‑time portfolio insights and investment dashboard",
            "Secure authentication via phone/OTP login"
        ],
        demoUrl: "https://iddb.nanovest.io/en",
        sourceUrl: null,
        createdAt: "2024-10-08",
        id_content: {
            title: "IDDB - Platform Tokenisasi Obligasi Digital Indonesia",
            description: "Platform tokenisasi Real-World Asset pertama dan terkemuka di Indonesia, berfokus pada digitalisasi obligasi pemerintah melalui blockchain, dikembangkan dalam kolaborasi dengan lembaga keuangan berlisensi.",
            role: "Frontend Developer",
            features: [
                "Tokenisasi Real-World Asset obligasi pemerintah Indonesia",
                "Ekosistem fintech kolaboratif yang melibatkan Nanovest, STAR Asset Management, Bank Sinarmas, dan PT Sejahtera Bersama Nano",
                "Kepatuhan regulasi melalui persetujuan sandbox OJK (8 Oktober 2024)",
                "Investasi minimum rendah (~USD 100) melalui smart contract",
                "Dukungan multi-bahasa (EN/ID)",
                "Wawasan portofolio real-time dan dashboard investasi",
                "Autentikasi aman melalui login telepon/OTP"
            ]
        }
    }
];
