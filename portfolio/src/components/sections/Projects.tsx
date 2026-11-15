import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { PROJECTS } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}