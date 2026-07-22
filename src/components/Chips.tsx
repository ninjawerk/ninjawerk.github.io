/** A flex row of small labelled chips (used for the tech stack). */
export function Chips({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}
