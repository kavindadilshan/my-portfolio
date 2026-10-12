import { Globe, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon, XIcon } from './BrandIcons'

const LINKS = [
  { key: 'github', label: 'GitHub', Icon: GithubIcon },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon },
  { key: 'twitter', label: 'X / Twitter', Icon: XIcon },
  { key: 'website', label: 'Website', Icon: Globe },
]

// Renders only the socials that have a URL in profile.js, plus email.
export function SocialLinks({ size = 18 }) {
  const links = LINKS.filter(({ key }) => profile.socials[key])
  return (
    <div className="flex items-center gap-2">
      {links.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={profile.socials[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        >
          <Icon size={size} />
        </a>
      ))}
      {profile.email && (
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        >
          <Mail size={size} />
        </a>
      )}
    </div>
  )
}
