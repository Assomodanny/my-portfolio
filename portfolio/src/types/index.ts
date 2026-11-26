import type { ComponentType } from 'react'

export type Theme = 'light' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: ComponentType<{ size?: number }>
}

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number }>
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface Service {
  title: string
  description: string
  icon: ComponentType<{ size?: number }>
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
