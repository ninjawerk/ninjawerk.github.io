// ── Projects: the single source of truth for BOTH the homepage cards and each
//    /projects/:slug case-study page. Add a project here and it appears in both
//    places automatically. Remove one and it disappears from both. ──
//
// `blurb`, `tagline`, `overview`, card `p` and `highlights` accept inline HTML
// (e.g. <b>…</b>) for emphasis.

const GH = 'https://github.com/ninjawerk/'

export type HomeBadge = { text: string; kind: 'live' | 'star' }
export type CaseBadge = { text: string; kind: 'b-live' | 'b-oss' | 'b-gh' }
export type ArchCard = { h3: string; p: string }

export type Project = {
  slug: string
  title: string
  // Homepage card
  card: { blurb: string; tags: string; badge?: HomeBadge }
  // Case-study header
  eyebrow?: string // defaults to "Case study"
  badge?: CaseBadge
  tagline: string
  meta: string
  link: { label: string; href: string }
  ghText: string
  // Case-study body
  overview: string
  cardsHead?: string // defaults to "Under the hood"
  cards: ArchCard[]
  highlights?: string[]
  stack: string[]
  foot?: string
}

export const projects: Project[] = [
  {
    slug: 'janma',
    title: 'Janma',
    card: {
      blurb:
        'Production Vedic-astrology app, solo-built end to end — Flutter + Node on GCP, Google Gemini AI, keyless CI/CD, billing, i18n.',
      tags: 'Flutter · Node · GCP · Gemini AI',
      badge: { text: 'LIVE', kind: 'live' },
    },
    eyebrow: 'Case study · Solo build',
    badge: { text: 'LIVE', kind: 'b-live' },
    tagline:
      'AI-powered Vedic astrology — a <b>precise Jyotish birth chart</b> computed from your exact birth details, ' +
      'turned into a <b>personalised, chart-grounded reading</b> by Google Gemini. Mobile + web, built end to end, solo.',
    meta: 'Role: sole engineer & designer · 2025–26 · Flutter · Node · GCP · Google Gemini',
    link: { label: 'Visit janma.app ↗', href: 'https://janma.app' },
    ghText: 'janma.app',
    overview:
      'Most astrology apps hand you a generic sun-sign horoscope. Janma computes the <b>actual sidereal chart</b> — ' +
      'real planetary positions, houses, dashas and nakshatras via the Swiss Ephemeris (Lahiri ayanamsha) — and grounds every ' +
      'AI reading in those exact placements. No fluff, no horoscopes-by-star-sign.',
    cardsHead: 'What I built — end to end, solo',
    cards: [
      { h3: '<b>Flutter</b> app', p: 'The full client (Android/iOS): chart visualisations, AI readings, compatibility, PDF export, EN/Sinhala i18n.' },
      { h3: '<b>Node / Express</b> API', p: 'REST API on GCP Cloud Run — chart computation, Gemini orchestration, credits & auth.' },
      { h3: '<b>Swiss Ephemeris</b>', p: 'Sidereal, Lahiri ayanamsha — planets, houses, nakshatras, Vimshottari dasha, navamsha, panchanga.' },
      { h3: '<b>Google Gemini</b>', p: 'AI life readings. I own the full prompt architecture: modular builders, structured JSON, fallback handling, mode routing.' },
      { h3: '<b>PostgreSQL</b> · Cloud SQL', p: 'Users, credits, purchase state — managed Postgres on GCP.' },
      { h3: '<b>Firebase</b>', p: 'Google Sign-In auth + <b>App Check</b> (Play Integrity) so the API only trusts the genuine app.' },
      { h3: '<b>RevenueCat</b>', p: 'In-app credit purchases on Google Play Billing 8.' },
      { h3: '<b>Keyless CI/CD</b>', p: 'GitHub Actions + Workload Identity Federation → Cloud Run & Firebase Hosting on every push to main.' },
    ],
    highlights: [
      '<b>Chart-grounded AI.</b> Gemini readings tied to specific placements, with a structured, fallback-safe prompt architecture.',
      '<b>Compatibility (Porondam).</b> Traditional Sri Lankan 20-porondam + Ashtakoota 36-guna, computed deterministically and cross-checked against reference sources.',
      '<b>Offline bilingual city search.</b> 50k+ cities bundled on-device, normalised for English and Sinhala.',
      '<b>PDF export.</b> Full reading + both charts, generated on-device and shareable.',
      '<b>Security.</b> Firebase App Check attests that API calls come from the real, untampered app.',
      '<b>Fully localised.</b> English + Sinhala across the whole app, including the astrology terminology.',
    ],
    stack: [
      'Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL', 'Google Gemini', 'Swiss Ephemeris', 'Firebase Auth',
      'Firebase App Check', 'RevenueCat', 'GCP Cloud Run', 'Cloud SQL', 'GitHub Actions CI/CD', 'Angular (web)',
    ],
    foot: 'Built and run solo — architecture, engineering, design and ops.',
  },

  {
    slug: 'safire2',
    title: 'Safire2',
    card: {
      blurb: 'Desktop audio player with a real-time DSP engine, acoustic fingerprinting and a Winamp-compatible plugin system.',
      tags: 'C# · WPF · DSP',
    },
    badge: { text: 'C# · WPF', kind: 'b-gh' },
    tagline:
      'A full-featured desktop <b>audio player</b> with a real-time <b>DSP engine</b>, acoustic fingerprinting, and a Winamp-compatible plugin system.',
    meta: 'Personal project · C# · WPF · 2018',
    link: { label: 'View on GitHub', href: GH + 'Safire2' },
    ghText: 'GitHub',
    overview:
      'Safire2 is a Windows audio player I built to go deep on real-time audio. Organise your library and playlists, then shape the ' +
      'sound with a full effects chain — dynamic amplifier, bass/treble boost, virtualizer, crossfade, pitch-shift, and a karaoke ' +
      'mode that strips vocals on the fly. Under the hood it runs my own DSP suite and a full acoustic-fingerprinting engine, and ' +
      "it's extensible through a plugin bridge.",
    cards: [
      { h3: 'Real-time DSP engine', p: 'Powered by my kornea DSP suite — biquad filters, EQ, bass/treble boost, stereo enhancer and waveshaping, chained through a low-latency processing pipeline.' },
      { h3: 'Acoustic fingerprinting', p: 'A from-scratch Chromaprint / AcoustID implementation in C# — FFT, chroma features and fingerprint calculation to identify tracks.' },
      { h3: 'Plugin bridge', p: 'An IPlugin / library-component bridge, Winamp-plugin compatible, so effects and sources are extensible.' },
      { h3: 'WPF player', p: 'Library and playlist management, presets, and live effect controls in a WPF desktop UI.' },
    ],
    highlights: [
      '<b>Karaoke / vocal removal</b> in real time.',
      '<b>Pitch-shift, crossfade, virtualizer</b> and depth adjustment.',
      '<b>Effect presets</b> and a dynamic amplifier.',
      '<b>Winamp-plugin</b> compatibility via the plugin bridge.',
    ],
    stack: ['C#', '.NET', 'WPF', 'BASS.NET', 'NAudio', 'DSP', 'Chromaprint / AcoustID'],
  },

  {
    slug: 'kornea-dsp-suite',
    title: 'kornea-dsp-suite',
    card: {
      blurb: 'Real-time audio DSP suite — biquad filters, EQ, effects and a chainable low-latency processing pipeline.',
      tags: 'C# · BASS.NET · DSP',
    },
    badge: { text: 'C#', kind: 'b-gh' },
    tagline:
      'A high-performance real-time <b>audio DSP suite</b> for C# / BASS.NET — filters, effects, and a chainable processing pipeline.',
    meta: 'Personal project · C# · 2017',
    link: { label: 'View on GitHub', href: GH + 'kornea-dsp-suite' },
    ghText: 'GitHub',
    overview:
      'The DSP engine that powers Safire2 — a from-scratch signal-processing library built on BASS.NET, with the filters and ' +
      'effects a real audio app needs, wired together by a “reactor” pipeline that chains transforms over a live, ring-buffered ' +
      'audio stream at low latency.',
    cards: [
      { h3: 'Filters & EQ', p: 'BiQuad / BQ filters and a biquad EQ array (BEQA) for parametric equalisation.' },
      { h3: 'Effects', p: 'Bass boost, treble booster, stereo enhancer, waveshaper and foldback distortion.' },
      { h3: 'Reactor pipeline', p: 'Chainable real-time transforms — crossfade, fader, pan-fade — over a ring-buffered stream (ReactorList / ReactorPool).' },
      { h3: 'Core', p: 'Sine generation, a wave abstraction, low-latency ring buffers and BASS.NET interop.' },
    ],
    stack: ['C#', 'BASS.NET', 'DSP', 'Real-time audio', 'Signal processing'],
  },

  {
    slug: 'arduino-lidar',
    title: 'Arduino LIDAR',
    card: {
      blurb: 'A wireless LIDAR rig — an Arduino that captures range data and streams it over a 2.4GHz nRF24 radio link.',
      tags: 'C++ · Arduino · nRF24',
    },
    badge: { text: 'C++ · Arduino', kind: 'b-gh' },
    tagline: 'A wireless <b>LIDAR rig</b> — an Arduino that captures range data and streams it over a 2.4GHz radio link.',
    meta: 'Personal project · C++ / Arduino · 2017',
    link: { label: 'View on GitHub', href: GH + 'arduino-lidar' },
    ghText: 'GitHub',
    overview:
      'A hardware experiment: an Arduino-driven LIDAR that samples distance data and transmits it wirelessly to a receiver over ' +
      'an nRF24L01 2.4GHz radio (RF24), so the sensor can run untethered and stream telemetry in real time.',
    cards: [
      { h3: 'Sensing', p: 'An Arduino sampling loop reading the LIDAR sensor.' },
      { h3: 'Wireless link', p: 'nRF24L01 2.4GHz radio via the RF24 library for low-power wireless telemetry.' },
      { h3: 'Companion receiver', p: 'Pairs with a separate receiver that ingests the stream over a virtual serial port.' },
    ],
    stack: ['C++', 'Arduino', 'nRF24L01', 'RF24', 'Embedded'],
  },

  {
    slug: 'directx-engine',
    title: 'DirectX Engine',
    card: {
      blurb: '“Imagio” — a small 2D graphics engine built straight on the DirectX 8 API. Rendering from the metal up.',
      tags: 'Visual Basic · DirectX 8',
    },
    badge: { text: 'Visual Basic · DirectX 8', kind: 'b-gh' },
    tagline: 'A 2D graphics engine (“Imagio”) built directly on the <b>DirectX 8</b> API.',
    meta: 'Personal project · Visual Basic · DirectX 8',
    link: { label: 'View on GitHub', href: GH + 'directx8-gfx-engine' },
    ghText: 'GitHub',
    overview:
      'An early graphics experiment — a small rendering engine written straight against the DirectX 8 API, handling surfaces, ' +
      'sprites and drawing primitives. Building a graphics pipeline from the metal up, long before frameworks did it for you.',
    cards: [
      { h3: 'Renderer', p: 'The Imagio engine drawing over DirectX 8 surfaces and sprites.' },
      { h3: 'Primitives', p: 'Image handling and drawing primitives (Imagio.cls, IArray).' },
      { h3: 'Foundations', p: 'Direct API access — the roots of the graphics/DSP curiosity that runs through my work.' },
    ],
    stack: ['Visual Basic', 'DirectX 8', 'Graphics', 'Rendering'],
  },

  {
    slug: 'home-arr',
    title: 'home-arr',
    card: {
      blurb: 'Self-hosted media & file-sharing stack for Raspberry Pi — containerised *arr services + Samba, one-script setup.',
      tags: 'Docker · Shell · Homelab',
    },
    badge: { text: 'Docker · Shell', kind: 'b-gh' },
    tagline:
      'A self-hosted <b>media &amp; file-sharing stack</b> for Raspberry Pi — containerised *arr services + Samba, set up with one script.',
    meta: 'Personal project · Shell · Docker · 2026',
    link: { label: 'View on GitHub', href: GH + 'home-arr' },
    ghText: 'GitHub',
    overview:
      'A homelab setup that stands up a full self-hosted media stack on a Raspberry Pi — the *arr suite (containerised) plus Samba ' +
      'file sharing — reproducibly from a shell script. DevOps for the house.',
    cards: [
      { h3: 'Containerised stack', p: 'The *arr media services running in Docker.' },
      { h3: 'File sharing', p: 'Samba for network file access across devices.' },
      { h3: 'Reproducible', p: 'A one-script bring-up on a fresh Raspberry Pi.' },
    ],
    stack: ['Docker', 'Shell', 'Raspberry Pi', 'Samba', 'Self-hosting'],
  },

  {
    slug: 'go-rest-boilerplate',
    title: 'Go REST Boilerplate',
    card: {
      blurb: 'Open-source REST API starter for Go — starred and forked by other developers spinning up services.',
      tags: 'Go · REST · Open source',
      badge: { text: '10★', kind: 'star' },
    },
    badge: { text: '10★ · open source', kind: 'b-oss' },
    tagline:
      'An open-source <b>REST API boilerplate</b> for Go — the starting point others have forked to spin up services fast.',
    meta: 'Open source · Go · 10★ · 6 forks · 2017',
    link: { label: 'View on GitHub', href: GH + 'go-rest-boilerplate' },
    ghText: 'GitHub',
    overview:
      'A batteries-included starting point for building REST APIs in Go — routing, structure and conventions ready to go. Modest ' +
      "but genuinely useful: it's been starred and forked by other developers building their own services.",
    cards: [
      { h3: 'API skeleton', p: 'A structured Go REST service ready to extend.' },
      { h3: 'Routing & handlers', p: 'Sensible routing and handler conventions out of the box.' },
      { h3: 'Fast starts', p: 'Opinionated structure so new services start in minutes, not hours.' },
    ],
    stack: ['Go', 'REST', 'Open source'],
  },
]

export const getProject = (slug: string): Project | undefined => projects.find((p) => p.slug === slug)
