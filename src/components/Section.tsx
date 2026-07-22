import type { ReactNode } from 'react'

/**
 * A page section with an optional uppercase kicker, wrapped in the standard
 * centered container. Used across the homepage.
 */
export function Section({
  id,
  kicker,
  className,
  children,
}: {
  id?: string
  kicker?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={className}>
      <div className="wrap">
        {kicker && <div className="kicker">{kicker}</div>}
        {children}
      </div>
    </section>
  )
}
