# MyPortfolio — Claude guide

Personal portfolio site: a single-page, data-driven React app showing bio, career, education, skills, projects, certifications and contact.

**Positioning:** the owner presents as a **Frontend Developer** (web + mobile: React, React Native, Flutter). Keep backend low-key — the only backend skills listed are Java, Spring Boot, Spring MVC, Hibernate and REST APIs, in a "Backend" group near the end. Don't add backend frameworks (e.g. Java Spring, Laravel) to project or job tech tags, or describe work as "back end" / "end to end".

## Stack

- **React 19 + Vite 8** (plain JavaScript/JSX, ES modules, no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` — config lives in CSS (`src/index.css`), there is no `tailwind.config.js`
- **framer-motion** for animation, **lucide-react** for icons (no brand logos — see `BrandIcons.jsx`)
- **oxlint** for linting

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the build
npm run lint     # oxlint
```

Always run `npm run lint` and `npm run build` after changes; both must pass.

## Architecture

```
src/
  data/profile.js          # ALL content. Single source of truth.
  App.jsx                  # Renders Hero + sections in the order of `sections` in profile.js
  index.css                # Tailwind import, theme tokens, custom utilities
  lib/format.js            # formatDate / formatRange / initials
  hooks/                   # useTheme (dark mode), useActiveSection (nav highlight)
  components/
    layout/                # Navbar, Footer, Background, ScrollProgress
    ui/                    # Section, Reveal, Button, Tag, SocialLinks, BrandIcons
    sections/              # One component per page section (+ shared Timeline)
public/                    # avatar, resume PDF, project screenshots go here
```

### Key rules

1. **Content goes in `src/data/profile.js` only.** Components never hard-code personal details. To change text, edit data, not JSX.
2. **Optional fields hide gracefully.** Empty strings / missing arrays must not render empty UI (e.g. no `resumeUrl` → no CV button). Keep this behaviour when adding fields.
3. **Section order & visibility** come from the `sections` array in `profile.js`. A new section needs: data export, component in `sections/`, entry in `SECTION_COMPONENTS` in `App.jsx`, and an entry in `sections`.
4. **Every section uses `<Section id index eyebrow title>`** and wraps animated content in `<Reveal>`.
5. **Colors only through theme tokens**: `bg-bg`, `bg-surface`, `border-border`, `text-fg`, `text-muted`, `text-accent`, `accent-2`, plus utilities `card`, `text-gradient`, `bg-grid`. Never hard-code hex values in components. Palette changes happen in `:root` / `.dark` in `index.css`.
6. **Dark mode** is class-based (`.dark` on `<html>`), set pre-paint by the inline script in `index.html` and toggled by `useTheme`. Both themes must look right.
7. **Dates** are strings `'YYYY-MM'` or `'YYYY'`; `end: ''` means "Present". Lists are newest first.
   Projects support `logo` (square, shown contained) or `image` (screenshot, full-bleed), `start`/`end`/`context`, `platforms` ([`mobile`, `web`] — drives the All/Mobile/Web filter tabs and card badges), `metrics` (stat chips) and `links` ([{ label, url }] for App Store / Google Play / Website); non-featured projects keep file order. Certifications support `expires` and `badge`. Experience/education entries support `logo` (shown beside the title); education also supports `image` + `imageCaption`. Images live in `public/projects/` and `public/certifications/`.
8. Respect `prefers-reduced-motion` (use `useReducedMotion` / `Reveal`), keep it responsive from 360px up, and give icon-only links an `aria-label`.

## Code style

- Function components, named exports (except `App`), 2-space indent, single quotes, no semicolons.
- Tailwind classes inline; extract a component rather than a CSS class when markup repeats.
- Static assets referenced from data as absolute paths (`/avatar.jpg`) and stored in `public/`.

## Project skills

- `/update-portfolio` — turn details the user shares (CV text, LinkedIn copy, notes) into `profile.js` entries.
- `/add-section` — scaffold a new portfolio section end to end.
- `/ui-conventions` — design-system reference for building or restyling UI.
