import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, MapPin, Send } from 'lucide-react'
import { profile } from '../../data/profile'
import { initials } from '../../lib/format'
import { Button } from '../ui/Button'
import { SocialLinks } from '../ui/SocialLinks'

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="top" className="relative mx-auto flex min-h-svh max-w-6xl items-center px-4 pt-24 pb-16 sm:px-6">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          {profile.availability && (
            <motion.div
              {...rise(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </motion.div>
          )}

          <motion.p {...rise(0.05)} className="font-display text-lg text-muted">
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            {...rise(0.1)}
            className="mt-1 font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p {...rise(0.18)} className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            <span className="text-gradient">{profile.role}</span>
          </motion.p>
          <motion.p {...rise(0.26)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>
          {profile.location && (
            <motion.p {...rise(0.3)} className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} /> {profile.location}
            </motion.p>
          )}

          <motion.div {...rise(0.36)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" icon={Send}>
              Get in touch
            </Button>
            {profile.resumeUrl && (
              <Button href={profile.resumeUrl} variant="ghost" icon={Download} download>
                Download CV
              </Button>
            )}
          </motion.div>
          <motion.div {...rise(0.44)} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-64 sm:w-72 md:w-full md:max-w-sm"
        >
          <div className="absolute inset-0 animate-[spin_14s_linear_infinite] rounded-full bg-gradient-to-tr from-accent via-accent-2 to-accent opacity-80 blur-sm" />
          <div className="absolute inset-[3px] overflow-hidden rounded-full bg-bg">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="size-full object-cover" />
            ) : (
              <div className="grid size-full place-items-center font-display text-7xl font-bold">
                <span className="text-gradient">{initials(profile.name)}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted hover:text-accent md:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
