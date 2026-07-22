import { Link } from 'react-router-dom'
import { profile } from '../content/profile'

/**
 * Shared footer. "home" shows the copyright + link row; "case" shows a project
 * footer line with a link back to the project and to the homepage.
 */
export function Footer({
  variant = 'home',
  foot,
  link,
  ghText,
}: {
  variant?: 'home' | 'case'
  foot?: string
  link?: { label: string; href: string }
  ghText?: string
}) {
  if (variant === 'case') {
    return (
      <footer>
        <div className="wrap">
          {foot ?? 'A personal project — built solo.'} &nbsp;·&nbsp;
          {link && (
            <>
              {' '}
              <a href={link.href} target="_blank" rel="noopener">
                {ghText} ↗
              </a>{' '}
              &nbsp;·&nbsp;{' '}
            </>
          )}
          <Link to="/">Back to home</Link>
        </div>
      </footer>
    )
  }

  return (
    <footer>
      <div className="wrap">
        <span>© 2026 {profile.headline}</span>
        <span>
          <a href={profile.links.github} target="_blank" rel="noopener">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={profile.links.janma} target="_blank" rel="noopener">
            janma.app
          </a>{' '}
          · <a href={`mailto:${profile.contact.email}`}>Email</a>
        </span>
      </div>
    </footer>
  )
}
