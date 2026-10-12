# My Portfolio

A modern, responsive single-page portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.

**Sections:** Hero · About · Experience · Education · Skills · Projects · Certifications · Contact
**Features:** dark/light theme, animated scroll reveals, active-section nav, scroll progress bar, mobile menu, reduced-motion support.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Editing content

Everything shown on the page comes from **`src/data/profile.js`**. Replace the `TODO` placeholders with your details.
Put your photo, CV and project screenshots in `public/` and reference them as `/avatar.jpg`, `/resume.pdf`, etc.

To hide a section, remove it from the `sections` array at the bottom of `profile.js`.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start the dev server     |
| `npm run build`   | Production build (`dist/`) |
| `npm run preview` | Preview the build        |
| `npm run lint`    | Lint with oxlint         |

## Deploy

The `dist/` folder is static — deploy to Vercel, Netlify, GitHub Pages or Cloudflare Pages.
