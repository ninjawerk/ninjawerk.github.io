import { Nav } from '../components/Nav'
import { Section } from '../components/Section'
import { Button } from '../components/Button'
import { RichText } from '../components/RichText'
import { ProjectCard } from '../components/ProjectCard'
import { JobItem } from '../components/JobItem'
import { SkillGroup } from '../components/SkillGroup'
import { Footer } from '../components/Footer'
import { profile } from '../content/profile'
import { experience } from '../content/experience'
import { skills } from '../content/skills'
import { projects } from '../content/projects'

export function Home() {
  return (
    <>
      <Nav variant="home" />

      <header>
        <div className="glow" />
        <div className="wrap">
          <div className="eyebrow">{profile.eyebrow}</div>
          <h1>
            {profile.headline}
            <br />
            <span className="lo">{profile.headlineLo}</span>
          </h1>
          <RichText as="p" className="lede" html={profile.lede} />
          <div className="avail">
            <span className="dot" /> {profile.availability}
          </div>
          <div className="cta">
            <Button href={`mailto:${profile.contact.email}`} variant="primary">
              Get in touch →
            </Button>
            <Button href={profile.links.github}>GitHub</Button>
            <Button href={profile.links.janma}>janma.app ↗</Button>
          </div>
        </div>
      </header>

      <Section id="about" kicker="About" className="about">
        {profile.about.map((para, i) => (
          <RichText key={i} as="p" html={para} />
        ))}
      </Section>

      <Section id="work" kicker="Selected Work">
        {experience.map((job) => (
          <JobItem key={job.company} job={job} />
        ))}
      </Section>

      <Section id="projects" kicker="Projects">
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" kicker="Skills">
        <div className="skills">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Section>

      <Section id="contact" className="contact">
        <h2>{profile.contact.heading}</h2>
        <p>{profile.contact.blurb}</p>
        <Button href={`mailto:${profile.contact.email}`} variant="primary">
          {profile.contact.email} →
        </Button>
      </Section>

      <Footer variant="home" />
    </>
  )
}
