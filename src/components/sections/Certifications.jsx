import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/profile'
import { formatDate } from '../../lib/format'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Certifications({ index }) {
  return (
    <Section id="certifications" index={index} eyebrow="Certifications" title="Credentials & awards">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Wrapper = cert.url ? 'a' : 'div'
          return (
            <Reveal key={cert.name} delay={i * 0.05}>
              <Wrapper
                {...(cert.url && { href: cert.url, target: '_blank', rel: 'noreferrer' })}
                className="card group flex h-full items-start gap-4 p-5 transition hover:border-accent/40"
              >
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={`${cert.name} badge`}
                    loading="lazy"
                    className="size-16 shrink-0 object-contain transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <BadgeCheck size={20} />
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {cert.issuer} · Issued {formatDate(cert.date)}
                    {cert.expires && ` · Expires ${formatDate(cert.expires)}`}
                  </p>
                </div>
                {cert.url && (
                  <ExternalLink size={15} className="mt-1 shrink-0 text-muted transition group-hover:text-accent" />
                )}
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
