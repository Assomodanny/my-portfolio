import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { SKILLS } from '../../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {SKILLS.map(({ name, icon: Icon }, index) => (
            <li key={name}>
              <Reveal delay={index * 0.05}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-950">
                  <span className="text-indigo-500">
                    <Icon size={32} />
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}