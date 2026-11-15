import SocialLinks from '../ui/SocialLinks'
import { PROFILE } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {PROFILE.firstName} {PROFILE.lastName}.
          All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}