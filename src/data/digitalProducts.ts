export interface DigitalProduct {
    id: string;
    title: string;
    category: string;
    techBadge: string;
    description: string;
    price: string;
    originalPrice?: string;
    badge?: string;
    image: string;
    link: string;
    features: string[];
}

export const lynkStoreInfo = {
    username: "habib.creations",
    storeUrl: "https://lynk.id/habib.creations",
    tagline: "Setiap pembelian yang kamu lakukan adalah bentuk dukungan bagi karya dan inovasi yang terus berkembang.",
    memberLoginUrl: "https://member.lynk.id/habib.creations/login"
};

export const featuredProducts: DigitalProduct[] = [
    {
        id: "focus-pet",
        title: "[Source Code] Focus Pet: Gamified Pomodoro Timer",
        category: "Web Application",
        techBadge: "Next.js 15 • Shadcn UI",
        description: "Aplikasi Pomodoro Timer berbasis web dengan gamifikasi virtual pet interaktif untuk membuat sesi belajar dan coding jadi seru dan terarah.",
        price: "IDR 25.000",
        badge: "Gamified Tool",
        image: "https://cdn.lynkid.my.id/products/11-12-2025/1765466137467_4634359.webp?width=400&quality=90",
        link: "https://lynk.id/habib.creations/57mkl2g215r5",
        features: [
            "Next.js 15 App Router & TypeScript",
            "Komponen Modern Shadcn UI & Tailwind",
            "Sistem Level & State Pet Gamifikasi",
            "Mudah di-deploy ke Vercel"
        ]
    },
    {
        id: "syntax-racers",
        title: "[Source Code] SyntaxRacers: Game Typing Speed Khusus Programmer",
        category: "Web Game",
        techBadge: "Next.js 14 • Tailwind CSS",
        description: "Game adu kecepatan mengetik syntax kode pemrograman real-time khusus developer dan programmer untuk melatih muscle memory ngoding.",
        price: "IDR 25.000",
        badge: "Developer Game",
        image: "https://cdn.lynkid.my.id/products/10-12-2025/1765375122751_6970068.webp?width=400&quality=90",
        link: "https://lynk.id/habib.creations/w7212k7l3gd8",
        features: [
            "Real-time Typing Speed Calculator (WPM & Akurasi)",
            "Snippet Kode Multi-Bahasa (JS, Python, TS)",
            "Tampilan Responsif & Modern Tailwind",
            "Full Source Code Siap Dikustomisasi"
        ]
    },
    {
        id: "nlp-asbc",
        title: "Source Code & Dataset NLP Lengkap: ASBC, Sentimen & Sarkasme",
        category: "AI & NLP Pipeline",
        techBadge: "IndoBERT • DeBERTa • Python",
        description: "Pipeline NLP lengkap untuk Aspect-Based Sentiment Classification (ASBC), analisis sentimen, dan deteksi sarkasme menggunakan model IndoBERT & RoBERTa.",
        price: "IDR 35.000",
        badge: "AI / NLP Model",
        image: "https://cdn.lynkid.my.id/products/29-12-2025/1766998960121_5844018.webp?width=400&quality=90",
        link: "https://lynk.id/habib.creations/j85enk287nke",
        features: [
            "Model IndoBERT, DeBERTa, XLM-RoBERTa",
            "Dataset Komentar Teranotasi Siap Pakai",
            "Jupyter Notebook End-to-End Siap Run",
            "Cocok untuk Skripsi / Riset NLP Akademis"
        ]
    },
    {
        id: "tiktok-intelligence",
        title: "[Source Code] TikTok Intelligence Dashboard: Scrape Komentar Tanpa Koding",
        category: "Data Scraping & Analytics",
        techBadge: "React Vite • Apify API",
        description: "Dashboard analitik untuk scraping ribuan komentar TikTok secara otomatis, visualisasi grafik interaktif, dan export data ke format CSV/Excel.",
        price: "IDR 35.000",
        badge: "Data Scraper",
        image: "https://cdn.lynkid.my.id/products/13-12-2025/1765621209715_5321368.webp?width=400&quality=90",
        link: "https://lynk.id/habib.creations/6w31og8jmmvr",
        features: [
            "Frontend React Vite Cepat & Ringan",
            "Integrasi Apify API untuk Scraping Instan",
            "Visualisasi Data & Word Cloud Insight",
            "Export Hasil Scraping ke CSV / JSON"
        ]
    },
    {
        id: "dataset-kemensos",
        title: "Dataset 24K++ Analisis Sentimen Kemensos (Cleaned & Labeled)",
        category: "Curated Dataset",
        techBadge: "CSV • 24.000+ Records",
        description: "Dataset 24.000+ data opini dan komentar publik yang telah dibersihkan dan dilabeli secara sistematis untuk keperluan analisis sentimen dan machine learning.",
        price: "IDR 15.000",
        originalPrice: "IDR 150.000",
        badge: "Diskon 90%",
        image: "https://cdn.lynkid.my.id/draft-products/24-01-2026/1769250279364_9616195.webp?width=400&quality=90",
        link: "https://lynk.id/habib.creations/ygmjo4yeqwl0",
        features: [
            "24.000+ Data Teks Asli & Bersih (Preprocessed)",
            "Multi-Class Sentiment Labeling",
            "Format CSV Siap Import ke Pandas / PyTorch",
            "Solusi Cepat untuk Kebutuhan Dataset Skripsi"
        ]
    },
    {
        id: "course-ml",
        title: "FULL COURSE MACHINE LEARNING: Beginner to Pro AI/ML Engineer",
        category: "E-Course & Modul",
        techBadge: "Python • Scikit-Learn • AI",
        description: "Panduan lengkap teori dan praktik Machine Learning dari nol hingga mahir membuat model prediksi cerdas untuk portofolio karier AI Anda.",
        price: "IDR 5.000",
        originalPrice: "IDR 15.000",
        badge: "Best Value",
        image: "https://cdn.lynkid.my.id/products/26-03-2025/1743007381159_6364327?width=400&quality=90",
        link: "https://lynk.id/habib.creations/qwlxp5y280wo",
        features: [
            "Materi Terstruktur Teori & Praktik Hands-On",
            "Studi Kasus Nyata Industri AI/ML",
            "Source Code Latihan & Notebook Lengkap",
            "Akses Materi Seumur Hidup"
        ]
    }
];
