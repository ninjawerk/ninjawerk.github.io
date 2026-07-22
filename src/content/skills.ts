// ── Skills, grouped. Edit the lists to update the Skills section. ──

export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React', 'Angular', 'Next.js', 'Vue', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS/SCSS', 'SVG',
      'Web Performance', 'Accessibility', 'Design Systems', 'Jest · Playwright',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Go', 'C# / .NET', 'PHP', 'GraphQL', 'REST APIs', 'SignalR', 'Event-driven'],
  },
  {
    title: 'AI / GenAI',
    items: ['Google Gemini', 'LLM app design', 'Prompt engineering', 'Agentic coding'],
  },
  {
    title: 'Cloud & Data',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'PostgreSQL', 'Kafka · Pulsar', 'CI/CD'],
  },
  {
    title: 'Systems · Audio · Hardware',
    items: ['C++', 'C', 'DirectX graphics', 'Real-time audio DSP', 'WPF', 'Arduino · embedded'],
  },
]
