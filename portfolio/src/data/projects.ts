import type { Project } from '../types'

// Keep only the technologies you really used, and add your real links.
// Add demoUrl later, when the project is live.
export const PROJECTS: Project[] = [
  {
    id: 'artisan-connect',
    title: 'Artisan Connect',
    description: `A marketplace website that connects users with artisans.`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Assomodanny/artisan-connect',
  },
  {
    id: 'ptqh-portal',
    title: 'PTQH Portal',
    description: `A web portal built with React.`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Assomodanny/ptqh-portal',
  },
  {
    id: 'islamic-studies-cbt',
    title: 'Islamic Studies CBT Portal',
    description: `A computer-based exam portal for Islamic Studies.`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    repoUrl: 'https://github.com/Assomodanny/islamic-studies-cbt',
  },
]