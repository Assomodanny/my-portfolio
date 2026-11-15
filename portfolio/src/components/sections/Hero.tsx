import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'
import { PROFILE } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-16 items-center px-6 pt-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Hello, I'm
          </p>
         <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
  {PROFILE.firstName} {PROFILE.lastName}
</h1>
<h2 className="mt-3 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
  {PROFILE.title}
</h2>
          <p className="mt-6 max-w-lg text-slate-600 dark:text-slate-400">
            I'm a beginner frontend developer who builds responsive,
            accessible websites with React, TypeScript and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View My Projects</Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>

        <SocialLinks className="mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          {/* Placeholder: replace with your real photo later */}
          <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 sm:h-72 sm:w-72">
            <User size={96} className="text-white/80" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}