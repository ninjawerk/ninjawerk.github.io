import { createElement } from 'react'

/**
 * Renders a trusted HTML string (authored in the content files) so inline
 * emphasis like <b>…</b> works. Content is our own — never user input.
 */
export function RichText({
  html,
  as = 'span',
  className,
}: {
  html: string
  as?: keyof JSX.IntrinsicElements
  className?: string
}) {
  return createElement(as, { className, dangerouslySetInnerHTML: { __html: html } })
}
