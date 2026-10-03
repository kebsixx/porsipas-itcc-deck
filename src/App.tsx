import type { CSSProperties } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import BigNumber from './components/BigNumber';
import Split from './components/Split';
import Bento from './components/Bento';
import StatGrid from './components/StatGrid';
import Section from './components/Section';
import Steps from './components/Steps';
import Table from './components/Table';
import BrowserFrame from './components/BrowserFrame';
import CountUp from './components/CountUp';

/* ══════════════════════════════════════════════════════════════════════
   PorsiPas — Sistem Umpan Balik Program Makan Bergizi Gratis
   Lomba UX Design ITCC 2026 · Subtema Smart Public Service
   ERRIC · Politeknik Elektronika Negeri Surabaya

   Each child of <Deck> is one slide. Speaker notes live in notes="…"
   (shown in the presenter overlay — press P).
   ══════════════════════════════════════════════════════════════════════ */

/* A framed prototype screenshot. `fill` stretches it into the space it is
   given (cover crops, contain shows the whole screen); `ratio` is used when
   the shot is not filling a slot. */
function Shot({
  src,
  alt,
  caption,
  ratio = '16 / 9',
  fill = false,
  fit = 'cover',
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  fill?: boolean;
  fit?: 'cover' | 'contain';
}) {
  return (
    <figure
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minWidth: 0,
        minHeight: 0,
        flex: fill ? '1 1 0' : undefined,
        maxWidth: '100%',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          flex: fill ? '1 1 auto' : undefined,
          minHeight: 0,
          aspectRatio: fill ? undefined : ratio,
          objectFit: fit,
          objectPosition: fit === 'cover' ? 'center top' : undefined,
          borderRadius: 'var(--radius)',
          border: '1px solid var(--hair)',
          background: 'var(--surface-2)',
          boxShadow: 'var(--shadow)',
        }}
      />
      {caption && (
        <figcaption
          className="foot"
          style={{ fontSize: 'clamp(11px, 1vw, 13px)', textAlign: 'center' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* the two media panels that hold two screenshots each */
const pair: CSSProperties = {
  display: 'flex',
  gap: 'clamp(10px, 1.6vw, 20px)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(14px, 2vw, 28px)',
  width: '100%',
  height: '100%',
  minHeight: 0,
};
const definePoints = [
  'Belum ada data penerimaan menu yang cepat dan terstruktur.',
  'Komunikasi evaluasi masih manual lewat pesan dan media sosial, tanpa rekap otomatis.',
  'Mengganti menu hanya didasarkan pada banyaknya sisa makanan, tanpa mengetahui penyebabnya.',
];

const loopNodes = [
  {
    k: '01 · Siswa',
    t: 'Ulasan anonim 5–10 detik',
    d: 'Masuk lewat Kode Akses tanpa registrasi. Menjawab tiga indikator — rasa, porsi, kondisi — hanya dengan ikon.',
  },
  {
    k: '02 · Koordinator Titik',
    t: 'Kode sesi dan feedback mewakili kelas',
    d: 'Menyiapkan kode harian, mengisi feedback perwakilan, dan memvalidasi keluhan sensitif.',
  },
  {
    k: '03 · Penyalur',
    t: 'Status pengiriman real-time',
    d: 'Memperbarui status distribusi per titik sekolah: diproses, dalam perjalanan, tiba, terverifikasi.',
  },
  {
    k: '04 · SPPG',
    t: 'Menu Acceptance Dashboard',
    d: 'Tingkat penerimaan, persentase sisa, keluhan dominan, dan tren mingguan dalam satu analitik.',
  },
];

const designThinking = [
  {
    title: 'Empathize',
    body: 'Wawancara SPPG, guru, dan ahli gizi; memetakan cara mereka mengevaluasi menu hari ini.',
  },
  {
    title: 'Define',
    body: 'Tiga kendala utama dirumuskan dari temuan lapangan, bukan dari asumsi tim.',
  },
  {
    title: 'Ideate',
    body: 'Fungsi sistem dipecah ke empat sisi pengguna; umpan balik dirancang selesai 5–10 detik.',
  },
  {
    title: 'Prototype',
    body: 'Lo-Fi untuk mengunci alur, High-Fi untuk memvalidasi visual, kontras, dan mode perangkat.',
  },
  {
    title: 'Usability Testing',
    body: 'Remote moderated dan in-person moderated dengan lima pengguna asli di dua jenjang.',
  },
];

const findings = [
  [
    '1',
    'Tombol aksi utama kurang kontras dengan latar belakang sehingga sulit ditemukan.',
    'Tinggi',
    'Warna tombol dinaikkan kontrasitasnya agar langsung terlihat.',
  ],
  [
    '2',
    'Alur form feedback berbeda di setiap mode, sehingga guru bingung arahkan.',
    'Tinggi',
    'Alur feedback diperbaiki dan pertanyaannya diseragamkan antar mode.',
  ],
  [
    '3',
    'Duplikasi label di ringkasan aktivitas: “Total Porsi Hari Ini” muncul dua kali dengan angka berbeda (3.250 dan 12).',
    'Sedang',
    'Label metrik kedua diperbaiki menjadi “Total Titik Aktif Hari Ini”.',
  ],
];

const teamShots = [
  {
    k: 'Koordinator Titik',
    t: 'Kode sesi dan feedback mewakili kelas',
    d: 'Menyiapkan kode harian, mengisi feedback perwakilan, dan membuka Mode Kiosk untuk satu perangkat kelas.',
    src: '/prototype/shot-koordinator.png',
    alt: 'Dashboard Koordinator Titik PorsiPas',
  },
  {
    k: 'Penyalur',
    t: 'Status pengiriman per titik',
    d: 'Pembaruan real-time dari diproses, dalam pengiriman, sampai sekolah, hingga ditandai selesai.',
    src: '/prototype/shot-penyalur.png',
    alt: 'Dashboard Penyalur PorsiPas',
  },
  {
    k: 'Admin',
    t: 'Kelola akun dan cabang',
    d: 'Membuat akun SPPG dan koordinator titik, serta menautkan pengguna ke cabang SPPG tempat mereka bertugas.',
    src: '/prototype/shot-admin.png',
    alt: 'Dashboard Admin PorsiPas',
  },
];

const links = [
  {
    l: 'Prototype interaktif',
    u: 'figma.com/proto/PorsiPas',
    href: 'https://www.figma.com/proto/1KE3SRtmHF0lo3H1mgCwIQ/PorsiPas?node-id=263-2813',
  },
  {
    l: 'Moodboard',
    u: 'figma.com/design/PorsiPas · 909-3691',
    href: 'https://www.figma.com/design/1KE3SRtmHF0lo3H1mgCwIQ/PorsiPas?node-id=909-3691',
  },
  {
    l: 'Style guide',
    u: 'figma.com/design/PorsiPas · 215-1879',
    href: 'https://www.figma.com/design/1KE3SRtmHF0lo3H1mgCwIQ/PorsiPas?node-id=215-1879',
  },
  {
    l: 'Design system',
    u: 'figma.com/design/PorsiPas · 215-1880',
    href: 'https://www.figma.com/design/1KE3SRtmHF0lo3H1mgCwIQ/PorsiPas?node-id=215-1880',
  },
];

export default function App() {
  return (
    <Deck>
      {/* 1 — Cover */}
      <Cover
        nav="Cover"
        notes="Perkenalkan tim ERRIC dari PENS 2026. PorsiPas adalah sistem umpan balik untuk program Makan Bergizi Gratis. Satu kalimat pembuka: pemborosan makanan adalah masalah anggaran, bukan sekadar piring penuh."
        kicker="Lomba UX Design ITCC 2026"
        title={
          <>
            Porsi<span className="accent-text">Pas</span>
          </>
        }
        subtitle="Sistem umpan balik Program Makan Bergizi Gratis — anonim, selesai 5–10 detik, dan langsung jadi bahan keputusan menu di SPPG."
        foot="Tim ERRIC · Politeknik Elektronika Negeri Surabaya 2026 · Subtema Smart Public Service & Smart Waste & Resource Optimization"
      />

      {/* 2 — BigNumber */}
      <BigNumber
        nav="23–48 juta ton"
        notes="Angka nasional ini yang membuat kami memilih food waste sebagai subtema. Sebut sumbernya, lalu langsung ke konteks MBG."
        kicker="Food loss & waste di Indonesia"
        value={<CountUp to={48} prefix="23–" />}
        caption="juta ton pangan terbuang setiap tahun — tahap konsumsi menyumbang porsi terbesar, 5–19 juta ton."
        foot="Bappenas, 2021 · 115–184 kg per kapita per tahun"
      />

      {/* 3 — Latar belakang + panel lapangan */}
      <Split
        nav="Latar belakang"
        notes="Tiga keluhan lapangan ini kami temui langsung dari SPPG. Tekankan bahwa masalahnya ada di data, bukan di niat."
        kicker="Latar belakang"
        title={
          <>
            Sisa di kelas berarti{' '}
            <span className="accent-text">anggaran terbuang.</span>
          </>
        }
        body="Program MBG adalah intervensi gizi terbesar di Indonesia, dan porsinya ditanggung anggaran negara. Maka makanan yang tersisa di kelas bukan sekadar piring penuh — itu bahan pangan dan anggaran yang hilang, tanpa satu pun data penyebabnya."
        media={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(18px, 3vw, 40px)',
            }}
          >
            <div
              className="mat"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(22px, 2.6vw, 34px)',
                width: 'min(100%, 430px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.8vh, 18px)',
                textAlign: 'left',
              }}
            >
              <div className="kicker">Kondisi di lapangan</div>
              {[
                ['Porsi vs kehadiran', 'Jumlah porsi tidak sesuaikan siswa yang hadir.'],
                ['Distribusi', 'Pengiriman terlambat ke titik sekolah.'],
                ['Evaluasi menu', 'Belum terukur cepat dan terstruktur.'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    paddingTop: 12,
                    borderTop: '1px solid var(--hair-2)',
                  }}
                >
                  <strong style={{ fontSize: 'clamp(15px, 1.6vw, 17px)' }}>
                    {k}
                  </strong>
                  <span
                    style={{
                      fontSize: 'clamp(13.5px, 1.4vw, 15px)',
                      color: 'var(--fg-muted)',
                      lineHeight: 1.45,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
              <div className="foot">Triastuty, 2025 · Bappenas, 2021</div>
            </div>
          </div>
        }
      />

      {/* 4 — StatGrid */}
      <StatGrid
        nav="Empat angka"
        notes="Empat angka ini yang kami bawa ke juri. Jangan dibaca semua — pilih yang paling relevan dengan pertanyaan mereka."
        kicker="Konteks"
        title="Empat angka yang menaruh masalah ini di depan mata."
        stats={[
          {
            value: '49,05 juta',
            label: 'Penerima manfaat MBG',
            caption: 'dari target 82,9 juta jiwa pada 2026 · BGN, 2026',
          },
          {
            value: <CountUp to={213} suffix="–551 T" />,
            label: 'Kerugian ekonomi per tahun',
            caption:
              'Rp213–551 triliun, setara 4–5% PDB nasional · Bappenas, 2021',
          },
          {
            value: '7,29%',
            label: 'Porsi emisi nasional',
            caption: '1.702,9 Mt CO₂-eq dari food loss & waste · Bappenas, 2021',
          },
          {
            value: <CountUp to={42} suffix="%" />,
            label: 'Siswa menghabiskan makanan',
            caption:
              'data sisa kini jadi indikator utama evaluasi menu · BGN Jawa Tengah, 2026',
          },
        ]}
      />

      {/* 5 — Pain points (Bento) */}
      <Bento
        nav="Pain points"
        notes="Semua keluhan ini berujung pada kata yang sama: tidak tahu. Berhenti sebentar setelah slide ini."
        kicker="Empathize · wawancara SPPG & ahli gizi"
        title="Empat keluhan yang semuanya berujung pada “tidak tahu”."
        tiles={[
          {
            c: 7,
            title: 'Penyebab sisa tidak diketahui',
            body: 'Sulit mengetahui mengapa makanan tidak dihabiskan siswa — rasa, tekstur, atau porsinya?',
          },
          {
            c: 5,
            title: 'Data belum terstruktur',
            body: 'Belum ada pemisahan antara menu yang disukai dan menu paling banyak tersisa.',
          },
          {
            c: 5,
            title: 'Evaluasi masih manual',
            body: 'Formulir, kolom saran, dan komentar media sosial — analisisnya makan waktu lama.',
          },
          {
            c: 7,
            title: 'Ganti menu tanpa alasan',
            body: 'Keputusan mengganti menu hanya melihat banyaknya sisa makanan, bukan faktor penyebabnya.',
          },
        ]}
      />

      {/* 6 — Define (centered, builds) */}
      <Slide
        center
        nav="Define"
        notes="Ini tiga kendala yang kami bawa ke tahap ideasi. Klik satu per satu, lalu diam sebentar sebelum pindah."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 14 }}>
            Define
          </div>
          <h2
            className="headline"
            style={{ marginInline: 'auto', maxWidth: '20ch' }}
          >
            Tiga kendala yang harus diselesaikan.
          </h2>
        </Reveal>
        {definePoints.map((t, i) => (
          <Build at={i + 1} key={t} style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(12px, 1.8vw, 22px)',
                alignItems: 'baseline',
                maxWidth: '58ch',
                margin: 'clamp(16px, 2.6vh, 24px) auto 0',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--primary)',
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="lead" style={{ margin: 0, maxWidth: 'none' }}>
                {t}
              </p>
            </div>
          </Build>
        ))}
      </Slide>

      {/* 7 — Section */}
      <Section
        nav="Solusi"
        notes="Beralih dari masalah ke solusi."
        n={2}
        kicker="Bagian dua"
        title={
          <>
            Solusi: <span className="accent-text">PorsiPas</span>
          </>
        }
      />

      {/* 8 — Closed loop */}
      <Slide
        center
        nav="Loop tertutup"
        notes="Empat sisi, satu lingkar. Tekankan bahwa data kembali menjadi acuan menu berikutnya — di situlah lingkarnya tertutup."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12 }}>
            Ideate · pembagian fungsi
          </div>
          <h2
            className="headline"
            style={{ marginInline: 'auto', maxWidth: '22ch' }}
          >
            Empat sisi, satu lingkar umpan balik tertutup.
          </h2>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(230px, 100%), 1fr))',
            gap: 'clamp(12px, 1.6vw, 20px)',
            width: '100%',
            maxWidth: 1080,
            margin: 'clamp(24px, 4vh, 44px) auto 0',
          }}
        >
          {loopNodes.map((n, i) => (
            <Build at={i + 1} key={n.k}>
              <div
                className="mat"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(18px, 2vw, 26px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                  textAlign: 'left',
                }}
              >
                <div className="btile-k">{n.k}</div>
                <h3 style={{ fontSize: 'clamp(17px, 1.9vw, 21px)' }}>{n.t}</h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 'clamp(13.5px, 1.4vw, 15.5px)',
                    color: 'var(--fg-muted)',
                    lineHeight: 1.45,
                  }}
                >
                  {n.d}
                </p>
              </div>
            </Build>
          ))}
        </div>
        <Build at={5}>
          <p
            className="lead"
            style={{
              margin: 'clamp(20px, 3.4vh, 34px) auto 0',
              maxWidth: '46ch',
            }}
          >
            Data penerimaan menu kembali menjadi dasar penyusunan menu dan alokasi
            bahan pangan berikutnya.
          </p>
        </Build>
      </Slide>

      {/* 9 — Prototype siswa: beranda + masuk */}
      <Split
        nav="Siswa · masuk"
        notes="Tunjukkan alur masuk: siswa tanpa akun, petugas dengan akun. Kode dibuat sistem, bukan oleh guru."
        kicker="Prototype · sisi siswa"
        title={
          <>
            Masuk dengan <span className="accent-text">kode.</span> Bukan akun.
          </>
        }
        body="Siswa tidak diminta mendaftar dan tidak perlu email — cukup kode sesi yang dibuat sistem, berlaku harian, dan dipakai bersama di satu perangkat kelas. Petugas masuk dengan nomor HP, lalu sistem mengarahkan ke dasbor sesuai perannya."
        media={
          <div style={pair}>
            <Shot
              ratio="16 / 10"
              src="/prototype/shot-home.jpg"
              alt="Halaman beranda siswa PorsiPas"
              caption="Beranda — anonim, siap dipakai bersama"
            />
            <Shot
              ratio="16 / 10"
              src="/prototype/shot-login.jpg"
              alt="Halaman masuk staf PorsiPas"
              caption="Masuk staf — peran dialihkan otomatis"
            />
          </div>
        }
      />

      {/* 10 — Prototype siswa: micro-feedback + kiosk */}
      <Split
        flip
        nav="Siswa · 5–10 detik"
        notes="Tiga pertanyaan, ikon, tanpa mengetik. Mode Kiosk untuk kelas SD: satu tablet, kode aktif, sesi tertutup otomatis."
        kicker="Prototype · micro-feedback"
        title={
          <>
            Selesai dalam <span className="accent-text">5–10 detik.</span>
          </>
        }
        body="Rasa, porsi, dan kondisi dijawab dengan ikon — tidak ada yang perlu mengetik. Untuk kelas SD, satu tablet dipakai bergantian lewat Mode Kiosk: kode diperbarui real-time selama sesi dan ditutup otomatis saat jam sekolah berakhir."
        media={
          <div style={pair}>
            <Shot
              ratio="16 / 10"
              src="/prototype/shot-feedback.png"
              alt="Halaman micro-feedback siswa PorsiPas"
              caption="Micro-feedback — anonim, pertanyaan pendek"
            />
            <Shot
              ratio="16 / 10"
              src="/prototype/shot-kiosk.png"
              alt="Layar Mode Kiosk PorsiPas"
              caption="Mode Kiosk — satu perangkat kelas, kode sesi aktif"
            />
          </div>
        }
      />

      {/* 11 — Dashboard SPPG (full-bleed browser frame) */}
      <Slide
        full
        nav="Dashboard SPPG"
        notes="Ini layar yang paling sering ditanya juri. Tunjukkan empat metrik, lalu AI Insight, lalu daftar titik distribusi."
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding:
              'clamp(14px, 2.2vh, 24px) var(--gutter) clamp(84px, 12vh, 132px)',
            gap: 'clamp(10px, 1.6vh, 16px)',
          }}
        >
          <Reveal>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 20,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>
                  Prototype · sisi SPPG
                </div>
                <h2
                  className="headline"
                  style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', margin: 0 }}
                >
                  Dari ulasan siswa menjadi{' '}
                  <span className="accent-text">keputusan menu.</span>
                </h2>
              </div>
              <span className="chip">Menu Acceptance Dashboard</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              style={{
                width: 'min(100%, calc((100vh - 280px) * 1.86))',
                margin: '0 auto',
              }}
            >
              <BrowserFrame url="app.porsipas.id/sppg">
                <img
                  src="/prototype/dashboard-sppg-beranda.png"
                  alt="Dashboard SPPG PorsiPas — ringkasan aktivitas, AI Insight, dan daftar anggota"
                  style={{ display: 'block', width: '100%' }}
                />
              </BrowserFrame>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* 12 — Sisi tim (screenshot cards) */}
      <Slide
        nav="Sisi tim"
        notes="Tiga peran tim ini memakai PorsiPas setiap hari. Cukup satu kalimat per peran, jangan dibaca semua."
      >
        <div className="container">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 10 }}>
              Prototype · sisi tim
            </div>
            <h2
              className="headline"
              style={{ marginBottom: 'clamp(20px,3vh,34px)', maxWidth: '24ch' }}
            >
              Sisi tim: bagikan kode, kirim, kelola akun.
            </h2>
          </Reveal>
          <div className="cols">
            {teamShots.map((t, i) => (
              <Reveal key={t.k} delay={0.1 + i * 0.08} style={{minWidth: 0}}>
                <div
                  className="mat"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    height: '100%',
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      aspectRatio: '16 / 10',
                      background: 'var(--surface-2)',
                      borderBottom: '1px solid var(--hair-2)',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={t.src}
                      alt={t.alt}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'left top',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 'clamp(16px, 1.8vw, 22px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 7,
                    }}
                  >
                    <div className="btile-k">{t.k}</div>
                    <h3 style={{ fontSize: 'clamp(17px, 1.8vw, 20px)' }}>{t.t}</h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 'clamp(13.5px, 1.4vw, 15px)',
                        color: 'var(--fg-muted)',
                        lineHeight: 1.45,
                      }}
                    >
                      {t.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Slide>

      {/* 13 — Metodologi */}
      <Steps
        nav="Metodologi"
        notes="Lima tahap Design Thinking, masing-masing menghasilkan artefak yang bisa ditunjukkan."
        kicker="Metodologi desain"
        title="Lima tahap Design Thinking."
        items={designThinking}
      />

      {/* 14 — Usability testing */}
      <Slide
        nav="Usability testing"
        notes="Tiga temuan, dua di antaranya severity tinggi — ketiganya sudah kami perbaiki. Tunjuk barisnya, jangan dibaca."
      >
        <Reveal>
          <div
            className="kicker"
            style={{ marginBottom: 12, textAlign: 'center' }}
          >
            Usability testing
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(18px, 3vh, 30px)',
              maxWidth: '22ch',
            }}
          >
            Tiga temuan, dan ketiganya sudah kami perbaiki.
          </h2>
          <p
            className="foot"
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(16px, 2.6vh, 26px)',
            }}
          >
            5 pengguna asli · remote moderated &amp; in-person moderated
          </p>
        </Reveal>
        <Reveal>
          <Table
            columns={[
              'No',
              { label: 'Kendala pengguna', align: 'left' },
              { label: 'Tingkat keparahan', align: 'center' },
              { label: 'Perbaikan', align: 'left' },
            ]}
            rows={findings}
            highlightCol={2}
            caption="Sumber: hasil usability testing PorsiPas — siswa SD/SMP/SMA, guru/koordinator titik, dan SPPG"
          />
        </Reveal>
      </Slide>

      {/* 15 — Kesimpulan + CTA */}
      <Slide
        center
        nav="Kesimpulan"
        notes="Tutup dengan ajakan konkret: buka prototype-nya. Biarkan tautan tetap terlihat saat sesi tanya jawab."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 14 }}>
            Kesimpulan
          </div>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(32px, 5.4vw, 74px)',
              maxWidth: '18ch',
              marginInline: 'auto',
            }}
          >
            Umpan balik <span className="accent-text">5–10 detik</span> yang
            langsung dipakai.
          </h2>
          <p
            className="lead"
            style={{
              margin: 'clamp(14px, 2.4vh, 22px) auto 0',
              maxWidth: '52ch',
            }}
          >
            Satu alur yang cepat, inklusif, dan anonim untuk siswa — dan data
            penerimaan menu yang bisa langsung dipakai SPPG untuk menyusun menu,
            porsi, dan distribusi berikutnya.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div
            style={{
              width: 'min(100%, 640px)',
              margin: 'clamp(20px, 3.4vh, 34px) auto 0',
              textAlign: 'left',
            }}
          >
            {links.map((l) => (
              <a
                key={l.l}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: 'clamp(10px, 1.6vh, 14px) 2px',
                  borderTop: '1px solid var(--hair-2)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    fontWeight: 600,
                    color: 'var(--fg)',
                  }}
                >
                  {l.l}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(11.5px, 1.2vw, 13px)',
                    color: 'var(--fg-muted)',
                    textAlign: 'right',
                  }}
                >
                  {l.u}
                </span>
              </a>
            ))}
            <div className="foot" style={{ paddingTop: 14, textAlign: 'center' }}>
              Chery Ardin Dimalta · Muhammad Rizieq Anwar · Reyvan Andycka Farrel
              Alinskie — ERRIC, PENS 2026
            </div>
          </div>
        </Reveal>
      </Slide>
    </Deck>
  );
}