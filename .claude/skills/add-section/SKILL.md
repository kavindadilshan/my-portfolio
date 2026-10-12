---
name: add-section
description: Scaffold a new section on the portfolio page (e.g. Testimonials, Publications, Volunteering, Languages, Blog) end to end — data, component, registration and nav. Use when the user wants a new kind of content block on the site.
---

# Add a portfolio section

A section touches exactly four places. Do all four.

## 1. Data — `src/data/profile.js`

Add a named export with the content (an array of plain objects, newest first if dated). Use the user's real data if supplied; otherwise one clearly marked `// TODO` placeholder entry.

## 2. Component — `src/components/sections/<Name>.jsx`

Follow this skeleton:

```jsx
import { thing } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Name({ index }) {
  return (
    <Section id="name" index={index} eyebrow="Eyebrow" title="Section title">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {thing.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="card h-full p-6 transition hover:border-accent/40">…</div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
```

- Dated, chronological content → reuse `Timeline` from `./Timeline` (see `Education.jsx`).
- Short labels → `Tag`; links/CTAs → `Button`; icons from `lucide-react`.
- Optional fields must render nothing when empty.
- Follow the `ui-conventions` skill for styling.

## 3. Register — `src/App.jsx`

Import the component and add it to `SECTION_COMPONENTS` with its id.

## 4. Navigation — `sections` array in `profile.js`

Add `{ id: 'name', label: 'Label' }` in the desired position. The id must match the `Section` id and the `SECTION_COMPONENTS` key. Numbering and nav highlighting are automatic.

## Verify

Run `npm run lint` and `npm run build`. Mention to the user that the section appears in the nav and how to fill its data.
