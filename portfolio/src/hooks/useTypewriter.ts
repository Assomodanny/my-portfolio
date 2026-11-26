import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}

export function useTypewriter(
  words: string[],
  { typingSpeed = 90, deletingSpeed = 50, pause = 1500 }: TypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const isWordComplete = text === current

    let delay = isDeleting ? deletingSpeed : typingSpeed
    if (isWordComplete && !isDeleting) delay = pause

    const timeout = setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      } else {
        setText(current.slice(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}