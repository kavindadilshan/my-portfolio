import { about } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function About({ index }) {
  return (
    <Section id="about" index={index} eyebrow="About" title="A little about me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
          {about.highlights.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="card p-5 text-center md:text-left">
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
