import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Button } from '../components/Button'
import { RichText } from '../components/RichText'
import { ArchCard } from '../components/ArchCard'
import { Chips } from '../components/Chips'
import { Footer } from '../components/Footer'
import { getProject } from '../content/projects'

export function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  useEffect(() => {
    if (project) document.title = `${project.title} — case study · Deshan Alahakoon`
    return () => {
      document.title = 'Deshan Alahakoon — Software Engineer'
    }
  }, [project])

  // Unknown slug → back to the homepage.
  if (!project) return <Navigate to="/" replace />

  return (
    <div className="case">
      <Nav variant="case" title={project.title} />

      <header className="case-header">
        <div className="glow" />
        <div className="wrap narrow">
          <div className="case-eyebrow">
            {project.eyebrow ?? 'Case study'}
            {project.badge && <span className={`tag-badge ${project.badge.kind}`}>{project.badge.text}</span>}
          </div>
          <h1>{project.title}</h1>
          <RichText as="p" className="sub" html={project.tagline} />
          <div className="meta">{project.meta}</div>
          <div className="links">
            <Button href={project.link.href} variant="primary">
              {project.link.label}
            </Button>
            <Button href="/#projects">← All projects</Button>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap narrow">
          <h2>Overview</h2>
          <RichText as="p" className="lead" html={project.overview} />
        </div>
      </section>

      <section>
        <div className="wrap narrow">
          <h2>{project.cardsHead ?? 'Under the hood'}</h2>
          <div className="arch">
            {project.cards.map((card) => (
              <ArchCard key={card.h3} card={card} />
            ))}
          </div>
        </div>
      </section>

      {project.highlights && (
        <section>
          <div className="wrap narrow">
            <h2>Highlights</h2>
            <ul className="feat">
              {project.highlights.map((h, i) => (
                <RichText key={i} as="li" html={h} />
              ))}
            </ul>
          </div>
        </section>
      )}

      <section>
        <div className="wrap narrow">
          <h2>Stack</h2>
          <Chips items={project.stack} />
        </div>
      </section>

      <Footer variant="case" foot={project.foot} link={project.link} ghText={project.ghText} />
    </div>
  )
}
