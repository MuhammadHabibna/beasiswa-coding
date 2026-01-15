# Beasiswa Coding & AI Hub - Promo Site

Website statis (Mobile-First) untuk mempromosikan **Coding Camp 2026** (powered by DBS Foundation) dan **Microsoft Elevate Training Center (METC)**.

Dibuat dengan:
- **Astro**: High performance static site generator.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Type safety.

## Fitur Utama
- **Mobile-First Design**: Dioptimalkan untuk layar 360x640 ke atas. Tidak ada horizontal scroll.
- **Sticky Bottom CTA**: Tombol pendaftaran selalu terlihat di layar HP.
- **Lightweight**: Tanpa library UI berat, hanya CSS murni dan sedikit Vanilla JS.
- **SEO Ready**: Meta tags, OpenGraph, dan semantik HTML.
- **Aksesibilitas**: Kontras warna tinggi, ARIA attributes, dan support keyboard navigation.

## Struktur Project
```
src/
├── components/       # Komponen UI (Navbar, Hero, StickyCTA, dll)
├── data/             # Data program (edit di src/data/programs.ts)
├── layouts/          # Layout utama (Safe Area Inset untuk mobile)
├── pages/            # Route halaman (index.astro)
└── styles/           # CSS Global
```

## Cara Menjalankan

1.  **Install Dependencies**
    ```bash
    npm install
    # Jika gagal karena policy, gunakan: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (PowerShell)
    ```

2.  **Jalankan Lokal**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:4321` di browser / HP simulator.

3.  **Build untuk Produksi**
    ```bash
    npm run build
    ```
    Hasil build akan ada di folder `dist/`.

## Deployment: Cloudflare Pages

1.  Push kode ke GitHub.
2.  Buka Dashboard Cloudflare Pages.
3.  Connect Git Repository.
4.  **Build Command**: `npm run build`
5.  **Output Directory**: `dist`
6.  Deploy!

## Mengubah Data Link & Gambar
- **Text & Link**: Edit `src/data/programs.ts`.
- **Gambar**:
  1. Simpan foto di folder `public/images/`.
  2. Edit path di `src/data/programs.ts` (contoh: `/images/namagambar.jpg`).

## Fitur Baru
- **Scroll Animations**: Elemen akan muncul perlahan saat di-scroll (class `.fade-in-up`).
- **Mobile Optimized**: Drawer menu & Sticky CTA.

---
Copyright © 2026. This is a promotional landing page curation.
