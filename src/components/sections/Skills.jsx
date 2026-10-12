import { motion } from 'framer-motion'
import { skills } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Skills({ index }) {
  return (
    <Section id="skills" index={index} eyebrow="Skills" title="Tools & technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="card h-full p-6 transition hover:border-accent/40">
              <h3 className="font-display text-lg font-semibold">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) =>
                  skill.level == null ? (
                    <li
                      key={skill.name}
                      className="rounded-lg border border-border bg-bg/50 px-3 py-1.5 text-sm font-medium transition hover:border-accent/50 hover:text-accent"
                    >
                      {skill.name}
                    </li>
                  ) : (
                    <li key={skill.name} className="w-full">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
