---
name: update-portfolio
description: Convert personal details the user shares (CV/resume text, LinkedIn copy, bio notes, job history, education, skills, projects, certificates, contact info) into structured entries in src/data/profile.js. Use whenever the user provides or changes portfolio content.
---

# Update portfolio content

All content lives in `src/data/profile.js`. Components must not be edited to change content.

## Steps

1. Read `src/data/profile.js` to see the current shape and which values are still `TODO` placeholders.
2. Map the user's information to the right export:

   | User gives…                                   | Goes to                       |
   | --------------------------------------------- | ----------------------------- |
   | Name, title, tagline, location, email, phone  | `profile`                     |
   | GitHub / LinkedIn / X / website URLs          | `profile.socials`             |
   | Avatar photo, CV PDF                          | `public/` + `profile.avatar` / `profile.resumeUrl` |
   | Bio / summary paragraphs, key numbers         | `about.bio`, `about.highlights` |
   | Jobs, internships, freelance                  | `experience`                  |
   | Degrees, schools, courses                     | `education`                   |
   | Languages, frameworks, tools                  | `skills` (grouped by category) |
   | Personal / work projects                      | `projects`                    |
   | Certificates, awards                          | `certifications`              |

3. Write entries following these rules:
   - Dates: `'YYYY-MM'` or `'YYYY'`; current role uses `end: ''` (renders "Present").
   - Order lists newest first.
   - Achievements: start with a strong verb, lead with impact, include metrics when the user gave them. Lightly polish grammar but **never invent facts, numbers, employers, or dates**. If something important is missing, ask.
   - Bio: 2–3 short paragraphs in first person, each a separate string.
   - `about.highlights`: derive only from given facts (e.g. years of experience computed from the earliest job start).
   - Group skills sensibly (Frontend, Backend, Database, DevOps & Cloud, Tools…). Only add `level` if the user asks for skill bars.
   - Unknown optional fields → `''` so the UI hides them. Remove placeholder entries that the user has no data for.
   - If a whole section has no data (e.g. no certifications), remove its entry from the `sections` array instead of leaving placeholders.
4. Remove the `// TODO` comment on every value you fill in.
5. Update `<title>` and the meta description in `index.html` to the user's name and role.
6. Run `npm run lint` and `npm run build`; fix any error.
7. Summarise what was filled in and list any remaining `TODO` values the user still needs to supply.
