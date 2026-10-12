import { useCallback, useState } from 'react'

// index.html sets the initial `dark` class before paint; this hook keeps it in sync.
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {
        // storage unavailable (private mode) — theme still applies for this visit
      }
      return next
    })
  }, [])

  return { dark, toggle }
}
