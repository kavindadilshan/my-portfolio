import { Reveal } from '../ui/Reveal'

// Vertical timeline shared by Experience and Education.
// `items` are already-normalised: { key, icon, title, subtitle, meta, body }.
export function Timeline({ items }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
      {items.map(({ key, icon: Icon, title, subtitle, meta, body }, i) => (
        <li key={key} className="relative">
          <span className="absolute top-5 -left-[calc(2rem+1px)] grid size-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-bg text-accent sm:-left-[calc(2.5rem+1px)]">
            <Icon size={15} />
          </span>
          <Reveal delay={i * 0.05}>
            <article className="card group p-6 transition hover:border-accent/40 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-0.5 font-medium text-accent">{subtitle}</p>
                </div>
                <p className="text-sm whitespace-nowrap text-muted">{meta}</p>
              </div>
              {body}
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
