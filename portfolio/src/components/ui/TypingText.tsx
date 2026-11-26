import { useTypewriter } from '../../hooks/useTypewriter'

interface TypingTextProps {
  words: string[]
}

export default function TypingText({ words }: TypingTextProps) {
  const text = useTypewriter(words)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {prefersReducedMotion ? words[0] : text}
        {!prefersReducedMotion && (
          <span className="ml-0.5 animate-pulse text-accent-500">|</span>
        )}
      </span>
    </>
  )
}