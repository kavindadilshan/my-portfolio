import { profile } from '../../data/profile'
import { SocialLinks } from '../ui/SocialLinks'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">
          © {YEAR} {profile.name}. Built with React & Tailwind.
        </p>
        <SocialLinks size={16} />
      </div>
    </footer>
  )
}
