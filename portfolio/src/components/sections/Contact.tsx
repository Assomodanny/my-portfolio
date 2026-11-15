import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Send } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SocialLinks from '../ui/SocialLinks'
import { PROFILE } from '../../data/profile'
import type { ContactFormData } from '../../types'

const EMPTY_FORM: ContactFormData = { name: '', email: '', message: '' }

const fieldStyles =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950'

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Contact" title="Let's work together" />

        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={fieldStyles}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={fieldStyles}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className={fieldStyles}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-600"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
              Or reach me directly:
            </p>
            <SocialLinks className="justify-center" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}