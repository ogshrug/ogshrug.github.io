// Single source of truth for everything on the site. Edit here.

export const profile = {
  name: 'Armaan Guha',
  tagline: 'AI & Cybersecurity',
  location: 'Noida, India',
  email: 'armaanguha@gmail.com',
  // paths are relative to /public and get the site base prepended where used
  avatar: '/avatar.webp', // transparent cutout; circle is filled with --accent
  ogImage: '/og.jpg',
  resume: '/Armaan-Guha-Resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ogshrug', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/armaan-guha-750223267/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:armaanguha@gmail.com', icon: 'mail' },
  ],
}

export type Project = {
  name: string
  blurb: string
  metric?: string
  tags: string[]
  repo?: string
  live?: string
  badge?: string
  year: number
}

// Featured projects get a card on the home page.
export const featured: Project[] = [
  {
    name: 'AcousticLeakNet',
    blurb:
      'CNN-based acoustic leak detection and localisation for water pipe networks, trained entirely on simulation and tested on three networks it never saw during training. Runs on a low-cost two-sensor hardware design.',
    metric: '100.5M sim rows · AUROC 1.00 on unseen networks · 10–42× cheaper hardware',
    tags: ['PyTorch', 'Signal Processing', 'EPANET', 'pandas'],
    badge: 'GENIUS Olympiad 2026 Finalist',
    year: 2026,
  },
  {
    name: 'Ferrite',
    blurb:
      'Neural-network inference runtime written from scratch in C11 with zero dependencies: its own ONNX parser, memory planner and kernels. Built for Raspberry Pi Zero W and ESP32, and runs AcousticLeakNet’s model in under 1 MB of memory.',
    metric: '222 KB binary · 83× smaller than ONNX Runtime · 97.52% on MNIST, matching results',
    tags: ['C11', 'ONNX', 'CMake', 'Embedded'],
    repo: 'https://github.com/AaravGupta17/Ferrite',
    live: 'https://ferrite-c11.github.io/FerriteWebsite/',
    badge: 'Columbia Junior Science Journal',
    year: 2026,
  },
  {
    name: 'YEMU',
    blurb:
      'Malware analysis sandbox for Linux and Windows, built at GPCSSI. Runs a sample in a disposable QEMU VM, watches its behaviour and network traffic, scans it with YARA, and explains a 0–100 threat score. Qt desktop app and CLI.',
    metric: 'KVM + WHPX backends · static & in-memory YARA · v0.6.1 installers for Windows & Linux',
    tags: ['Python', 'QEMU', 'YARA', 'PySide6'],
    repo: 'https://github.com/ogshrug/YEMU',
    year: 2026,
  },
  {
    name: 'WClop',
    blurb:
      'Automatic image, video, PDF and audio optimiser for Windows. Runs in the tray and shrinks screenshots, recordings and files from the clipboard, a drop zone, watched folders or Explorer, with the original always one click away.',
    metric: 'pngquant · FFmpeg · Ghostscript · pipelines & hotkeys · x64 + Arm installers',
    tags: ['C#', '.NET', 'FFmpeg', 'Windows'],
    repo: 'https://github.com/ogshrug/WClop',
    live: 'https://github.com/ogshrug/WClop/releases/latest',
    year: 2026,
  },
  {
    name: 'Enigma QOTD',
    blurb:
      'Daily question-of-the-day quiz. Players sign in with Google and answer the day’s question, admins post new ones, and answers are graded automatically with manual override.',
    metric: 'Google auth · keyword auto-grading in a Postgres trigger · row-level security',
    tags: ['React', 'Vite', 'Supabase', 'Postgres'],
    repo: 'https://github.com/ogshrug/Enigma-QOTD',
    live: 'https://dailyquizdpsn.vercel.app/',
    year: 2026,
  },
  {
    name: 'KrishiMitra',
    blurb:
      'Digital assistant for Indian farmers: a multilingual dashboard for soil health, AI crop recommendations, weather and market prices, fed by low-cost ESP32 soil moisture, nutrient and pH sensors.',
    metric: 'Soil analysis · crop recs · weather · mandi prices · ESP32 sensors',
    tags: ['JavaScript', 'Tailwind', 'Chart.js', 'ESP32'],
    repo: 'https://github.com/ogshrug/EnvFest-25-InterDPS',
    live: 'https://ogshrug.github.io/EnvFest-25-InterDPS/',
    badge: '3rd of 50 DPS branches',
    year: 2025,
  },
]

const [acoustic, ferrite, yemu, wclop, enigma, krishi] = featured

// Full project list, grouped on /projects.
export const projectGroups: { title: string; items: Project[] }[] = [
  { title: 'AI / ML', items: [acoustic, ferrite] },
  {
    title: 'Security',
    items: [
      yemu,
      {
        name: 'Log Anomaly Detector',
        blurb:
          'Collaborative GPCSSI project: an AI pipeline that parses system logs with Drain3, models event sequences with an LSTM and explains flagged anomalies with SHAP, behind a web frontend for uploading logs and viewing results.',
        tags: ['Python', 'LSTM', 'SHAP', 'Drain3'],
        year: 2026,
      },
    ],
  },
  {
    title: 'Apps',
    items: [
      wclop,
      {
        name: 'FlatDocScanner',
        blurb:
          'Android document and book scanner. Outlines the page live, auto-captures when you hold still, splits book spreads at the spine and flattens curved pages with an on-device neural network. No account, no upload, no internet permission.',
        tags: ['Kotlin', 'CameraX', 'ONNX Runtime', 'ML Kit'],
        year: 2026,
      },
    ],
  },
  {
    title: 'Web',
    items: [
      enigma,
      {
        name: 'Spotify 1980',
        blurb: 'Spotify reimagined as a 1980s record store, with curated vinyl for people who treat records as art objects. Winning entry at Syntax ’26.',
        tags: ['TypeScript', 'React', 'Vite'],
        repo: 'https://github.com/ogshrug/Spotify1980-Syntax26Winner',
        live: 'https://syntaxcreativedpsn.vercel.app/',
        badge: 'Syntax ’26 Winner',
        year: 2026,
      },
      krishi,
      {
        name: 'COQ Viewer',
        blurb: 'A lightweight viewer that turns Markdown quiz notes into a browsable study page.',
        tags: ['HTML', 'Markdown'],
        repo: 'https://github.com/ogshrug/mdviewer',
        year: 2026,
      },
    ],
  },
]

export type TimelineItem = { title: string; org: string; when: string; note?: string }

export const timeline: { year: string; items: TimelineItem[] }[] = [
  {
    year: '2026',
    items: [
      { title: 'President', org: 'eSpice · Delhi Public School, Noida', when: '2026 – 27' },
      { title: 'Cyber Security Intern', org: 'Haryana Police · Gurugram', when: 'Jun – Jul', note: 'Gurugram Police Cyber Security Summer Internship (GPCSSI), promoted to the Post Graduate Level. Built YEMU and the Log Anomaly Detector.' },
      { title: 'Selected', org: 'Columbia Junior Science Journal', when: '', note: 'Ferrite was 1 of 250 entries selected from 1,200 in the preliminary round.' },
      { title: 'Winner', org: 'Syntax ’26', when: '', note: 'Spotify 1980, a retro record store web app.' },
      {
        title: 'Finalist',
        org: 'GENIUS Olympiad',
        when: 'Jan – Mar',
        note: 'AcousticLeakNet, co-built with Aarav Gupta, was 1 of 27 projects selected from India.',
      },
      { title: 'Stage 2', org: 'Stockholm Junior Water Prize (India)', when: '', note: 'AcousticLeakNet; also cleared Phase 1 of the Conrad Challenge.' },
      { title: 'Participant', org: 'Wharton High School Data Science Competition', when: '' },
    ],
  },
  {
    year: '2025',
    items: [
      { title: 'Joint Secretary', org: 'eSpice · Delhi Public School, Noida', when: '2025 – 26' },
      { title: '3rd of 50 DPS branches', org: 'Inter DPS Environment Fest', when: '', note: 'KrishiMitra, a digital assistant for farmers.' },
    ],
  },
  {
    year: 'School',
    items: [
      { title: 'Student', org: 'Delhi Public School Noida', when: '2015 – 2027', note: 'Science stream: Physics, Chemistry, Math, CS, English, AI.' },
      {
        title: 'Competitions',
        org: 'eSpice, the IT club (member for 4 years)',
        when: '',
        note: '1st at DPS Saket International Hackathon and DPS RK Puram Hardware Competition, 3rd at DPS RK Puram Game Development. 30+ regional and national wins with eSpice, 50+ interschool competitions.',
      },
    ],
  },
]
