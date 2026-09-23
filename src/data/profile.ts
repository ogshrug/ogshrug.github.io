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
      'CNN-based acoustic leak detection and localisation for water pipe networks, trained entirely on simulation and tested on three networks it never saw during training.',
    metric: '100.5M sim rows · AUROC 1.00 on unseen networks · 10–42× cheaper hardware',
    tags: ['PyTorch', 'Signal Processing', 'EPANET', 'pandas'],
    badge: 'GENIUS Olympiad 2026 Finalist',
    year: 2026,
  },
  {
    name: 'YEMU',
    blurb:
      'Offline malware analysis sandbox with a GTK4 GUI. Runs samples in isolated QEMU/KVM VMs, watches their behaviour and scores threats with YARA.',
    metric: 'strace + tcpdump monitoring · YARA static & memory scans · PDF/JSON reports',
    tags: ['Python', 'QEMU/KVM', 'YARA', 'GTK4'],
    repo: 'https://github.com/ogshrug/YEMU',
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
      'Digital assistant for Indian farmers covering soil health, crop recommendations, weather and market prices, with a multilingual interface. Built for the Inter DPS Digital Project Showcase.',
    metric: 'Soil analysis · crop recs · weather · mandi prices · multilingual',
    tags: ['JavaScript', 'Tailwind', 'Chart.js'],
    repo: 'https://github.com/ogshrug/EnvFest-25-InterDPS',
    live: 'https://ogshrug.github.io/EnvFest-25-InterDPS/',
    year: 2025,
  },
]

// Full project list, grouped on /projects.
export const projectGroups: { title: string; items: Project[] }[] = [
  { title: 'AI / ML', items: [featured[0]] },
  { title: 'Security', items: [featured[1]] },
  {
    title: 'Web',
    items: [
      featured[2],
      {
        name: 'Spotify 1980',
        blurb: 'Spotify reimagined as a 1980s record store, with curated vinyl for people who treat records as art objects. Winning entry at Syntax ’26.',
        tags: ['TypeScript', 'React', 'Vite'],
        repo: 'https://github.com/ogshrug/Spotify1980-Syntax26Winner',
        live: 'https://syntaxcreativedpsn.vercel.app/',
        badge: 'Syntax ’26 Winner',
        year: 2026,
      },
      featured[3],
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
      { title: 'Cyber Security Intern', org: 'Haryana Police · Gurugram', when: 'Jun – Jul', note: 'Gurugram Police Cyber Security Summer Internship (GPCSSI), certified.' },
      { title: 'Winner', org: 'Syntax ’26', when: '', note: 'Spotify 1980, a retro record store web app.' },
      {
        title: 'Finalist',
        org: 'GENIUS Olympiad',
        when: 'Jan – Mar',
        note: 'AcousticLeakNet, co-built with Aarav Gupta, was 1 of 27 projects selected from India.',
      },
      { title: 'Participant', org: 'Wharton High School Data Science Competition', when: '' },
    ],
  },
  {
    year: '2025',
    items: [
      { title: 'Joint Secretary', org: 'Delhi Public School Noida', when: 'Sep – present' },
      { title: 'KrishiMitra', org: 'Inter DPS Digital Project Showcase', when: '' },
    ],
  },
  {
    year: 'School',
    items: [
      { title: 'Student', org: 'Delhi Public School Noida', when: '2015 – 2027', note: 'Science stream: Physics, Chemistry, Math, CS.' },
    ],
  },
]
