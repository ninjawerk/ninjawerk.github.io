import { Link } from 'react-router-dom'
import type { Project } from '../content/projects'

/** Homepage project card → links to the case-study page. */
export function ProjectCard({ project }: { project: Project }) {
  const badge = project.card.badge
  return (
    <Link className="card" to={`/projects/${project.slug}`}>
      <h3>
        {project.title}
        {badge && <span className={badge.kind === 'live' ? 'chip-live' : 'chip-star'}>{badge.text}</span>}
        <span className="arrow">→</span>
      </h3>
      <p>{project.card.blurb}</p>
      <div className="tag">{project.card.tags}</div>
    </Link>
  )
}
