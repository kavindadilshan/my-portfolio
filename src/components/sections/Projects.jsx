import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, Globe, LayoutGrid, Smartphone, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../../data/profile'
import { formatRange } from '../../lib/format'
import { GithubIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

const PLATFORMS = {
  mobile: { label: 'Mobile', icon: Smartphone },
  web: { label: 'Web', icon: Globe },
}

const FILTERS = [{ id: 'all', label: 'All', icon: LayoutGrid }, ...Object.entries(PLATFORMS).map(([id, p]) => ({ id, ...p }))]

// Featured first; otherwise keep the order from profile.js.
const SORTED = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))

export function Projects({ index }) {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? SORTED : SORTED.filter((p) => p.platforms?.includes(filter))
  const count = (id) => (id === 'all' ? projects.length : projects.filter((p) => p.platforms?.includes(id)).length)

  return (
    <Section id="projects" index={index} eyebrow="Projects" title="Things I've built">
      <div role="group" aria-label="Filter projects by platform" className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`relative isolate inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              filter === id ? 'border-transparent text-white' : 'border-border bg-surface text-muted hover:text-fg'
            }`}
          >
            {filter === id && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-accent-2"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <Icon size={15} />
            {label}
            <span className={`text-xs ${filter === id ? 'text-white/80' : 'text-muted'}`}>{count(id)}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i, 5) * 0.06}>
            <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-accent/15 to-accent-2/15">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : project.logo ? (
                  <div className="grid size-full place-items-center">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      loading="lazy"
                      className="size-24 rounded-2xl bg-white object-contain p-1 shadow-xl shadow-black/10 transition duration-500 group-hover:scale-110 sm:size-28"
                    />
                  </div>
                ) : (
                  <div className="grid size-full place-items-center text-accent/60">
                    {(() => {
                      const Placeholder = PLATFORMS[project.platforms?.[0]]?.icon ?? FolderGit2
                      return <Placeholder size={48} strokeWidth={1.2} />
                    })()}
                  </div>
                )}
                {project.featured && (
                  <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur">
                    Featured
                  </span>
                )}
                {project.platforms?.length > 0 && (
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {project.platforms.map((id) => {
                      const { label, icon: Icon } = PLATFORMS[id]
                      return (
                        <span
                          key={id}
                          className="inline-flex items-center gap-1 rounded-full bg-bg/80 px-2.5 py-1 text-xs font-semibold text-fg backdrop-blur"
                        >
                          <Icon size={12} /> {label}
                        </span>
                      )
                    })}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <div className="flex shrink-0 gap-1">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="grid size-8 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
                {(project.start || project.context) && (
                  <p className="mt-1 text-sm text-muted">
                    {[project.start && formatRange(project.start, project.end), project.context]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                )}
                <p className="mt-3 flex-1 text-muted">{project.description}</p>
                {project.metrics?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <li
                        key={m}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-accent-2/10 px-2.5 py-1 text-xs font-semibold text-accent-2"
                      >
                        <TrendingUp size={13} /> {m}
                      </li>
                    ))}
                  </ul>
                )}
                {project.tech?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
                {project.links?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                    {project.links.map(({ label, url }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-fg transition hover:text-accent"
                      >
                        {label} <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
