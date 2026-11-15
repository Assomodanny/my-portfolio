import { SOCIAL_LINKS } from '../../data/socials'

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...(href.startsWith('http') && {
              target: '_blank',
              rel: 'noreferrer',
            })}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}