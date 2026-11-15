import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
  external?: boolean
  children: ReactNode
}

const variants = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
  outline:
    'border border-slate-300 text-slate-700 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200',
}

const sizes = {
  md: 'px-6 py-3 text-sm',
  sm: 'px-4 py-2 text-xs',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all hover:-translate-y-0.5 ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </a>
  )
}