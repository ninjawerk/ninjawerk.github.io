import type { SkillGroup as SkillGroupType } from '../content/skills'

/** One labelled group of skill chips. */
export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div>
      <h4>{group.title}</h4>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
