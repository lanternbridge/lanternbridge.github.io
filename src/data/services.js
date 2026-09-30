// Services — the four offerings.
// Each service has bilingual copy and a list of bullet points.

export const services = [
  {
    id: 'education',
    slug: 'education',
    num: '01',
    icon: 'graduation',
    category:   { en: 'Education',  id: 'Pendidikan' },
    title:      { en: 'University Admissions', id: 'Pendaftaran Universitas' },
    description: {
      en: 'From HSK preparation to scholarship applications, we place Indonesian students into top Chinese universities.',
      id: 'Dari persiapan HSK hingga aplikasi beasiswa, kami membantu pelajar Indonesia masuk universitas terbaik di Tiongkok.',
    },
    bullets: [
      { en: 'University & major selection',               id: 'Pemilihan universitas & jurusan' },
      { en: 'CSC & university scholarship applications',   id: 'Aplikasi beasiswa CSC & universitas' },
      { en: 'HSK 1–6 prep with a PhD instructor',          id: 'Persiapan HSK 1–6 dengan pengajar bergelar doktor' },
      { en: 'Visa, documents & pre-departure briefing',    id: 'Visa, dokumen & briefing pra-keberangkatan' },
    ],
  },
  {
    id: 'medical',
    slug: 'medical',
    num: '02',
    icon: 'medical',
    category:   { en: 'Medical',    id: 'Medis' },
    title:      { en: 'Medical Travel', id: 'Perjalanan Medis' },
    description: {
      en: 'End-to-end coordination for Indonesian patients seeking treatment at China\'s leading hospitals — interpreted, scheduled and supervised.',
      id: 'Pendampingan menyeluruh bagi pasien Indonesia yang mencari pengobatan di rumah sakit terkemuka Tiongkok — diterjemahkan, dijadwalkan, dan diawasi.',
    },
    bullets: [
      { en: 'Hospital & specialist matching',         id: 'Pencocokan rumah sakit & spesialis' },
      { en: 'Appointment & admission scheduling',     id: 'Penjadwalan appointment & rawat inap' },
      { en: 'Medical translation & interpretation',   id: 'Penerjemahan & interpretasi medis' },
      { en: 'Follow-up reports in Bahasa Indonesia',  id: 'Laporan tindak lanjut dalam Bahasa Indonesia' },
    ],
  },
  {
    id: 'sourcing',
    slug: 'sourcing',
    num: '03',
    icon: 'factory',
    category:   { en: 'Sourcing',   id: 'Sourcing' },
    title:      { en: 'Manufacturing & Sourcing', id: 'Manufaktur & Sourcing' },
    description: {
      en: 'Boots on the ground in five industrial hubs. We identify factories, negotiate in Mandarin, and inspect before you pay.',
      id: 'Tim kami berada di lima kota industri. Kami mencari pabrik, bernegosiasi dalam bahasa Mandarin, dan memeriksa sebelum Anda membayar.',
    },
    bullets: [
      { en: 'Factory identification & verification',      id: 'Identifikasi & verifikasi pabrik' },
      { en: 'MOQ & pricing negotiated in Mandarin',       id: 'MOQ & harga dinegosiasikan dalam Mandarin' },
      { en: 'Quality inspection before shipment',         id: 'Inspeksi kualitas sebelum pengiriman' },
    ],
  },
  {
    id: 'ai-growth',
    slug: 'ai-growth',
    num: '04',
    icon: 'ai',
    category:   { en: 'Growth',     id: 'Pertumbuhan' },
    title:      { en: 'AI-Powered Growth', id: 'Pertumbuhan Berbasis AI' },
    description: {
      en: 'Built by an early-Alibaba-era engineer: practical AI systems that capture, qualify and serve your customers.',
      id: 'Dibangun oleh insinyur era awal Alibaba: sistem AI praktis yang menangkap, menyaring, dan melayani pelanggan Anda.',
    },
    bullets: [
      { en: 'AI commercial content & copy',         id: 'Konten & copywriting komersial AI' },
      { en: 'Lead capture & auto-qualification',    id: 'Penangkapan & kualifikasi lead otomatis' },
      { en: 'WhatsApp & social automation',         id: 'Otomasi WhatsApp & media sosial' },
      { en: 'Bilingual customer-support bots',      id: 'Chatbot layanan pelanggan dua bahasa' },
    ],
  },
];
