---
name: ui-conventions
description: Design-system reference for this portfolio — theme tokens, typography, spacing, card/glass styles, motion and accessibility rules. Use before creating or restyling any UI component, changing colors/fonts, or adjusting dark mode.
---

# UI conventions

The look: dark-first, glassy cards on a faint grid, indigo→cyan gradient accent, generous whitespace, subtle motion.

## Tokens (defined in `src/index.css`)

| Purpose            | Class                          |
| ------------------ | ------------------------------ |
| Page background    | `bg-bg`                        |
| Card surface       | `bg-surface` (translucent) or the `card` utility |
| Hairline borders   | `border-border`                |
| Primary text       | `text-fg`                      |
| Secondary text     | `text-muted`                   |
| Accent             | `text-accent`, `bg-accent/10`, `from-accent to-accent-2` |
| Gradient headline  | `text-gradient`                |

- Never use raw hex or Tailwind palette colors (`bg-slate-900`, `text-indigo-500`) in components. Exception: semantic status colors like the green availability dot.
- To change the palette, edit `--accent`, `--accent-2` etc. under both `:root` (light) and `.dark` in `index.css`. Check contrast in both themes.
- Tint with opacity modifiers: `bg-accent/10`, `hover:border-accent/40`.

## Typography

- Headings: `font-display` (Space Grotesk), `font-bold tracking-tight`.
- Body: default `font-sans` (Inter); long text `text-lg leading-relaxed text-muted`.
- Section eyebrow: `text-sm font-semibold uppercase tracking-widest text-accent` (handled by `Section`).

## Layout

- Content width `max-w-6xl mx-auto px-4 sm:px-6`; section padding `py-20 md:py-28` (handled by `Section`).
- Grids: `gap-5`/`gap-6`; collapse to one column on mobile. Must work at 360px with no horizontal scroll.
- Radius: cards `rounded-2xl`, small chips `rounded-full` or `rounded-lg`.

## Interaction & motion

- Hover on cards: `transition hover:border-accent/40`, optionally `hover:-translate-y-1`.
- Scroll-in animation: wrap in `<Reveal delay={i * 0.06}>`; stagger lists by ~0.05–0.08s.
- Easing `[0.22, 1, 0.36, 1]`, durations 0.5–0.8s. Nothing should loop distractingly except subtle decorative accents.
- Honour reduced motion (`useReducedMotion`; `Reveal` already does).

## Accessibility

- Icon-only buttons/links need `aria-label`; decorative SVGs `aria-hidden`.
- External links: `target="_blank" rel="noreferrer"`.
- Images need meaningful `alt`; below-the-fold images `loading="lazy"`.
- Keep a single `h1` (Hero); sections use `h2`, cards `h3`.

## Icons

`lucide-react` for UI icons. Brand logos (GitHub, LinkedIn, X) come from `components/ui/BrandIcons.jsx` — add new brand SVGs there.
