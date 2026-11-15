import {
  Atom,
  Braces,
  Code,
  GitBranch,
  Layers,
  Palette,
  Smartphone,
  Wind,
} from 'lucide-react'
import { GithubIcon } from '../components/ui/icons'
import type { Skill } from '../types'

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: Code },
  { name: 'CSS3', icon: Palette },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: Layers },
  { name: 'React', icon: Atom },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'Responsive Web Design', icon: Smartphone },
]