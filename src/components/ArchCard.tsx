import type { ArchCard as ArchCardType } from '../content/projects'
import { RichText } from './RichText'

/** A single "under the hood" / architecture card on a case-study page. */
export function ArchCard({ card }: { card: ArchCardType }) {
  return (
    <div className="layer">
      <RichText as="h3" html={card.h3} />
      <RichText as="p" html={card.p} />
    </div>
  )
}
