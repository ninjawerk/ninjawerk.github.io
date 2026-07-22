import type { Job } from '../content/experience'

/** One row in the Selected Work list. */
export function JobItem({ job }: { job: Job }) {
  return (
    <div className="job">
      <div className="when">{job.when}</div>
      <div>
        <h3>
          {job.role} — <span className="co">{job.company}</span>
        </h3>
        <p>{job.summary}</p>
        <div className="tech">{job.tech}</div>
      </div>
    </div>
  )
}
