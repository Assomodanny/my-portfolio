import { useEffect, useState } from 'react'
import type { Theme } from '../types'

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'light' || saved === 'dark' ? saved : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}