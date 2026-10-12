import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SocialLinks } from '../ui/SocialLinks'

export function Contact({ index }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked — the mailto button still works
    }
  }

  const details = [
    profile.email && { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.location && { icon: MapPin, label: profile.location },
  ].filter(Boolean)

  return (
    <Section id="contact" index={index} eyebrow="Contact" title="Let's work together">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted">
                Have a role, project or idea in mind? My inbox is always open — I&apos;ll get back to you as soon
                as I can.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} icon={Mail}>
                  Say hello
                </Button>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {details.map(({ icon: Icon, label, href }) => {
                const Tag = href ? 'a' : 'div'
                return (
                  <Tag
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-xl border border-border bg-bg/40 p-4 transition hover:border-accent/40"
                  >
                    <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>
                    <span className="font-medium break-all">{label}</span>
                  </Tag>
                )
              })}
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
