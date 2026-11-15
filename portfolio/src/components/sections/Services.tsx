import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { SERVICES } from '../../data/services'

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="How I can help" />

        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-950">
                <span className="text-indigo-500">
                  <Icon size={28} />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}