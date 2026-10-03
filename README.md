# PorsiPas — Deck Presentasi ITCC 2026

Deck presentasi untuk **Lomba UX Design ITCC 2026**, subtema *Smart Public Service* · *Smart Waste & Resource Optimization*.

Deck ini menjelaskan bagaimana **PorsiPas** — sistem umpan balik Program Makan Bergizi Gratis (MBG) — mengubah masukan siswa dan koordinator titik menjadi data yang bisa langsung dipakai SPPG untuk mengevaluasi menu, menyesuaikan porsi, dan mengurangi *food loss and waste*.

- **Tim:** ERRIC — Chery Ardin Dimalta, Muhammad Rizieq Anwar, Reyvan Andycka Farrel Alinskie
- **Institusi:** Politeknik Elektronika Negeri Surabaya (PENS), 2026
- **Bahasa deck:** Indonesia

---

## Isi deck (15 slide)

| # | Slide | Isi |
|---|---|---|
| 1 | Cover | Judul, tim, subtema |
| 2 | BigNumber | 23–48 juta ton FLW/tahun (Bappenas, 2021) |
| 3 | Latar belakang | Porsi, distribusi, evaluasi menu di lapangan |
| 4 | Konteks | 49,05 juta penerima, Rp213–551 T/tahun, 7,29% emisi, 42% siswa |
| 5 | Pain points | Empat keluhan hasil wawancara SPPG & ahli gizi |
| 6 | Define | Tiga kendala utama (click-build) |
| 7 | Section | Solusi: PorsiPas |
| 8 | Loop tertutup | Empat sisi pengguna dalam satu lingkar umpan balik |
| 9 | Prototype siswa | Beranda anonim + Masuk staf |
| 10 | Prototype siswa | Micro-feedback 5–10 detik + Mode Kiosk |
| 11 | Prototype SPPG | Menu Acceptance Dashboard |
| 12 | Prototype tim | Koordinator Titik, Penyalur, Admin |
| 13 | Metodologi | Lima tahap Design Thinking |
| 14 | Usability testing | Tabel temuan dan perbaikannya |
| 15 | Kesimpulan | Ringkasan + tautan prototype, moodboard, style guide |

Angka dan isi slide bersumber dari dokumen laporan ERRIC dan hasil usability testing; screenshot prototype berasal dari High-Fidelity prototype PorsiPas.

---

## Menjalankan secara lokal

```bash
npm install
npm run dev      # server pengembangan
npm run build    # build produksi → dist/
npx tsc --noEmit # cek tipe
```

Butuh Node 20+.

---

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Di Vercel: **Add New → Project** → pilih repo ini.
3. Biarkan preset terdeteksi otomatis (**Vite**):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Deploy.** Tidak perlu `vercel.json` — deck memakai routing hash, tanpa server-side routing.

Alternatif lewat CLI:

```bash
npx vercel        # preview
npx vercel --prod # deploy produksi
```

Setelah aktif, hostname (`*.vercel.app`) bisa dipasang sebagai custom domain di **Project → Settings → Domains**.

---

## Presentasi

| Tombol | Fungsi |
|---|---|
| `→` `↓` `Space` | Slide berikutnya (reveal build dulu sebelum pindah) |
| `←` `↑` | Slide sebelumnya |
| `Home` / `End` | Slide pertama / terakhir |
| `S` | Thumbnail rail |
| `G` | Grid view semua slide |
| `A` | Anotasi (pen, highlighter, shapes) |
| `F` | Fullscreen |
| `P` | Presenter mode (timer + catatan, tab baru) |
| `H` | Sembunyikan UI |

Catatan pembicara tersedia di setiap slide lewat `notes` dan dapat disunting saat presentasi. Tautan slide ada di URL hash, jadi `/#11` membuka langsung slide 11.

---

## Struktur proyek

```
`src/App.tsx` — deck (15 slide), satu-satunya file isi yang dicustomize
`src/deck/` — engine + chrome deck (Deck, Slide, Build, Reveal, Annotator)
`src/components/` — library komponen slide
`src/styles/tokens.css` — tema; hanya blok `:root` yang diedit (warna, font, radius, motion)
`src/styles/base.css` — style sistem (hanya font import + `color-scheme` yang diubah)
`public/prototype/` — screenshot prototype yang sudah di-crop per layar
```

 Tema deck memakai brand PorsiPas: navy `#1E2F40` sebagai tinta, oranye `#CC6B28` sebagai aksen, dan Plus Jakarta Sans. Mengubah `--primary` di `tokens.css` akan mewarnai seluruh deck.

---

## Credits

Deck ini dibangun di atas [Bolt Slides](https://github.com/stackblitz/bolt-slides) dari StackBlitz — engine deck + library komponen, MIT License. engine dan chrome (`src/deck/`) tidak dimodifikasi; seluruh isi deck, tema, dan aset visual adalah karya tim ERRIC.