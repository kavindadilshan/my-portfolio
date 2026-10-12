import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { projects } from '../../data/profile'
import { GithubIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { Tag } from '../ui/Tag'

export function Projects({ index }) {
  const sorted = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))

  return (
    <Section id="projects" index={index} eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-accent/15 to-accent-2/15">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid size-full place-items-center text-accent/60">
                    <FolderGit2 size={48} strokeWidth={1.2} />
                  </div>
                )}
                {project.featured && (
                  <span className="absolute top-3 left-3 rounded-full bg-bg/80 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur">
                    Featured
                  </span>
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="grid size-8 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex-1 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
