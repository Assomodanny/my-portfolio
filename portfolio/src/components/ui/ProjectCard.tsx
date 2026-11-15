import { Code, ExternalLink } from 'lucide-react'
import Button from './Button'
import { GithubIcon } from './icons'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, technologies, demoUrl, repoUrl } = project

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-950">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500">
          <Code size={48} className="text-white/80" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          <Button href={demoUrl} size="sm" external>
            <ExternalLink size={14} />
            Live Demo
          </Button>
          <Button href={repoUrl} size="sm" variant="outline" external>
            <GithubIcon size={14} />
            GitHub
          </Button>
        </div>
      </div>
    </article>
  )
}