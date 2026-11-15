import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { ABOUT } from '../../data/about'

const BLOCKS = [
  { title: 'My Journey', text: ABOUT.journey },
  { title: 'What I Love', text: ABOUT.passion },
  { title: 'Career Goals', text: ABOUT.goals },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Get to know me" />

        <Reveal>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400">
            {ABOUT.intro}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOCKS.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <h3 className="mb-3 text-lg font-semibold">{block.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{block.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}