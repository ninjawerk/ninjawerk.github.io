import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  href: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

/**
 * One button that does the right thing for every link type:
 *  - http(s)      → external <a> (new tab)
 *  - mailto:      → external <a>
 *  - #hash        → same-page anchor <a>
 *  - /route       → client-side <Link>
 */
export function Button({ href, variant = 'ghost', children }: Props) {
  const cls = `btn ${variant}`
  const isExternal = href.startsWith('http')
  const isPlain = isExternal || href.startsWith('mailto:') || href.startsWith('#')

  if (isPlain) {
    return (
      <a className={cls} href={href} {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <Link className={cls} to={href}>
      {children}
    </Link>
  )
}
