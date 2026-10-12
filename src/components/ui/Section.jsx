import { Reveal } from './Reveal'

// Standard wrapper for every page section: anchor id, numbered eyebrow, title.
export function Section({ id, index, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <p className="font-display text-sm font-semibold tracking-widest text-accent uppercase">
          {index && <span className="mr-2 text-muted">{index}</span>}
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
