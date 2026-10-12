import { Background } from './components/layout/Background'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { sections } from './data/profile'

// Maps a section id (from profile.js `sections`) to its component.
const SECTION_COMPONENTS = {
  about: About,
  experience: Experience,
  education: Education,
  skills: Skills,
  projects: Projects,
  certifications: Certifications,
  contact: Contact,
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Navbar />
      <main>
        <Hero />
        {sections.map(({ id }, i) => {
          const Component = SECTION_COMPONENTS[id]
          return Component ? <Component key={id} index={String(i + 1).padStart(2, '0')} /> : null
        })}
      </main>
      <Footer />
    </>
  )
}
