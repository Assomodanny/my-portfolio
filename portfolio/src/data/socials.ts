import { Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/icons'
import { PROFILE } from './profile'
import type { SocialLink } from '../types'

// TODO: replace the GitHub and LinkedIn placeholders with your real profile links
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${PROFILE.whatsapp}`,
    icon: MessageCircle,
  },
]