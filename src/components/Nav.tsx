import { Link } from 'react-router-dom'
import { profile } from '../content/profile'

/**
 * Shared top nav. Two variants:
 *  - "home": brand + section anchor links
 *  - "case": back-to-home link + the current page's brand/title
 */
export function Nav({ variant = 'home', title }: { variant?: 'home' | 'case'; title?: string }) {
  if (variant === 'case') {
    return (
      <nav>
        <div className="wrap">
          <Link className="back" to="/">
            ← {profile.headline}
          </Link>
          <div className="brand">
            {title}
            <span>.</span>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav>
      <div className="wrap">
        <Link className="brand" to="/">
          {profile.brand}
          <span>.</span>
        </Link>
        <div className="navlinks">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
