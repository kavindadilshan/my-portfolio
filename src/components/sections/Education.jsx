import { Award, GraduationCap } from 'lucide-react'
import { education } from '../../data/profile'
import { formatRange } from '../../lib/format'
import { Section } from '../ui/Section'
import { Timeline } from './Timeline'

export function Education({ index }) {
  const items = education.map((edu) => ({
    key: `${edu.institution}-${edu.start}`,
    icon: GraduationCap,
    title: edu.degree,
    subtitle: edu.institution,
    meta: formatRange(edu.start, edu.end),
    body: (
      <>
        {edu.grade && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-2/10 px-3 py-1 text-sm font-medium text-accent-2">
            <Award size={14} /> {edu.grade}
          </p>
        )}
        {edu.details?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {edu.details.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-2" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    ),
  }))

  return (
    <Section id="education" index={index} eyebrow="Education" title="Academic background">
      <Timeline items={items} />
    </Section>
  )
}
