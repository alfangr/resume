interface DemoUrl {
  playStore?: string;
  appStore?: string;
}

interface Project {
  title: string;
  slug: string;
  description: string;
  role: string;
  tech: string[];
  features: string[];
  demoUrl: string | DemoUrl | null;
  sourceUrl: string | null;
  createdAt: string;
}

export const characterLimit = {
  project: 180,
};

export const projects: Project[] = [
  {
    title: "Question Management System",
    slug: "question-management-system",
    description:
      "A web-based platform to assist elementary and middle school teacher groups (KKG & MGMP) in collaboratively designing, reviewing, and organizing educational assessment items, from learning objectives to final question formats.",
    role: "Fullstack Developer",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery", "AJAX"],
    features: [
      "Collaborative question creation workflow (objectives → indicators → questions)",
      "Support for multiple question types (multiple choice, essay)",
      "Versioning and tracking of question revisions",
      "User roles for teacher groups, reviewers, and admins",
      "Export to printable formats for exam use",
    ],
    demoUrl: null,
    sourceUrl: null,
    createdAt: "2022-01-15",
  },
  {
    title: "Online Learning & Webinar Platform",
    slug: "online-learning-webinar-platform",
    description:
      "A remote learning system designed to help prospective students access educational resources without in-person meetings. The platform includes webinar-style live streaming for mentors to share knowledge, as well as one-on-one online sessions, particularly for Korean language training.",
    role: "Fullstack Developer",
    tech: [
      "Laravel",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "TokBox (OpenTok)",
    ],
    features: [
      "Live webinar integration using TokBox for large-scale training sessions",
      "One-on-one mentoring sessions for personalized Korean language instruction",
      "Interactive learning modules accessible from anywhere",
      "Mentor and student account management",
      "Session scheduling and notification system",
    ],
    demoUrl: null,
    sourceUrl: null,
    createdAt: "2022-08-20",
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
  },
  {
    title: "SIPBOS - Letter Management System",
    slug: "sipbos-letter-management-system",
    description:
      "A comprehensive web and mobile-based letter management system designed for BSSN (Badan Siber dan Sandi Negara) departments to efficiently track and manage official correspondence. The system handles the complete letter lifecycle including creation, editing, disposition, digital signing, and workflow management for internal office operations.",
    role: "Mobile Developer",
    tech: ["Laravel", "MySQL", "React Native", "TailwindCSS"],
    features: [
      "Complete letter lifecycle management (create, edit, dispose, sign)",
      "Cross-platform support: web dashboard and mobile applications",
      "Digital signature integration for official document approval",
      "Department-based workflow and letter routing system",
      "Internal office communication and tracking system",
      "Secure document management for government correspondence",
    ],
    demoUrl: null,
    sourceUrl: null,
    createdAt: "2024-01-12",
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
    createdAt: "2024-02-10"
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
    createdAt: "2024-01-20"
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
    demoUrl: null,
    sourceUrl: null,
    createdAt: "2024-06-29"
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
    demoUrl: null,
    sourceUrl: null,
    createdAt: "2024-05-15"
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
      playStore: "https://play.google.com/store/apps/details?id=finance.nanobyte.wallet&hl=en",
      appStore: "https://apps.apple.com/app/nanobyte-wallet/id6502337341"
    },
    sourceUrl: null,
    createdAt: "2024-04-01"
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
      "Regulatory compliance through OJK sandbox approval (October 8, 2024)",
      "Low minimum investment (~USD 100) via smart contracts",
      "Multi‑language support (EN/ID)",
      "Real‑time portfolio insights and investment dashboard",
      "Secure authentication via phone/OTP login"
    ],
    demoUrl: "https://iddb.nanovest.io/en",
    sourceUrl: null,
    createdAt: "2024-10-08"
  }
];

export const blogs = [
  {
    title: "Optimizing React Performance",
    slug: "optimizing-react-performance",
    summary:
      "Learn techniques to make your React apps faster and more efficient.",
  },
  {
    title: "Using Tailwind CSS in Production",
    slug: "using-tailwind-css-in-production",
    summary: "A guide to setting up Tailwind CSS for scalable web development.",
  },
  {
    title: "Next.js vs. Remix: A Comparison",
    slug: "next-js-vs-remix-a-comparison",
    summary: "Which framework should you choose for your next project?",
  },
];
