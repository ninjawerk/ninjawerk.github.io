// ── Selected work / experience. Add or edit jobs here. ──

export type Job = {
  when: string
  role: string
  company: string
  summary: string
  tech: string
}

export const experience: Job[] = [
  {
    when: '2022 — Now',
    role: 'Technical Lead / Sr Frontend',
    company: 'Reaktor',
    summary:
      'Built the AirFrance & KLM in-flight portal from scratch (5–8M monthly users) and own its full lifecycle. Offline-first, ' +
      'reliability-critical; live flight-mapping in pure SVG; designed the release/versioning system and drive the team.',
    tech: 'TypeScript · Angular · RxJS · Nx · Playwright · Azure/AWS · Starlink Router API',
  },
  {
    when: '2020 — 2022',
    role: 'Senior Full-Stack Engineer',
    company: 'Clevertech',
    summary:
      "Led frontend on Clevertech's largest enterprise programme (30+ engineers) in React/Next/TypeScript; stepped in at " +
      'critical roadblocks to stabilise delivery and shaped stack decisions across front and back end.',
    tech: 'React · Next.js · TypeScript · Node.js · GraphQL · PostgreSQL · AWS',
  },
  {
    when: '2019 — 2020',
    role: 'Backend / Full-Stack Architect',
    company: 'VoiceIQ',
    summary:
      'Built an end-to-end sales-comms platform with a real-time audio pipeline transcoding thousands of concurrent streams ' +
      'on the fly, plus AI sentiment analysis and low-latency, real-time transcript highlighting.',
    tech: 'React · Node.js · .NET · Apache Pulsar · Druid · FFmpeg · Twilio',
  },
  {
    when: '2015 — 2018',
    role: 'Senior Software Engineer',
    company: 'Calcey · Intellogic',
    summary:
      'Led React Native mobile teams (offline-first content for firefighters) and built ERP/CRM systems in React, AngularJS ' +
      'and .NET Core.',
    tech: 'React Native · React · AngularJS · .NET Core · PostgreSQL',
  },
]
