import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../../data/profile'
import { formatRange } from '../../lib/format'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'
import { Timeline } from './Timeline'

export function Experience({ index }) {
  const items = experience.map((job) => ({
    key: `${job.company}-${job.start}`,
    icon: Briefcase,
    title: job.role,
    subtitle: job.company,
    meta: formatRange(job.start, job.end),
    body: (
      <>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 text-sm text-muted">
          {job.type && <span>{job.type}</span>}
          {job.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> {job.location}
            </span>
          )}
        </p>
        {job.summary && <p className="mt-4 text-muted">{job.summary}</p>}
        {job.achievements?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {job.achievements.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {job.tech?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </>
    ),
  }))

  return (
    <Section id="experience" index={index} eyebrow="Career" title="Where I've worked">
      <Timeline items={items} />
    </Section>
  )
}
