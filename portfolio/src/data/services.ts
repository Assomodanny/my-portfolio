import { Code, LayoutTemplate, Monitor, PenTool } from 'lucide-react'
import type { Service } from '../types'

export const SERVICES: Service[] = [
  {
    title: 'Responsive Website Development',
    description: 'Websites that look and work well on phones, tablets and desktops.',
    icon: Monitor,
  },
  {
    title: 'Landing Page Development',
    description: 'Focused, fast landing pages that present your product or idea clearly.',
    icon: LayoutTemplate,
  },
  {
    title: 'Frontend Web Development',
    description: 'Building interactive interfaces with React, TypeScript and Tailwind CSS.',
    icon: Code,
  },
  {
    title: 'Website UI Implementation',
    description: 'Turning existing designs into clean, working code.',
    icon: PenTool,
  },
]